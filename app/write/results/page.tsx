"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  BookOpen,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Loader2,
  ChevronDown,
  ChevronUp,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { WritingResult, WritingTaskResult } from "@/lib/tests/writing-types";
import { createClient } from "@/lib/supabase/client";
import type { AIFeedback } from "@/app/api/ai-feedback/route";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getBandColor(band: number) {
  if (band >= 7.5) return "text-green-500";
  if (band >= 6.5) return "text-cyan-500";
  if (band >= 5.5) return "text-yellow-500";
  return "text-red-400";
}

function getBandBg(band: number) {
  if (band >= 7.5) return "bg-green-50 border-green-200";
  if (band >= 6.5) return "bg-cyan-50 border-cyan-200";
  if (band >= 5.5) return "bg-amber-50 border-amber-200";
  return "bg-red-50 border-red-200";
}

function getBandLabel(band: number) {
  if (band >= 8.0) return "Excellent";
  if (band >= 7.0) return "Good";
  if (band >= 6.0) return "Competent";
  if (band >= 5.0) return "Modest";
  return "Limited";
}

// ── Score Breakdown Card ──────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ScoreBreakdown({ breakdown, taskLabel }: { breakdown: any; taskLabel: string }) {
  const metrics = [
    { label: "Word Count",         ...breakdown.wordCount },
    { label: "Vocabulary",         ...breakdown.vocabulary },
    { label: "Cohesion",           ...breakdown.cohesion },
    { label: "Sentence Variety",   ...breakdown.sentenceVariety },
    { label: "Grammar & Accuracy", ...breakdown.grammar },
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">{taskLabel} — Score Analysis</p>
        <span className={`text-sm font-extrabold ${getBandColor(breakdown.band)}`}>Band {breakdown.band}</span>
      </div>
      {metrics.map((m) => (
        <div key={m.label}>
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium text-slate-700">{m.label}</span>
            <span className="text-slate-500">{m.score}/{m.max}</span>
          </div>
          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1">
            <div
              className={cn(
                "h-full rounded-full",
                m.score / m.max >= 0.8 ? "bg-green-500" : m.score / m.max >= 0.5 ? "bg-cyan-500" : "bg-amber-400"
              )}
              style={{ width: `${(m.score / m.max) * 100}%` }}
            />
          </div>
          <p className="text-xs text-slate-500">{m.feedback}</p>
        </div>
      ))}
      {breakdown.cohesion.words.length > 0 && (
        <p className="text-xs text-slate-400">
          Linking words found: <span className="text-cyan-600 font-medium">{breakdown.cohesion.words.join(", ")}</span>
        </p>
      )}
      {breakdown.grammar.issues.length > 0 && (
        <div className="space-y-1">
          <p className="text-xs font-semibold text-slate-500">Grammar issues detected:</p>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {breakdown.grammar.issues.map((issue: any, i: number) => (
            <p key={i} className="text-xs text-amber-700 flex items-start gap-1">
              <span className="mt-0.5">⚠</span> {issue}
            </p>
          ))}
        </div>
      )}
    </div>
  );
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

// ── AI Feedback Display ───────────────────────────────────────────────────────

