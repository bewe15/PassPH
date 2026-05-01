"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWritingTest } from "@/lib/tests/writing-index";
import { createClient } from "@/lib/supabase/client";
import { scoreTask, overallBand } from "@/lib/writing-scorer";
import type { WritingTask, WritingResult } from "@/lib/tests/writing-types";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function countWords(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

// ── Per-task Timer ────────────────────────────────────────────────────────────

function TaskTimer({
  seconds,
  onExpire,
  running,
}: {
  seconds: number;
  onExpire: () => void;
  running: boolean;
}) {
  const [left, setLeft] = useState(seconds);
  const expiredRef = useRef(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft((t) => {
        if (t <= 1 && !expiredRef.current) {
          expiredRef.current = true;
          clearInterval(id);
          onExpire();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, onExpire]);

  const mm = Math.floor(left / 60).toString().padStart(2, "0");
  const ss = (left % 60).toString().padStart(2, "0");
  const warn = left < 120;

  return (
    <span className={cn("flex items-center gap-1.5 text-sm font-bold tabular-nums", warn ? "text-red-500" : "text-slate-700")}>
      <Clock className="w-4 h-4" /> {mm}:{ss}
    </span>
  );
}

// ── Word Count Indicator ──────────────────────────────────────────────────────

function WordCount({ count, min, max }: { count: number; min: number; max?: number }) {
  const belowMin = count < min;
  const aboveMax = max !== undefined && count > max;
  return (
    <div className={cn(
      "flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full",
      aboveMax ? "bg-red-50 text-red-600" :
      belowMin ? "bg-amber-50 text-amber-600" :
      "bg-green-50 text-green-600"
    )}>
      {aboveMax && <AlertCircle className="w-3 h-3" />}
      {count} words
      {belowMin && ` (min ${min})`}
      {max && ` / max ${max}`}
    </div>
  );
}

// ── Writing Task Panel ────────────────────────────────────────────────────────

function WritingTaskPanel({
  task,
  response,
  onChange,
  isActive,
  taskExpired,
}: {
  task: WritingTask;
  response: string;
  onChange: (v: string) => void;
  isActive: boolean;
  taskExpired: boolean;
}) {
  const wordCount = countWords(response);
  const isPTE_SWT = task.type === "pte_swt";

  return (
    <div className="flex flex-col lg:flex-row flex-1 min-h-0 gap-0">
      {/* Prompt panel */}
      <div className="lg:w-1/2 overflow-y-auto p-6 border-r border-slate-200 bg-white">
        <div className="mb-4">
          <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">{task.taskLabel}</p>
          <p className="text-xs text-slate-500 leading-relaxed">{task.instructions}</p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <p className="text-sm font-semibold text-slate-900 mb-3 leading-relaxed">{task.prompt}</p>

          {/* IELTS Task 1 chart description */}
          {task.chartDescription && (
            <div className="mt-3 border-t border-slate-200 pt-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Chart / Table Data</p>
              <pre className="text-xs text-slate-700 whitespace-pre-wrap leading-relaxed font-sans">{task.chartDescription}</pre>
            </div>
          )}

          {/* PTE SWT passage */}
          {task.passage && (
            <div className="mt-3 border-t border-slate-200 pt-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Reading Passage</p>
              <p className="text-sm text-slate-700 leading-relaxed">{task.passage}</p>
            </div>
          )}
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 text-xs text-cyan-700">
          <strong>Minimum:</strong> {task.minWords} words
          {task.maxWords && <> &nbsp;|&nbsp; <strong>Maximum:</strong> {task.maxWords} words</>}
          {isPTE_SWT && <> &nbsp;|&nbsp; <strong>Write ONE sentence only</strong></>}
        </div>
      </div>

      {/* Writing panel */}
      <div className="lg:w-1/2 flex flex-col p-6 bg-white">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-slate-700">Your Response</p>
          <WordCount count={wordCount} min={task.minWords} max={task.maxWords} />
        </div>

        {taskExpired ? (
          <div className="flex-1 flex items-center justify-center bg-slate-50 rounded-xl border-2 border-dashed border-slate-300">
            <div className="text-center text-slate-400">
              <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">Time expired for this task</p>
              <p className="text-xs mt-1">Your response has been saved</p>
            </div>
          </div>
        ) : (
          <textarea
            value={response}
            onChange={(e) => onChange(e.target.value)}
            disabled={!isActive}
            placeholder={
              isPTE_SWT
                ? "Write your one-sentence summary here…"
                : "Write your response here. Plan your ideas before you begin…"
            }
            className={cn(
              "flex-1 w-full resize-none rounded-xl border-2 p-4 text-sm text-slate-800 leading-relaxed focus:outline-none transition",
              isActive
                ? "border-cyan-300 focus:border-cyan-500 bg-white"
                : "border-slate-200 bg-slate-50 text-slate-400 cursor-not-allowed"
            )}
          />
        )}

        {isActive && !taskExpired && (
          <p className="text-xs text-slate-400 mt-2">
            {isPTE_SWT
              ? "Write a single grammatical sentence that captures the key points."
              : "Write clearly and organise your ideas in paragraphs."}
          </p>
        )}
      </div>
    </div>
  );
}

// ── Submit Confirm Modal ───────────────────────────────────────────────────────

function SubmitModal({
  tasks,
  responses,
  onConfirm,
  onCancel,
}: {
  tasks: WritingTask[];
  responses: Record<number, string>;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
        <h3 className="font-bold text-slate-900 text-lg mb-2">Submit writing test?</h3>
        <div className="space-y-2 mb-4">
          {tasks.map((t) => {
            const wc = countWords(responses[t.id] ?? "");
            const ok = wc >= t.minWords;
            return (
              <div key={t.id} className={cn("flex items-center justify-between text-sm px-3 py-2 rounded-lg", ok ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700")}>
                <span>{t.taskLabel}</span>
                <span className="font-bold">{wc} words {!ok && `(min ${t.minWords})`}</span>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-slate-400 mb-5">After submitting, you&apos;ll see the model answer and band descriptors.</p>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onCancel}>Keep writing</Button>
          <Button className="flex-1" onClick={onConfirm}>Submit &amp; review</Button>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WritePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const test = getWritingTest(params.id);

  const [activeTaskIdx, setActiveTaskIdx] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [expiredTasks, setExpiredTasks] = useState<Set<number>>(new Set());
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const startRef = useRef(Date.now());

  const handleTaskExpire = useCallback((taskId: number, nextIdx: number | null) => {
    setExpiredTasks((prev) => new Set(prev).add(taskId));
    if (nextIdx !== null) setActiveTaskIdx(nextIdx);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!test) return;
    setSubmitting(true);

    const elapsed = Math.round((Date.now() - startRef.current) / 1000);
    const mm = Math.floor(elapsed / 60).toString().padStart(2, "0");
    const ss = (elapsed % 60).toString().padStart(2, "0");

    const scoredTasks = test.tasks.map((t) => {
      const response = responses[t.id] ?? "";
      const breakdown = scoreTask(response, t.type);
      return {
        taskId: t.id,
        taskLabel: t.taskLabel,
        type: t.type,
        prompt: t.prompt,
        chartDescription: t.chartDescription,
        passage: t.passage,
        userResponse: response,
        wordCount: countWords(response),
        modelAnswer: t.modelAnswer,
        bandDescriptors: t.bandDescriptors,
        scoreBreakdown: breakdown,
      };
    });

    const bands = scoredTasks.map((t) => t.scoreBreakdown.band);
    const overall = overallBand(bands);

    const result: WritingResult = {
      exam: test.exam,
      testId: test.id,
      title: test.title,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      timeTaken: `${mm} min ${ss} sec`,
      tasks: scoredTasks,
      overallBand: overall,
    };

    sessionStorage.setItem("passph_writing_result", JSON.stringify(result));

    // Save to Supabase (best-effort)
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("test_attempts").insert({
          user_id: user.id,
          exam: test.exam,
          test_id: test.id,
          score: Math.round(overall * 10),
          total: 90,
          band: overall,
          time_taken: `${mm} min ${ss} sec`,
          result_json: result,
        });
        await supabase.rpc("increment_tests_used", { uid: user.id });
      }
    } catch { /* ignore */ }

    router.push("/write/results");
  }, [test, responses, router]);

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Writing test not found.</p>
          <Link href="/dashboard"><Button>Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  const activeTask = test.tasks[activeTaskIdx];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 transition">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-sm font-bold text-slate-900">{test.title}</p>
            <p className="text-xs text-slate-500">
              {test.tasks.map((t) => countWords(responses[t.id] ?? "")).join(" + ")} words written
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {!expiredTasks.has(activeTask.id) && (
            <TaskTimer
              key={activeTask.id}
              seconds={activeTask.timeSeconds}
              running={true}
              onExpire={() => handleTaskExpire(activeTask.id, activeTaskIdx < test.tasks.length - 1 ? activeTaskIdx + 1 : null)}
            />
          )}
          <Button size="sm" onClick={() => setShowConfirm(true)} disabled={submitting}>
            {submitting ? "Submitting…" : "Submit"}
          </Button>
        </div>
      </header>

      {/* Task tabs */}
      <div className="bg-white border-b border-slate-200 px-4 flex gap-1">
        {test.tasks.map((t, i) => {
          const wc = countWords(responses[t.id] ?? "");
          const done = wc >= t.minWords;
          const expired = expiredTasks.has(t.id);
          return (
            <button
              key={t.id}
              onClick={() => setActiveTaskIdx(i)}
              className={cn(
                "px-4 py-2.5 text-sm font-medium border-b-2 transition flex items-center gap-2",
                activeTaskIdx === i ? "border-cyan-500 text-cyan-600" : "border-transparent text-slate-500 hover:text-slate-900"
              )}
            >
              {t.taskLabel.split("—")[0].trim()}
              <span className={cn(
                "text-xs px-1.5 py-0.5 rounded-full font-semibold",
                expired ? "bg-slate-200 text-slate-500" :
                done ? "bg-green-100 text-green-700" :
                "bg-amber-100 text-amber-700"
              )}>
                {expired ? "expired" : done ? "✓" : `${wc}w`}
              </span>
            </button>
          );
        })}
      </div>

      {/* Task content */}
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <WritingTaskPanel
          task={activeTask}
          response={responses[activeTask.id] ?? ""}
          onChange={(v) => setResponses((prev) => ({ ...prev, [activeTask.id]: v }))}
          isActive={true}
          taskExpired={expiredTasks.has(activeTask.id)}
        />
      </div>

      {/* Bottom navigation */}
      <div className="bg-white border-t border-slate-200 px-4 py-3 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setActiveTaskIdx((i) => Math.max(0, i - 1))}
          disabled={activeTaskIdx === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Previous task
        </Button>
        {activeTaskIdx < test.tasks.length - 1 ? (
          <Button size="sm" onClick={() => setActiveTaskIdx((i) => i + 1)}>
            Next task →
          </Button>
        ) : (
          <Button size="sm" onClick={() => setShowConfirm(true)}>
            Finish &amp; review
          </Button>
        )}
      </div>

      {showConfirm && (
        <SubmitModal
          tasks={test.tasks}
          responses={responses}
          onConfirm={handleSubmit}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}
