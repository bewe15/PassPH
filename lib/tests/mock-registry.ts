// ── Mock Exam Registry ────────────────────────────────────────────────────────

export interface MockSection {
  key: "listening" | "reading" | "writing";
  label: string;
  testId: string;
  durationMinutes: number;
  route: string;
  questions: number;
  description: string;
}

// ── Available test pools ──────────────────────────────────────────────────────

export const MOCK_POOLS = {
  listening: ["ielts-listening-1"],
  reading: Array.from({ length: 20 }, (_, i) => `ielts-reading-${i + 1}`),
  writing: Array.from({ length: 20 }, (_, i) => `ielts-writing-${i + 1}`),
};

export function pickRandomTests() {
  function pick(pool: string[]) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return {
    listening: pick(MOCK_POOLS.listening),
    reading: pick(MOCK_POOLS.reading),
    writing: pick(MOCK_POOLS.writing),
  };
}

// ── Build section list from a DB session row ──────────────────────────────────

export function buildSessionSections(session: {
  assigned_listening: string;
  assigned_reading: string;
  assigned_writing: string;
}): MockSection[] {
  return [
    {
      key: "listening",
      label: "Listening",
      testId: session.assigned_listening,
      durationMinutes: 30,
      route: `/listen/${session.assigned_listening}`,
      questions: 40,
      description: "4 parts, 40 questions. Covers conversations, monologues, and lectures.",
    },
    {
      key: "reading",
      label: "Reading",
      testId: session.assigned_reading,
      durationMinutes: 60,
      route: `/test/${session.assigned_reading}`,
      questions: 40,
      description: "3 passages, 40 questions. Academic texts with multiple question types.",
    },
    {
      key: "writing",
      label: "Writing",
      testId: session.assigned_writing,
      durationMinutes: 60,
      route: `/write/${session.assigned_writing}`,
      questions: 2,
      description: "Task 1 (graph/chart description) + Task 2 (academic essay). AI feedback on Pro.",
    },
  ];
}
