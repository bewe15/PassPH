export type WritingTaskType = "ielts_task1" | "ielts_task2" | "pte_swt" | "pte_essay";

// ── Chart data types ──────────────────────────────────────────────────────────

export type ChartType = "line" | "bar" | "pie" | "table" | "process";

export interface ChartSeries {
  key: string;
  label: string;
  color?: string;
}

export interface ChartDataPoint {
  label: string;
  [key: string]: string | number;
}

export interface PieSlice {
  name: string;
  value: number;
  color?: string;
}

export interface ChartData {
  type: ChartType;
  title: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  unit?: string;
  series?: ChartSeries[];
  data?: ChartDataPoint[];
  pieData?: PieSlice[];
  tableHeaders?: string[];
  tableRows?: (string | number)[][];
  processText?: string;
}

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
  chartDescription?: string;
  chartData?: ChartData;     // structured data for rendering actual chart
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
  chartData?: ChartData;
  passage?: string;
  userResponse: string;
  wordCount: number;
  modelAnswer: string;
  bandDescriptors: BandDescriptor[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scoreBreakdown?: any;
}

export interface WritingResult {
  exam: string;
  testId: string;
  title: string;
  date: string;
  timeTaken: string;
  tasks: WritingTaskResult[];
  overallBand?: number;
}
