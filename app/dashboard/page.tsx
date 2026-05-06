import Link from "next/link";
import { Logo } from "@/components/Logo";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Clock, ChevronRight, ArrowUpRight } from "lucide-react";
import TestGrid from "@/components/TestGrid";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

function getBandColor(band: number) {
  if (band >= 7.5) return "text-green-500";
  if (band >= 6.5) return "text-cyan-500";
  if (band >= 5.5) return "text-yellow-500";
  return "text-red-400";
}

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch profile + recent attempts in parallel
  const [profileRes, attemptsRes] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).single(),
    supabase
      .from("test_attempts")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(10),
  ]);

  const profile = profileRes.data;
  const attempts = attemptsRes.data ?? [];

  const plan = profile?.plan ?? "free";
  const testsUsed = profile?.tests_used_this_month ?? 0;
  const testsLimit = plan === "free" ? 3 : Infinity;
  const writingUsed = profile?.writing_tests_used_this_month ?? 0;
  const writingLimit = plan === "pro" ? Infinity : 3; // basic=3/month, free=0 (locked in UI)
  const firstName = (profile?.full_name ?? user.email ?? "there").split(" ")[0];
  const initials = firstName.slice(0, 2).toUpperCase();

  // Compute stats from real attempts
  const totalTests = attempts.length;
  const avgBand = totalTests
    ? Math.round((attempts.reduce((s, a) => s + (a.band ?? 0), 0) / totalTests) * 10) / 10
    : null;
  const avgScore =
    totalTests && attempts[0]
      ? `${Math.round(attempts.reduce((s, a) => s + (a.score ?? 0), 0) / totalTests)}/${attempts[0].total}`
      : null;

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-PH", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo className="h-8 w-auto" />
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
            <Link href="/dashboard" className="text-slate-900 font-medium">Dashboard</Link>
            <Link href="/settings" className="hover:text-slate-900 transition">Settings</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Badge variant={plan === "free" ? "free" : "pro"}>
              {plan === "free" ? "Free plan" : plan === "basic" ? "Basic" : "Pro"}
            </Badge>
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">
              {initials}
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-slate-900">{getGreeting()}, {firstName}!</h1>
          <p className="text-slate-500 text-sm mt-1">Keep practicing — consistency is the key to a higher band score.</p>
        </div>

        {/* Free plan banner */}
        {plan === "free" && (
          <div className={`border rounded-xl p-4 mb-8 flex items-center justify-between gap-4 ${
            testsUsed >= testsLimit
              ? "bg-red-50 border-red-200"
              : "bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border-cyan-500/20"
          }`}>
            <div>
              {testsUsed >= testsLimit ? (
                <>
                  <p className="font-semibold text-red-700 text-sm">You&apos;ve used all {testsLimit} free tests this month</p>
                  <p className="text-xs text-red-500 mt-0.5">Upgrade to Pro to keep practicing — resets on the 1st of next month</p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-slate-900 text-sm">
                    You&apos;ve used {testsUsed} of {testsLimit} free tests this month
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Upgrade to Pro for unlimited tests + AI feedback</p>
                </>
              )}
            </div>
            <Link href="/pricing" className="shrink-0">
              <Button size="sm">Upgrade to Pro</Button>
            </Link>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Tests Taken", value: String(totalTests), icon: BookOpen, color: "text-cyan-500" },
            { label: "Avg Band Score", value: avgBand != null ? String(avgBand) : "—", icon: TrendingUp, color: "text-green-500" },
            { label: "Avg Score", value: avgScore ?? "—", icon: TrendingUp, color: "text-blue-500" },
            { label: "This Month", value: `${testsUsed}/${plan === "free" ? testsLimit : "∞"}`, icon: Clock, color: "text-orange-500" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="py-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <p className="text-2xl font-extrabold text-slate-900">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <TestGrid plan={plan} testsUsed={testsUsed} testsLimit={testsLimit === Infinity ? 999 : testsLimit} writingUsed={writingUsed} writingLimit={writingLimit === Infinity ? 999 : writingLimit} />

        {/* Recent attempts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Recent Attempts</h2>
            <Link href="/history" className="text-sm text-cyan-500 hover:text-cyan-600 flex items-center gap-1">
              View all <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {attempts.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 text-sm">No tests taken yet — start your first practice test above!</p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <div className="divide-y divide-slate-100">
                {attempts.map((attempt) => (
                  <Link key={attempt.id} href={`/history/${attempt.id}`} className="block w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {attempt.exam} — {attempt.test_id?.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}
                        </p>
                        <p className="text-xs text-slate-500">{formatDate(attempt.created_at)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">{attempt.score}/{attempt.total}</p>
                        <p className="text-xs text-slate-500">Score</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-bold ${getBandColor(attempt.band)}`}>Band {attempt.band}</p>
                        <p className="text-xs text-slate-500">Estimate</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
