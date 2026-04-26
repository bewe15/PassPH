"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [validSession, setValidSession] = useState(false);

  useEffect(() => {
    // Supabase puts the recovery token in the URL hash; the client picks it up automatically
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setValidSession(true);
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }
    setLoading(true);
    const supabase = createClient();
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (err) { setError(err.message); return; }
    setDone(true);
    setTimeout(() => router.push("/login"), 2500);
  }

  if (done) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <Link href="/" className="text-2xl font-extrabold text-cyan-500">PassPH</Link>
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mt-8">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">Password updated!</h1>
            <p className="text-sm text-slate-500">Redirecting you to login…</p>
          </div>
        </div>
      </div>
    );
  }

  if (!validSession) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <Link href="/" className="text-2xl font-extrabold text-cyan-500">PassPH</Link>
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mt-8">
            <p className="text-slate-500 text-sm mb-4">This link is invalid or has expired.</p>
            <Link href="/forgot-password">
              <Button className="w-full">Request a new link</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-cyan-500">PassPH</Link>
          <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mt-6 mb-4">
            <KeyRound className="w-6 h-6 text-cyan-500" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-1">Set a new password</h1>
          <p className="text-sm text-slate-500">Choose a strong password for your account.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">New password</label>
              <Input
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                className={`border-slate-300 ${error ? "border-red-400" : ""}`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={confirm}
                onChange={(e) => { setConfirm(e.target.value); setError(""); }}
                className={`border-slate-300 ${error ? "border-red-400" : ""}`}
              />
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <Button className="w-full" size="md" disabled={loading}>
              {loading ? "Updating…" : "Set new password"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
