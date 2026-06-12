"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Mic, Volume2, BookOpen, Image as ImageIcon, RefreshCw, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPTESpeakingTest } from "@/lib/tests/pte-speaking-index";
import { createClient } from "@/lib/supabase/client";
import type {
  PTESpeakingTest,
  ReadAloudTask,
  RepeatSentenceTask,
  DescribeImageTask,
  RetellLectureTask,
  AnswerShortTask,
  PTETask,
} from "@/lib/tests/pte-speaking-types";

// ── Helpers ───────────────────────────────────────────────────────────────────

function cn(...c: (string | false | undefined)[]) { return c.filter(Boolean).join(" "); }

function buildTaskList(test: PTESpeakingTest): PTETask[] {
  return [
    ...test.readAloud,
    ...test.repeatSentence,
    ...test.describeImage,
    ...test.retellLecture,
    ...test.answerShort,
  ];
}

function sectionLabel(type: PTETask["type"]) {
  const map: Record<string, string> = {
    read_aloud: "Read Aloud",
    repeat_sentence: "Repeat Sentence",
    describe_image: "Describe Image",
    retell_lecture: "Re-tell Lecture",
    answer_short: "Answer Short Question",
  };
  return map[type] ?? type;
}

function sectionIcon(type: PTETask["type"]) {
  if (type === "read_aloud") return <BookOpen className="w-4 h-4" />;
  if (type === "describe_image") return <ImageIcon className="w-4 h-4" />;
  return <Volume2 className="w-4 h-4" />;
}

// ── Countdown ─────────────────────────────────────────────────────────────────

