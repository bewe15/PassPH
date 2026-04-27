"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WritingResult, WritingTaskResult } from "@/lib/tests/writing-types";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ── Band Descriptor Table ─────────────────────────────────────────────────────

function BandTable({ task }: { task: WritingTaskResult }) {
  return (
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
          {task.bandDescriptors.map((d, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <td className="px-4 py-3 font-semibold text-slate-800 border border-slate-200 align-top">{d.criterion}</td>
              <td className="px-4 py-3 text-slate-600 border border-slate-200 align-top leading-relaxed">{d.band7}</td>
              <td className="px-4 py-3 text-slate-600 border border-slate-200 align-top leading-relaxed">{d.band8}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Single Task Review ────────────────────────────────────────────────────────

function TaskReview({ task }: { task: WritingTaskResult }) {
  const [showModel, setShowModel] = useState(false);
  const hasResponse = task.userResponse.trim().length > 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-6">
      {/* Task header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
        <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-0.5">{task.taskLabel}</p>
        <p className="text-sm font-medium text-slate-800 leading-relaxed">{task.prompt}</p>
        {task.wordCount > 0 && (
          <p className="text-xs text-slate-500 mt-1">{task.wordCount} words written</p>
        )}
      </div>

      <div className="p-6 space-y-6">
        {/* Chart/passage reference if applicable */}
        {(task.chartDescription || task.passage) && (
          <details className="border border-slate-200 rounded-lg">
            <summary className="px-4 py-3 text-sm font-medium text-slate-700 cursor-pointer hover:bg-slate-50 rounded-lg">
              {task.chartDescription ? "View chart data" : "View reading passage"}
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
              {task.chartDescription
                ? <pre className="whitespace-pre-wrap font-sans text-xs mt-2">{task.chartDescription}</pre>
                : <p className="mt-2">{task.passage}</p>
              }
            </div>
          </details>
        )}

        {/* User response */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Your Response</p>
          {hasResponse ? (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
              {task.userResponse}
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 text-center text-slate-400 text-sm">
              No response written for this task.
            </div>
          )}
        </div>

        {/* Model answer toggle */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Model Answer</p>
            <Button
              size="sm"
              variant={showModel ? "outline" : "primary"}
              onClick={() => setShowModel((v) => !v)}
              className="text-xs"
            >
              {showModel ? "Hide" : "Reveal model answer"}
            </Button>
          </div>
          {showModel && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
              {task.modelAnswer}
            </div>
          )}
          {!showModel && (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-6 flex items-center justify-center gap-2 text-slate-400 text-sm">
              <BookOpen className="w-4 h-4" />
              Click &quot;Reveal model answer&quot; to compare your writing
            </div>
          )}
        </div>

        {/* Band descriptors */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Scoring Criteria (Band Descriptors)</p>
          <BandTable task={task} />
          <p className="text-xs text-slate-400 mt-2">
            Use these criteria to assess your own response. Compare each criterion against your writing and the model answer.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WriteResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<WritingResult | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("passph_writing_result");
    if (!raw) { router.push("/dashboard"); return; }
    try { setResult(JSON.parse(raw)); } catch { router.push("/dashboard"); }
  }, [router]);

  if (!result) return null;

  const totalWords = result.tasks.reduce((s, t) => s + t.wordCount, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm font-bold text-slate-900">Writing Review</p>
              <p className="text-xs text-slate-500">{result.title}</p>
            </div>
          </div>
          <Link href="/dashboard">
            <Button size="sm" variant="outline">Back to dashboard</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Summary card */}
        <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white mb-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-cyan-100 text-sm mb-1">{result.exam} Academic Writing</p>
              <h1 className="text-2xl font-extrabold mb-1">{result.title}</h1>
              <p className="text-cyan-100 text-sm">{result.date} &middot; {result.timeTaken}</p>
            </div>
            <div className="bg-white/20 rounded-xl px-4 py-3 text-center">
              <p className="text-2xl font-extrabold">{totalWords}</p>
              <p className="text-xs text-cyan-100 mt-0.5">total words</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            {result.tasks.map((t) => (
              <div key={t.taskId} className="bg-white/15 rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-cyan-100">{t.taskLabel.split("—")[0].trim()}</p>
                  <p className="font-bold">{t.wordCount} words</p>
                </div>
                <CheckCircle className={cn("w-5 h-5", t.wordCount > 0 ? "text-white" : "text-white/30")} />
              </div>
            ))}
          </div>
        </div>

        {/* How to use this review */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 text-sm text-amber-800">
          <p className="font-bold mb-1">How to use this review</p>
          <ol className="list-decimal list-inside space-y-1 text-amber-700 text-xs leading-relaxed">
            <li>Read your response and identify what you did well and what could be improved.</li>
            <li>Reveal the model answer and compare it to your writing — notice the structure, vocabulary, and development.</li>
            <li>Use the band descriptors to self-assess each criterion honestly.</li>
            <li>Note specific improvements to apply in your next practice test.</li>
          </ol>
        </div>

        {/* Task reviews */}
        {result.tasks.map((task) => (
          <TaskReview key={task.taskId} task={task} />
        ))}

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <Link href="/dashboard">
            <Button className="gap-2">
              Practice another test <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
