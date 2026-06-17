import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { buildPTESessionSections } from "@/lib/tests/pte-mock-registry";
import {
  ChevronLeft, Mic, PenLine, BookOpen, Headphones,
  CheckCircle2, Clock, PlayCircle, Lock, TrendingUp,
  ArrowRight, ListChecks, Shuffle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GeneratePTEMockButton } from "@/components/GeneratePTEMockButton";
import type { PTEMockSection } from "@/lib/tests/pte-mock-registry";

function sectionIcon(key: PTEMockSection["key"]) {
  if (key === "speaking")  return <Mic className="w-5 h-5" />;
  if (key === "writing")   return <PenLine className="w-5 h-5" />;
  if (key === "reading")   return <BookOpen className="w-5 h-5" />;
  return <Headphones className="w-5 h-5" />;
}

function sectionColor(key: PTEMockSection["key"]) {
  if (key === "speaking")  return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
  if (key === "writing")   return "bg-blue-500/10 text-blue-400 border-blue-500/20";
  if (key === "reading")   return "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
  return "bg-purple-500/10 text-purple-400 border-purple-500/20";
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" });
}

export default async function PTEMockSessionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: sessionId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: session } = await supabase
    .from("pte_mock_exam_sessions")
    .select("*")
    .eq("id", sessionId)
    .eq("user_id", user.id)
    .single();

  if (!session) notFound();

  const sections = buildPTESessionSections(session);
  const totalTime = sections.reduce((s, sec) => s + sec.durationMinutes, 0);

  // Fetch test_attempts for writing, reading, listening sections
  const nonSpeakingIds = sections.filter(s => s.key !== "speaking").map(s => s.testId);
  const { data: testAttempts } = await supabase
    .from("test_attempts")
    .select("test_id, score, total, created_at")
    .eq("user_id", user.id)
    .eq("mock_exam_id", sessionId)
    .in("test_id", nonSpeakingIds)
    .order("created_at", { ascending: false });

  const latestByTestId: Record<string, { score: number; total: number; created_at: string }> = {};
  for (const a of testAttempts ?? []) {
    if (!latestByTestId[a.test_id]) latestByTestId[a.test_id] = a;
  }

  // Fetch speaking attempt (no mock_exam_id — track by test_id)
  const { data: speakAttempts } = await supabase
    .from("speaking_attempts")
    .select("id, test_id, band, created_at")
    .eq("user_id", user.id)
    .eq("test_id", session.assigned_speaking)
    .order("created_at", { ascending: false })
    .limit(1);

  const speakAttempt = speakAttempts?.[0] ?? null;

  function isDone(section: PTEMockSection) {
    if (section.key === "speaking") return !!speakAttempt;
    return !!latestByTestId[section.testId];
  }

  const completedSections = sections.filter(isDone);
  const allDone = completedSections.length === sections.length;
  const nextSection = sections.find(s => !isDone(s));

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/pte-mock" className="text-slate-400 hover:text-slate-600">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm font-bold text-slate-900">PTE Academic Mock Exam</p>
              <p className="text-xs text-slate-500">{totalTime} min · 4 sections · {formatDate(session.created_at)}</p>
            </div>
          </div>
          <Badge variant="free">{completedSections.length}/4 done</Badge>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">

        {/* Complete banner */}
        {allDone && (
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <p className="text-sm font-semibold text-purple-400 uppercase tracking-widest">Mock Exam Complete</p>
            </div>
            <p className="text-slate-400 text-sm mb-6">You&apos;ve completed all 4 sections of this PTE Academic mock exam.</p>
            <div className="flex justify-center">
              <GeneratePTEMockButton className="bg-purple-500 hover:bg-purple-400 border-0 text-white gap-2" />
            </div>
          </div>
        )}

        {/* In-progress CTA */}
        {!allDone && (
          <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] rounded-2xl p-6 text-white flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ListChecks className="w-4 h-4 text-purple-400" />
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest">
                  {completedSections.length === 0 ? "Ready to start" : "In Progress"}
                </p>
              </div>
              <p className="text-base font-bold">
                {completedSections.length === 0
                  ? "Begin your PTE mock exam"
                  : `${completedSections.length}/4 sections complete`}
              </p>
              {nextSection && (
                <p className="text-xs text-slate-400 mt-1">
                  Next: {nextSection.label} · {nextSection.durationMinutes} min
                </p>
              )}
            </div>
            {nextSection && (
              <Link
                href={nextSection.key === "speaking"
                  ? `${nextSection.route}?mock=${sessionId}`
                  : `${nextSection.route}?mock=${sessionId}`}
                className="shrink-0"
              >
                <Button className="gap-2 bg-purple-500 hover:bg-purple-400 text-white border-0">
                  {completedSections.length === 0 ? "Start" : "Continue"} {nextSection.label}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* Section cards */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Sections</h2>
          {sections.map((section, idx) => {
            const done = isDone(section);
            const isLocked = idx > 0 && !isDone(sections[idx - 1]);
            const isNext = !done && !isLocked;
            const attempt = section.key === "speaking"
              ? speakAttempt
              : latestByTestId[section.testId];

            return (
              <Card key={section.key} className={
                done ? "border-green-200 bg-green-50/30"
                : isLocked ? "border-slate-200 bg-slate-50 opacity-60"
                : "border-purple-200"
              }>
                <CardContent className="py-0 px-0">
                  <div className="flex items-center gap-4 p-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                      done ? "bg-green-500 border-green-500 text-white"
                      : isLocked ? "bg-slate-200 border-slate-300 text-slate-400"
                      : "bg-purple-500 border-purple-500 text-white"
                    }`}>
                      {done ? <CheckCircle2 className="w-5 h-5" />
                       : isLocked ? <Lock className="w-4 h-4" />
                       : <span className="text-sm font-bold">{idx + 1}</span>}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${sectionColor(section.key)}`}>
                          {sectionIcon(section.key)}
                          {section.label}
                        </span>
                        <span className="text-xs text-slate-400">
                          {section.durationMinutes} min · {section.questions} {section.key === "writing" ? "tasks" : "questions"}
                        </span>
                        {isLocked && <span className="text-xs text-slate-400 italic">Complete {sections[idx - 1].label} first</span>}
                        {isNext && <span className="text-xs text-purple-600 font-semibold">← Up next</span>}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">{section.description}</p>
                      {done && attempt && (
                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                          {section.key === "speaking" && (attempt as { band?: number }).band && (
                            <span className="font-bold text-cyan-500">Band {(attempt as { band?: number }).band}</span>
                          )}
                          {section.key !== "speaking" && (attempt as { score?: number; total?: number }).score != null && (
                            <span className="font-bold text-slate-700">
                              {(attempt as { score: number; total: number }).score}/{(attempt as { score: number; total: number }).total}
                            </span>
                          )}
                          <span>{formatDate(attempt.created_at)}</span>
                        </div>
                      )}
                    </div>

                    <div className="shrink-0">
                      {done ? (
                        <span className="text-xs text-green-600 font-semibold">✓ Done</span>
                      ) : isLocked ? (
                        <div className="flex items-center gap-1 text-slate-400">
                          <Lock className="w-3.5 h-3.5" />
                          <span className="text-xs">Locked</span>
                        </div>
                      ) : (
                        <Link href={`${section.route}?mock=${sessionId}`}>
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

        <div className="bg-white rounded-xl border border-slate-200 px-5 py-4">
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{totalTime} min total</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" />{completedSections.length}/4 done</span>
            <span className="flex items-center gap-1.5"><Shuffle className="w-3.5 h-3.5" />Randomly selected tests</span>
          </div>
        </div>
      </main>
    </div>
  );
}
