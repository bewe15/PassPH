"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Trophy, TrendingUp, RotateCcw, CheckCircle, XCircle, BookOpen, Download, Sparkles, CheckCircle2 } from "lucide-react";
import type { AIFeedback } from "@/app/api/ai-feedback/route";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/client";

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

// ── Reading Result View ───────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ReadingResult({ result }: { result: any }) {
  const pct = Math.round((result.score / result.total) * 100);
  const correct = result.questions.filter((q: { isCorrect: boolean }) => q.isCorrect).length;
  const incorrect = result.questions.length - correct;

  return (
    <>
      <Card className="mb-6 overflow-hidden">
        <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] p-8 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-cyan-400" />
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Test Result</p>
          </div>
          <h1 className="text-lg font-bold mb-6">{result.exam} — {result.type}</h1>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            <div>
              <p className="text-5xl font-extrabold">{result.score}<span className="text-2xl text-slate-400">/{result.total}</span></p>
              <p className="text-sm text-slate-400 mt-1">Questions Correct</p>
            </div>
            <div>
              <p className={`text-5xl font-extrabold ${getBandColor(result.band)}`}>{result.band}</p>
              <p className="text-sm text-slate-400 mt-1">Band Estimate</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">{pct}<span className="text-2xl text-slate-400">%</span></p>
              <p className="text-sm text-slate-400 mt-1">Accuracy</p>
            </div>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>Band {result.band} — <span className="text-cyan-400 font-semibold">{getBandLabel(result.band)}</span></span>
          </div>
        </div>
        <CardContent className="py-4">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div><p className="text-green-500 font-bold text-lg">{correct}</p><p className="text-slate-500 text-xs">Correct</p></div>
            <div><p className="text-red-400 font-bold text-lg">{incorrect}</p><p className="text-slate-500 text-xs">Incorrect</p></div>
            <div><p className="text-slate-700 font-bold text-lg">{result.timeTaken}</p><p className="text-slate-500 text-xs">Time Taken</p></div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs text-slate-500 mb-1"><span>Score progress</span><span>{pct}%</span></div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-lg font-bold text-slate-900 mb-4">Answer Review</h2>
      <div className="space-y-3">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {result.questions.map((q: any) => (
          <Card key={q.id}>
            <CardContent className="py-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0">
                  {q.isCorrect ? <CheckCircle className="w-5 h-5 text-green-500" /> : <XCircle className="w-5 h-5 text-red-400" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400">Q{q.id}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${q.isCorrect ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
                      {q.isCorrect ? "Correct" : "Incorrect"}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 font-medium mb-2">{q.text}</p>
                  {!q.isCorrect && (
                    <div className="flex flex-col gap-1 text-xs mb-2">
                      <span className="text-red-400">Your answer: <strong>{q.given}</strong></span>
                      <span className="text-green-600">Correct answer: <strong>{q.correct}</strong></span>
                    </div>
                  )}
                  <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">Explanation: </span>{q.explanation}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

// ── PTE Listening Result View ─────────────────────────────────────────────────

const PTE_TASK_ROWS = [
  { key: "summarise_spoken_text", label: "Summarise Spoken Text" },
  { key: "mc_multi",              label: "Multiple Choice (Multiple)" },
  { key: "fill_blanks",           label: "Fill in the Blanks" },
  { key: "highlight_summary",     label: "Highlight Correct Summary" },
  { key: "mc_single",             label: "Multiple Choice (Single)" },
  { key: "select_missing_word",   label: "Select Missing Word" },
  { key: "highlight_incorrect",   label: "Highlight Incorrect Words" },
  { key: "write_dictation",       label: "Write from Dictation" },
];

const PTE_TYPE_LABELS: Record<string, string> = {
  summarise_spoken_text: "Summarise Spoken Text",
  mc_multi:              "Multiple Choice (Multiple)",
  fill_blanks:           "Fill in the Blanks",
  highlight_summary:     "Highlight Correct Summary",
  mc_single:             "Multiple Choice (Single)",
  select_missing_word:   "Select Missing Word",
  highlight_incorrect:   "Highlight Incorrect Words",
  write_dictation:       "Write from Dictation",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PTEListeningResult({ result, attempt }: { result: any; attempt: any }) {
  const pct = Math.round((result.score / result.total) * 100);
  const byType: Record<string, { score: number; max: number }> = result.byType ?? {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const taskResults: any[] = result.taskResults ?? [];

  function band() {
    if (pct >= 85) return { label: "Expert",       color: "text-green-500" };
    if (pct >= 70) return { label: "Proficient",   color: "text-cyan-500" };
    if (pct >= 55) return { label: "Intermediate", color: "text-yellow-500" };
    return             { label: "Developing",   color: "text-red-400" };
  }
  const b = band();

  return (
    <>
      <Card className="mb-6 overflow-hidden">
        <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] p-8 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-cyan-400" />
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">PTE Listening Result</p>
          </div>
          <h1 className="text-lg font-bold mb-6">{attempt.test_id?.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())}</h1>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            <div>
              <p className="text-5xl font-extrabold">{result.score}<span className="text-2xl text-slate-400">/{result.total}</span></p>
              <p className="text-sm text-slate-400 mt-1">Tasks Correct</p>
            </div>
            <div>
              <p className={`text-5xl font-extrabold ${b.color}`}>{pct}%</p>
              <p className="text-sm text-slate-400 mt-1">Accuracy</p>
            </div>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className={`font-semibold ${b.color}`}>{b.label}</span>
          </div>
        </div>
        <CardContent className="py-4">
          <div className="mt-2">
            <div className="flex justify-between text-xs text-slate-500 mb-1"><span>Overall score</span><span>{pct}%</span></div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-lg font-bold text-slate-900 mb-4">Score Breakdown</h2>
      <Card className="mb-6">
        <CardContent className="py-4 space-y-4">
          {PTE_TASK_ROWS.map((row) => {
            const t = byType[row.key];
            const s = t?.score ?? 0;
            const m = t?.max ?? 0;
            const rowPct = m > 0 ? Math.round((s / m) * 100) : 0;
            return (
              <div key={row.key}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-slate-600">{row.label}</span>
                  <span className={`text-xs font-semibold ${s === m && m > 0 ? "text-green-600" : s === 0 && m > 0 ? "text-red-400" : "text-slate-500"}`}>
                    {m > 0 ? `${s} / ${m}` : "—"}
                  </span>
                </div>
                {m > 0 && (
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${rowPct === 100 ? "bg-green-400" : rowPct >= 50 ? "bg-cyan-400" : "bg-red-300"}`}
                      style={{ width: `${rowPct}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>

      {taskResults.length > 0 && (
        <>
          <h2 className="text-lg font-bold text-slate-900 mb-4">Answer Review</h2>
          <div className="space-y-3 mb-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {taskResults.map((tr: any, i: number) => (
              <Card key={tr.id} className={`border-2 ${tr.isCorrect ? "border-green-200" : "border-red-200"}`}>
                <CardContent className={`py-4 ${tr.isCorrect ? "bg-green-50" : "bg-red-50"}`}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {tr.isCorrect
                        ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                        : <XCircle className="w-5 h-5 text-red-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-bold text-slate-400">Task {i + 1}</span>
                        <span className="text-xs text-slate-500">{PTE_TYPE_LABELS[tr.type] ?? tr.type}</span>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tr.isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}>
                          {tr.isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      </div>
                      {tr.type === "summarise_spoken_text" ? (
                        <p className="text-sm text-slate-600">{tr.userAnswer}</p>
                      ) : (
                        <div className="space-y-1 text-sm">
                          {!tr.isCorrect && (
                            <p className="text-red-500">Your answer: <span className="font-medium">{tr.userAnswer || "—"}</span></p>
                          )}
                          <p className="text-green-700">Correct answer: <span className="font-medium">{tr.correctAnswer}</span></p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
}

// ── Writing Result View ───────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function WritingResult({ result, aiFeedback }: { result: any; aiFeedback?: (AIFeedback | null)[] | null }) {
  const [revealedTasks, setRevealedTasks] = useState<Set<number>>(new Set());

  function toggleReveal(id: number) {
    setRevealedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  }

  const totalWords = result.tasks.reduce((s: number, t: { wordCount: number }) => s + t.wordCount, 0);
  const overall = result.overallBand ?? null;

  return (
    <>
      <div className="bg-gradient-to-br from-[#0a0e27] to-[#0f1535] rounded-2xl p-8 text-white mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-cyan-400" />
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Writing Result</p>
        </div>
        <h1 className="text-center text-lg font-bold mb-6">{result.exam} — {result.title}</h1>
        <div className="flex items-center justify-center gap-12 flex-wrap mb-6">
          {overall !== null && (
            <div className="text-center">
              <p className={`text-5xl font-extrabold ${getBandColor(overall)}`}>{overall}</p>
              <p className="text-sm text-slate-400 mt-1">Band Estimate</p>
            </div>
          )}
          <div className="text-center">
            <p className="text-5xl font-extrabold">{totalWords}</p>
            <p className="text-sm text-slate-400 mt-1">Total Words</p>
          </div>
        </div>
        {overall !== null && (
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Band {overall} — <span className="text-cyan-400 font-semibold">{getBandLabel(overall)}</span></span>
            </div>
          </div>
        )}
      </div>

      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {result.tasks.map((task: any, idx: number) => {
        const shown = revealedTasks.has(task.taskId);
        const taskFeedback = aiFeedback?.[idx] ?? null;
        return (
          <div key={task.taskId} className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
              <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-0.5">{task.taskLabel}</p>
              <p className="text-sm font-medium text-slate-800 leading-relaxed">{task.prompt}</p>
              {task.wordCount > 0 && <p className="text-xs text-slate-500 mt-1">{task.wordCount} words written</p>}
            </div>
            <div className="p-6 space-y-6">
              {(task.chartDescription || task.passage) && (
                <details className="border border-slate-200 rounded-lg">
                  <summary className="px-4 py-3 text-sm font-medium text-slate-700 cursor-pointer hover:bg-slate-50 rounded-lg">
                    {task.chartDescription ? "View chart data" : "View reading passage"}
                  </summary>
                  <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                    {task.chartDescription
                      ? <pre className="whitespace-pre-wrap font-sans text-xs mt-2">{task.chartDescription}</pre>
                      : <p className="mt-2">{task.passage}</p>}
                  </div>
                </details>
              )}
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Your Response</p>
                {task.userResponse?.trim() ? (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">{task.userResponse}</div>
                ) : (
                  <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 text-center text-slate-400 text-sm">No response written.</div>
                )}
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Model Answer</p>
                  <Button size="sm" variant={shown ? "outline" : "primary"} onClick={() => toggleReveal(task.taskId)} className="text-xs">
                    {shown ? "Hide" : "Reveal model answer"}
                  </Button>
                </div>
                {shown ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">{task.modelAnswer}</div>
                ) : (
                  <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
                    <BookOpen className="w-4 h-4" /> Click &quot;Reveal model answer&quot; to compare your writing
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Scoring Criteria (Band Descriptors)</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="text-left px-4 py-2.5 text-xs font-bold text-slate-600 uppercase tracking-wide w-40 border border-slate-200">Criterion</th>
                        <th className="text-left px-4 py-2.5 text-xs font-bold text-amber-600 uppercase tracking-wide border border-slate-200">Band 7</th>
                        <th className="text-left px-4 py-2.5 text-xs font-bold text-green-600 uppercase tracking-wide border border-slate-200">Band 8</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {task.bandDescriptors.map((d: any, i: number) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-4 py-3 font-semibold text-slate-800 border border-slate-200 align-top">{d.criterion}</td>
                          <td className="px-4 py-3 text-slate-600 border border-slate-200 align-top leading-relaxed">{d.band7}</td>
                          <td className="px-4 py-3 text-slate-600 border border-slate-200 align-top leading-relaxed">{d.band8}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Saved AI feedback */}
              {taskFeedback && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">AI Examiner Feedback</p>
                    <span className={`text-sm font-bold ml-auto ${getBandColor(taskFeedback.overallBand)}`}>
                      Band {taskFeedback.overallBand}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">{taskFeedback.summary}</p>
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    {taskFeedback.criteria.map((c) => (
                      <div key={c.name} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs font-bold text-slate-700">{c.name}</p>
                          <span className={`text-sm font-bold ${getBandColor(c.band)}`}>Band {c.band}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{c.feedback}</p>
                      </div>
                    ))}
                  </div>
                  {taskFeedback.strengths.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-2">
                      <p className="text-xs font-bold text-green-700 mb-1.5">Strengths</p>
                      <ul className="space-y-1">
                        {taskFeedback.strengths.map((s, i) => (
                          <li key={i} className="text-xs text-green-800 flex gap-1.5"><span className="text-green-500 shrink-0">✓</span>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {taskFeedback.improvements.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-amber-700 mb-1.5">Key Improvements</p>
                      <ul className="space-y-1">
                        {taskFeedback.improvements.map((s, i) => (
                          <li key={i} className="text-xs text-amber-800 flex gap-1.5"><span className="text-amber-500 shrink-0">↑</span>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HistoryPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [attempt, setAttempt] = useState<any>(null);
  const [plan, setPlan]       = useState<string>("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      const [attemptRes, profileRes] = await Promise.all([
        supabase.from("test_attempts").select("*").eq("id", params.id).single(),
        supabase.from("profiles").select("plan").eq("id", user.id).single(),
      ]);

      if (attemptRes.error || !attemptRes.data) { router.push("/dashboard"); return; }
      setAttempt(attemptRes.data);
      setPlan(profileRes.data?.plan ?? "free");
      setLoading(false);
    }
    load();
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const result = attempt.result_json;
  const isWriting      = !!result?.tasks;
  const isPTEListening = !isWriting && attempt.test_id?.includes("pte-listening");
  const isListening    = !isWriting && !isPTEListening && attempt.test_id?.includes("listening");

  // Guard: result_json missing (old attempt saved before fix)
  if (!result) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 max-w-sm w-full text-center">
          <p className="text-slate-900 font-bold mb-2">Result details not available</p>
          <p className="text-sm text-slate-500 mb-6">This attempt was saved before detailed results were recorded. Your score is still tracked in your history.</p>
          <div className="bg-slate-50 rounded-xl p-4 mb-6">
            <p className="text-3xl font-extrabold text-cyan-500 mb-1">{attempt.band}</p>
            <p className="text-sm text-slate-500">Band Score</p>
            <p className="text-lg font-bold text-slate-900 mt-2">{attempt.score}/{attempt.total}</p>
            <p className="text-sm text-slate-500">Questions correct</p>
          </div>
          <Link href="/dashboard">
            <Button className="w-full">Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const reviewLabel = isWriting ? "Writing Review" : isPTEListening ? "PTE Listening Review" : isListening ? "Listening Review" : "Reading Review";

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 transition">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm font-bold text-slate-900">{reviewLabel}</p>
              <p className="text-xs text-slate-500">{attempt.created_at ? new Date(attempt.created_at).toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" }) : ""}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {plan === "pro" && (
              <Link href={`/history/${params.id}/report`} target="_blank">
                <Button size="sm" className="gap-1.5">
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </Button>
              </Link>
            )}
            <Link href="/dashboard">
              <Button size="sm" variant="outline">Back to dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {isWriting
          ? <WritingResult result={result} aiFeedback={Array.isArray(attempt.ai_feedback) ? attempt.ai_feedback : null} />
          : isPTEListening
          ? <PTEListeningResult result={result} attempt={attempt} />
          : <ReadingResult result={result} />}

        <div className="text-center pt-6">
          <Link href="/dashboard">
            <Button variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" /> Practice another test
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
