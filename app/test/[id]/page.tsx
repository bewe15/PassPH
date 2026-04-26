"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Clock, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTest, buildResult } from "@/lib/tests/index";
import { createClient } from "@/lib/supabase/client";
import type {
  AnyTest, IELTSTest, PTETest, IELTSPassage, Section, QuestionItem,
  PTETask, AnswerMap,
} from "@/lib/tests/types";

// ── Helpers ───────────────────────────────────────────────────────────────────

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Collect all IELTS question IDs in order across all passages
function allIELTSIds(test: IELTSTest): number[] {
  return test.passages.flatMap((p) => p.sections.flatMap((s) => s.questions.map((q) => q.id)));
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
  return (
    <span className={cn("flex items-center gap-1.5 text-sm font-bold tabular-nums", left < 300 ? "text-red-500" : "text-slate-700")}>
      <Clock className="w-4 h-4" /> {mm}:{ss}
    </span>
  );
}

// ── Submit Modal ──────────────────────────────────────────────────────────────

function SubmitModal({
  answered, total, onConfirm, onCancel,
}: { answered: number; total: number; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl">
        <h3 className="font-bold text-slate-900 text-lg mb-2">Submit test?</h3>
        <p className="text-sm text-slate-500 mb-1">
          You have answered <strong>{answered}</strong> of <strong>{total}</strong> questions.
        </p>
        {answered < total && (
          <p className="text-sm text-amber-600 mb-4">
            {total - answered} question{total - answered > 1 ? "s" : ""} still unanswered.
          </p>
        )}
        <div className="flex gap-3 mt-5">
          <Button variant="outline" className="flex-1" onClick={onCancel}>Keep going</Button>
          <Button className="flex-1" onClick={onConfirm}>Submit now</Button>
        </div>
      </div>
    </div>
  );
}

// ── Question Renderers ────────────────────────────────────────────────────────

function PillOption({
  label, selected, onClick,
}: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-3 rounded-lg text-sm border transition",
        selected
          ? "border-cyan-500 bg-cyan-50 text-cyan-800 font-medium"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
      )}
    >
      {label}
    </button>
  );
}

// True/False/Not Given or Yes/No/Not Given
function TFNGRenderer({
  q, answer, setAnswer, labels,
}: { q: QuestionItem; answer: string; setAnswer: (v: string) => void; labels: string[] }) {
  return (
    <div>
      <p className="text-sm text-slate-800 font-medium mb-4 leading-relaxed">{q.statement}</p>
      <div className="space-y-2">
        {labels.map((l) => (
          <PillOption key={l} label={l} selected={answer === l} onClick={() => setAnswer(l)} />
        ))}
      </div>
    </div>
  );
}

// Multiple Choice Single
function MCSingleRenderer({
  q, answer, setAnswer,
}: { q: QuestionItem; answer: string; setAnswer: (v: string) => void }) {
  return (
    <div>
      <p className="text-sm text-slate-800 font-medium mb-4 leading-relaxed">{q.stem}</p>
      <div className="space-y-2">
        {(q.options ?? []).map((opt) => (
          <PillOption
            key={opt.label}
            label={`${opt.label}. ${opt.text}`}
            selected={answer === opt.label}
            onClick={() => setAnswer(opt.label)}
          />
        ))}
      </div>
    </div>
  );
}

