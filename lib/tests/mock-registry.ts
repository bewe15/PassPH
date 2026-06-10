// ── Mock Exam Registry ────────────────────────────────────────────────────────

export interface MockSection {
  key: "listening" | "reading" | "writing";
  label: string;
  testId: string;
  durationMinutes: number;
  route: string;          // e.g. "/listen/ielts-listening-1"
  questions: number;
  description: string;
}

export interface MockExam {
  id: string;
  title: string;
  exam: "IELTS" | "PTE";
  type: "Academic" | "General Training";
  totalMinutes: number;
  sections: MockSection[];
  description: string;
}

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "ielts-mock-1",
    title: "IELTS Academic Mock Exam 1",
    exam: "IELTS",
    type: "Academic",
    totalMinutes: 150,
    description: "Full-length IELTS Academic mock exam covering Listening, Reading, and Writing under timed conditions.",
    sections: [
      {
        key: "listening",
        label: "Listening",
        testId: "ielts-listening-1",
        durationMinutes: 30,
        route: "/listen/ielts-listening-1",
        questions: 40,
        description: "4 parts, 40 questions. Audio transcript available while audio is in production.",
      },
      {
        key: "reading",
        label: "Reading",
        testId: "ielts-reading-1",
        durationMinutes: 60,
        route: "/test/ielts-reading-1",
        questions: 40,
        description: "3 passages, 40 questions. Academic texts with multiple question types.",
      },
      {
        key: "writing",
        label: "Writing",
        testId: "ielts-writing-1",
        durationMinutes: 60,
        route: "/write/ielts-writing-1",
        questions: 2,
        description: "Task 1 (graph/chart) and Task 2 (essay). Model answers and AI feedback (Pro) included.",
      },
    ],
  },
  {
    id: "ielts-mock-2",
    title: "IELTS Academic Mock Exam 2",
    exam: "IELTS",
    type: "Academic",
    totalMinutes: 150,
    description: "Second full-length IELTS Academic mock exam with new passages and writing prompts.",
    sections: [
      {
        key: "listening",
        label: "Listening",
        testId: "ielts-listening-1",
        durationMinutes: 30,
        route: "/listen/ielts-listening-1",
        questions: 40,
        description: "4 parts, 40 questions.",
      },
      {
        key: "reading",
        label: "Reading",
        testId: "ielts-reading-2",
        durationMinutes: 60,
        route: "/test/ielts-reading-2",
        questions: 40,
        description: "3 passages, 40 questions.",
      },
      {
        key: "writing",
        label: "Writing",
        testId: "ielts-writing-2",
        durationMinutes: 60,
        route: "/write/ielts-writing-2",
        questions: 2,
        description: "Task 1 + Task 2.",
      },
    ],
  },
];

export function getMockExam(id: string): MockExam | null {
  return MOCK_EXAMS.find((m) => m.id === id) ?? null;
}

// Section icons (string keys for server components)
export const SECTION_ICONS: Record<string, string> = {
  listening: "headphones",
  reading: "book",
  writing: "pen",
};

export const SECTION_COLORS: Record<string, string> = {
  listening: "#8b5cf6",
  reading: "#22d3ee",
  writing: "#3b82f6",
};
