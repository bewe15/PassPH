// ── PTE Academic Listening Task Types ─────────────────────────────────────────

export interface SummariseSpokenTextTask {
  id: string;
  type: "summarise_spoken_text";
  topic: string;
  audioText: string;   // TTS source
  audioUrl: string;
  wordMin: number;     // 50
  wordMax: number;     // 70
  responseSeconds: number; // 600 (10 min)
}

export interface MultipleChoiceMultiTask {
  id: string;
  type: "mc_multi";
  audioText: string;
  audioUrl: string;
  question: string;
  options: string[];
  correctIndexes: number[];
}

export interface FillBlanksListeningTask {
  id: string;
  type: "fill_blanks";
  audioText: string;   // TTS source — contains the full text
  audioUrl: string;
  transcript: string;  // shown to user, blanks marked as ___BLANK___
  answers: string[];   // correct words in order
}

export interface HighlightCorrectSummaryTask {
  id: string;
  type: "highlight_summary";
  audioText: string;
  audioUrl: string;
  summaries: string[];
  correctIndex: number;
}

export interface MultipleChoiceSingleTask {
  id: string;
  type: "mc_single";
  audioText: string;
  audioUrl: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface SelectMissingWordTask {
  id: string;
  type: "select_missing_word";
  audioText: string;   // full text — last word(s) replaced by beep in real PTE
  audioUrl: string;
  options: string[];
  correctIndex: number;
}

export interface HighlightIncorrectWordsTask {
  id: string;
  type: "highlight_incorrect";
  audioText: string;   // correct spoken text
  audioUrl: string;
  displayText: string; // text shown to user — contains some wrong words
  incorrectIndexes: number[]; // word indexes (0-based) that are wrong
}

export interface WriteFromDictationTask {
  id: string;
  type: "write_dictation";
  sentence: string;    // TTS source + correct answer
  audioUrl: string;
}

export type PTEListeningTask =
  | SummariseSpokenTextTask
  | MultipleChoiceMultiTask
  | FillBlanksListeningTask
  | HighlightCorrectSummaryTask
  | MultipleChoiceSingleTask
  | SelectMissingWordTask
  | HighlightIncorrectWordsTask
  | WriteFromDictationTask;

export interface PTEListeningTest {
  id: string;
  title: string;
  totalMinutes: number;
  summariseSpokenText: SummariseSpokenTextTask[];
  mcMulti: MultipleChoiceMultiTask[];
  fillBlanks: FillBlanksListeningTask[];
  highlightSummary: HighlightCorrectSummaryTask[];
  mcSingle: MultipleChoiceSingleTask[];
  selectMissingWord: SelectMissingWordTask[];
  highlightIncorrect: HighlightIncorrectWordsTask[];
  writeDictation: WriteFromDictationTask[];
}
