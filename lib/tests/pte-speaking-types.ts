// ── PTE Academic Speaking Task Types ─────────────────────────────────────────

export interface ReadAloudTask {
  id: string;
  type: "read_aloud";
  text: string;
  prepSeconds: number;   // 30–35s
  speakSeconds: number;  // 30–40s
}

export interface RepeatSentenceTask {
  id: string;
  type: "repeat_sentence";
  sentence: string;   // text used for TTS generation
  audioUrl: string;   // pre-generated via Google TTS
  speakSeconds: number; // 15s
}

export interface DescribeImageTask {
  id: string;
  type: "describe_image";
  imageType: "bar_chart" | "line_graph" | "pie_chart" | "process" | "table";
  title: string;          // chart title shown above image
  svgContent: string;     // inline SVG markup
  keyPoints: string[];    // hints shown after attempt (for self-review)
  prepSeconds: number;    // 25s
  speakSeconds: number;   // 40s
}

export interface RetellLectureTask {
  id: string;
  type: "retell_lecture";
  topic: string;
  lectureText: string;    // text used for TTS generation
  audioUrl: string;       // pre-generated via Google TTS
  keyPoints: string[];    // hints for self-review
  prepSeconds: number;    // 10s after audio ends
  speakSeconds: number;   // 40s
}

export interface AnswerShortTask {
  id: string;
  type: "answer_short";
  question: string;       // text used for TTS generation
  audioUrl: string;       // pre-generated via Google TTS
  expectedAnswer: string; // shown after attempt for self-review
  speakSeconds: number;   // 10s
}

export type PTETask =
  | ReadAloudTask
  | RepeatSentenceTask
  | DescribeImageTask
  | RetellLectureTask
  | AnswerShortTask;

export interface PTESpeakingTest {
  id: string;
  title: string;
  totalMinutes: number;
  readAloud: ReadAloudTask[];
  repeatSentence: RepeatSentenceTask[];
  describeImage: DescribeImageTask[];
  retellLecture: RetellLectureTask[];
  answerShort: AnswerShortTask[];
}

// ── PTE Score Band ────────────────────────────────────────────────────────────
// PTE scores 10–90 overall communicative score

export interface PTESpeakingResult {
  testId: string;
  attemptId: string;
  overallScore: number;   // 10–90
  fluencyScore: number;   // 10–90
  pronunciationScore: number; // 10–90
  contentScore: number;   // 10–90
  breakdown: PTETaskScore[];
}

export interface PTETaskScore {
  taskId: string;
  taskType: string;
  score: number;          // 0–5 per task
  feedback: string;
  transcript?: string;
}

// ── AI Scoring Criteria ───────────────────────────────────────────────────────

export const PTE_SCORING_PROMPT = `You are scoring a PTE Academic Speaking response. Evaluate on:

1. ORAL FLUENCY (0–5): Rhythm, pace, pausing. 5 = native-like flow, no hesitation.
2. PRONUNCIATION (0–5): Clarity of sounds, stress, intonation. 5 = easily understood.
3. CONTENT (0–5, where applicable): Relevance, accuracy, completeness of response.

Return JSON: { fluency: number, pronunciation: number, content: number, feedback: string }`;
