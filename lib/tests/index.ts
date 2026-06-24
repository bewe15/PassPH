import type { AnyTest, AnswerMap, IELTSTest, PTETest, QuestionResult, TestResult } from "./types";
import { ieltsReading1 } from "./ielts-reading-1";
import { ieltsReading2 } from "./ielts-reading-2";
import { ieltsReading3 } from "./ielts-reading-3";
import { ieltsReading4 } from "./ielts-reading-4";
import { ieltsReading5 } from "./ielts-reading-5";
import { ieltsReading6 } from "./ielts-reading-6";
import { ieltsReading7 } from "./ielts-reading-7";
import { ieltsReading8 } from "./ielts-reading-8";
import { ieltsReading9 } from "./ielts-reading-9";
import { ieltsReading10 } from "./ielts-reading-10";
import { ieltsReading11 } from "./ielts-reading-11";
import { ieltsReading12 } from "./ielts-reading-12";
import { ieltsReading13 } from "./ielts-reading-13";
import { ieltsReading14 } from "./ielts-reading-14";
import { ieltsReading15 } from "./ielts-reading-15";
import { ieltsReading16 } from "./ielts-reading-16";
import { ieltsReading17 } from "./ielts-reading-17";
import { ieltsReading18 } from "./ielts-reading-18";
import { ieltsReading19 } from "./ielts-reading-19";
import { ieltsReading20 } from "./ielts-reading-20";
import { pteReading1 } from "./pte-reading-1";
import { pteReading2 } from "./pte-reading-2";
import { pteReading3 } from "./pte-reading-3";
import { pteReading4 } from "./pte-reading-4";
import { pteReading5 } from "./pte-reading-5";
import { pteReading6 } from "./pte-reading-6";
import { pteReading7 } from "./pte-reading-7";
import { pteReading8 } from "./pte-reading-8";
import { pteReading9 } from "./pte-reading-9";
import { pteReading10 } from "./pte-reading-10";
import { pteReading11 } from "./pte-reading-11";
import { pteReading12 } from "./pte-reading-12";
import { pteReading13 } from "./pte-reading-13";
import { pteReading14 } from "./pte-reading-14";
import { pteReading15 } from "./pte-reading-15";
import { pteReading16 } from "./pte-reading-16";
import { pteReading17 } from "./pte-reading-17";
import { pteReading18 } from "./pte-reading-18";
import { pteReading19 } from "./pte-reading-19";
import { pteReading20 } from "./pte-reading-20";
import { ieltsReading21 } from "./ielts-reading-21";
import { ieltsReading22 } from "./ielts-reading-22";
import { ieltsReading23 } from "./ielts-reading-23";
import { ieltsReading24 } from "./ielts-reading-24";
import { ieltsReading25 } from "./ielts-reading-25";
import { pteReading21 } from "./pte-reading-21";
import { pteReading22 } from "./pte-reading-22";
import { pteReading23 } from "./pte-reading-23";
import { pteReading24 } from "./pte-reading-24";
import { pteReading25 } from "./pte-reading-25";

export const TEST_REGISTRY: Record<string, AnyTest> = {
  "ielts-reading-1": ieltsReading1,
  "ielts-reading-2": ieltsReading2,
  "ielts-reading-3": ieltsReading3,
  "ielts-reading-4": ieltsReading4,
  "ielts-reading-5": ieltsReading5,
  "ielts-reading-6": ieltsReading6,
  "ielts-reading-7": ieltsReading7,
  "ielts-reading-8": ieltsReading8,
  "ielts-reading-9": ieltsReading9,
  "ielts-reading-10": ieltsReading10,
  "ielts-reading-11": ieltsReading11,
  "ielts-reading-12": ieltsReading12,
  "ielts-reading-13": ieltsReading13,
  "ielts-reading-14": ieltsReading14,
  "ielts-reading-15": ieltsReading15,
  "ielts-reading-16": ieltsReading16,
  "ielts-reading-17": ieltsReading17,
  "ielts-reading-18": ieltsReading18,
  "ielts-reading-19": ieltsReading19,
  "ielts-reading-20": ieltsReading20,
  "pte-reading-1": pteReading1,
  "pte-reading-2": pteReading2,
  "pte-reading-3": pteReading3,
  "pte-reading-4": pteReading4,
  "pte-reading-5": pteReading5,
  "pte-reading-6": pteReading6,
  "pte-reading-7": pteReading7,
  "pte-reading-8": pteReading8,
  "pte-reading-9": pteReading9,
  "pte-reading-10": pteReading10,
  "pte-reading-11": pteReading11,
  "pte-reading-12": pteReading12,
  "pte-reading-13": pteReading13,
  "pte-reading-14": pteReading14,
  "pte-reading-15": pteReading15,
  "pte-reading-16": pteReading16,
  "pte-reading-17": pteReading17,
  "pte-reading-18": pteReading18,
  "pte-reading-19": pteReading19,
  "pte-reading-20": pteReading20,
  "ielts-reading-21": ieltsReading21,
  "ielts-reading-22": ieltsReading22,
  "ielts-reading-23": ieltsReading23,
  "ielts-reading-24": ieltsReading24,
  "ielts-reading-25": ieltsReading25,
  "pte-reading-21": pteReading21,
  "pte-reading-22": pteReading22,
  "pte-reading-23": pteReading23,
  "pte-reading-24": pteReading24,
  "pte-reading-25": pteReading25,
};

