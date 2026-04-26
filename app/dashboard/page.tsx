import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Clock, ChevronRight, Lock, ArrowUpRight } from "lucide-react";

const recentAttempts = [
  { id: "1", exam: "IELTS", type: "Reading Mini", score: 10, total: 13, band: 6.5, date: "Apr 25, 2026" },
  { id: "2", exam: "PTE", type: "Reading Mini", score: 8, total: 10, band: 6.0, date: "Apr 23, 2026" },
  { id: "3", exam: "IELTS", type: "Reading Full", score: 28, total: 40, band: 6.5, date: "Apr 20, 2026" },
];

export default function DashboardPage() {
  const plan = "free";
  const testsUsed = 2;
  const testsLimit = 3;

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
            <Badge variant="free">Free plan</Badge>
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm font-bold">M</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-slate-900">Good morning, Maria!</h1>
          <p className="text-slate-500 text-sm mt-1">Keep practicing — consistency is the key to a higher band score.</p>
        </div>

        {/* Free plan upgrade banner */}
        {plan === "free" && (
          <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-xl p-4 mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-slate-900 text-sm">You&apos;ve used {testsUsed} of {testsLimit} free tests this month</p>
              <p className="text-xs text-slate-500 mt-0.5">Upgrade to Pro for unlimited tests + AI feedback</p>
            </div>
            <Link href="/pricing" className="shrink-0">
              <Button size="sm">Upgrade to Pro</Button>
            </Link>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Tests Taken", value: "3", icon: BookOpen, color: "text-cyan-500" },
            { label: "Avg Band Score", value: "6.5", icon: TrendingUp, color: "text-green-500" },
            { label: "Avg Score", value: "28/40", icon: TrendingUp, color: "text-blue-500" },
            { label: "This Month", value: `${testsUsed}/${testsLimit}`, icon: Clock, color: "text-orange-500" },
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
          <h2 className="text-lg font-bold text-slate-900 mb-4">Start a Practice Test</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                exam: "IELTS",
                color: "border-blue-200 hover:border-blue-400",
                accent: "bg-blue-50 text-blue-700",
                tests: [
                  { label: "Reading Full", sub: "40 questions • 60 min", id: "ielts-reading-1", free: true },
                ],
              },
              {
                exam: "PTE",
                color: "border-purple-200 hover:border-purple-400",
                accent: "bg-purple-50 text-purple-700",
                tests: [
                  { label: "Reading Full", sub: "5 tasks • 30 min", id: "pte-reading-1", free: true },
                ],
              },
            ].map((section) => (
              <Card key={section.exam} className={`border-2 transition ${section.color}`}>
                <CardContent className="py-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${section.accent}`}>{section.exam}</span>
                    <span className="text-slate-900 font-bold">Reading</span>
                  </div>
                  <div className="space-y-2">
                    {section.tests.map((test) => (
                      <div key={test.label} className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-900">{test.label}</p>
                          <p className="text-xs text-slate-500">{test.sub}</p>
                        </div>
                        {test.free || plan !== "free" ? (
                          <Link href={`/test/${test.id}`}>
                            <Button size="sm">Start</Button>
                          </Link>
                        ) : (
                          <Button size="sm" className="opacity-50 cursor-not-allowed bg-slate-200 text-slate-500 hover:bg-slate-200">
                            <Lock className="w-3 h-3 mr-1" /> Pro
                          </Button>
                        )}
                      </div>
                    ))}
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
          <Card>
            <div className="divide-y divide-slate-100">
              {recentAttempts.map((attempt) => (
                <Link key={attempt.id} href={`/results/${attempt.id}`}>
                  <div className="flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{attempt.exam} — {attempt.type}</p>
                        <p className="text-xs text-slate-500">{attempt.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">{attempt.score}/{attempt.total}</p>
                        <p className="text-xs text-slate-500">Score</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-cyan-500">Band {attempt.band}</p>
                        <p className="text-xs text-slate-500">Estimate</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
