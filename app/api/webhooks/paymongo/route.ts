import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@/lib/supabase/server";

const WEBHOOK_SECRET = process.env.PAYMONGO_WEBHOOK_SECRET ?? "";

function verifySignature(rawBody: string, header: string): boolean {
  if (!WEBHOOK_SECRET) return true; // skip verification in dev if no secret set
  try {
    const parts = Object.fromEntries(header.split(",").map((p) => p.split("=")));
    const timestamp = parts.t;
    const sig = parts.te ?? parts.li; // test or live signature
    const expected = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(`${timestamp}.${rawBody}`)
      .digest("hex");
    return expected === sig;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const sigHeader = req.headers.get("paymongo-signature") ?? "";

    if (!verifySignature(rawBody, sigHeader)) {
      console.warn("PayMongo webhook: invalid signature");
      return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
    }

    const event     = JSON.parse(rawBody);
    const eventType = event.data?.attributes?.type;

    console.log("PayMongo webhook event:", eventType);

    if (eventType === "checkout_session.payment.paid") {
      const session  = event.data?.attributes?.data;
      const metadata = session?.attributes?.metadata;

      if (!metadata?.user_id || !metadata?.plan) {
        console.error("Missing metadata in webhook:", metadata);
        return NextResponse.json({ error: "Missing metadata." }, { status: 400 });
      }

      const userId   = metadata.user_id as string;
      const plan     = metadata.plan     as string; // "basic" or "pro"
      const duration = metadata.duration as string; // "1mo" or "3mo"

      // Calculate plan expiry
      const expiresAt = new Date();
      if (duration === "3mo") {
        expiresAt.setMonth(expiresAt.getMonth() + 3);
      } else {
        expiresAt.setMonth(expiresAt.getMonth() + 1);
      }

      const supabase = await createClient();
      const { error } = await supabase
        .from("profiles")
        .update({ plan, plan_expires_at: expiresAt.toISOString() })
        .eq("id", userId);

      if (error) {
        console.error("Supabase update error:", error);
        return NextResponse.json({ error: "DB update failed." }, { status: 500 });
      }

      console.log(`Plan updated: user=${userId} plan=${plan} expires=${expiresAt.toISOString()}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    return NextResponse.json({ error: "Webhook error." }, { status: 500 });
  }
}
