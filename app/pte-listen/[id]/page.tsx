"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Volume2, CheckSquare, Type, AlignLeft, List, MousePointer, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPTEListeningTest } from "@/lib/tests/pte-listening-index";
import { createClient } from "@/lib/supabase/client";
import type {
  PTEListeningTask,
  PTEListeningTest,
  SummariseSpokenTextTask,
  MultipleChoiceMultiTask,
  FillBlanksListeningTask,
  HighlightCorrectSummaryTask,
  MultipleChoiceSingleTask,
  SelectMissingWordTask,
  HighlightIncorrectWordsTask,
  WriteFromDictationTask,
} from "@/lib/tests/pte-listening-types";

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildTaskList(test: PTEListeningTest): PTEListeningTask[] {
  return [
    ...test.summariseSpokenText,
    ...test.mcMulti,
    ...test.fillBlanks,
    ...test.highlightSummary,
    ...test.mcSingle,
    ...test.selectMissingWord,
    ...test.highlightIncorrect,
    ...test.writeDictation,
  ];
}

function sectionLabel(type: PTEListeningTask["type"]) {
  const map: Record<string, string> = {
    summarise_spoken_text: "Summarise Spoken Text",
    mc_multi: "Multiple Choice (Multiple)",
    fill_blanks: "Fill in the Blanks",
    highlight_summary: "Highlight Correct Summary",
    mc_single: "Multiple Choice (Single)",
    select_missing_word: "Select Missing Word",
    highlight_incorrect: "Highlight Incorrect Words",
    write_dictation: "Write from Dictation",
  };
  return map[type] ?? type;
}

function sectionIcon(type: PTEListeningTask["type"]) {
  if (type === "summarise_spoken_text") return <PenLine className="w-4 h-4" />;
  if (type === "mc_multi" || type === "mc_single") return <CheckSquare className="w-4 h-4" />;
  if (type === "fill_blanks" || type === "write_dictation") return <Type className="w-4 h-4" />;
  if (type === "highlight_summary") return <AlignLeft className="w-4 h-4" />;
  if (type === "select_missing_word") return <List className="w-4 h-4" />;
  if (type === "highlight_incorrect") return <MousePointer className="w-4 h-4" />;
  return <Volume2 className="w-4 h-4" />;
}

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// ── Audio Player ──────────────────────────────────────────────────────────────

function AudioPlayer({ audioUrl, onEnded }: { audioUrl: string; onEnded?: () => void }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !audioUrl) return;
    el.play().catch(() => {});
    setPlaying(true);
  }, [audioUrl]);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (playing) { el.pause(); setPlaying(false); }
    else { el.play(); setPlaying(true); }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl}
          onEnded={() => { setPlaying(false); setPlayed(true); onEnded?.(); }} />
      )}
      <button onClick={toggle}
        className="w-16 h-16 rounded-full bg-cyan-100 hover:bg-cyan-200 flex items-center justify-center transition">
        <Volume2 className={`w-7 h-7 ${playing ? "text-cyan-600 animate-pulse" : "text-cyan-500"}`} />
      </button>
      <p className="text-xs text-slate-400">
        {!audioUrl ? "Audio not yet generated" : playing ? "Playing audio…" : played ? "Audio complete" : "Click to play"}
      </p>
    </div>
  );
}

// ── Task Screens ──────────────────────────────────────────────────────────────

function SSTScreen({ task, onAnswer }: { task: SummariseSpokenTextTask; onAnswer: (a: string) => void }) {
  const [phase, setPhase] = useState<"audio" | "write">("audio");
  const [text, setText] = useState("");
  const words = wordCount(text);
  const onEnded = useCallback(() => setPhase("write"), []);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-sm font-semibold text-blue-700">Topic: {task.topic}</p>
        <p className="text-xs text-blue-500 mt-1">Listen to the recording, then write a summary in {task.wordMin}–{task.wordMax} words.</p>
      </div>
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      {phase === "write" && (
        <div className="flex flex-col gap-2">
          <textarea value={text} onChange={e => { setText(e.target.value); onAnswer(e.target.value); }}
            className="w-full border border-slate-300 rounded-xl p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows={6} placeholder="Write your summary here…" />
          <div className="flex justify-between text-xs text-slate-400">
            <span>Word count: <span className={words < task.wordMin || words > task.wordMax ? "text-red-500 font-semibold" : "text-green-600 font-semibold"}>{words}</span></span>
            <span>Target: {task.wordMin}–{task.wordMax} words</span>
          </div>
        </div>
      )}
    </div>
  );
}