function AIFeedbackDisplay({ feedback }: { feedback: AIFeedback }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="border border-purple-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-200" />
          <span className="text-sm font-bold text-white">AI Examiner Feedback</span>
          <span className="bg-purple-500 text-purple-100 text-xs px-2 py-0.5 rounded-full font-semibold">Pro</span>
        </div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-purple-200 hover:text-white transition"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {expanded && (
        <div className="p-5 space-y-5 bg-white">
          {/* Overall band + summary */}
          <div className={cn("rounded-xl border p-4 flex items-start gap-4", getBandBg(feedback.overallBand))}>
            <div className="text-center shrink-0">
              <p className={`text-3xl font-extrabold ${getBandColor(feedback.overallBand)}`}>{feedback.overallBand}</p>
              <p className="text-xs text-slate-500 mt-0.5">AI Band</p>
            </div>
            <div>
              <p className={`text-sm font-bold mb-1 ${getBandColor(feedback.overallBand)}`}>{getBandLabel(feedback.overallBand)}</p>
              <p className="text-sm text-slate-700 leading-relaxed">{feedback.summary}</p>
            </div>
          </div>

          {/* Criteria cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {feedback.criteria.map((c) => (
              <div key={c.name} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-slate-600 uppercase tracking-wide leading-tight">{c.name}</p>
                  <span className={`text-sm font-extrabold ${getBandColor(c.band)}`}>Band {c.band}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{c.feedback}</p>
                <div className="space-y-1.5">
                  {c.suggestions.map((s, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-purple-500 mt-0.5 shrink-0 text-xs">→</span>
                      <p className="text-xs text-slate-600">{s}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Strengths & improvements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Strengths</p>
              <ul className="space-y-1.5">
                {feedback.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    <p className="text-xs text-green-800">{s}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">Key Improvements</p>
              <ul className="space-y-1.5">
                {feedback.improvements.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-500 mt-0.5 shrink-0">↑</span>
                    <p className="text-xs text-amber-800">{s}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-400 text-center">
            AI feedback is generated by Claude and should be used as a guide, not an official score.
          </p>
        </div>
      )}
    </div>
  );
}

// ── AI Feedback Section (per task) ────────────────────────────────────────────

function AIFeedbackSection({
  task,
  isPro,
}: {
  task: WritingTaskResult;
  isPro: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState<AIFeedback | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleGetFeedback() {
    if (!task.userResponse?.trim()) {
      setErrorMsg("No response was written for this task.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/ai-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskType: task.type,
          prompt: task.prompt,
          userResponse: task.userResponse,
          taskLabel: task.taskLabel,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setFeedback(data.feedback);
      setStatus("done");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  // Not Pro → upgrade prompt
  if (!isPro) {
    return (
      <div className="border border-purple-200 bg-purple-50 rounded-xl p-5 flex items-start gap-4">
        <Crown className="w-6 h-6 text-purple-500 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-bold text-purple-900 mb-1">AI Examiner Feedback — Pro Feature</p>
          <p className="text-xs text-purple-700 leading-relaxed mb-3">
            Get instant band scores for all 4 IELTS criteria (Task Achievement, Coherence &amp; Cohesion, Lexical Resource, Grammatical Range), plus specific suggestions from an AI examiner.
          </p>
          <Link href="/pricing">
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white gap-1.5">
              <Crown className="w-3.5 h-3.5" />
              Upgrade to Pro — $12.99/mo
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Pro → feedback section
  return (
    <div>
      {status === "idle" && (
        <div className="border border-purple-200 bg-purple-50 rounded-xl p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-500 shrink-0" />
            <div>
              <p className="text-sm font-bold text-purple-900">Get AI Examiner Feedback</p>
              <p className="text-xs text-purple-700">Claude will score your response on all 4 IELTS criteria with specific tips.</p>
            </div>
          </div>
          <Button
            size="sm"
            onClick={handleGetFeedback}
            className="shrink-0 bg-purple-600 hover:bg-purple-700 text-white gap-1.5"
            disabled={!task.userResponse?.trim()}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Get AI Feedback
          </Button>
        </div>
      )}

      {status === "loading" && (
        <div className="border border-purple-200 bg-purple-50 rounded-xl p-6 flex items-center justify-center gap-3">
          <Loader2 className="w-5 h-5 text-purple-500 animate-spin" />
          <div>
            <p className="text-sm font-semibold text-purple-900">Analysing your response…</p>
            <p className="text-xs text-purple-600">This takes about 10–15 seconds.</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="border border-red-200 bg-red-50 rounded-xl p-5 flex items-center justify-between gap-4">
          <p className="text-sm text-red-700">{errorMsg}</p>
          <Button size="sm" variant="outline" onClick={handleGetFeedback}>
            Retry
          </Button>
        </div>
      )}

      {status === "done" && feedback && (
        <AIFeedbackDisplay feedback={feedback} />
      )}
    </div>
  );
}

// ── Single Task Review ────────────────────────────────────────────────────────

function TaskReview({
  task,
  isPro,
}: {
  task: WritingTaskResult;
  isPro: boolean;
}) {
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

        {/* Auto score breakdown */}
        {task.scoreBreakdown && (
          <ScoreBreakdown breakdown={task.scoreBreakdown} taskLabel={task.taskLabel.split("—")[0].trim()} />
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

        {/* ── AI Feedback ──────────────────────────────────────────────────────── */}
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">AI Examiner Feedback</p>
          <AIFeedbackSection task={task} isPro={isPro} />
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
  const [isPro, setIsPro] = useState(false);

  // Load writing result from sessionStorage
  useEffect(() => {
    const raw = sessionStorage.getItem("scoravo_writing_result");
    if (!raw) { router.push("/dashboard"); return; }
    try { setResult(JSON.parse(raw)); } catch { router.push("/dashboard"); }
  }, [router]);

  // Check if user is Pro via Supabase browser client
  useEffect(() => {
    async function checkPlan() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        const { data: profile } = await supabase
          .from("profiles")
          .select("plan, plan_expires_at, is_admin")
          .eq("id", user.id)
          .single();
        if (!profile) return;
        const isAdmin = Boolean(profile.is_admin);
        const hasPaidPlan = profile.plan === "pro" || profile.plan === "basic";
        const expired =
          hasPaidPlan && profile.plan_expires_at
            ? new Date(profile.plan_expires_at) < new Date()
            : false;
        setIsPro(isAdmin || (hasPaidPlan && !expired));
      } catch {
        // silently fail — defaults to free
      }
    }
    checkPlan();
  }, []);

  if (!result) return null;

  const totalWords = result.tasks.reduce((s, t) => s + t.wordCount, 0);
  const overall = result.overallBand ?? null;

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
            <div className="text-center">
              <p className="text-5xl font-extrabold">{result.tasks.length}</p>
              <p className="text-sm text-slate-400 mt-1">Tasks</p>
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

          <div className="grid grid-cols-2 gap-3 mt-6">
            {result.tasks.map((t) => (
              <div key={t.taskId} className="bg-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">{t.taskLabel.split("—")[0].trim()}</p>
                  <p className="font-bold">{t.wordCount} words</p>
                </div>
                <div className="text-right">
                  {t.scoreBreakdown && (
                    <p className={`font-bold text-sm ${getBandColor(t.scoreBreakdown.band)}`}>Band {t.scoreBreakdown.band}</p>
                  )}
                  <CheckCircle className={cn("w-4 h-4 mt-0.5 ml-auto", t.wordCount > 0 ? "text-white/60" : "text-white/20")} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to use this review */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8 text-sm text-amber-800">
          <p className="font-bold mb-1">How to use this review</p>
          <ol className="list-decimal list-inside space-y-1 text-amber-700 text-xs leading-relaxed">
            <li>Check your auto-score breakdown and see where you lost marks.</li>
            <li>Click <strong>Get AI Feedback</strong> for detailed examiner-level analysis on each task (Pro).</li>
            <li>Reveal the model answer and compare it to your writing.</li>
            <li>Use the band descriptors to self-assess each criterion honestly.</li>
            <li>Note specific improvements to apply in your next practice test.</li>
          </ol>
        </div>

        {/* Task reviews */}
        {result.tasks.map((task) => (
          <TaskReview key={task.taskId} task={task} isPro={isPro} />
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
