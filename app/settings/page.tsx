"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, CheckCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import LogoutButton from "@/components/LogoutButton";

function Toast({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg text-sm font-medium transition-all ${
      type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`}>
      {type === "success" && <CheckCircle className="w-4 h-4 shrink-0" />}
      {message}
    </div>
  );
}

export default function SettingsPage() {
  const supabase = createClient();

  const [profile, setProfile] = useState({ full_name: "", country: "PH", plan: "free" });
  const [email, setEmail] = useState("");
  const [profileLoading, setProfileLoading] = useState(false);

  const [passwords, setPasswords] = useState({ newPassword: "", confirmPassword: "" });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  function showToast(message: string, type: "success" | "error") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  }

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setEmail(user.email ?? "");
      const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single();
      if (data) setProfile({ full_name: data.full_name ?? "", country: data.country ?? "PH", plan: data.plan ?? "free" });
    }
    load();
  }, [supabase]);

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    setProfileLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from("profiles").update({
      full_name: profile.full_name,
      country: profile.country,
    }).eq("id", user.id);
    setProfileLoading(false);
    if (error) showToast("Failed to save profile.", "error");
    else showToast("Profile saved!", "success");
  }

  async function updatePassword(e: React.FormEvent) {
    e.preventDefault();
    setPasswordError("");
    if (passwords.newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }
    if (passwords.newPassword !== passwords.confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordLoading(true);
    const { error } = await supabase.auth.updateUser({ password: passwords.newPassword });
    setPasswordLoading(false);
    if (error) showToast(error.message, "error");
    else {
      setPasswords({ newPassword: "", confirmPassword: "" });
      showToast("Password updated!", "success");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {toast && <Toast message={toast.message} type={toast.type} />}

      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-xl font-extrabold text-cyan-500">PassPH</span>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
            <Link href="/dashboard" className="hover:text-slate-900 transition">Dashboard</Link>
            <Link href="/settings" className="text-slate-900 font-medium">Settings</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Badge variant={profile.plan === "free" ? "free" : "pro"}>
              {profile.plan === "free" ? "Free plan" : "Pro"}
            </Badge>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Profile */}
          <section className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 mb-5">Profile</h2>
            <form onSubmit={saveProfile} className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name</label>
                <Input
                  type="text"
                  value={profile.full_name}
                  onChange={(e) => setProfile((p) => ({ ...p, full_name: e.target.value }))}
                  className="border-slate-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <Input type="email" value={email} disabled className="border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed" />
                <p className="text-xs text-slate-400 mt-1">Email cannot be changed here.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                <select
                  value={profile.country}
                  onChange={(e) => setProfile((p) => ({ ...p, country: e.target.value }))}
                  className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="PH">Philippines 🇵🇭</option>
                  <option value="AU">Australia 🇦🇺</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <Button size="sm" disabled={profileLoading}>
                {profileLoading ? "Saving…" : "Save changes"}
              </Button>
            </form>
          </section>

          {/* Change password */}
          <section className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 mb-5">Change Password</h2>
            <form onSubmit={updatePassword} className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">New password</label>
                <Input
                  type="password"
                  placeholder="At least 8 characters"
                  value={passwords.newPassword}
                  onChange={(e) => setPasswords((p) => ({ ...p, newPassword: e.target.value }))}
                  className="border-slate-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm new password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={passwords.confirmPassword}
                  onChange={(e) => setPasswords((p) => ({ ...p, confirmPassword: e.target.value }))}
                  className="border-slate-300"
                />
              </div>
              {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
              <Button size="sm" disabled={passwordLoading}>
                {passwordLoading ? "Updating…" : "Update password"}
              </Button>
            </form>
          </section>

          {/* Subscription */}
          <section className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 mb-1">Subscription</h2>
            <p className="text-sm text-slate-500 mb-5">Manage your plan and billing.</p>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg mb-4">
              <div>
                <p className="font-semibold text-slate-900 text-sm capitalize">{profile.plan} Plan</p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {profile.plan === "free" ? "3 practice tests per month" : "Unlimited tests + AI feedback"}
                </p>
              </div>
              <Badge variant={profile.plan === "free" ? "free" : "pro"}>Active</Badge>
            </div>
            {profile.plan === "free" && (
              <Link href="/pricing">
                <Button>
                  Upgrade to Pro <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            )}
          </section>

          {/* Notifications */}
          <section className="bg-white border border-slate-200 rounded-xl p-6">
            <h2 className="text-base font-bold text-slate-900 mb-5">Notifications</h2>
            <div className="space-y-4">
              {[
                { label: "Weekly progress report", sub: "Get a summary of your practice activity every week" },
                { label: "Exam tips & reminders", sub: "Receive tips and study reminders via email" },
                { label: "Product updates", sub: "Be the first to know about new features" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.sub}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:bg-cyan-500 transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                  </label>
                </div>
              ))}
            </div>
          </section>

          {/* Danger zone */}
          <section className="bg-white border border-red-100 rounded-xl p-6">
            <h2 className="text-base font-bold text-red-500 mb-1">Danger Zone</h2>
            <p className="text-sm text-slate-500 mb-5">These actions are permanent and cannot be undone.</p>
            <Button variant="danger" size="sm">Delete my account</Button>
          </section>
        </div>
      </main>
    </div>
  );
}
