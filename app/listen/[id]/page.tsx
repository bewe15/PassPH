"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft, ChevronRight, Clock, Play, Pause,
  Volume2, FileText, CheckCircle, XCircle, AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getListeningTest, buildListeningResult } from "@/lib/tests/listening-index";
import { createClient } from "@/lib/supabase/client";
import type { ListeningAnswerMap, ListeningQuestion } from "@/lib/tests/listening-types";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ── Timer ─────────────────────────────────────────────────────────────────────

function Timer({ seconds, onExpire }: { seconds: number; onExpire: () => void }) {
  const [left, setLeft] = useState(seconds);
  const expiredRef = useRef(false);

  useEffect(() => {
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
  }, [onExpire]);

  const mm = Math.floor(left / 60).toString().padStart(2, "0");
  const ss = (left % 60).toString().padStart(2, "0");
  const warn = left < 300;

  return (
    <span className={cn("flex items-center gap-1.5 text-sm font-bold tabular-nums", warn ? "text-red-500" : "text-slate-700")}>
      <Clock className="w-4 h-4" /> {mm}:{ss}
    </span>
  );
}

// ── Audio Player ──────────────────────────────────────────────────────────────

function AudioPlayer({ audioUrl, transcript }: { audioUrl: string; transcript?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const hasAudio = !!audioUrl && !audioError;

  function togglePlay() {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  }

  function formatTime(s: number) {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  }

  return (
    <div className="bg-slate-900 rounded-xl p-5 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
          <Volume2 className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Audio Recording</p>
          <p className="text-slate-400 text-xs">
            {hasAudio ? "In real IELTS, audio plays once only." : "Audio coming soon — read the transcript below to practice."}
          </p>
        </div>
      </div>

      {hasAudio ? (
        <>
          <audio
            ref={audioRef}
            src={audioUrl}
            onTimeUpdate={() => setProgress(audioRef.current?.currentTime ?? 0)}
            onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
            onEnded={() => setPlaying(false)}
            onError={() => setAudioError(true)}
          />
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center transition shrink-0"
            >
              {playing ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
            </button>
            <div className="flex-1">
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-cyan-500 rounded-full transition-all"
                  style={{ width: duration ? `${(progress / duration) * 100}%` : "0%" }}
                />
              </div>
            </div>
            <span className="text-slate-400 text-xs tabular-nums shrink-0">
              {formatTime(progress)} / {formatTime(duration)}
            </span>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <p className="text-amber-300 text-sm">Audio not yet available for this test. Use the transcript below to practice.</p>
        </div>
      )}

      {transcript && (
        <div className="mt-4">
          <button
            onClick={() => setShowTranscript((v) => !v)}
            className="flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm transition"
          >
            <FileText className="w-4 h-4" />
            {showTranscript ? "Hide transcript" : "Show transcript"}
          </button>
          {showTranscript && (
            <div className="mt-3 bg-slate-800 rounded-lg p-4 max-h-64 overflow-y-auto">
              <pre className="text-slate-300 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                {transcript.trim()}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Question Components ───────────────────────────────────────────────────────

function FillBlankQuestion({
  q, answer, onChange,
}: { q: ListeningQuestion; answer: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-3 border-b border-slate-100 last:border-0">
      <span className="text-xs font-bold text-cyan-600 bg-cyan-50 rounded px-2 py-0.5 shrink-0">
        {q.id}
      </span>
      {q.before && <span className="text-sm text-slate-700">{q.before}</span>}
      <input
        type="text"
        value={answer}
        onChange={(e) => onChange(e.target.value)}
        placeholder="your answer"
        className="border border-slate-300 rounded px-3 py-1.5 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      {q.after && <span className="text-sm text-slate-700">{q.after}</span>}
    </div>
  );
}

function MCQuestion({
  q, answer, onChange,
}: { q: ListeningQuestion; answer: string; onChange: (v: string) => void }) {
  return (
    <div className="py-3 border-b border-slate-100 last:border-0">
      <div className="flex gap-2 mb-3">
        <span className="text-xs font-bold text-cyan-600 bg-cyan-50 rounded px-2 py-0.5 shrink-0 mt-0.5">
          {q.id}
        </span>
        <p className="text-sm font-medium text-slate-900">{q.stem}</p>
      </div>
      <div className="space-y-2 ml-8">
        {q.options?.map((opt) => (
          <label key={opt.label} className="flex items-start gap-2 cursor-pointer group">
            <input
              type="radio"
              name={`q-${q.id}`}
              value={opt.label}
              checked={answer === opt.label}
              onChange={() => onChange(opt.label)}
              className="mt-0.5 accent-cyan-500"
            />
            <span className="text-sm text-slate-700 group-hover:text-slate-900 transition">
              <span className="font-semibold">{opt.label}.</span> {opt.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function MCMultipleQuestion({
  q, answer, onChange,
}: { q: ListeningQuestion; answer: string; onChange: (v: string) => void }) {
  let selected: string[] = [];
  try { selected = JSON.parse(answer || "[]"); } catch { /* empty */ }

  function toggle(label: string) {
    const next = selected.includes(label)
      ? selected.filter((s) => s !== label)
      : selected.length < (q.pickCount ?? 2)
        ? [...selected, label]
        : selected;
    onChange(JSON.stringify(next));
  }

  return (
    <div className="py-3 border-b border-slate-100 last:border-0">
      <div className="flex gap-2 mb-1">
        <span className="text-xs font-bold text-cyan-600 bg-cyan-50 rounded px-2 py-0.5 shrink-0 mt-0.5">
          {q.id}
        </span>
        <p className="text-sm font-medium text-slate-900">{q.stem}</p>
      </div>
      <p className="text-xs text-slate-400 ml-8 mb-3">Choose {q.pickCount ?? 2} answers</p>
      <div className="space-y-2 ml-8">
        {q.options?.map((opt) => {
          const checked = selected.includes(opt.label);
          return (
            <label key={opt.label} className="flex items-start gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggle(opt.label)}
                className="mt-0.5 accent-cyan-500"
              />
              <span className="text-sm text-slate-700 group-hover:text-slate-900 transition">
                <span className="font-semibold">{opt.label}.</span> {opt.text}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

// ── Submit Modal ──────────────────────────────────────────────────────────────

function SubmitModal({
  answered, total, onConfirm, onCancel,
}: { answered: number; total: number; onConfirm: () => void; onCancel: () => void }) {
  const unanswered = total - answered;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">Submit Listening Test?</h3>
        {unanswered > 0 ? (
          <p className="text-slate-500 text-sm mb-6">
            You have <span className="font-semibold text-red-500">{unanswered} unanswered question{unanswered !== 1 ? "s" : ""}</span>.
            Unanswered questions will be marked incorrect.
          </p>
        ) : (
          <p className="text-slate-500 text-sm mb-6">All {total} questions answered. Ready to submit?</p>
        )}
        <div className="flex gap-3">
          <Button onClick={onConfirm} className="flex-1">Submit</Button>
          <Button onClick={onCancel} variant="outline" className="flex-1">Keep going</Button>
        </div>
      </div>
    </div>
  );
}

// ── Results View ──────────────────────────────────────────────────────────────

function getBandColor(band: number) {
  if (band >= 7.5) return "text-green-500";
  if (band >= 6.5) return "text-cyan-500";
  if (band >= 5.5) return "text-yellow-500";
  return "text-red-400";
}

function ResultsView({ result, mockExamId }: { result: ReturnType<typeof buildListeningResult>; mockExamId?: string | null }) {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Score card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">
            {mockExamId ? "Mock Exam — Listening Complete" : "IELTS Listening Result"}
          </p>
          <div className={`text-7xl font-extrabold mb-2 ${getBandColor(result.band)}`}>
            {result.band}
          </div>
          <p className="text-slate-500 text-sm mb-4">Band Score</p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div>
              <p className="font-bold text-slate-900 text-lg">{result.score}/{result.total}</p>
              <p className="text-slate-400">Correct</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="font-bold text-slate-900 text-lg">{result.timeTaken}</p>
              <p className="text-slate-400">Time taken</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="font-bold text-slate-900 text-lg">{result.date}</p>
              <p className="text-slate-400">Date</p>
            </div>
          </div>
        </div>

        {/* Question breakdown */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-bold text-slate-900">Answer Review</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {result.questions.map((q) => (
              <div key={q.id} className="px-6 py-4">
                <div className="flex items-start gap-3">
                  {q.isCorrect
                    ? <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    : <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  }
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-400">Q{q.id}</span>
                      <p className="text-sm text-slate-700 truncate">{q.text}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="text-slate-500">
                        Your answer: <span className={q.isCorrect ? "text-green-600 font-medium" : "text-red-500 font-medium"}>{q.given}</span>
                      </span>
                      {!q.isCorrect && (
                        <span className="text-slate-500">
                          Correct: <span className="text-green-600 font-medium">{q.correct}</span>
                        </span>
                      )}
                    </div>
                    {!q.isCorrect && (
                      <p className="text-xs text-slate-400 mt-1">{q.explanation}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {mockExamId ? (
          <Link href={`/mock/${mockExamId}`} className="block">
            <Button className="w-full gap-2">Continue Mock Exam →</Button>
          </Link>
        ) : (
          <div className="flex gap-3">
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full" variant="outline">Back to Dashboard</Button>
            </Link>
            <Link href="/listen/ielts-listening-1" className="flex-1">
              <Button className="w-full">Try Again</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function ListenPage() {
  const params       = useParams();
  useRouter();
  const searchParams = useSearchParams();
  const mockExamId   = searchParams.get("mock");
  const id           = Array.isArray(params.id) ? params.id[0] : params.id;

  const test    = getListeningTest(id ?? "");
  const [currentPart, setCurrentPart] = useState(0);
  const [answers, setAnswers]         = useState<ListeningAnswerMap>({});
  const [showSubmit, setShowSubmit]   = useState(false);
  const [result, setResult]           = useState<ReturnType<typeof buildListeningResult> | null>(null);
  const [saving, setSaving]           = useState(false);
  const startTime = useRef(Date.now());

  const handleExpire = useCallback(() => setShowSubmit(true), []);

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Listening test not found.</p>
          <Link href="/dashboard"><Button>Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  if (result) return <ResultsView result={result} mockExamId={mockExamId} />;

  const part = test.parts[currentPart];
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const partAudioUrl =
    part.audioUrl ||
    `${supabaseUrl}/storage/v1/object/public/listening-audio/${test.id}/part-${part.part}.mp3`;
  const totalQuestions = test.parts.reduce((s, p) => s + p.questions.length, 0);
  const answeredCount  = Object.keys(answers).length;
  const isLastPart     = currentPart === test.parts.length - 1;

  async function handleSubmit() {
    setSaving(true);
    const timeTaken = Math.round((Date.now() - startTime.current) / 1000);
    const built = buildListeningResult(test!, answers, timeTaken);

    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("test_attempts").insert({
          user_id:     user.id,
          test_id:     test!.id,
          exam:        test!.exam,
          score:       built.score,
          total:       built.total,
          band:        built.band,
          time_taken:  built.timeTaken,
          result_json: built,
          ...(mockExamId ? { mock_exam_id: mockExamId } : {}),
        });
        await supabase.rpc("increment_tests_used", { uid: user.id });
      }
    } catch (e) {
      console.error("Save error:", e);
    }

    setSaving(false);
    setResult(built);
    setShowSubmit(false);
  }

  function setAnswer(qId: number, value: string) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 transition">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm font-bold text-slate-900">{test.title}</p>
              <p className="text-xs text-slate-400">Part {part.part} of 4 — {part.questionRange}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 hidden sm:block">
              {answeredCount}/{totalQuestions} answered
            </span>
            <Timer seconds={test.totalSeconds} onExpire={handleExpire} />
          </div>
        </div>
      </header>

      {/* Part progress bar */}
      <div className="bg-white border-b border-slate-100 px-6 py-2">
        <div className="max-w-4xl mx-auto flex gap-2">
          {test.parts.map((p, i) => (
            <button
              key={p.part}
              onClick={() => setCurrentPart(i)}
              className={cn(
                "flex-1 h-1.5 rounded-full transition-all",
                i === currentPart ? "bg-cyan-500" : i < currentPart ? "bg-cyan-200" : "bg-slate-200"
              )}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto flex gap-2 mt-1">
          {test.parts.map((p, i) => (
            <button
              key={p.part}
              onClick={() => setCurrentPart(i)}
              className={cn(
                "flex-1 text-center text-xs transition",
                i === currentPart ? "text-cyan-600 font-semibold" : "text-slate-400"
              )}
            >
              Part {p.part}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Context */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-6">
          <p className="text-sm font-semibold text-blue-800 mb-1">Part {part.part}: {part.title}</p>
          <p className="text-sm text-blue-600">{part.context}</p>
        </div>

        {/* Audio player */}
        <AudioPlayer audioUrl={partAudioUrl} transcript={part.transcript} />

        {/* Questions */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
              {part.questionRange}
            </p>
            <p className="text-sm text-slate-700 whitespace-pre-line">{part.instructions}</p>
          </div>
          <div className="px-6 py-2">
            {part.questions.map((q) => {
              const ans = answers[q.id] ?? "";
              if (q.type === "fill_blank") {
                return (
                  <FillBlankQuestion key={q.id} q={q} answer={ans} onChange={(v) => setAnswer(q.id, v)} />
                );
              }
              if (q.type === "mc_multiple") {
                return (
                  <MCMultipleQuestion key={q.id} q={q} answer={ans} onChange={(v) => setAnswer(q.id, v)} />
                );
              }
              return (
                <MCQuestion key={q.id} q={q} answer={ans} onChange={(v) => setAnswer(q.id, v)} />
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentPart((p) => Math.max(0, p - 1))}
            disabled={currentPart === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Part
          </Button>

          {isLastPart ? (
            <Button onClick={() => setShowSubmit(true)} className="gap-2">
              Submit Test
            </Button>
          ) : (
            <Button onClick={() => setCurrentPart((p) => p + 1)} className="gap-2">
              Next Part <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </main>

      {/* Submit modal */}
      {showSubmit && (
        <SubmitModal
          answered={answeredCount}
          total={totalQuestions}
          onConfirm={handleSubmit}
          onCancel={() => setShowSubmit(false)}
        />
      )}

      {/* Saving overlay */}
      {saving && (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
          <p className="text-slate-600 font-medium">Saving your results…</p>
        </div>
      )}
    </div>
  );
}