// Multiple Choice Multiple
function MCMultipleRenderer({
  q, answer, setAnswer,
}: { q: QuestionItem; answer: string; setAnswer: (v: string) => void }) {
  let selected: string[] = [];
  try { selected = JSON.parse(answer || "[]"); } catch { /* empty */ }

  function toggle(label: string) {
    const next = selected.includes(label)
      ? selected.filter((x) => x !== label)
      : selected.length < (q.pickCount ?? 2) ? [...selected, label] : selected;
    setAnswer(JSON.stringify(next));
  }

  return (
    <div>
      <p className="text-sm text-slate-800 font-medium mb-1 leading-relaxed">{q.stem}</p>
      <p className="text-xs text-slate-400 mb-4">Select {q.pickCount ?? 2} answers. ({selected.length}/{q.pickCount ?? 2} selected)</p>
      <div className="space-y-2">
        {(q.options ?? []).map((opt) => {
          const sel = selected.includes(opt.label);
          return (
            <button
              key={opt.label}
              onClick={() => toggle(opt.label)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg text-sm border transition flex items-center gap-3",
                sel ? "border-cyan-500 bg-cyan-50 text-cyan-800" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              )}
            >
              <span className={cn("w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center",
                sel ? "border-cyan-500 bg-cyan-500" : "border-slate-300"
              )}>
                {sel && <span className="text-white text-xs">✓</span>}
              </span>
              {opt.label}. {opt.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Matching Headings — renders all questions in the section together
function MatchHeadingsRenderer({
  section, answers, setAnswer,
}: { section: Section; answers: AnswerMap; setAnswer: (id: number, v: string) => void }) {
  const headings = section.headings ?? [];
  return (
    <div>
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-5">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">List of Headings</p>
        <ul className="space-y-1.5">
          {headings.map((h) => (
            <li key={h.label} className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">{h.label}.</span> {h.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        {section.questions.map((q) => {
          const val = answers[q.id] ?? "";
          return (
            <div key={q.id} className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-700 w-28 shrink-0">Q{q.id} — Para {q.paragraph}</span>
              <select
                value={val}
                onChange={(e) => setAnswer(q.id, e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">Select heading…</option>
                {headings.map((h) => (
                  <option key={h.label} value={h.label}>{h.label}. {h.text}</option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Matching Information
function MatchInfoRenderer({
  section, answers, setAnswer,
}: { section: Section; answers: AnswerMap; setAnswer: (id: number, v: string) => void }) {
  const letters = section.paragraphLetters ?? [];
  return (
    <div className="space-y-5">
      {section.questions.map((q) => {
        const val = answers[q.id] ?? "";
        return (
          <div key={q.id}>
            <p className="text-sm text-slate-800 font-medium mb-2 leading-relaxed">Q{q.id}. {q.text}</p>
            <div className="flex flex-wrap gap-2">
              {letters.map((l) => (
                <button
                  key={l}
                  onClick={() => setAnswer(q.id, l)}
                  className={cn(
                    "w-9 h-9 rounded-lg text-sm font-bold border transition",
                    val === l ? "bg-cyan-500 text-white border-cyan-500" : "bg-white text-slate-700 border-slate-200 hover:border-cyan-300"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Sentence Completion
function SentenceCompletionRenderer({
  section, answers, setAnswer,
}: { section: Section; answers: AnswerMap; setAnswer: (id: number, v: string) => void }) {
  return (
    <div className="space-y-5">
      {section.questions.map((q) => (
        <div key={q.id}>
          <p className="text-xs text-slate-400 mb-2">Q{q.id} — NO MORE THAN {q.wordLimit ?? 2} WORD{(q.wordLimit ?? 2) > 1 ? "S" : ""}</p>
          <p className="text-sm text-slate-800 font-medium mb-2 leading-relaxed">
            {q.before}
            <input
              type="text"
              value={answers[q.id] ?? ""}
              onChange={(e) => setAnswer(q.id, e.target.value)}
              placeholder="your answer"
              className="inline-block mx-2 px-2 py-1 border-b-2 border-cyan-500 bg-transparent text-cyan-700 text-sm focus:outline-none w-32"
            />
            {q.after}
          </p>
        </div>
      ))}
    </div>
  );
}

// Summary Completion with word bank
function SummaryCompletionRenderer({
  section, answers, setAnswer,
}: { section: Section; answers: AnswerMap; setAnswer: (id: number, v: string) => void }) {
  const [activeBlank, setActiveBlank] = useState<number | null>(null);
  const wordBank = section.wordBank ?? [];
  const blanks = section.questions;
  const usedWords = new Set(blanks.map((q) => answers[q.id]).filter(Boolean));

  function fillBlank(blankId: number, word: string) {
    setAnswer(blankId, word);
    setActiveBlank(null);
  }

  function clearBlank(blankId: number) {
    setAnswer(blankId, "");
  }

  // Parse summary text with {{n}} placeholders
  const summaryText = section.summaryText ?? "";
  const parts = summaryText.split(/\{\{(\d+)\}\}/);

  return (
    <div>
      {section.summaryTitle && (
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">{section.summaryTitle}</p>
      )}
      <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-5 text-sm text-slate-800 leading-8">
        {parts.map((part, i) => {
          if (i % 2 === 0) return <span key={i}>{part}</span>;
          const blankId = parseInt(part);
          const q = blanks.find((b) => b.blankId === blankId || b.id === blankId);
          if (!q) return null;
          const filled = answers[q.id];
          const isActive = activeBlank === q.id;
          return (
            <button
              key={i}
              onClick={() => isActive ? setActiveBlank(null) : setActiveBlank(q.id)}
              className={cn(
                "inline-flex items-center px-3 py-0.5 rounded border-2 mx-1 text-sm font-medium transition",
                filled
                  ? isActive ? "border-cyan-600 bg-cyan-100 text-cyan-900" : "border-cyan-400 bg-cyan-50 text-cyan-800"
                  : isActive ? "border-amber-400 bg-amber-50 text-amber-700" : "border-dashed border-slate-400 text-slate-400"
              )}
            >
              {filled || `blank ${blankId}`}
              {filled && (
                <span
                  onClick={(e) => { e.stopPropagation(); clearBlank(q.id); }}
                  className="ml-1.5 text-xs opacity-60 hover:opacity-100"
                >×</span>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Word Bank</p>
      <div className="flex flex-wrap gap-2">
        {wordBank.map((word) => {
          const used = usedWords.has(word);
          return (
            <button
              key={word}
              onClick={() => {
                if (used) return;
                if (activeBlank !== null) fillBlank(activeBlank, word);
              }}
              disabled={used}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm border transition",
                used
                  ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed line-through"
                  : activeBlank !== null
                  ? "bg-cyan-500 text-white border-cyan-500 cursor-pointer hover:bg-cyan-600"
                  : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 cursor-pointer"
              )}
            >
              {word}
            </button>
          );
        })}
      </div>
      {activeBlank !== null && (
        <p className="text-xs text-cyan-600 mt-2">Click a word above to fill the highlighted blank.</p>
      )}
    </div>
  );
}

// Short Answer
function ShortAnswerRenderer({
  section, answers, setAnswer,
}: { section: Section; answers: AnswerMap; setAnswer: (id: number, v: string) => void }) {
  return (
    <div className="space-y-5">
      {section.questions.map((q) => (
        <div key={q.id}>
          <p className="text-xs text-slate-400 mb-1">Q{q.id} — NO MORE THAN {q.wordLimit ?? 3} WORDS</p>
          <p className="text-sm text-slate-800 font-medium mb-2">{q.before}</p>
          <input
            type="text"
            value={answers[q.id] ?? ""}
            onChange={(e) => setAnswer(q.id, e.target.value)}
            placeholder="Type your answer…"
            className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      ))}
    </div>
  );
}

// PTE: Reorder Paragraphs
function ReorderRenderer({
  task, answer, setAnswer,
}: { task: PTETask; answer: string; setAnswer: (v: string) => void }) {
  let ordered: string[] = [];
  try { ordered = JSON.parse(answer || "[]"); } catch { /* empty */ }

  const sentences = task.sentences ?? [];
  const available = sentences.filter((s) => !ordered.includes(s.id));

  function addToOrder(id: string) {
    setAnswer(JSON.stringify([...ordered, id]));
  }
  function removeFromOrder(id: string) {
    setAnswer(JSON.stringify(ordered.filter((x) => x !== id)));
  }
  function moveUp(idx: number) {
    if (idx === 0) return;
    const next = [...ordered];
    [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
    setAnswer(JSON.stringify(next));
  }
  function moveDown(idx: number) {
    if (idx === ordered.length - 1) return;
    const next = [...ordered];
    [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
    setAnswer(JSON.stringify(next));
  }

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Available sentences — click to add</p>
        <div className="space-y-2">
          {available.length === 0 && <p className="text-sm text-slate-400 italic">All sentences placed.</p>}
          {available.map((s) => (
            <button
              key={s.id}
              onClick={() => addToOrder(s.id)}
              className="w-full text-left px-4 py-3 rounded-lg text-sm border border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 transition"
            >
              {s.text}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Your order — click × to remove, use arrows to reorder</p>
        <div className="space-y-2">
          {ordered.length === 0 && <p className="text-sm text-slate-400 italic">No sentences placed yet.</p>}
          {ordered.map((id, idx) => {
            const s = sentences.find((x) => x.id === id);
            if (!s) return null;
            return (
              <div key={id} className="flex items-start gap-2 px-4 py-3 rounded-lg border border-cyan-300 bg-cyan-50">
                <span className="text-xs font-bold text-cyan-600 mt-0.5 shrink-0">{idx + 1}.</span>
                <p className="text-sm text-slate-800 flex-1 leading-relaxed">{s.text}</p>
                <div className="flex flex-col gap-0.5 shrink-0">
                  <button onClick={() => moveUp(idx)} disabled={idx === 0} className="text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xs">▲</button>
                  <button onClick={() => moveDown(idx)} disabled={idx === ordered.length - 1} className="text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xs">▼</button>
                </div>
                <button onClick={() => removeFromOrder(id)} className="text-slate-400 hover:text-red-500 text-sm shrink-0">×</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// PTE: RFIB (word bank fill)
function RFIBRenderer({
  task, answer, setAnswer,
}: { task: PTETask; answer: string; setAnswer: (v: string) => void }) {
  let blankMap: Record<number, string> = {};
  try { blankMap = JSON.parse(answer || "{}"); } catch { /* empty */ }
  const [activeBlank, setActiveBlank] = useState<number | null>(null);

  const wordBank = task.wordBank ?? [];
  const blanks = task.blanks ?? [];
  const usedWords = new Set(Object.values(blankMap).filter(Boolean));

  function fillBlank(id: number, word: string) {
    const next = { ...blankMap, [id]: word };
    setAnswer(JSON.stringify(next));
    setActiveBlank(null);
  }
  function clearBlank(id: number) {
    const next = { ...blankMap };
    delete next[id];
    setAnswer(JSON.stringify(next));
  }

  const text = task.rfibText ?? "";
  const parts = text.split(/\{\{(\d+)\}\}/);

  return (
    <div>
      <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-5 text-sm text-slate-800 leading-9">
        {parts.map((part, i) => {
          if (i % 2 === 0) return <span key={i}>{part}</span>;
          const blankId = parseInt(part);
          const filled = blankMap[blankId];
          const isActive = activeBlank === blankId;
          return (
            <button
              key={i}
              onClick={() => setActiveBlank(isActive ? null : blankId)}
              className={cn(
                "inline-flex items-center px-3 py-0.5 rounded border-2 mx-1 text-sm font-medium transition",
                filled
                  ? isActive ? "border-cyan-600 bg-cyan-100 text-cyan-900" : "border-cyan-400 bg-cyan-50 text-cyan-800"
                  : isActive ? "border-amber-400 bg-amber-50 text-amber-700" : "border-dashed border-slate-400 text-slate-400"
              )}
            >
              {filled || `blank ${blankId}`}
              {filled && (
                <span onClick={(e) => { e.stopPropagation(); clearBlank(blankId); }} className="ml-1.5 text-xs opacity-60 hover:opacity-100">×</span>
              )}
            </button>
          );
        })}
      </div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Word Bank</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {wordBank.map((word) => {
          const used = usedWords.has(word);
          return (
            <button
              key={word}
              onClick={() => { if (!used && activeBlank !== null) fillBlank(activeBlank, word); }}
              disabled={used}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm border transition",
                used ? "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed line-through"
                  : activeBlank !== null ? "bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600 cursor-pointer"
                  : "bg-white text-slate-700 border-slate-300 hover:border-cyan-400 cursor-pointer"
              )}
            >
              {word}
            </button>
          );
        })}
      </div>
      {activeBlank !== null && <p className="text-xs text-cyan-600">Click a word to fill blank {activeBlank}.</p>}
    </div>
  );
}

// PTE: RWFIB (inline dropdowns)
function RWFIBRenderer({
  task, answer, setAnswer,
}: { task: PTETask; answer: string; setAnswer: (v: string) => void }) {
  let blankMap: Record<number, string> = {};
  try { blankMap = JSON.parse(answer || "{}"); } catch { /* empty */ }

  function setBlank(id: number, val: string) {
    setAnswer(JSON.stringify({ ...blankMap, [id]: val }));
  }

  const text = task.rwfibText ?? "";
  const blanks = task.rwfibBlanks ?? [];
  const parts = text.split(/\{\{(\d+)\}\}/);

  return (
    <div className="text-sm text-slate-800 leading-10 bg-slate-50 border border-slate-100 rounded-lg p-5">
      {parts.map((part, i) => {
        if (i % 2 === 0) return <span key={i}>{part}</span>;
        const blankId = parseInt(part);
        const blank = blanks.find((b) => b.id === blankId);
        if (!blank) return null;
        return (
          <select
            key={i}
            value={blankMap[blankId] ?? ""}
            onChange={(e) => setBlank(blankId, e.target.value)}
            className="mx-1 px-2 py-1 border-b-2 border-cyan-500 bg-white text-cyan-700 text-sm focus:outline-none rounded-none appearance-none cursor-pointer"
          >
            <option value="">choose…</option>
            {blank.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        );
      })}
    </div>
  );
}

// ── Section Renderer (IELTS) ──────────────────────────────────────────────────

function SectionBlock({
  section, currentQId, answers, setAnswer, setCurrentQId,
}: {
  section: Section;
  currentQId: number;
  answers: AnswerMap;
  setAnswer: (id: number, v: string) => void;
  setCurrentQId: (id: number) => void;
}) {
  const type = section.type;
  const isGrouped = ["match_headings", "match_info", "sentence_completion", "summary_completion", "short_answer"].includes(type);

  if (isGrouped) {
    return (
      <div className="mb-8">
        <div className="mb-3">
          <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">{section.questionRange}</p>
          <p className="text-xs text-slate-500 leading-relaxed">{section.instructions}</p>
        </div>
        {type === "match_headings" && (
          <MatchHeadingsRenderer section={section} answers={answers} setAnswer={setAnswer} />
        )}
        {type === "match_info" && (
          <MatchInfoRenderer section={section} answers={answers} setAnswer={setAnswer} />
        )}
        {type === "sentence_completion" && (
          <SentenceCompletionRenderer section={section} answers={answers} setAnswer={setAnswer} />
        )}
        {type === "summary_completion" && (
          <SummaryCompletionRenderer section={section} answers={answers} setAnswer={setAnswer} />
        )}
        {type === "short_answer" && (
          <ShortAnswerRenderer section={section} answers={answers} setAnswer={setAnswer} />
        )}
      </div>
    );
  }

  // Individual questions (tfng, ynng, mc_single, mc_multiple)
  return (
    <div className="mb-8">
      <div className="mb-3">
        <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">{section.questionRange}</p>
        <p className="text-xs text-slate-500 leading-relaxed">{section.instructions}</p>
      </div>
      {section.questions.map((q) => {
        const isCurrent = q.id === currentQId;
        const ans = answers[q.id] ?? "";
        return (
          <div
            key={q.id}
            id={`q-${q.id}`}
            className={cn("mb-4 rounded-xl border p-4 transition", isCurrent ? "border-cyan-400 bg-cyan-50/40" : "border-slate-200 bg-white")}
            onClick={() => setCurrentQId(q.id)}
          >
            <p className="text-xs font-bold text-slate-400 mb-2">Q{q.id}</p>
            {(type === "tfng") && (
              <TFNGRenderer q={q} answer={ans} setAnswer={(v) => setAnswer(q.id, v)} labels={["True", "False", "Not Given"]} />
            )}
            {(type === "ynng") && (
              <TFNGRenderer q={q} answer={ans} setAnswer={(v) => setAnswer(q.id, v)} labels={["Yes", "No", "Not Given"]} />
            )}
            {(type === "mc_single") && (
              <MCSingleRenderer q={q} answer={ans} setAnswer={(v) => setAnswer(q.id, v)} />
            )}
            {(type === "mc_multiple") && (
              <MCMultipleRenderer q={q} answer={ans} setAnswer={(v) => setAnswer(q.id, v)} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── IELTS Test Runner ─────────────────────────────────────────────────────────

function IELTSRunner({ test, onSubmit }: { test: IELTSTest; onSubmit: (answers: AnswerMap, elapsed: number) => void }) {
  const [activePassage, setActivePassage] = useState<0 | 1 | 2>(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentQId, setCurrentQId] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const startRef = useRef(Date.now());

  const allIds = allIELTSIds(test);
  const answered = allIds.filter((id) => {
    const v = answers[id];
    return v && v !== "[]" && v !== "{}";
  }).length;

  function setAnswer(id: number, val: string) {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  }
  function toggleFlag(id: number) {
    setFlagged((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  function submit() {
    const elapsed = Math.round((Date.now() - startRef.current) / 1000);
    onSubmit(answers, elapsed);
  }

  const passage = test.passages[activePassage];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 transition">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-sm font-bold text-slate-900">IELTS Academic Reading</p>
            <p className="text-xs text-slate-500">Test 1 — {answered}/{allIds.length} answered</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Timer seconds={test.totalSeconds} onExpire={submit} />
          <Button size="sm" onClick={() => setShowConfirm(true)}>Submit</Button>
        </div>
      </header>

      {/* Passage tabs */}
      <div className="bg-white border-b border-slate-200 px-4 flex gap-1">
        {test.passages.map((p, i) => (
          <button
            key={i}
            onClick={() => setActivePassage(i as 0 | 1 | 2)}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition",
              activePassage === i ? "border-cyan-500 text-cyan-600" : "border-transparent text-slate-500 hover:text-slate-900"
            )}
          >
            Passage {i + 1}
          </button>
        ))}
      </div>

      {/* Question number grid */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex flex-wrap gap-1.5">
        {test.passages.map((p, pi) =>
          p.sections.flatMap((s) =>
            s.questions.map((q) => {
              const ans = answers[q.id];
              const hasAnswer = ans && ans !== "[]" && ans !== "{}";
              const isCurrent = q.id === currentQId;
              return (
                <button
                  key={q.id}
                  onClick={() => { setActivePassage(pi as 0 | 1 | 2); setCurrentQId(q.id); setTimeout(() => document.getElementById(`q-${q.id}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 100); }}
                  className={cn(
                    "w-7 h-7 rounded text-xs font-bold transition relative",
                    isCurrent ? "bg-cyan-500 text-white" : hasAnswer ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  )}
                >
                  {q.id}
                  {flagged.has(q.id) && <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400 rounded-full" />}
                </button>
              );
            })
          )
        )}
      </div>

      {/* Split layout */}
      <div className="flex flex-1 min-h-0">
        {/* Passage panel */}
        <div className="w-1/2 overflow-y-auto p-6 border-r border-slate-200">
          <h2 className="text-base font-bold text-slate-900 mb-1">{passage.title}</h2>
          <p className="text-xs text-slate-400 mb-4">Passage {activePassage + 1} — Read carefully and answer the questions on the right.</p>
          <div className="space-y-4">
            {passage.paragraphs.map((para) => (
              <p key={para.letter} className="text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900 mr-1">[{para.letter}]</span>{para.text}
              </p>
            ))}
          </div>
        </div>

        {/* Questions panel */}
        <div className="w-1/2 overflow-y-auto p-5">
          {passage.sections.map((section) => (
            <SectionBlock
              key={section.questionRange}
              section={section}
              currentQId={currentQId}
              answers={answers}
              setAnswer={setAnswer}
              setCurrentQId={setCurrentQId}
            />
          ))}
        </div>
      </div>

      {showConfirm && (
        <SubmitModal answered={answered} total={allIds.length} onConfirm={submit} onCancel={() => setShowConfirm(false)} />
      )}
    </div>
  );
}

// ── PTE Test Runner ───────────────────────────────────────────────────────────

function PTERunner({ test, onSubmit }: { test: PTETest; onSubmit: (answers: AnswerMap, elapsed: number) => void }) {
  const [taskIdx, setTaskIdx] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showConfirm, setShowConfirm] = useState(false);
  const startRef = useRef(Date.now());

  const task = test.tasks[taskIdx];
  const totalTasks = test.tasks.length;

  function setAnswer(id: number, val: string) {
    setAnswers((prev) => ({ ...prev, [id]: val }));
  }

  const answered = test.tasks.filter((t) => {
    const v = answers[t.id];
    return v && v !== "[]" && v !== "{}";
  }).length;

  function submit() {
    const elapsed = Math.round((Date.now() - startRef.current) / 1000);
    onSubmit(answers, elapsed);
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 transition">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-sm font-bold text-slate-900">PTE Academic Reading</p>
            <p className="text-xs text-slate-500">Task {taskIdx + 1} of {totalTasks}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Timer seconds={test.totalSeconds} onExpire={submit} />
          <Button size="sm" onClick={() => setShowConfirm(true)}>Submit</Button>
        </div>
      </header>

      {/* Progress dots */}
      <div className="bg-white border-b border-slate-200 px-4 py-2 flex gap-2 items-center">
        {test.tasks.map((t, i) => {
          const done = answers[t.id] && answers[t.id] !== "[]" && answers[t.id] !== "{}";
          return (
            <button
              key={t.id}
              onClick={() => setTaskIdx(i)}
              className={cn(
                "w-3 h-3 rounded-full transition",
                i === taskIdx ? "bg-cyan-500 scale-125" : done ? "bg-cyan-300" : "bg-slate-300 hover:bg-slate-400"
              )}
            />
          );
        })}
        <span className="text-xs text-slate-400 ml-2">{answered}/{totalTasks} tasks answered</span>
      </div>

      {/* Task content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-4">
            <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">{task.taskLabel}</p>
            <p className="text-xs text-slate-500">{task.instructions}</p>
          </div>

          {/* Passage for mc tasks */}
          {(task.type === "mc_single" || task.type === "mc_multiple") && task.passage && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 mb-5 text-sm text-slate-700 leading-relaxed">
              {task.passage}
            </div>
          )}

          {task.type === "mc_single" && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-800 mb-3">{task.stem}</p>
              {(task.options ?? []).map((opt) => (
                <PillOption
                  key={opt.label}
                  label={`${opt.label}. ${opt.text}`}
                  selected={answers[task.id] === opt.label}
                  onClick={() => setAnswer(task.id, opt.label)}
                />
              ))}
            </div>
          )}

          {task.type === "mc_multiple" && (
            <div>
              <p className="text-sm font-medium text-slate-800 mb-1">{task.stem}</p>
              {(() => {
                let selected: string[] = [];
                try { selected = JSON.parse(answers[task.id] || "[]"); } catch { /* empty */ }
                function toggle(label: string) {
                  const next = selected.includes(label)
                    ? selected.filter((x) => x !== label)
                    : selected.length < (task.pickCount ?? 2) ? [...selected, label] : selected;
                  setAnswer(task.id, JSON.stringify(next));
                }
                return (
                  <>
                    <p className="text-xs text-slate-400 mb-3">Select {task.pickCount ?? 2} answers. ({selected.length}/{task.pickCount ?? 2} selected)</p>
                    <div className="space-y-2">
                      {(task.options ?? []).map((opt) => {
                        const sel = selected.includes(opt.label);
                        return (
                          <button
                            key={opt.label}
                            onClick={() => toggle(opt.label)}
                            className={cn(
                              "w-full text-left px-4 py-3 rounded-lg text-sm border transition flex items-center gap-3",
                              sel ? "border-cyan-500 bg-cyan-50 text-cyan-800" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                            )}
                          >
                            <span className={cn("w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center", sel ? "border-cyan-500 bg-cyan-500" : "border-slate-300")}>
                              {sel && <span className="text-white text-xs">✓</span>}
                            </span>
                            {opt.label}. {opt.text}
                          </button>
                        );
                      })}
                    </div>
                  </>
                );
              })()}
            </div>
          )}

          {task.type === "reorder" && (
            <ReorderRenderer task={task} answer={answers[task.id] ?? ""} setAnswer={(v) => setAnswer(task.id, v)} />
          )}

          {task.type === "rfib" && (
            <RFIBRenderer task={task} answer={answers[task.id] ?? ""} setAnswer={(v) => setAnswer(task.id, v)} />
          )}

          {task.type === "rwfib" && (
            <RWFIBRenderer task={task} answer={answers[task.id] ?? ""} setAnswer={(v) => setAnswer(task.id, v)} />
          )}

          {/* Task navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="ghost" size="sm" onClick={() => setTaskIdx((i) => Math.max(0, i - 1))} disabled={taskIdx === 0}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Previous
            </Button>
            {taskIdx < totalTasks - 1 ? (
              <Button size="sm" onClick={() => setTaskIdx((i) => i + 1)}>
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button size="sm" onClick={() => setShowConfirm(true)}>Submit Test</Button>
            )}
          </div>
        </div>
      </div>

      {showConfirm && (
        <SubmitModal answered={answered} total={totalTasks} onConfirm={submit} onCancel={() => setShowConfirm(false)} />
      )}
    </div>
  );
}

// ── Page Shell ────────────────────────────────────────────────────────────────

export default function TestPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const test = getTest(params.id);

  const handleSubmit = useCallback(async (answers: AnswerMap, elapsed: number) => {
    if (!test) return;
    const result = buildResult(test, answers, elapsed);
    sessionStorage.setItem("passph_result", JSON.stringify(result));

    // Save to Supabase (best-effort — don't block navigation on failure)
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from("test_attempts").insert({
          user_id: user.id,
          exam: result.exam,
          test_id: params.id,
          score: result.score,
          total: result.total,
          band: result.band,
          time_taken: result.timeTaken,
          result_json: result,
        });
        // Increment tests_used_this_month
        await supabase.rpc("increment_tests_used", { uid: user.id });
      }
    } catch { /* ignore */ }

    router.push("/results/1");
  }, [test, router, params.id]);

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Test not found.</p>
          <Link href="/dashboard"><Button>Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  if (test.exam === "IELTS") {
    return <IELTSRunner test={test as IELTSTest} onSubmit={handleSubmit} />;
  }

  return <PTERunner test={test as PTETest} onSubmit={handleSubmit} />;
}
