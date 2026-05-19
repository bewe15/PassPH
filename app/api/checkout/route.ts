import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@/lib/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pass-ph.vercel.app";

const PLANS = {
  basic: {
    amount: 29900, // ₱299.00 in centavos
    name: "PassPH Basic Plan",
    description: "Unlimited Reading + 3 Writing tests/month",
    planKey: "basic",
    duration: "1mo",
  },
  pro: {
    amount: 49900, // ₱499.00
    name: "PassPH Pro Plan",
    description: "Unlimited Reading + Writing tests + PDF reports",
    planKey: "pro",
    duration: "1mo",
  },
  pro3mo: {
    amount: 129900, // ₱1,299.00
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

    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      payment_method_types: ["card", "paypal"],
      line_items: [
        {
          price_data: {
            currency: "php",
            product_data: {
              name: selected.name,
              description: selected.description,
            },
            unit_amount: selected.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${SITE_URL}/payment/success?plan=${plan}`,
      cancel_url: `${SITE_URL}/pricing?cancelled=true`,
      metadata: {
        user_id: user.id,
        plan: selected.planKey,
        duration: selected.duration,
      },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error("Checkout route error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