export function getTest(id: string): AnyTest | null {
  return TEST_REGISTRY[id] ?? null;
}

// ── IELTS Band Score (Cambridge Academic Reading table) ───────────────────────
export function ieltsBand(raw: number): number {
  if (raw >= 39) return 9.0;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8.0;
  if (raw >= 33) return 7.5;
  if (raw >= 30) return 7.0;
  if (raw >= 27) return 6.5;
  if (raw >= 23) return 6.0;
  if (raw >= 19) return 5.5;
  if (raw >= 15) return 5.0;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4.0;
  if (raw >= 8)  return 3.5;
  return 3.0;
}

// ── PTE approximate IELTS equivalent ─────────────────────────────────────────
export function pteBand(correct: number, total: number): number {
  const pct = correct / total;
  if (pct >= 0.90) return 8.5;
  if (pct >= 0.80) return 8.0;
  if (pct >= 0.70) return 7.5;
  if (pct >= 0.60) return 7.0;
  if (pct >= 0.50) return 6.5;
  if (pct >= 0.40) return 6.0;
  return 5.5;
}

// ── Flatten IELTS answers into QuestionResult[] ───────────────────────────────
export function flattenIELTS(test: IELTSTest, answers: AnswerMap): QuestionResult[] {
  const results: QuestionResult[] = [];

  for (const passage of test.passages) {
    for (const section of passage.sections) {
      for (const q of section.questions) {
        const given = answers[q.id] ?? "";

        let isCorrect = false;
        let correctStr = "";
        let givenStr = given;
        let questionText = "";

        if (section.type === "tfng" || section.type === "ynng") {
          questionText = q.statement ?? "";
          correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
          isCorrect = given.toLowerCase() === correctStr.toLowerCase();
        } else if (section.type === "mc_single") {
          questionText = q.stem ?? "";
          correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
          isCorrect = given === correctStr;
        } else if (section.type === "mc_multiple") {
          questionText = q.stem ?? "";
          const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
          correctStr = correctArr.join(", ");
          try {
            const givenArr: string[] = JSON.parse(given || "[]");
            givenStr = givenArr.join(", ");
            isCorrect = correctArr.length === givenArr.length &&
              correctArr.every((c) => givenArr.includes(c));
          } catch { isCorrect = false; }
        } else if (section.type === "match_headings") {
          questionText = `Paragraph ${q.paragraph}`;
          correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
          isCorrect = given === correctStr;
        } else if (section.type === "match_info") {
          questionText = q.text ?? "";
          correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
          isCorrect = given.toUpperCase() === correctStr.toUpperCase();
        } else if (section.type === "sentence_completion") {
          questionText = `${q.before ?? ""}___${q.after ?? ""}`;
          correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
          isCorrect = given.trim().toLowerCase() === correctStr.toLowerCase();
        } else if (section.type === "summary_completion") {
          questionText = `Summary blank ${q.blankId}`;
          correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
          isCorrect = given.trim().toLowerCase() === correctStr.toLowerCase();
        } else if (section.type === "short_answer") {
          questionText = q.before ?? "";
          correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
          isCorrect = given.trim().toLowerCase().includes(correctStr.toLowerCase());
        }

        results.push({
          id: q.id,
          text: questionText,
          correct: correctStr,
          given: givenStr || "—",
          isCorrect,
          explanation: q.explanation,
        });
      }
    }
  }

  return results;
}

