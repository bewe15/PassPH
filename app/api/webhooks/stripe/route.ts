import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

const stripe         = new Stripe(process.env.STRIPE_SECRET_KEY!);
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET ?? "";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const sig     = req.headers.get("stripe-signature") ?? "";

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, WEBHOOK_SECRET);
    } catch (err) {
      console.error("Stripe webhook signature error:", err);
      return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
    }

    console.log("Stripe webhook event:", event.type);

    // ── Payment successful → upgrade plan ──────────────────────────────────
    if (event.type === "checkout.session.completed") {
      const session  = event.data.object as Stripe.Checkout.Session;
      const metadata = session.metadata;

      if (!metadata?.user_id || !metadata?.plan) {
        console.error("Missing metadata in webhook:", metadata);
        return NextResponse.json({ error: "Missing metadata." }, { status: 400 });
      }

      if (session.payment_status !== "paid") {
        return NextResponse.json({ received: true });
      }

      const expiresAt = new Date();
      if (metadata.duration === "3mo") {
        expiresAt.setMonth(expiresAt.getMonth() + 3);
      } else {
        expiresAt.setMonth(expiresAt.getMonth() + 1);
      }

      const supabase = await createClient();
      const { error } = await supabase
        .from("profiles")
        .update({ plan: metadata.plan, plan_expires_at: expiresAt.toISOString() })
        .eq("id", metadata.user_id);

      if (error) {
        console.error("Supabase update error:", error);
        return NextResponse.json({ error: "DB update failed." }, { status: 500 });
      }

      console.log(`Plan upgraded: user=${metadata.user_id} plan=${metadata.plan} expires=${expiresAt.toISOString()}`);
    }

    // ── Refund issued → downgrade plan back to free ────────────────────────
    if (event.type === "charge.refunded") {
      const charge = event.data.object as Stripe.Charge;

      // Only downgrade on a full refund — partial refund keeps access
      if (charge.amount_refunded < charge.amount) {
        console.log("Partial refund detected, keeping plan active.");
        return NextResponse.json({ received: true });
      }

      const paymentIntentId = charge.payment_intent as string | null;
      if (!paymentIntentId) {
        console.log("No payment intent on refunded charge, skipping.");
        return NextResponse.json({ received: true });
      }

      // Find the checkout session to get the user_id from metadata
      const sessions = await stripe.checkout.sessions.list({
        payment_intent: paymentIntentId,
        limit: 1,
      });

      const session = sessions.data[0];
      if (!session?.metadata?.user_id) {
        console.log("No matching session/user_id for refund, skipping.");
        return NextResponse.json({ received: true });
      }

      const supabase = await createClient();
      const { error } = await supabase
        .from("profiles")
        .update({ plan: "free", plan_expires_at: null })
        .eq("id", session.metadata.user_id);

      if (error) {
        console.error("Supabase downgrade error:", error);
        return NextResponse.json({ error: "DB update failed." }, { status: 500 });
      }

      console.log(`Plan downgraded to free: user=${session.metadata.user_id} (full refund)`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return NextResponse.json({ error: "Webhook error." }, { status: 500 });
  }
}
