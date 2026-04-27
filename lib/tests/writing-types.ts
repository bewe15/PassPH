export type WritingTaskType = "ielts_task1" | "ielts_task2" | "pte_swt" | "pte_essay";

export interface BandDescriptor {
  criterion: string;
  band7: string;
  band8: string;
}

export interface WritingTask {
  id: number;
  type: WritingTaskType;
  taskLabel: string;
  instructions: string;
  timeSeconds: number;
  minWords: number;
  maxWords?: number;
  prompt: string;
  chartDescription?: string; // for IELTS Task 1 — describes the visual data in text
  passage?: string;          // for PTE SWT
  modelAnswer: string;
  bandDescriptors: BandDescriptor[];
}

export interface WritingTest {
  id: string;
  exam: "IELTS" | "PTE";
  title: string;
  totalSeconds: number;
  tasks: WritingTask[];
}

// Stored in sessionStorage after submission
export interface WritingTaskResult {
  taskId: number;
  taskLabel: string;
  type: WritingTaskType;
  prompt: string;
  chartDescription?: string;
  passage?: string;
  userResponse: string;
  wordCount: number;
  modelAnswer: string;
  bandDescriptors: BandDescriptor[];
}

export interface WritingResult {
  exam: string;
  testId: string;
  title: string;
  date: string;
  timeTaken: string;
  tasks: WritingTaskResult[];
}
