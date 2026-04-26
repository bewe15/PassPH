export type ExamType = "IELTS" | "PTE";

export type QuestionType =
  | "tfng" | "ynng"
  | "mc_single" | "mc_multiple"
  | "match_headings" | "match_info"
  | "sentence_completion" | "summary_completion" | "short_answer"
  | "reorder" | "rfib" | "rwfib";

export interface Heading { label: string; text: string; }
export interface MCOption { label: string; text: string; }

export interface QuestionItem {
  id: number;
  correct: string | string[];
  explanation: string;
  // tfng / ynng
  statement?: string;
  // mc_single / mc_multiple
  stem?: string;
  options?: MCOption[];
  pickCount?: number;
  // match_headings: which paragraph letter this question is about
  paragraph?: string;
  // match_info: statement to match to a paragraph
  text?: string;
  // sentence_completion / short_answer
  before?: string;
  after?: string;
  wordLimit?: number;
  // summary_completion / rfib blank index (maps to {{n}} in shared text)
  blankId?: number;
}

export interface Section {
  type: QuestionType;
  instructions: string;
  questionRange: string;
  // match_headings shared pool
  headings?: Heading[];
  // match_info paragraph targets
  paragraphLetters?: string[];
  // summary_completion / rfib shared text
  summaryTitle?: string;
  summaryText?: string;
  wordBank?: string[];
  questions: QuestionItem[];
}

export interface IELTSPassage {
  number: 1 | 2 | 3;
  title: string;
  paragraphs: { letter: string; text: string }[];
  sections: Section[];
}

export interface IELTSTest {
  id: string;
  exam: "IELTS";
  title: string;
  totalSeconds: number;
  passages: [IELTSPassage, IELTSPassage, IELTSPassage];
}

// ── PTE ──────────────────────────────────────────────────────────────────────

export interface PTETask {
  id: number;
  type: QuestionType;
  taskLabel: string;
  instructions: string;
  // mc_single / mc_multiple
  passage?: string;
  stem?: string;
  options?: MCOption[];
  correct?: string | string[];
  pickCount?: number;
  explanation?: string;
  // reorder
  sentences?: { id: string; text: string }[];
  correctOrder?: string[];
  reorderExplanation?: string;
  // rfib
  rfibText?: string;
  wordBank?: string[];
  blanks?: { id: number; correct: string; explanation: string }[];
  // rwfib  — passage text uses {{n}} placeholders; blanks has options per n
  rwfibText?: string;
  rwfibBlanks?: { id: number; options: string[]; correct: string; explanation: string }[];
}

export interface PTETest {
  id: string;
  exam: "PTE";
  title: string;
  totalSeconds: number;
  tasks: PTETask[];
}

export type AnyTest = IELTSTest | PTETest;

// ── Results ───────────────────────────────────────────────────────────────────

export interface QuestionResult {
  id: number;
  text: string;
  correct: string;
  given: string;
  isCorrect: boolean;
  explanation: string;
}

export interface TestResult {
  exam: string;
  type: string;
  score: number;
  total: number;
  band: number;
  date: string;
  timeTaken: string;
  questions: QuestionResult[];
}

export type AnswerMap = Record<number, string>;
