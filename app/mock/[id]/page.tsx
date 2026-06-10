import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { enforcePlanExpiry } from "@/lib/enforce-plan-expiry";
import { getMockExam } from "@/lib/tests/mock-registry";
import {
  ChevronLeft,
  Headphones,
  BookOpen,
  PenLine,
  CheckCircle2,
  Clock,
  PlayCircle,
  Lock,
  Crown,
  TrendingUp,
  ArrowRight,
  ListChecks,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { MockSection } from "@/lib/tests/mock-registry";

// ── Helpers ───────────────────────────────────────────────────────────────────

function getBandColor(band: number) {
  if (band >= 7.5) return "text-green-500";
  if (band >= 6.5) return "text-cyan-500";
  if (band >= 5.5) return "text-yellow-500";
  return "text-red-400";
}

function getBandLabel(band: number) {
  if (band >= 8.0) return "Excellent";
  if (band >= 7.0) return "Good";
  if (band >= 6.0) return "Competent";
  if (band >= 5.0) return "Modest";
  return "Limited";
}

function SectionIcon({ section }: { section: MockSection["key"] }) {
  if (section === "listening") return <Headphones className="w-5 h-5" />;
  if (section === "reading") return <BookOpen className="w-5 h-5" />;
  return <PenLine className="w-5 h-5" />;
}

function sectionColor(section: MockSection["key"]) {
  if (section === "listening") return "bg-purple-500/10 text-purple-400 border-purple-500/20";
  if (section === "reading") return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
  return "bg-blue-500/10 text-blue-400 border-blue-500/20";
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function MockExamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exam = getMockExam(id);
  if (!exam) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Plan check
  const { data: profile } = await supabase
    .from("profiles")
    .select("plan, plan_expires_at, is_admin")
    .eq("id", user.id)
    .single();

  const plan = await enforcePlanExpiry(supabase, user.id, {
    plan: profile?.plan ?? "free",
    plan_expires_at: profile?.plan_expires_at,
    is_admin: profile?.is_admin,
  });
  const isPro = plan === "pro";

  // ── Fetch mock-exam-specific attempts only ────────────────────────────────
  // We filter by mock_exam_id = exam.id so practice attempts don't count here
  const testIds = exam.sections.map((s) => s.testId);
  const { data: attempts } = await supabase
    .from("test_attempts")
    .select("id, test_id, band, score, total, time_taken, created_at")
    .eq("user_id", user.id)
    .eq("mock_exam_id", exam.id)       // ← key: only mock attempts
    .in("test_id", testIds)
    .order("created_at", { ascending: false });

  // Latest mock attempt per section
  type Attempt = NonNullable<typeof attempts>[number];
  const latestByTestId: Record<string, Attempt> = {};
  for (const attempt of attempts ?? []) {
    if (!latestByTestId[attempt.test_id]) {
      latestByTestId[attempt.test_id] = attempt;
    }
  }

  // ── Compute combined score ────────────────────────────────────────────────
  const completedSections = exam.sections.filter((s) => latestByTestId[s.testId]);
  const allSectionsComplete = completedSections.length === exam.sections.length;
  const combinedBand = allSectionsComplete
    ? Math.round(
        (completedSections.reduce(
          (sum, s) => sum + (latestByTestId[s.testId]?.band ?? 0),
          0
        ) / exam.sections.length) * 2
      ) / 2
    : null;

  const totalTime = exam.sections.reduce((s, sec) => s + sec.durationMinutes, 0);

  // Which section is next (first not yet completed, in order)
  const nextSectionIdx = exam.sections.findIndex((s) => !latestByTestId[s.testId]);
  const nextSection = nextSectionIdx >= 0 ? exam.sections[nextSectionIdx] : null;

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-PH", {
      month: "short", day: "numeric", year: "numeric",
    });
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm font-bold text-slate-900">{exam.title}</p>
              <p className="text-xs text-slate-500">
                {exam.exam} {exam.type} · {totalTime} min · {exam.sections.length} sections
              </p>
            </div>
          </div>
          <Badge variant={isPro ? "pro" : "free"}>{isPro ? "Pro" : "Free"}</Badge>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* ── All complete: show combined result ───────────────────────────── */}
        {allSectionsComplete && combinedBand !== null && (
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
                Mock Exam Complete
              </p>
            </div>
            <div className="text-center mb-6">
              <p className={`text-7xl font-extrabold mb-2 ${getBandColor(combinedBand)}`}>
                {combinedBand}
              </p>
              <p className="text-slate-400 text-sm">Overall Band Estimate</p>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mt-3">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>
                  Band {combinedBand} —{" "}
                  <span className="text-cyan-400 font-semibold">{getBandLabel(combinedBand)}</span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {exam.sections.map((section) => {
                const attempt = latestByTestId[section.testId];
                return (
                  <div key={section.key} className="bg-white/10 rounded-xl px-3 py-3 text-center">
                    <p className="text-xs text-slate-400 mb-1 capitalize">{section.label}</p>
                    <p className={`text-lg font-bold ${getBandColor(attempt?.band ?? 0)}`}>
                      {attempt?.band ?? "—"}
                    </p>
                    <p className="text-xs text-slate-500">Band</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── In-progress: CTA to continue or start ───────────────────────── */}
        {!allSectionsComplete && (
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] rounded-2xl p-6 text-white flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ListChecks className="w-4 h-4 text-cyan-400" />
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                  {completedSections.length === 0 ? "Ready to start" : "In Progress"}
                </p>
              </div>
              <p className="text-base font-bold">
                {completedSections.length === 0
                  ? "Begin your mock exam"
                  : `${completedSections.length}/${exam.sections.length} sections complete`}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {nextSection
                  ? `Next: ${nextSection.label} · ${nextSection.durationMinutes} min`
                  : "All done!"}
              </p>
            </div>
            {nextSection && (
              <Link href={`${nextSection.route}?mock=${exam.id}`} className="shrink-0">
                <Button className="gap-2 bg-cyan-500 hover:bg-cyan-400 text-white border-0">
                  {completedSections.length === 0 ? "Start" : "Continue"} {nextSection.label}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* ── Free plan notice ──────────────────────────────────────────────── */}
        {!isPro && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex items-start gap-3">
            <Crown className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-amber-900">1 free mock exam included</p>
              <p className="text-xs text-amber-700 mt-0.5">
                Upgrade to Pro for unlimited mock exams + AI Writing feedback.
              </p>
            </div>
            <Link href="/pricing" className="shrink-0">
              <Button size="sm" className="text-xs">Upgrade</Button>
            </Link>
          </div>
        )}

        {/* ── Section cards ─────────────────────────────────────────────────── */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Sections</h2>
          {exam.sections.map((section, idx) => {
            const attempt = latestByTestId[section.testId];
            const isDone = !!attempt;
            // Section is locked if any previous section is not yet done
            const isLocked = idx > 0 && !latestByTestId[exam.sections[idx - 1].testId];
            const isNext = !isDone && !isLocked;

            return (
              <Card
                key={section.key}
                className={
                  isDone
                    ? "border-green-200 bg-green-50/30"
                    : isLocked
                    ? "border-slate-200 bg-slate-50 opacity-60"
                    : "border-cyan-200"
                }
              >
                <CardContent className="py-0 px-0">
                  <div className="flex items-center gap-4 p-5">
                    {/* Step indicator */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isDone
                          ? "bg-green-500 border-green-500 text-white"
                          : isLocked
                          ? "bg-slate-200 border-slate-300 text-slate-400"
                          : "bg-cyan-500 border-cyan-500 text-white"
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : isLocked ? (
                        <Lock className="w-4 h-4" />
                      ) : (
                        <span className="text-sm font-bold">{idx + 1}</span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${sectionColor(section.key)}`}
                        >
                          <SectionIcon section={section.key} />
                          {section.label}
                        </span>
                        <span className="text-xs text-slate-400">
                          {section.durationMinutes} min ·{" "}
                          {section.questions}{" "}
                          {section.key === "writing" ? "tasks" : "questions"}
                        </span>
                        {isLocked && (
                          <span className="text-xs text-slate-400 italic">
                            Complete {exam.sections[idx - 1].label} first
                          </span>
                        )}
                        {isNext && (
                          <span className="text-xs text-cyan-600 font-semibold">← Up next</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">
                        {section.description}
                      </p>

                      {isDone && attempt && (
                        <div className="flex items-center gap-4 mt-2">
                          <span className={`text-sm font-bold ${getBandColor(attempt.band)}`}>
                            Band {attempt.band}
                          </span>
                          <span className="text-xs text-slate-400">
                            {attempt.score}/{attempt.total}
                          </span>
                          <span className="text-xs text-slate-400">
                            {formatDate(attempt.created_at)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    <div className="shrink-0">
                      {isDone ? (
                        <div className="flex flex-col gap-1.5">
                          <span className="text-xs text-green-600 font-semibold text-center">✓ Done</span>
                        </div>
                      ) : isLocked ? (
                        <div className="flex items-center gap-1 text-slate-400">
                          <Lock className="w-3.5 h-3.5" />
                          <span className="text-xs">Locked</span>
                        </div>
                      ) : (
                        <Link href={`${section.route}?mock=${exam.id}`}>
                          <Button size="sm" className="gap-1.5">
                            <PlayCircle className="w-4 h-4" />
                            Start
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About this exam */}
        <div className="bg-white rounded-xl border border-slate-200 px-5 py-4">
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />{totalTime} min total
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
              {completedSections.length}/{exam.sections.length} sections done
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-2">{exam.description}</p>
        </div>

        {allSectionsComplete && (
          <div className="text-center pt-2">
            <Link href="/dashboard">
              <Button variant="outline">Back to dashboard</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
