"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Clock, Mic, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSpeakingTest } from "@/lib/tests/speaking-index";
import { createClient } from "@/lib/supabase/client";
import { AudioRecorder } from "@/components/AudioRecorder";
import type { SpeakingResponse } from "@/lib/tests/speaking-types";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ── Screen types ──────────────────────────────────────────────────────────────

type Screen =
  | { kind: "intro" }
  | { kind: "part-intro"; part: 1 | 2 | 3; title: string; desc: string }
  | { kind: "prep"; taskCard: string; bullets: string[]; prepSec: number }
  | { kind: "speak-p1"; qIdx: number; qId: number; question: string; tip?: string; speakSec: number }
  | { kind: "speak-p2"; taskCard: string; bullets: string[]; speakSec: number }
  | { kind: "speak-p3"; qIdx: number; qId: number; question: string; speakSec: number }
  | { kind: "finish" };

// ── Countdown timer ───────────────────────────────────────────────────────────

function CountdownTimer({
  seconds,
  onExpire,
  running,
}: {
  seconds: number;
  onExpire: () => void;
  running: boolean;
}) {
  const [left, setLeft] = useState(seconds);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setLeft((t) => {
        if (t <= 1 && !doneRef.current) {
          doneRef.current = true;
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
  const warn = left < 10;

  return (
    <span
      className={cn(
        "flex items-center gap-1.5 text-2xl font-bold tabular-nums",
        warn ? "text-red-500" : "text-slate-800"
      )}
    >
      <Clock className="w-6 h-6" />
      {mm}:{ss}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SpeakPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const test = getSpeakingTest(id);

  const [screenIdx, setScreenIdx] = useState(0);
  const [recordings, setRecordings] = useState<
    Map<string, { blob: Blob; duration: number }>
  >(new Map());
  const [prepRunning, setPrepRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const attemptIdRef = useRef(crypto.randomUUID());

  // Build flat screen list from test data
  const screens = useMemo<Screen[]>(() => {
    if (!test) return [];
    const [p1, p2, p3] = test.parts;
    return [
      { kind: "intro" },
      {
        kind: "part-intro",
        part: 1,
        title: "Part 1 — Introduction & Interview",
        desc: `The examiner will ask you ${p1.questions.length} questions about familiar topics. Speak naturally and give extended answers.`,
      },
      ...p1.questions.map((q, i) => ({
        kind: "speak-p1" as const,
        qIdx: i,
        qId: q.id,
        question: q.question,
        tip: q.tip,
        speakSec: p1.speakSeconds,
      })),
      {
        kind: "part-intro",
        part: 2,
        title: "Part 2 — Individual Long Turn",
        desc: `You will be given a task card. You have ${p2.prepSeconds} seconds to prepare, then speak for up to ${Math.floor(p2.speakSeconds / 60)} minutes.`,
      },
      {
        kind: "prep",
        taskCard: p2.taskCard,
        bullets: p2.bulletPoints,
        prepSec: p2.prepSeconds,
      },
      {
        kind: "speak-p2",
        taskCard: p2.taskCard,
        bullets: p2.bulletPoints,
        speakSec: p2.speakSeconds,
      },
      {
        kind: "part-intro",
        part: 3,
        title: "Part 3 — Two-way Discussion",
        desc: `The examiner will ask ${p3.questions.length} more abstract questions related to the Part 2 topic. Give detailed, thoughtful answers.`,
      },
      ...p3.questions.map((q, i) => ({
        kind: "speak-p3" as const,
        qIdx: i,
        qId: q.id,
        question: q.question,
        speakSec: p3.speakSeconds,
      })),
      { kind: "finish" },
    ];
  }, [test]);

  const currentScreen = screens[screenIdx];

  const recordingKey = useCallback((screen: Screen): string => {
    if (screen.kind === "speak-p1") return `1-${screen.qId}`;
    if (screen.kind === "speak-p2") return "2-0";
    if (screen.kind === "speak-p3") return `3-${screen.qId}`;
    return "";
  }, []);

  const handleRecordingComplete = useCallback(
    (blob: Blob, duration: number) => {
      if (!currentScreen) return;
      const key = recordingKey(currentScreen);
      if (!key) return;
      setRecordings((prev) => new Map(prev).set(key, { blob, duration }));
    },
    [currentScreen, recordingKey]
  );

  const goNext = useCallback(() => {
    if (screenIdx < screens.length - 1) {
      setScreenIdx((i) => i + 1);
      setPrepRunning(false);
    }
  }, [screenIdx, screens.length]);

  const handlePrepExpire = useCallback(() => {
    goNext();
  }, [goNext]);

  // Auto-start prep timer when entering prep screen
  useEffect(() => {
    if (currentScreen?.kind === "prep") {
      const t = setTimeout(() => setPrepRunning(true), 300);
      return () => clearTimeout(t);
    }
  }, [currentScreen]);

  const handleFinish = useCallback(async () => {
    setSubmitting(true);
    const supabase = createClient();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      const attemptId = attemptIdRef.current;
      const responses: SpeakingResponse[] = [];

      // Upload each recording to Supabase Storage
      for (const [key, { blob, duration }] of Array.from(recordings.entries())) {
        const [partStr, qIdStr] = key.split("-");
        const partNumber = parseInt(partStr) as 1 | 2 | 3;
        const questionId = parseInt(qIdStr);
        const ext = blob.type.includes("mp4") ? "mp4" : "webm";
        const path = `${user.id}/${attemptId}/${key}.${ext}`;

        const { error: uploadErr } = await supabase.storage
          .from("speaking-recordings")
          .upload(path, blob, { contentType: blob.type, upsert: false });

        responses.push({
          partNumber,
          questionId,
          audioPath: uploadErr ? undefined : path,
          durationSeconds: duration,
        });
      }

      // Insert attempt record
      await supabase.from("speaking_attempts").insert({
        id: attemptId,
        user_id: user.id,
        test_id: test!.id,
        exam: test!.exam,
        responses,
      });

      router.push(`/speak/results/${attemptId}`);
    } catch (err) {
      console.error("Failed to submit speaking attempt:", err);
      setSubmitting(false);
    }
  }, [recordings, test, router]);

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Speaking test not found.</p>
          <Link href="/dashboard"><Button>Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  // ── Finish screen ─────────────────────────────────────────────────────────

  if (currentScreen?.kind === "finish") {
    const totalRecorded = recordings.size;
    const speakingScreens = screens.filter(
      (s) => s.kind === "speak-p1" || s.kind === "speak-p2" || s.kind === "speak-p3"
    ).length;
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-md w-full text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">All parts completed!</h2>
          <p className="text-sm text-slate-500 mb-1">
            {totalRecorded} of {speakingScreens} responses recorded
          </p>
          {totalRecorded < speakingScreens && (
            <p className="text-xs text-amber-600 mb-4 flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              Some questions were skipped — you can still submit
            </p>
          )}
          <p className="text-xs text-slate-400 mb-6">
            Your recordings will be saved to your account. You can play them back and get AI scoring on the results page.
          </p>
          <Button
            className="w-full"
            onClick={handleFinish}
            disabled={submitting}
          >
            {submitting ? "Saving recordings…" : "Submit & View Results →"}
          </Button>
        </div>
      </div>
    );
  }

  // ── Intro screen ──────────────────────────────────────────────────────────

  if (currentScreen?.kind === "intro") {
    const [p1, p2, p3] = test.parts;
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-lg w-full">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">IELTS</span>
            <span className="text-xs text-slate-500">Academic</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 mb-1">{test.title}</h1>
          <p className="text-sm text-slate-500 mb-6">~11–14 minutes • 3 parts • {p1.questions.length + 1 + p3.questions.length} responses</p>

          <div className="space-y-3 mb-6">
            {[
              { part: "Part 1", label: p1.topic, detail: `${p1.questions.length} questions · ~${Math.round(p1.questions.length * p1.speakSeconds / 60)} min` },
              { part: "Part 2", label: p2.topic, detail: `${p2.prepSeconds}s prep · ${Math.floor(p2.speakSeconds / 60)} min talk` },
              { part: "Part 3", label: p3.topic, detail: `${p3.questions.length} questions · ~${Math.round(p3.questions.length * p3.speakSeconds / 60)} min` },
            ].map(({ part, label, detail }) => (
              <div key={part} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <span className="text-xs font-bold text-cyan-600 shrink-0 mt-0.5">{part}</span>
                <div>
                  <p className="text-sm font-medium text-slate-800">{label}</p>
                  <p className="text-xs text-slate-400">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
            <p className="text-xs text-amber-700">
              <strong>Before you start:</strong> Allow microphone access when prompted. Speak clearly and at a natural pace. You can re-record any response before moving on.
            </p>
          </div>

          <Button className="w-full" onClick={goNext}>
            <Mic className="w-4 h-4 mr-2" />
            Start Test
          </Button>
        </div>
      </div>
    );
  }

  // ── Part intro screen ─────────────────────────────────────────────────────

  if (currentScreen?.kind === "part-intro") {
    const { part, title, desc } = currentScreen;
    const partColors: Record<number, string> = {
      1: "bg-cyan-50 border-cyan-200 text-cyan-800",
      2: "bg-violet-50 border-violet-200 text-violet-800",
      3: "bg-emerald-50 border-emerald-200 text-emerald-800",
    };
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-md w-full text-center">
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold mb-4", partColors[part])}>
            Part {part}
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-3">{title}</h2>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">{desc}</p>
          <Button className="w-full" onClick={goNext}>
            Begin Part {part} →
          </Button>
        </div>
      </div>
    );
  }

  // ── Prep screen (Part 2 only) ──────────────────────────────────────────────

  if (currentScreen?.kind === "prep") {
    const { taskCard, bullets, prepSec } = currentScreen;
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-bold text-slate-900">Part 2 — Preparation</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Preparation time:</span>
            <CountdownTimer seconds={prepSec} onExpire={handlePrepExpire} running={prepRunning} />
          </div>
        </header>
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-lg w-full">
            <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-3">Task Card</p>
            <p className="text-base font-semibold text-slate-900 mb-4">{taskCard}</p>
            <ul className="space-y-2 mb-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-400 text-center">
              Make notes if needed. Speaking begins automatically when time runs out.
            </p>
            <div className="mt-4 flex justify-center">
              <Button variant="outline" onClick={goNext} size="sm">
                Skip prep → Start speaking now
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Speaking screen (Part 2) ──────────────────────────────────────────────

  if (currentScreen?.kind === "speak-p2") {
    const { taskCard, bullets, speakSec } = currentScreen;
    const key = "2-0";
    const rec = recordings.get(key);
    return (
      <SpeakingScreen
        partLabel="Part 2 — Long Turn"
        accentColor="violet"
        questionNumber={null}
        questionText={taskCard}
        bullets={bullets}
        speakSec={speakSec}
        existingBlob={rec?.blob ?? null}
        onRecordingComplete={handleRecordingComplete}
        onNext={goNext}
        isLast={false}
        hasRecording={!!rec}
      />
    );
  }

  // ── Speaking screen (Part 1 & 3) ─────────────────────────────────────────

  if (currentScreen?.kind === "speak-p1" || currentScreen?.kind === "speak-p3") {
    const { qIdx, question, speakSec } = currentScreen;
    const tip = currentScreen.kind === "speak-p1" ? currentScreen.tip : undefined;
    const part = currentScreen.kind === "speak-p1" ? 1 : 3;
    const key = recordingKey(currentScreen);
    const rec = recordings.get(key);
    const partQuestions = test.parts[part === 1 ? 0 : 2];
    const totalQ = "questions" in partQuestions ? partQuestions.questions.length : 0;
    const isLastInPart = qIdx === totalQ - 1;
    const nextScreen = screens[screenIdx + 1];
    const isLast = nextScreen?.kind === "finish";

    return (
      <SpeakingScreen
        partLabel={`Part ${part} — Question ${qIdx + 1} of ${totalQ}`}
        accentColor={part === 1 ? "cyan" : "emerald"}
        questionNumber={qIdx + 1}
        questionText={question}
        tip={tip}
        speakSec={speakSec}
        existingBlob={rec?.blob ?? null}
        onRecordingComplete={handleRecordingComplete}
        onNext={goNext}
        isLast={isLast}
        hasRecording={!!rec}
        isLastInPart={isLastInPart && !isLast}
      />
    );
  }

  return null;
}

// ── Reusable speaking screen ──────────────────────────────────────────────────

function SpeakingScreen({
  partLabel,
  accentColor,
  questionNumber,
  questionText,
  bullets,
  tip,
  speakSec,
  existingBlob,
  onRecordingComplete,
  onNext,
  isLast,
  hasRecording,
  isLastInPart,
}: {
  partLabel: string;
  accentColor: "cyan" | "violet" | "emerald";
  questionNumber: number | null;
  questionText: string;
  bullets?: string[];
  tip?: string;
  speakSec: number;
  existingBlob: Blob | null;
  onRecordingComplete: (blob: Blob, duration: number) => void;
  onNext: () => void;
  isLast: boolean;
  hasRecording: boolean;
  isLastInPart?: boolean;
}) {
  const accentMap = {
    cyan: { badge: "bg-cyan-50 text-cyan-700", border: "border-cyan-200" },
    violet: { badge: "bg-violet-50 text-violet-700", border: "border-violet-200" },
    emerald: { badge: "bg-emerald-50 text-emerald-700", border: "border-emerald-200" },
  };
  const accent = accentMap[accentColor];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div>
          <p className="text-sm font-bold text-slate-900">{partLabel}</p>
          <p className="text-xs text-slate-400">
            Max speaking time: {Math.floor(speakSec / 60)}:{String(speakSec % 60).padStart(2, "0")}
          </p>
        </div>
        {hasRecording && (
          <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
            <CheckCircle className="w-3.5 h-3.5" />
            Recorded
          </div>
        )}
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 w-full max-w-2xl">
          {/* Question */}
          <div className={cn("inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4", accent.badge)}>
            {questionNumber ? `Question ${questionNumber}` : "Task Card"}
          </div>
          <p className="text-lg font-semibold text-slate-900 mb-4 leading-relaxed">{questionText}</p>

          {bullets && (
            <ul className="space-y-2 mb-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {tip && (
            <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-2.5 mb-4">
              <p className="text-xs text-amber-700"><strong>Tip:</strong> {tip}</p>
            </div>
          )}

          {/* Recorder */}
          <div className="border-t border-slate-100 pt-6 mt-2">
            <AudioRecorder
              onRecordingComplete={onRecordingComplete}
              maxSeconds={speakSec}
              existingBlob={existingBlob}
            />
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-slate-200 px-6 py-4 flex justify-end">
        <Button
          onClick={onNext}
          disabled={!hasRecording}
          className={cn(!hasRecording && "opacity-50 cursor-not-allowed")}
        >
          {isLast ? "Finish Test →" : isLastInPart ? "Continue to next part →" : "Next question →"}
        </Button>
      </div>
    </div>
  );
}