// ── Flatten PTE answers into QuestionResult[] ─────────────────────────────────
export function flattenPTE(test: PTETest, answers: AnswerMap): QuestionResult[] {
  const results: QuestionResult[] = [];

  for (const task of test.tasks) {
    if (task.type === "mc_single") {
      const given = answers[task.id] ?? "";
      const correct = Array.isArray(task.correct) ? task.correct[0] : (task.correct ?? "");
      results.push({
        id: task.id,
        text: task.stem ?? "",
        correct,
        given: given || "—",
        isCorrect: given === correct,
        explanation: task.explanation ?? "",
      });
    } else if (task.type === "mc_multiple") {
      const correctArr = Array.isArray(task.correct) ? task.correct : [task.correct ?? ""];
      const correctStr = correctArr.join(", ");
      const givenRaw = answers[task.id] ?? "[]";
      let givenArr: string[] = [];
      try { givenArr = JSON.parse(givenRaw); } catch { /* empty */ }
      const isCorrect = correctArr.length === givenArr.length && correctArr.every((c) => givenArr.includes(c as string));
      results.push({
        id: task.id,
        text: task.stem ?? "",
        correct: correctStr,
        given: givenArr.join(", ") || "—",
        isCorrect,
        explanation: task.explanation ?? "",
      });
    } else if (task.type === "reorder") {
      const correctOrder = task.correctOrder ?? [];
      const givenRaw = answers[task.id] ?? "[]";
      let givenOrder: string[] = [];
      try { givenOrder = JSON.parse(givenRaw); } catch { /* empty */ }
      // Score by adjacent pairs correct
      let pairsCorrect = 0;
      for (let i = 0; i < correctOrder.length - 1; i++) {
        const givenIdx = givenOrder.indexOf(correctOrder[i]);
        if (givenIdx !== -1 && givenOrder[givenIdx + 1] === correctOrder[i + 1]) pairsCorrect++;
      }
      const isCorrect = pairsCorrect === correctOrder.length - 1;
      results.push({
        id: task.id,
        text: "Re-order Paragraphs",
        correct: correctOrder.join(" → "),
        given: givenOrder.length ? givenOrder.join(" → ") : "—",
        isCorrect,
        explanation: task.reorderExplanation ?? "",
      });
    } else if (task.type === "rfib") {
      for (const blank of task.blanks ?? []) {
        const givenRaw = answers[task.id] ?? "{}";
        let givenMap: Record<number, string> = {};
        try { givenMap = JSON.parse(givenRaw); } catch { /* empty */ }
        const given = givenMap[blank.id] ?? "";
        results.push({
          id: task.id * 100 + blank.id,
          text: `Reading Fill in Blank ${blank.id}`,
          correct: blank.correct,
          given: given || "—",
          isCorrect: given.toLowerCase() === blank.correct.toLowerCase(),
          explanation: blank.explanation,
        });
      }
    } else if (task.type === "rwfib") {
      for (const blank of task.rwfibBlanks ?? []) {
        const givenRaw = answers[task.id] ?? "{}";
        let givenMap: Record<number, string> = {};
        try { givenMap = JSON.parse(givenRaw); } catch { /* empty */ }
        const given = givenMap[blank.id] ?? "";
        results.push({
          id: task.id * 100 + blank.id,
          text: `Reading & Writing Fill in Blank ${blank.id}`,
          correct: blank.correct,
          given: given || "—",
          isCorrect: given === blank.correct,
          explanation: blank.explanation,
        });
      }
    }
  }

  return results;
}

export function buildResult(
  test: AnyTest,
  answers: AnswerMap,
  timeTakenSeconds: number
): TestResult {
  const mm = Math.floor(timeTakenSeconds / 60).toString().padStart(2, "0");
  const ss = (timeTakenSeconds % 60).toString().padStart(2, "0");

  const questions =
    test.exam === "IELTS"
      ? flattenIELTS(test as IELTSTest, answers)
      : flattenPTE(test as PTETest, answers);

  const score = questions.filter((q) => q.isCorrect).length;
  const total = questions.length;
  const band =
    test.exam === "IELTS" ? ieltsBand(score) : pteBand(score, total);

  return {
    exam: test.exam,
    type: test.exam === "IELTS" ? "Academic Reading" : "Reading",
    score,
    total,
    band,
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    timeTaken: `${mm} min ${ss} sec`,
    questions,
  };
}
