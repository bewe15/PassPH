import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PLAN_MAP: Record<string, { plan: string; duration: string }> = {
  basic:  { plan: "basic", duration: "1mo" },
  pro:    { plan: "pro",   duration: "1mo" },
  pro3mo: { plan: "pro",   duration: "3mo" },
};

export async function POST(req: NextRequest) {
  try {
    const { sessionId, planKey } = await req.json();
    if (!sessionId) {
      return NextResponse.json({ error: "Missing sessionId." }, { status: 400 });
    }

    // Verify user is authenticated
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    // Retrieve and verify the Stripe checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed.", status: session.payment_status }, { status: 402 });
    }

    // Make sure this session belongs to the current user
    const metadata = session.metadata;
    if (metadata?.user_id && metadata.user_id !== user.id) {
      return NextResponse.json({ error: "Session mismatch." }, { status: 403 });
    }

    // Resolve plan from Stripe metadata, fall back to planKey from client
    const resolvedKey = metadata?.plan || planKey;
    const mapped      = PLAN_MAP[resolvedKey];

    if (!mapped) {
      return NextResponse.json({ error: "Unknown plan.", resolvedKey }, { status: 400 });
    }

    const expiresAt = new Date();
    if (mapped.duration === "3mo") {
      expiresAt.setMonth(expiresAt.getMonth() + 3);
    } else {
      expiresAt.setMonth(expiresAt.getMonth() + 1);
    }

    const { error } = await supabase
      .from("profiles")
      .update({ plan: mapped.plan, plan_expires_at: expiresAt.toISOString() })
      .eq("id", user.id);

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ error: "DB update failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true, plan: mapped.plan });
  } catch (err) {
    console.error("activate-plan error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
