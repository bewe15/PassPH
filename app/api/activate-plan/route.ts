import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const SECRET = process.env.PAYMONGO_SECRET_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();
    if (!sessionId) {
      return NextResponse.json({ error: "Missing sessionId." }, { status: 400 });
    }

    // Verify user is authenticated
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    // Fetch the checkout session from PayMongo to verify payment
    const auth = Buffer.from(`${SECRET}:`).toString("base64");
    const pmRes = await fetch(`https://api.paymongo.com/v1/checkout_sessions/${sessionId}`, {
      headers: { "Authorization": `Basic ${auth}` },
    });

    if (!pmRes.ok) {
      return NextResponse.json({ error: "Could not verify session." }, { status: 400 });
    }

    const pmData = await pmRes.json();
    const attrs    = pmData.data?.attributes;
    const status   = attrs?.payment_intent?.attributes?.status ?? attrs?.status;
    const metadata = attrs?.metadata;

    // Only activate if payment is paid
    if (status !== "paid" && status !== "succeeded") {
      return NextResponse.json({ error: "Payment not completed.", status }, { status: 402 });
    }

    // Make sure this session belongs to the current user
    if (metadata?.user_id && metadata.user_id !== user.id) {
      return NextResponse.json({ error: "Session mismatch." }, { status: 403 });
    }

    const plan     = metadata?.plan     as string ?? "pro";
    const duration = metadata?.duration as string ?? "1mo";

    const expiresAt = new Date();
    if (duration === "3mo") {
      expiresAt.setMonth(expiresAt.getMonth() + 3);
    } else {
      expiresAt.setMonth(expiresAt.getMonth() + 1);
    }

    const { error } = await supabase
      .from("profiles")
      .update({ plan, plan_expires_at: expiresAt.toISOString() })
      .eq("id", user.id);

    if (error) {
      console.error("Supabase update error:", error);
      return NextResponse.json({ error: "DB update failed." }, { status: 500 });
    }

    return NextResponse.json({ success: true, plan });
  } catch (err) {
    console.error("activate-plan error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