function Countdown({ seconds, label, onDone, color = "cyan" }: {
  seconds: number; label: string; onDone: () => void; color?: string;
}) {
  const [left, setLeft] = useState(seconds);
  const doneRef = useRef(false);

  useEffect(() => {
    setLeft(seconds);
    doneRef.current = false;
    const id = setInterval(() => {
      setLeft((t) => {
        if (t <= 1 && !doneRef.current) {
          doneRef.current = true;
          clearInterval(id);
          onDone();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [seconds, onDone]);

  const pct = ((seconds - left) / seconds) * 100;
  const ring = color === "amber" ? "stroke-amber-400" : "stroke-cyan-400";
  const text = color === "amber" ? "text-amber-600" : "text-cyan-600";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#e2e8f0" strokeWidth="6" />
          <circle cx="40" cy="40" r="34" fill="none" className={ring} strokeWidth="6"
            strokeDasharray={`${2 * Math.PI * 34}`}
            strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`}
            strokeLinecap="round" />
        </svg>
        <span className={cn("absolute inset-0 flex items-center justify-center text-2xl font-bold tabular-nums", text)}>{left}</span>
      </div>
      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
}

// ── Audio Player for Repeat Sentence / Answer Short ───────────────────────────

function TaskAudioPlayer({ audioUrl, onEnded }: { audioUrl: string; onEnded: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !audioUrl) return;
    el.play().then(() => setPlaying(true)).catch(() => {});
  }, [audioUrl]);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (playing) { el.pause(); setPlaying(false); }
    else { el.play(); setPlaying(true); }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <audio ref={audioRef} src={audioUrl}
        onEnded={() => { setPlaying(false); setDone(true); onEnded(); }}
      />
      <button onClick={toggle}
        className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-400 flex items-center justify-center transition shadow-md">
        {playing ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-0.5" />}
      </button>
      {done && <p className="text-xs text-green-600 font-medium">Audio complete — prepare to speak</p>}
      {!audioUrl && <p className="text-sm text-amber-600 bg-amber-50 rounded-lg px-4 py-2">Audio not yet generated. Please generate audio from the admin panel first.</p>}
    </div>
  );
}

// ── Recorder ──────────────────────────────────────────────────────────────────

function Recorder({ seconds, onRecorded }: { seconds: number; onRecorded: (blob: Blob) => void }) {
  const [state, setState] = useState<"idle" | "recording" | "done">("idle");
  const [timeLeft, setTimeLeft] = useState(seconds);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    startRecording();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mr = new MediaRecorder(stream);
      mediaRef.current = mr;
      chunksRef.current = [];
      mr.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        onRecorded(blob);
        setState("done");
        stream.getTracks().forEach((t) => t.stop());
      };
      mr.start();
      setState("recording");
      setTimeLeft(seconds);
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current!);
            mr.stop();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    } catch {
      setState("done");
    }
  }

  function stopEarly() {
    if (timerRef.current) clearInterval(timerRef.current);
    mediaRef.current?.stop();
  }

  const pct = ((seconds - timeLeft) / seconds) * 100;

  return (
    <div className="flex flex-col items-center gap-4">
      {state === "recording" && (
        <>
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="42" fill="none" stroke="#fecaca" strokeWidth="6" />
              <circle cx="48" cy="48" r="42" fill="none" stroke="#ef4444" strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
                strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Mic className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-xl font-bold text-red-600 tabular-nums">{timeLeft}s</span>
            </div>
          </div>
          <p className="text-sm text-red-600 font-medium">Recording… speak now</p>
          <button onClick={stopEarly} className="text-xs text-slate-400 hover:text-slate-600 underline">Stop early</button>
        </>
      )}
      {state === "done" && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <Mic className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-sm text-green-600 font-medium">Recording saved</p>
        </div>
      )}
    </div>
  );
}

// ── Task Screens ──────────────────────────────────────────────────────────────

type Phase = "intro" | "prep" | "audio" | "record" | "done";

function ReadAloudScreen({ task, onDone }: { task: ReadAloudTask; onDone: (blob: Blob) => void }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const goRecord = useCallback(() => setPhase("record"), []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 max-w-2xl w-full">
        <p className="text-sm font-semibold text-blue-700 mb-3">Read the following text aloud:</p>
        <p className="text-base text-slate-800 leading-relaxed">{task.text}</p>
      </div>

      {phase === "intro" && (
        <Button onClick={() => setPhase("prep")} className="gap-2">
          <Mic className="w-4 h-4" /> Begin Preparation
        </Button>
      )}
      {phase === "prep" && (
        <Countdown seconds={task.prepSeconds} label="Preparation Time" color="amber" onDone={goRecord} />
      )}
      {phase === "record" && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-slate-700">Read the text aloud now</p>
          <Recorder seconds={task.speakSeconds} onRecorded={(b) => { onDone(b); setPhase("done"); }} />
        </div>
      )}
      {phase === "done" && <p className="text-sm text-green-600 font-semibold">Response recorded ✓</p>}
    </div>
  );
}

function RepeatSentenceScreen({ task, onDone }: { task: RepeatSentenceTask; onDone: (blob: Blob) => void }) {
  const [phase, setPhase] = useState<Phase>("audio");
  const goRecord = useCallback(() => { setTimeout(() => setPhase("record"), 1000); }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-slate-500 text-center">Listen to the sentence, then repeat it exactly.</p>

      {phase === "audio" && (
        <TaskAudioPlayer audioUrl={task.audioUrl} onEnded={goRecord} />
      )}
      {phase === "record" && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-slate-700">Repeat the sentence now</p>
          <Recorder seconds={task.speakSeconds} onRecorded={(b) => { onDone(b); setPhase("done"); }} />
        </div>
      )}
      {phase === "done" && <p className="text-sm text-green-600 font-semibold">Response recorded ✓</p>}
    </div>
  );
}

function DescribeImageScreen({ task, onDone }: { task: DescribeImageTask; onDone: (blob: Blob) => void }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [showPoints, setShowPoints] = useState(false);
  const goRecord = useCallback(() => setPhase("record"), []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-white border border-slate-200 rounded-xl p-4 w-full max-w-xl shadow-sm">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 text-center">{task.title}</p>
        <div dangerouslySetInnerHTML={{ __html: task.svgContent }} className="w-full" />
      </div>

      {phase === "intro" && (
        <Button onClick={() => setPhase("prep")} className="gap-2">
          <Mic className="w-4 h-4" /> Begin Preparation
        </Button>
      )}
      {phase === "prep" && (
        <Countdown seconds={task.prepSeconds} label="Preparation Time" color="amber" onDone={goRecord} />
      )}
      {phase === "record" && (
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="text-sm font-semibold text-slate-700">Describe the image now</p>
          <Recorder seconds={task.speakSeconds} onRecorded={(b) => { onDone(b); setPhase("done"); }} />
        </div>
      )}
      {phase === "done" && (
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="text-sm text-green-600 font-semibold">Response recorded ✓</p>
          <button onClick={() => setShowPoints((v) => !v)} className="text-xs text-cyan-600 underline">
            {showPoints ? "Hide" : "Show"} key points to cover
          </button>
          {showPoints && (
            <ul className="text-sm text-slate-600 space-y-1 bg-slate-50 rounded-lg p-3 w-full max-w-md">
              {task.keyPoints.map((p, i) => <li key={i} className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">•</span>{p}</li>)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function RetellLectureScreen({ task, onDone }: { task: RetellLectureTask; onDone: (blob: Blob) => void }) {
  const [phase, setPhase] = useState<Phase>("audio");
  const [showPoints, setShowPoints] = useState(false);
  const goPrep = useCallback(() => setPhase("prep"), []);
  const goRecord = useCallback(() => setPhase("record"), []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-3 w-full max-w-lg">
        <p className="text-sm font-semibold text-blue-700">Topic: {task.topic}</p>
        <p className="text-xs text-blue-500 mt-1">Listen to the lecture, then retell it in your own words.</p>
      </div>

      {phase === "audio" && (
        <TaskAudioPlayer audioUrl={task.audioUrl} onEnded={goPrep} />
      )}
      {phase === "prep" && (
        <Countdown seconds={task.prepSeconds} label="Preparation Time" color="amber" onDone={goRecord} />
      )}
      {phase === "record" && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-slate-700">Retell the lecture now</p>
          <Recorder seconds={task.speakSeconds} onRecorded={(b) => { onDone(b); setPhase("done"); }} />
        </div>
      )}
      {phase === "done" && (
        <div className="flex flex-col items-center gap-3 w-full">
          <p className="text-sm text-green-600 font-semibold">Response recorded ✓</p>
          <button onClick={() => setShowPoints((v) => !v)} className="text-xs text-cyan-600 underline">
            {showPoints ? "Hide" : "Show"} key points
          </button>
          {showPoints && (
            <ul className="text-sm text-slate-600 space-y-1 bg-slate-50 rounded-lg p-3 w-full max-w-md">
              {task.keyPoints.map((p, i) => <li key={i} className="flex items-start gap-2"><span className="text-cyan-500 mt-0.5">•</span>{p}</li>)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function AnswerShortScreen({ task, onDone }: { task: AnswerShortTask; onDone: (blob: Blob) => void }) {
  const [phase, setPhase] = useState<Phase>("audio");
  const [showAnswer, setShowAnswer] = useState(false);
  const goRecord = useCallback(() => { setTimeout(() => setPhase("record"), 500); }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-slate-500 text-center">Listen to the question and give a short answer (1–3 words).</p>

      {phase === "audio" && (
        <TaskAudioPlayer audioUrl={task.audioUrl} onEnded={goRecord} />
      )}
      {phase === "record" && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-slate-700">Answer now</p>
          <Recorder seconds={task.speakSeconds} onRecorded={(b) => { onDone(b); setPhase("done"); }} />
        </div>
      )}
      {phase === "done" && (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-green-600 font-semibold">Response recorded ✓</p>
          <button onClick={() => setShowAnswer((v) => !v)} className="text-xs text-cyan-600 underline">
            {showAnswer ? "Hide" : "Show"} expected answer
          </button>
          {showAnswer && (
            <p className="text-sm font-semibold text-slate-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
              {task.expectedAnswer}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function PTESpeakPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const test = getPTESpeakingTest(id ?? "");

  const [taskIndex, setTaskIndex] = useState(0);
  const [recordings, setRecordings] = useState<Record<string, Blob>>({});
  const [saving, setSaving] = useState(false);
  const [taskKey, setTaskKey] = useState(0);
  const attemptIdRef = useRef<string | null>(null);

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 mb-4">PTE Speaking test not found.</p>
          <Link href="/dashboard"><Button>Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  function pteAudioUrl(taskId: string, testId: string) {
    return `${supabaseUrl}/storage/v1/object/public/listening-audio/pte-audio/${testId}/${taskId}.mp3`;
  }

  const rawTasks = buildTaskList(test);
  const tasks = rawTasks.map((t) => {
    if ((t.type === "repeat_sentence" || t.type === "retell_lecture" || t.type === "answer_short") && !t.audioUrl) {
      return { ...t, audioUrl: pteAudioUrl(t.id, test.id) };
    }
    return t;
  });
  const task = tasks[taskIndex];
  const isLast = taskIndex === tasks.length - 1;

  function handleRecorded(blob: Blob) {
    setRecordings((prev) => ({ ...prev, [task.id]: blob }));
  }

  async function handleNext() {
    if (isLast) {
      await finishExam();
    } else {
      setTaskIndex((i) => i + 1);
      setTaskKey((k) => k + 1);
    }
  }

  async function finishExam() {
    setSaving(true);
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      const { data: attempt } = await supabase.from("speaking_attempts").insert({
        user_id: user.id,
        test_id: test!.id,
        responses: {},
      }).select("id").single();

      if (!attempt) { setSaving(false); return; }
      attemptIdRef.current = attempt.id;

      const responsePaths: Record<string, string> = {};
      for (const [taskId, blob] of Object.entries(recordings)) {
        const path = `${user.id}/${attempt.id}/${taskId}.webm`;
        await supabase.storage.from("speaking-recordings").upload(path, blob, { contentType: "audio/webm", upsert: true });
        responsePaths[taskId] = path;
      }

      await supabase.from("speaking_attempts").update({ responses: responsePaths }).eq("id", attempt.id);

      router.push(`/pte-speak/results/${attempt.id}`);
    } catch (e) {
      console.error(e);
      setSaving(false);
    }
  }

  const hasRecording = !!recordings[task.id];
  const totalTasks = tasks.length;
  const sectionTasks = tasks.filter((t) => t.type === task.type);
  const taskNumInSection = sectionTasks.findIndex((t) => t.id === task.id) + 1;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm font-bold text-slate-900">{test.title}</p>
              <p className="text-xs text-slate-400">
                {sectionLabel(task.type)} · {taskNumInSection} of {sectionTasks.length}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>{taskIndex + 1} / {totalTasks}</span>
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-white border-b border-slate-100 px-6 py-2">
        <div className="max-w-3xl mx-auto">
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 rounded-full transition-all"
              style={{ width: `${((taskIndex + 1) / totalTasks) * 100}%` }} />
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Section badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold">
            {sectionIcon(task.type)}
            {sectionLabel(task.type)}
          </div>
        </div>

        {/* Task */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-6" key={taskKey}>
          {task.type === "read_aloud" && (
            <ReadAloudScreen task={task as ReadAloudTask} onDone={handleRecorded} />
          )}
          {task.type === "repeat_sentence" && (
            <RepeatSentenceScreen task={task as RepeatSentenceTask} onDone={handleRecorded} />
          )}
          {task.type === "describe_image" && (
            <DescribeImageScreen task={task as DescribeImageTask} onDone={handleRecorded} />
          )}
          {task.type === "retell_lecture" && (
            <RetellLectureScreen task={task as RetellLectureTask} onDone={handleRecorded} />
          )}
          {task.type === "answer_short" && (
            <AnswerShortScreen task={task as AnswerShortTask} onDone={handleRecorded} />
          )}
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <Button onClick={handleNext} disabled={!hasRecording || saving} className="gap-2">
            <RefreshCw className={cn("w-4 h-4", saving && "animate-spin")} />
            {saving ? "Saving…" : isLast ? "Finish & Submit" : "Next Task →"}
          </Button>
        </div>
      </main>

      {saving && (
        <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-50">
          <p className="text-slate-600 font-medium">Saving your responses…</p>
        </div>
      )}
    </div>
  );
}
