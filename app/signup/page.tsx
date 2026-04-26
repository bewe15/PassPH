"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", country: "PH" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function set(field: string, value: string) {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => { const n = { ...p }; delete n[field]; return n; });
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.password) e.password = "Password is required.";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters.";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-cyan-500">PassPH</Link>
          <h1 className="text-xl font-bold text-slate-900 mt-6 mb-1">Create your free account</h1>
          <p className="text-sm text-slate-500">Start with 3 free tests — no credit card needed</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name</label>
              <Input
                type="text"
                placeholder="Maria Santos"
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                className={`border-slate-300 ${errors.name ? "border-red-400" : ""}`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <Input
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className={`border-slate-300 ${errors.email ? "border-red-400" : ""}`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <Input
                type="password"
                placeholder="At least 8 characters"
                value={form.password}
                onChange={(e) => set("password", e.target.value)}
                className={`border-slate-300 ${errors.password ? "border-red-400" : ""}`}
              />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
              <select
                value={form.country}
                onChange={(e) => set("country", e.target.value)}
                className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="PH">Philippines 🇵🇭</option>
                <option value="AU">Australia 🇦🇺</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Button className="w-full mt-2" size="md" disabled={loading}>
              {loading ? "Creating account…" : "Create free account"}
            </Button>
          </form>

          <p className="text-xs text-slate-400 text-center mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-cyan-500 hover:underline">Terms</a> and{" "}
            <a href="#" className="text-cyan-500 hover:underline">Privacy Policy</a>
          </p>
        </div>

        <div className="mt-6 space-y-2">
          {["3 free practice tests every month", "Instant score and band estimate", "No credit card required"].map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
              {b}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-500 hover:text-cyan-600 font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
}
