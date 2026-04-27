"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", country: "PH" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

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

  async function handleGoogle() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback` },
    });
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setServerError("");
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { full_name: form.name, country: form.country },
      },
    });
    setLoading(false);
    if (error) { setServerError(error.message); return; }
    // Supabase returns a session immediately if email confirmation is off,
    // otherwise data.session is null and the user must confirm their email first.
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      router.push("/dashboard");
    } else {
      setConfirmed(true);
    }
  }

  if (confirmed) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <Link href="/" className="text-2xl font-extrabold text-cyan-500">PassPH</Link>
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mt-8">
            <div className="w-14 h-14 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-cyan-500" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">Check your email</h1>
            <p className="text-sm text-slate-500 mb-6">
              We sent a confirmation link to <strong>{form.email}</strong>. Click it to activate your account, then log in.
            </p>
            <Link href="/login">
              <Button className="w-full">Go to Login</Button>
            </Link>
          </div>
        </div>
      </div>
    );
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
            {serverError && (
              <p className="text-xs text-red-500 text-center">{serverError}</p>
            )}
            <Button className="w-full mt-2" size="md" disabled={loading}>
              {loading ? "Creating account…" : "Create free account"}
            </Button>
          </form>

          <p className="text-xs text-slate-400 text-center mt-4">
            By signing up, you agree to our{" "}
            <a href="#" className="text-cyan-500 hover:underline">Terms</a> and{" "}
            <a href="#" className="text-cyan-500 hover:underline">Privacy Policy</a>
          </p>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs text-slate-400 bg-white px-2 w-fit mx-auto">or</div>
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-2 border border-slate-200 rounded-lg py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Sign up with Google
          </button>
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
