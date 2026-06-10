"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";
import { PublicHeader } from "@/components/PublicHeader";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Practice as much as you want",
    features: [
      "Unlimited Reading practice",
      "Unlimited Writing practice",
      "Auto-scoring + band estimate",
      "1 free full mock exam",
      "Progress tracking",
    ],
    cta: "Get started free",
    href: "/signup",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$12.99",
    period: "/month",
    desc: "Everything you need to pass",
    features: [
      "Everything in Free",
      "Unlimited full mock exams",
      "AI Writing feedback (20/month)",
      "AI Speaking scoring (10/month)",
      "Downloadable score reports",
      "Priority support",
    ],
    cta: "Start Pro",
    href: "/signup",
    highlight: true,
  },
];

const faqs = [
  { q: "Is the free plan really unlimited?", a: "Yes — free users get unlimited Reading and Writing practice tests with auto-scoring and band estimates. No credit card required." },
  { q: "What do I get with Pro?", a: "Pro unlocks AI Writing feedback (20 evaluations/month), AI Speaking scoring (10 evaluations/month), unlimited mock exams, and downloadable score reports." },
  { q: "What payment methods are accepted?", a: "We accept Visa, Mastercard, Amex, Google Pay, and Apple Pay — all processed securely through Stripe." },
  { q: "Is there a one-time payment option?", a: "Yes — $29.99 gives you 3 months of Pro access as a one-time payment. Perfect if you have a fixed exam date." },
  { q: "Can I cancel anytime?", a: "Plans are one-time payments — there is nothing to cancel. You get access for the period you paid for (1 month or 3 months) and renew when ready." },
];

function LimitBanner() {
  return null; // No more free test limits — all practice tests are free
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
      // Store session ID so success page can verify payment without relying on webhooks
      if (data.sessionId) localStorage.setItem("pm_session_id", data.sessionId);
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
      {/* Auth-aware header */}
      <PublicHeader backHref="/" />

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Limit reached alert */}
        <Suspense fallback={null}>
          <LimitBanner />
        </Suspense>

        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-3">Simple, affordable pricing</h1>
          <p className="text-slate-500 text-lg">Start free. Upgrade when you are ready. No hidden fees.</p>
          <p className="text-sm text-slate-400 mt-2">Also available: $29.99 one-time for 3 months Pro</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
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
                  className="w-full"
                  onClick={() => handleCheckout("pro")}
                  disabled={loadingPlan !== null}
                >
                  {loadingPlan === "pro" ? (
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
            <p className="text-sm text-slate-500">Pay $29.99 once and get 3 months of Pro access. Best for exam prep with a fixed date.</p>
          </div>
          <Button
            variant="outline"
            className="shrink-0"
            onClick={() => handleCheckout("pro3mo")}
            disabled={loadingPlan !== null}
          >
            {loadingPlan === "pro3mo" ? (
              <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing…</>
            ) : "Get 3 months for $29.99"}
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
        <p>© 2026 Scoravo. Practice IELTS &amp; PTE with confidence.</p>
        <div className="flex items-center justify-center gap-6 mt-2">
          <Link href="/privacy" className="hover:text-slate-600 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-600 transition">Terms &amp; Conditions</Link>
          <Link href="/contact" className="hover:text-slate-600 transition">Contact</Link>
        </div>
        <p className="text-xs text-slate-300 mt-3 max-w-2xl mx-auto">
          Scoravo is an independent practice platform not affiliated with, endorsed by, or connected to British Council, IDP Education, Cambridge Assessment English, or Pearson PLC. IELTS® and PTE Academic® are registered trademarks of their respective owners.
        </p>
      </footer>
    </div>
  );
}
