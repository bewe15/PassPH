"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronLeft, AlertCircle, Loader2 } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₱0",
    period: "forever",
    desc: "Try before you commit",
    features: [
      "3 practice tests/month",
      "Reading section only",
      "Basic score report",
      "Answer explanations",
    ],
    cta: "Get started free",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Basic",
    price: "₱299",
    period: "/month",
    desc: "For regular practice",
    features: [
      "Unlimited Reading tests",
      "3 Writing tests/month",
      "Detailed score report",
      "Progress tracking",
      "Band score estimates",
    ],
    cta: "Start Basic",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₱499",
    period: "/month",
    desc: "Everything you need to pass",
    features: [
      "Everything in Basic",
      "Unlimited Writing tests",
      "AI Writing feedback",
      "Band score estimates",
      "Downloadable score reports",
      "Priority support",
    ],
    cta: "Start Pro",
    href: "/signup",
    highlight: true,
  },
];

const faqs = [
  { q: "Can I switch plans anytime?", a: "Yes, upgrade or downgrade at any time from your account settings. Changes take effect immediately." },
  { q: "What payment methods are accepted?", a: "Philippine users can pay via GCash, Maya, or credit/debit card through PayMongo. Australian users pay in AUD via Stripe." },
  { q: "Is there a one-time payment option?", a: "Yes — ₱1,299 gives you 3 months of Pro access as a one-time payment. Great if you have a fixed exam date." },
  { q: "Can I cancel anytime?", a: "Absolutely. No lock-in contracts. Cancel anytime from your settings and you keep access until the end of your billing period." },
];

function LimitBanner() {
  const searchParams = useSearchParams();
  const hitLimit = searchParams.get("reason") === "limit";
  if (!hitLimit) return null;
  return (
    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-10">
      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-red-700">You&apos;ve used all 3 free tests this month</p>
        <p className="text-xs text-red-500 mt-0.5">Upgrade to Pro for unlimited access — your limit resets on the 1st of next month.</p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const router = useRouter();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  async function handleCheckout(planKey: string) {
    setLoadingPlan(planKey);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planKey }),
      });
      const data = await res.json();
      if (res.status === 401) { router.push("/login?redirect=/pricing"); return; }
      if (!res.ok || !data.url) throw new Error(data.error ?? "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-400 hover:text-slate-600 transition">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <Link href="/" className="text-xl font-extrabold text-cyan-500">PassPH</Link>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/login" className="text-slate-500 hover:text-slate-900 transition">Log in</Link>
            <Link href="/signup">
              <Button size="sm">Sign up free</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Limit reached alert */}
        <Suspense fallback={null}>
          <LimitBanner />
        </Suspense>

        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Simple, affordable pricing</h1>
          <p className="text-slate-500 text-lg">Start free. Upgrade when you are ready. No hidden fees.</p>
          <p className="text-sm text-slate-400 mt-2">Also available: ₱1,299 one-time for 3 months Pro</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 border flex flex-col ${
                plan.highlight
                  ? "border-cyan-400 bg-white shadow-lg shadow-cyan-100 relative"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-cyan-500 text-white text-xs font-normal px-3 py-1 rounded-full uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-3xl font-normal text-cyan-500">{plan.price}</span>
                <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.name === "Free" ? (
                <Link href="/signup">
                  <Button className="w-full bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50">
                    {plan.cta}
                  </Button>
                </Link>
              ) : (
                <Button
                  className={`w-full ${!plan.highlight ? "bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-50" : ""}`}
                  onClick={() => handleCheckout(plan.name === "Basic" ? "basic" : "pro")}
                  disabled={loadingPlan !== null}
                >
                  {loadingPlan === (plan.name === "Basic" ? "basic" : "pro") ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing…</>
                  ) : plan.cta}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* One-time option */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          <div>
            <h3 className="font-bold text-slate-900 mb-1">One-time payment option</h3>
            <p className="text-sm text-slate-500">Pay ₱1,299 once and get 3 months of Pro access. Best for exam prep with a fixed date.</p>
          </div>
          <Button
            variant="outline"
            className="shrink-0"
            onClick={() => handleCheckout("pro3mo")}
            disabled={loadingPlan !== null}
          >
            {loadingPlan === "pro3mo" ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing…</>
            ) : "Get 3 months for ₱1,299"}
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">Pricing FAQ</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-slate-200 pb-6">
                <h4 className="font-semibold text-slate-900 mb-2">{item.q}</h4>
                <p className="text-sm text-slate-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 px-6 mt-16 text-center text-sm text-slate-400">
        <p>© 2026 PassPH. Practice IELTS &amp; PTE with confidence.</p>
        <div className="flex items-center justify-center gap-6 mt-2">
          <Link href="/privacy" className="hover:text-slate-600 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-600 transition">Terms &amp; Conditions</Link>
          <Link href="/contact" className="hover:text-slate-600 transition">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
