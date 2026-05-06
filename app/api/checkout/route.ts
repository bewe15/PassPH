import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const SECRET = process.env.PAYMONGO_SECRET_KEY!;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pass-ph.vercel.app";

const PLANS = {
  basic: {
    amount: 29900,
    name: "PassPH Basic Plan",
    description: "Unlimited Reading + 3 Writing tests/month",
    planKey: "basic",
    duration: "1mo",
  },
  pro: {
    amount: 49900,
    name: "PassPH Pro Plan",
    description: "Unlimited Reading + Writing tests + PDF reports",
    planKey: "pro",
    duration: "1mo",
  },
  pro3mo: {
    amount: 129900,
    name: "PassPH Pro — 3 Months",
    description: "3 months Pro access (save ₱198 vs monthly)",
    planKey: "pro",
    duration: "3mo",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json();
    const selected = PLANS[plan as keyof typeof PLANS];
    if (!selected) {
      return NextResponse.json({ error: "Invalid plan." }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
    }

    const auth = Buffer.from(`${SECRET}:`).toString("base64");

    const res = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${auth}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            billing: { email: user.email },
            line_items: [{
              currency: "PHP",
              amount: selected.amount,
              name: selected.name,
              description: selected.description,
              quantity: 1,
            }],
            payment_method_types: [
              "gcash", "paymaya", "card",
              "dob", "dob_ubp",
              "brankas_bdo", "brankas_landbank", "brankas_metrobank",
            ],
            success_url: `${SITE_URL}/payment/success?plan=${plan}`,
            cancel_url:  `${SITE_URL}/pricing?cancelled=true`,
            description: selected.name,
            metadata: {
              user_id: user.id,
              plan:     selected.planKey,
              duration: selected.duration,
            },
          },
        },
      }),
    });

    const json = await res.json();
    if (!res.ok) {
      console.error("PayMongo error:", json);
      return NextResponse.json({ error: "Failed to create checkout." }, { status: 500 });
    }

    const url       = json.data?.attributes?.checkout_url;
    const sessionId = json.data?.id;
    return NextResponse.json({ url, sessionId });
  } catch (err) {
    console.error("Checkout route error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
