"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, BarChart2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TASK_ROWS = [
  { key: "summarise_spoken_text", label: "Summarise Spoken Text" },
  { key: "mc_multi",              label: "Multiple Choice (Multiple)" },
  { key: "fill_blanks",           label: "Fill in the Blanks" },
  { key: "highlight_summary",     label: "Highlight Correct Summary" },
  { key: "mc_single",             label: "Multiple Choice (Single)" },
  { key: "select_missing_word",   label: "Select Missing Word" },
  { key: "highlight_incorrect",   label: "Highlight Incorrect Words" },
  { key: "write_dictation",       label: "Write from Dictation" },
];

const TYPE_LABELS: Record<string, string> = {
  summarise_spoken_text: "Summarise Spoken Text",
  mc_multi:              "Multiple Choice (Multiple)",
  fill_blanks:           "Fill in the Blanks",
  highlight_summary:     "Highlight Correct Summary",
  mc_single:             "Multiple Choice (Single)",
  select_missing_word:   "Select Missing Word",
  highlight_incorrect:   "Highlight Incorrect Words",
  write_dictation:       "Write from Dictation",
};

type TaskResult = { id: string; type: string; isCorrect: boolean; userAnswer: string; correctAnswer: string };

function TaskReview({ taskResults }: { taskResults: TaskResult[] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
      <h2 className="font-bold text-slate-900 mb-4">Answer Review</h2>
      <div className="space-y-3">
        {taskResults.map((tr, i) => (
          <div key={tr.id} className={`rounded-xl border p-4 ${tr.isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0">
                {tr.isCorrect
                  ? <CheckCircle2 className="w-5 h-5 text-green-500" />
                  : <XCircle className="w-5 h-5 text-red-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-bold text-slate-400">Task {i + 1}</span>
                  <span className="text-xs font-medium text-slate-500">{TYPE_LABELS[tr.type] ?? tr.type}</span>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PTEListenResultsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const score = parseInt(searchParams.get("score") ?? "0");
  const total = parseInt(searchParams.get("total") ?? "1");
  const pct = Math.round((score / total) * 100);

  const byType: Record<string, { score: number; max: number }> = (() => {
    try { return JSON.parse(decodeURIComponent(searchParams.get("b") ?? "{}")); }
    catch { return {}; }
  })();

  const taskResults: TaskResult[] = (() => {
    try { return JSON.parse(decodeURIComponent(searchParams.get("tr") ?? "[]")); }
    catch { return []; }
  })();

  function band() {
    if (pct >= 85) return { label: "Expert",       color: "text-green-600",  bg: "bg-green-50",  border: "border-green-200" };
    if (pct >= 70) return { label: "Proficient",   color: "text-cyan-600",   bg: "bg-cyan-50",   border: "border-cyan-200" };
    if (pct >= 55) return { label: "Intermediate", color: "text-amber-600",  bg: "bg-amber-50",  border: "border-amber-200" };
    return             { label: "Developing",   color: "text-slate-600",  bg: "bg-slate-50",  border: "border-slate-200" };
  }

  const b = band();

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Score card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-6 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-cyan-600" />
          </div>
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">PTE Listening Result</p>
          <div className="text-7xl font-extrabold text-cyan-500 mb-1">{pct}%</div>
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${b.color} ${b.bg} border ${b.border} mb-4`}>
            {b.label}
          </div>
          <div className="flex items-center justify-center gap-8 text-sm mt-4">
            <div>
              <p className="font-bold text-slate-900 text-lg">{score}/{total}</p>
              <p className="text-slate-400">Tasks correct</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="font-bold text-slate-900 text-lg">{total - score}</p>
              <p className="text-slate-400">To review</p>
            </div>
          </div>
        </div>

        {/* Score breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="w-4 h-4 text-slate-400" />
            <h2 className="font-bold text-slate-900">Score Breakdown</h2>
          </div>
          <div className="space-y-3">
            {TASK_ROWS.map((row) => {
              const t = byType[row.key];
              const s = t?.score ?? 0;
              const m = t?.max ?? 0;
              const pctRow = m > 0 ? Math.round((s / m) * 100) : 0;
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
                        className={`h-full rounded-full ${pctRow === 100 ? "bg-green-400" : pctRow >= 50 ? "bg-cyan-400" : "bg-red-300"}`}
                        style={{ width: `${pctRow}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Answer review */}
        {taskResults.length > 0 && <TaskReview taskResults={taskResults} />}

        <div className="flex gap-3">
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full" variant="outline">Back to Dashboard</Button>
          </Link>
          <Link href={`/pte-listen/${id}`} className="flex-1">
            <Button className="w-full">Try Again →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
