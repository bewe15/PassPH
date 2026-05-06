"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLAN_LABELS: Record<string, { name: string; desc: string }> = {
  basic:  { name: "Basic",         desc: "Unlimited Reading + 3 Writing tests/month" },
  pro:    { name: "Pro",           desc: "Unlimited Reading + Writing + PDF reports" },
  pro3mo: { name: "Pro (3 Months)", desc: "3 months of full Pro access" },
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const router       = useRouter();
  const plan         = searchParams.get("plan") ?? "pro";
  const info         = PLAN_LABELS[plan] ?? PLAN_LABELS.pro;
  const [count, setCount] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        if (c <= 1) { clearInterval(id); router.push("/dashboard"); }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-10 max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Payment Successful!</h1>
        <p className="text-slate-500 text-sm mb-6">
          Welcome to <span className="text-cyan-500 font-bold">PassPH {info.name}</span>. Your account has been upgraded.
        </p>

        {/* Plan badge */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl px-6 py-4 text-white mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold text-sm uppercase tracking-wider">{info.name} Plan Active</span>
          </div>
          <p className="text-cyan-100 text-xs">{info.desc}</p>
        </div>

        {/* Redirect notice */}
        <p className="text-xs text-slate-400 mb-4">
          Redirecting to dashboard in <span className="font-bold text-cyan-500">{count}s</span>…
        </p>

        <Link href="/dashboard">
          <Button className="w-full gap-2">
            Go to Dashboard <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
