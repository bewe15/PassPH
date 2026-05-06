import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const SECRET = process.env.PAYMONGO_SECRET_KEY!;

// Map pricing page plan keys to DB plan values and durations
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

    // Fetch the checkout session from PayMongo to verify payment status
    const auth  = Buffer.from(`${SECRET}:`).toString("base64");
    const pmRes = await fetch(`https://api.paymongo.com/v1/checkout_sessions/${sessionId}`, {
      headers: { "Authorization": `Basic ${auth}` },
    });

    if (!pmRes.ok) {
      return NextResponse.json({ error: "Could not verify session." }, { status: 400 });
    }

    const pmData = await pmRes.json();
    const attrs  = pmData.data?.attributes;

    // Log the full response in dev to help debug
    console.log("PayMongo session status:", attrs?.status);
    console.log("PayMongo payment_intent status:", attrs?.payment_intent?.attributes?.status);
    console.log("PayMongo metadata:", attrs?.metadata);

    // Accept "succeeded" from payment_intent OR "paid" from the session itself
    const piStatus      = attrs?.payment_intent?.attributes?.status;
    const sessionStatus = attrs?.status;
    const isPaid =
      piStatus === "succeeded" ||
      piStatus === "paid" ||
      sessionStatus === "paid";

    if (!isPaid) {
      return NextResponse.json({ error: "Payment not completed.", piStatus, sessionStatus }, { status: 402 });
    }

    // Resolve plan: prefer PayMongo metadata, fall back to planKey sent by client
    const metadata    = attrs?.metadata ?? attrs?.payment_intent?.attributes?.metadata;
    const resolvedKey = (metadata?.plan as string) || planKey;
    const mapped      = PLAN_MAP[resolvedKey];

    if (!mapped) {
      return NextResponse.json({ error: "Unknown plan key.", resolvedKey }, { status: 400 });
    }

    // Make sure this session belongs to the current user
    if (metadata?.user_id && metadata.user_id !== user.id) {
      return NextResponse.json({ error: "Session mismatch." }, { status: 403 });
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