function MCMultiScreen({ task, onAnswer }: { task: MultipleChoiceMultiTask; onAnswer: (a: string) => void }) {
  const [selected, setSelected] = useState<number[]>([]);
  const onEnded = useCallback(() => {}, []);

  function toggle(i: number) {
    const next = selected.includes(i) ? selected.filter(x => x !== i) : [...selected, i];
    setSelected(next);
    onAnswer(next.join(","));
  }

  return (
    <div className="flex flex-col gap-6">
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      <p className="text-sm font-semibold text-slate-800">{task.question}</p>
      <p className="text-xs text-slate-400">Select all correct answers.</p>
      <div className="space-y-2">
        {task.options.map((opt, i) => (
          <button key={i} onClick={() => toggle(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition ${selected.includes(i) ? "border-cyan-500 bg-cyan-50 text-cyan-900 font-medium" : "border-slate-200 hover:border-slate-300 bg-white"}`}>
            <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function FillBlanksScreen({ task, onAnswer }: { task: FillBlanksListeningTask; onAnswer: (a: string) => void }) {
  const parts = task.transcript.split("___BLANK___");
  const [values, setValues] = useState<string[]>(Array(task.answers.length).fill(""));
  const onEnded = useCallback(() => {}, []);

  function update(i: number, val: string) {
    const next = [...values];
    next[i] = val;
    setValues(next);
    onAnswer(next.join("|"));
  }

  return (
    <div className="flex flex-col gap-6">
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      <p className="text-xs text-slate-400">Fill in the blanks with the words you hear.</p>
      <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm leading-8 text-slate-800">
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < task.answers.length && (
              <input value={values[i]} onChange={e => update(i, e.target.value)}
                className="inline-block w-28 mx-1 border-b-2 border-cyan-400 bg-cyan-50 rounded px-2 py-0.5 text-sm focus:outline-none focus:border-cyan-600 text-center"
                placeholder="type here" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function HighlightSummaryScreen({ task, onAnswer }: { task: HighlightCorrectSummaryTask; onAnswer: (a: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const onEnded = useCallback(() => {}, []);

  function pick(i: number) { setSelected(i); onAnswer(String(i)); }

  return (
    <div className="flex flex-col gap-6">
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      <p className="text-sm font-semibold text-slate-800">Select the paragraph that best summarises the recording.</p>
      <div className="space-y-3">
        {task.summaries.map((s, i) => (
          <button key={i} onClick={() => pick(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm leading-relaxed transition ${selected === i ? "border-cyan-500 bg-cyan-50" : "border-slate-200 hover:border-slate-300 bg-white"}`}>
            <span className="font-semibold text-cyan-700 mr-2">{String.fromCharCode(65 + i)}.</span>{s}
          </button>
        ))}
      </div>
    </div>
  );
}

function MCSingleScreen({ task, onAnswer }: { task: MultipleChoiceSingleTask; onAnswer: (a: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const onEnded = useCallback(() => {}, []);

  function pick(i: number) { setSelected(i); onAnswer(String(i)); }

  return (
    <div className="flex flex-col gap-6">
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      <p className="text-sm font-semibold text-slate-800">{task.question}</p>
      <div className="space-y-2">
        {task.options.map((opt, i) => (
          <button key={i} onClick={() => pick(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition ${selected === i ? "border-cyan-500 bg-cyan-50 font-medium" : "border-slate-200 hover:border-slate-300 bg-white"}`}>
            <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function SelectMissingWordScreen({ task, onAnswer }: { task: SelectMissingWordTask; onAnswer: (a: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const onEnded = useCallback(() => {}, []);

  function pick(i: number) { setSelected(i); onAnswer(String(i)); }

  return (
    <div className="flex flex-col gap-6">
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      <p className="text-xs text-slate-400">The recording ends with a beep. Select the word or phrase that completes it.</p>
      <div className="space-y-2">
        {task.options.map((opt, i) => (
          <button key={i} onClick={() => pick(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm transition ${selected === i ? "border-cyan-500 bg-cyan-50 font-medium" : "border-slate-200 hover:border-slate-300 bg-white"}`}>
            <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function HighlightIncorrectScreen({ task, onAnswer }: { task: HighlightIncorrectWordsTask; onAnswer: (a: string) => void }) {
  const words = task.displayText.split(/(\s+)/);
  const [clicked, setClicked] = useState<Set<number>>(new Set());
  const wordIndexMap: number[] = [];
  let wIdx = 0;
  words.forEach(w => { if (w.trim()) wordIndexMap.push(wIdx++); else wordIndexMap.push(-1); });
  const onEnded = useCallback(() => {}, []);

  function toggleWord(globalIdx: number) {
    const next = new Set(clicked);
    if (next.has(globalIdx)) next.delete(globalIdx); else next.add(globalIdx);
    setClicked(next);
    onAnswer(Array.from(next).join(","));
  }

  let realWordIdx = -1;
  return (
    <div className="flex flex-col gap-6">
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      <p className="text-xs text-slate-400">Click on words in the text that differ from what you heard.</p>
      <div className="bg-white border border-slate-200 rounded-xl p-5 text-sm leading-8 text-slate-800">
        {words.map((w, i) => {
          if (!w.trim()) return <span key={i}>{w}</span>;
          realWordIdx++;
          const idx = realWordIdx;
          return (
            <span key={i} onClick={() => toggleWord(idx)}
              className={`cursor-pointer rounded px-0.5 transition ${clicked.has(idx) ? "bg-yellow-200 text-yellow-900 line-through" : "hover:bg-slate-100"}`}>
              {w}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function WriteDictationScreen({ task, onAnswer }: { task: WriteFromDictationTask; onAnswer: (a: string) => void }) {
  const [text, setText] = useState("");
  const [played, setPlayed] = useState(false);
  const onEnded = useCallback(() => setPlayed(true), []);

  return (
    <div className="flex flex-col gap-6">
      <AudioPlayer audioUrl={task.audioUrl} onEnded={onEnded} />
      {played && (
        <input value={text}
          onChange={e => { setText(e.target.value); onAnswer(e.target.value); }}
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Type exactly what you heard…" autoFocus />
      )}
      {!played && <p className="text-xs text-slate-400 text-center">Listen to the sentence, then type it exactly.</p>}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function PTEListenPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const test = getPTEListeningTest(id ?? "");

  const [taskIndex, setTaskIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [taskKey, setTaskKey] = useState(0);
  const [saving, setSaving] = useState(false);

  if (!test) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-slate-500 mb-4">PTE Listening test not found.</p>
        <Link href="/dashboard"><Button>Back to Dashboard</Button></Link>
      </div>
    </div>
  );

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  function pteAudioUrl(taskId: string) {
    return `${supabaseUrl}/storage/v1/object/public/listening-audio/pte-listening-audio/${test!.id}/${taskId}.mp3`;
  }

  const rawTasks = buildTaskList(test);
  const tasks = rawTasks.map(t => {
    if ("audioUrl" in t && !t.audioUrl) return { ...t, audioUrl: pteAudioUrl(t.id) };
    return t;
  });

  const task = tasks[taskIndex];
  const isLast = taskIndex === tasks.length - 1;
  const totalTasks = tasks.length;

  function handleAnswer(answer: string) {
    setAnswers(prev => ({ ...prev, [task.id]: answer }));
  }

  async function handleNext() {
    if (isLast) {
      setSaving(true);
      const score = calculateScore();
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          await supabase.from("test_attempts").insert({
            user_id: user.id,
            test_id: test!.id,
            exam: "PTE",
            score,
            total: totalTasks,
            band: null,
            result_json: { score, total: totalTasks },
          });
        }
      } catch {
        // non-fatal — still navigate to results
      }
      router.push(`/pte-listen/results/${test!.id}?score=${score}&total=${totalTasks}`);
    } else {
      setTaskIndex(i => i + 1);
      setTaskKey(k => k + 1);
    }
  }

  function calculateScore(): number {
    let correct = 0;
    for (const t of tasks) {
      const ans = answers[t.id] ?? "";
      if (t.type === "mc_single" || t.type === "highlight_summary") {
        if (parseInt(ans) === (t as MultipleChoiceSingleTask).correctIndex) correct++;
      } else if (t.type === "mc_multi") {
        const task_ = t as MultipleChoiceMultiTask;
        const selected = ans.split(",").map(Number).filter(n => !isNaN(n)).sort();
        const expected = [...task_.correctIndexes].sort();
        if (JSON.stringify(selected) === JSON.stringify(expected)) correct++;
      } else if (t.type === "select_missing_word") {
        if (parseInt(ans) === (t as SelectMissingWordTask).correctIndex) correct++;
      } else if (t.type === "fill_blanks") {
        const task_ = t as FillBlanksListeningTask;
        const typed = ans.split("|").map(s => s.trim().toLowerCase());
        const allCorrect = task_.answers.every((a, i) => typed[i] === a.toLowerCase());
        if (allCorrect) correct++;
      } else if (t.type === "write_dictation") {
        const expected = (t as WriteFromDictationTask).sentence.toLowerCase().replace(/[.,!?]/g, "");
        const typed = ans.toLowerCase().replace(/[.,!?]/g, "").trim();
        if (typed === expected.trim()) correct++;
      } else if (t.type === "highlight_incorrect") {
        const task_ = t as HighlightIncorrectWordsTask;
        const selected = ans.split(",").map(Number).filter(n => !isNaN(n)).sort();
        const expected = [...task_.incorrectIndexes].sort();
        if (JSON.stringify(selected) === JSON.stringify(expected)) correct++;
      } else if (t.type === "summarise_spoken_text") {
        if (ans.trim().split(/\s+/).length >= 50) correct++;
      }
    }
    return correct;
  }

  const sectionTasks = tasks.filter(t => t.type === task.type);
  const taskNumInSection = sectionTasks.findIndex(t => t.id === task.id) + 1;

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
              <p className="text-xs text-slate-400">{sectionLabel(task.type)} · {taskNumInSection} of {sectionTasks.length}</p>
            </div>
          </div>
          <span className="text-xs text-slate-400">{taskIndex + 1} / {totalTasks}</span>
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
          {task.type === "summarise_spoken_text" && <SSTScreen task={task as SummariseSpokenTextTask} onAnswer={handleAnswer} />}
          {task.type === "mc_multi" && <MCMultiScreen task={task as MultipleChoiceMultiTask} onAnswer={handleAnswer} />}
          {task.type === "fill_blanks" && <FillBlanksScreen task={task as FillBlanksListeningTask} onAnswer={handleAnswer} />}
          {task.type === "highlight_summary" && <HighlightSummaryScreen task={task as HighlightCorrectSummaryTask} onAnswer={handleAnswer} />}
          {task.type === "mc_single" && <MCSingleScreen task={task as MultipleChoiceSingleTask} onAnswer={handleAnswer} />}
          {task.type === "select_missing_word" && <SelectMissingWordScreen task={task as SelectMissingWordTask} onAnswer={handleAnswer} />}
          {task.type === "highlight_incorrect" && <HighlightIncorrectScreen task={task as HighlightIncorrectWordsTask} onAnswer={handleAnswer} />}
          {task.type === "write_dictation" && <WriteDictationScreen task={task as WriteFromDictationTask} onAnswer={handleAnswer} />}
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <Button onClick={handleNext} disabled={saving} className="gap-2">
            {saving ? "Finishing…" : isLast ? "Finish & Submit" : "Next →"}
          </Button>
        </div>
      </main>
    </div>
  );
}
