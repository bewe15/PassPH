import type {
  IELTSListeningTest,
  ListeningAnswerMap,
  ListeningQuestionResult,
  ListeningResult,
} from "./listening-types";
import { ieltsListening1 }  from "./ielts-listening-1";
import { ieltsListening2 }  from "./ielts-listening-2";
import { ieltsListening3 }  from "./ielts-listening-3";
import { ieltsListening4 }  from "./ielts-listening-4";
import { ieltsListening5 }  from "./ielts-listening-5";
import { ieltsListening6 }  from "./ielts-listening-6";
import { ieltsListening7 }  from "./ielts-listening-7";
import { ieltsListening8 }  from "./ielts-listening-8";
import { ieltsListening9 }  from "./ielts-listening-9";
import { ieltsListening10 } from "./ielts-listening-10";
import { ieltsListening11 } from "./ielts-listening-11";
import { ieltsListening12 } from "./ielts-listening-12";
import { ieltsListening13 } from "./ielts-listening-13";
import { ieltsListening14 } from "./ielts-listening-14";
import { ieltsListening15 } from "./ielts-listening-15";
import { ieltsListening16 } from "./ielts-listening-16";
import { ieltsListening17 } from "./ielts-listening-17";
import { ieltsListening18 } from "./ielts-listening-18";
import { ieltsListening19 } from "./ielts-listening-19";
import { ieltsListening20 } from "./ielts-listening-20";

// ── Registry ──────────────────────────────────────────────────────────────────

export const LISTENING_REGISTRY: Record<string, IELTSListeningTest> = {
  "ielts-listening-1":  ieltsListening1,
  "ielts-listening-2":  ieltsListening2,
  "ielts-listening-3":  ieltsListening3,
  "ielts-listening-4":  ieltsListening4,
  "ielts-listening-5":  ieltsListening5,
  "ielts-listening-6":  ieltsListening6,
  "ielts-listening-7":  ieltsListening7,
  "ielts-listening-8":  ieltsListening8,
  "ielts-listening-9":  ieltsListening9,
  "ielts-listening-10": ieltsListening10,
  "ielts-listening-11": ieltsListening11,
  "ielts-listening-12": ieltsListening12,
  "ielts-listening-13": ieltsListening13,
  "ielts-listening-14": ieltsListening14,
  "ielts-listening-15": ieltsListening15,
  "ielts-listening-16": ieltsListening16,
  "ielts-listening-17": ieltsListening17,
  "ielts-listening-18": ieltsListening18,
  "ielts-listening-19": ieltsListening19,
  "ielts-listening-20": ieltsListening20,
};

export function getListeningTest(id: string): IELTSListeningTest | null {
  return LISTENING_REGISTRY[id] ?? null;
}

// ── Band Score (IELTS Listening — same scale as Reading) ──────────────────────

export function listeningBand(raw: number): number {
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

// ── Flatten answers into results ──────────────────────────────────────────────

export function flattenListening(
  test: IELTSListeningTest,
  answers: ListeningAnswerMap
): ListeningQuestionResult[] {
  const results: ListeningQuestionResult[] = [];

  for (const part of test.parts) {
    for (const q of part.questions) {
      const given = answers[q.id] ?? "";

      let isCorrect = false;
      let correctStr = "";
      let givenStr = given;
      let questionText = "";

      if (q.type === "fill_blank") {
        questionText = [q.before, "___", q.after].filter(Boolean).join(" ");
        correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
        isCorrect = given.trim().toLowerCase() === correctStr.toLowerCase();
      } else if (q.type === "mc_single") {
        questionText = q.stem ?? "";
        correctStr = Array.isArray(q.correct) ? q.correct[0] : q.correct;
        isCorrect = given === correctStr;
      } else if (q.type === "mc_multiple") {
        questionText = q.stem ?? "";
        const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
        correctStr = correctArr.join(", ");
        try {
          const givenArr: string[] = JSON.parse(given || "[]");
          givenStr = givenArr.join(", ");
          isCorrect =
            correctArr.length === givenArr.length &&
            correctArr.every((c) => givenArr.includes(c));
        } catch {
          isCorrect = false;
        }
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

  return results;
}

// ── Build full result ─────────────────────────────────────────────────────────

export function buildListeningResult(
  test: IELTSListeningTest,
  answers: ListeningAnswerMap,
  timeTakenSeconds: number
): ListeningResult {
  const mm = Math.floor(timeTakenSeconds / 60).toString().padStart(2, "0");
  const ss = (timeTakenSeconds % 60).toString().padStart(2, "0");

  const questions = flattenListening(test, answers);
  const score = questions.filter((q) => q.isCorrect).length;
  const total = questions.length;
  const band = listeningBand(score);

  return {
    exam: test.exam,
    type: "Academic Listening",
    score,
    total,
    band,
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    timeTaken: `${mm} min ${ss} sec`,
    questions,
  };
}
