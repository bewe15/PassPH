// ── Listening Test Types ──────────────────────────────────────────────────────

export interface ListeningOption {
  label: string;
  text: string;
}

export interface ListeningQuestion {
  id: number;
  type: "fill_blank" | "mc_single" | "mc_multiple";
  // fill_blank — "Complete the form: Name: ___"
  before?: string;
  after?: string;
  wordLimit?: number;
  // mc_single / mc_multiple
  stem?: string;
  options?: ListeningOption[];
  pickCount?: number; // mc_multiple: how many to select
  correct: string | string[];
  explanation: string;
}

export interface ListeningPart {
  part: 1 | 2 | 3 | 4;
  title: string;
  context: string;       // Brief situation description shown to student
  audioUrl: string;      // Empty string = audio not yet available
  questionRange: string; // e.g. "Questions 1–10"
  instructions: string;
  transcript?: string;   // Shown as fallback when audio not yet available
  questions: ListeningQuestion[];
}

export interface IELTSListeningTest {
  id: string;
  exam: "IELTS";
  title: string;
  totalSeconds: number; // 1800 = 30 min
  parts: [ListeningPart, ListeningPart, ListeningPart, ListeningPart];
}

// ── Results ───────────────────────────────────────────────────────────────────

export interface ListeningQuestionResult {
  id: number;
  text: string;
  correct: string;
  given: string;
  isCorrect: boolean;
  explanation: string;
}

export interface ListeningResult {
  exam: string;
  type: string;
  score: number;
  total: number;
  band: number;
  date: string;
  timeTaken: string;
  questions: ListeningQuestionResult[];
}

export type ListeningAnswerMap = Record<number, string>;
