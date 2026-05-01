import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PenLine, TrendingUp, Clock, ChevronRight, Lock, ArrowUpRight } from "lucide-react";
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
          <span className="text-xl font-extrabold text-cyan-500">PassPH</span>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-500">
            <Link href="/dashboard" className="text-slate-900 font-medium">Dashboard</Link>
            <Link href="/settings" className="hover:text-slate-900 transition">Settings</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Badge variant={plan === "free" ? "free" : "pro"}>{plan === "free" ? "Free plan" : "Pro"}</Badge>
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

        {/* Start a test */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-1">Start a Practice Test</h2>
          <p className="text-sm text-slate-500 mb-4">Reading &amp; Writing tests available for both IELTS and PTE Academic.</p>

          {/* Reading */}
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Reading</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                exam: "IELTS",
                color: "border-blue-200 hover:border-blue-400",
                accent: "bg-blue-50 text-blue-700",
                tests: [
                  { label: "Reading Test 1", sub: "40 questions • 60 min", id: "ielts-reading-1", free: true },
                  { label: "Reading Test 2", sub: "40 questions • 60 min", id: "ielts-reading-2", free: true },
                  { label: "Reading Test 3", sub: "40 questions • 60 min", id: "ielts-reading-3", free: true },
                ],
                route: "test",
              },
              {
                exam: "PTE",
                color: "border-purple-200 hover:border-purple-400",
                accent: "bg-purple-50 text-purple-700",
                tests: [
                  { label: "Reading Test 1", sub: "5 tasks • 30 min", id: "pte-reading-1", free: true },
                  { label: "Reading Test 2", sub: "5 tasks • 30 min", id: "pte-reading-2", free: true },
                  { label: "Reading Test 3", sub: "5 tasks • 30 min", id: "pte-reading-3", free: true },
                ],
                route: "test",
              },
            ].map((section) => (
              <Card key={section.exam} className={`border-2 transition ${section.color}`}>
                <CardContent className="py-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${section.accent}`}>{section.exam}</span>
                    <span className="text-slate-900 font-bold">Reading</span>
                  </div>
                  <div className="space-y-2">
                    {section.tests.map((test) => {
                      const overLimit = plan === "free" && testsUsed >= testsLimit;
                      const locked = !test.free && plan === "free";
                      return (
                        <div key={test.label} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-900">{test.label}</p>
                            <p className="text-xs text-slate-500">{test.sub}</p>
                          </div>
                          {locked ? (
                            <Link href="/pricing">
                              <Button size="sm" className="opacity-60 bg-slate-200 text-slate-500 hover:bg-slate-300">
                                <Lock className="w-3 h-3 mr-1" /> Pro
                              </Button>
                            </Link>
                          ) : overLimit ? (
                            <Link href="/pricing">
                              <Button size="sm" className="bg-red-100 text-red-600 hover:bg-red-200 border-0">
                                <Lock className="w-3 h-3 mr-1" /> Limit reached
                              </Button>
                            </Link>
                          ) : (
                            <Link href={`/${section.route}/${test.id}`}>
                              <Button size="sm">Start</Button>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Writing */}
          <div className="flex items-center gap-2 mb-3">
            <PenLine className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Writing</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                exam: "IELTS",
                color: "border-blue-200 hover:border-blue-400",
                accent: "bg-blue-50 text-blue-700",
                tests: [
                  { label: "Writing Test 1", sub: "Task 1 + Task 2 • 60 min", id: "ielts-writing-1", free: true },
                  { label: "Writing Test 2", sub: "Task 1 + Task 2 • 60 min", id: "ielts-writing-2", free: true },
                  { label: "Writing Test 3", sub: "Task 1 + Task 2 • 60 min", id: "ielts-writing-3", free: true },
                ],
              },
              {
                exam: "PTE",
                color: "border-purple-200 hover:border-purple-400",
                accent: "bg-purple-50 text-purple-700",
                tests: [
                  { label: "Writing Test 1", sub: "SWT + Essay • 30 min", id: "pte-writing-1", free: true },
                  { label: "Writing Test 2", sub: "SWT + Essay • 30 min", id: "pte-writing-2", free: true },
                  { label: "Writing Test 3", sub: "SWT + Essay • 30 min", id: "pte-writing-3", free: true },
                ],
              },
            ].map((section) => (
              <Card key={`writing-${section.exam}`} className={`border-2 transition ${section.color}`}>
                <CardContent className="py-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${section.accent}`}>{section.exam}</span>
                    <span className="text-slate-900 font-bold">Writing</span>
                  </div>
                  <div className="space-y-2">
                    {section.tests.map((test) => {
                      const overLimit = plan === "free" && testsUsed >= testsLimit;
                      const locked = !test.free && plan === "free";
                      return (
                        <div key={test.label} className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-900">{test.label}</p>
                            <p className="text-xs text-slate-500">{test.sub}</p>
                          </div>
                          {locked ? (
                            <Link href="/pricing">
                              <Button size="sm" className="opacity-60 bg-slate-200 text-slate-500 hover:bg-slate-300">
                                <Lock className="w-3 h-3 mr-1" /> Pro
                              </Button>
                            </Link>
                          ) : overLimit ? (
                            <Link href="/pricing">
                              <Button size="sm" className="bg-red-100 text-red-600 hover:bg-red-200 border-0">
                                <Lock className="w-3 h-3 mr-1" /> Limit reached
                              </Button>
                            </Link>
                          ) : (
                            <Link href={`/write/${test.id}`}>
                              <Button size="sm">Start</Button>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent attempts */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Recent Attempts</h2>
            <button className="text-sm text-cyan-500 hover:text-cyan-600 flex items-center gap-1">
              View all <ArrowUpRight className="w-3 h-3" />
            </button>
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
                  <Link key={attempt.id} href={`/history/${attempt.id}`} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition">
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
