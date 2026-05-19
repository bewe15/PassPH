import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

const stripe        = new Stripe(process.env.STRIPE_SECRET_KEY!);
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

    if (event.type === "checkout.session.completed") {
      const session  = event.data.object as Stripe.Checkout.Session;
      const metadata = session.metadata;

      if (!metadata?.user_id || !metadata?.plan) {
        console.error("Missing metadata in webhook:", metadata);
        return NextResponse.json({ error: "Missing metadata." }, { status: 400 });
      }

      // Only activate if payment was successful
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

      console.log(`Plan updated: user=${metadata.user_id} plan=${metadata.plan} expires=${expiresAt.toISOString()}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return NextResponse.json({ error: "Webhook error." }, { status: 500 });
  }
}
