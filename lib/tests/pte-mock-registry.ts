export interface PTEMockSection {
  key: "speaking" | "writing" | "reading" | "listening";
  label: string;
  testId: string;
  durationMinutes: number;
  route: string;
  questions: number;
  description: string;
}

export const PTE_MOCK_POOLS = {
  speaking:  Array.from({ length: 20 }, (_, i) => `pte-speaking-${i + 1}`),
  writing:   Array.from({ length: 20 }, (_, i) => `pte-writing-${i + 1}`),
  reading:   Array.from({ length: 20 }, (_, i) => `pte-reading-${i + 1}`),
  listening: Array.from({ length: 20 }, (_, i) => `pte-listening-${i + 1}`),
};

export function pickRandomPTETests() {
  function pick(pool: string[]) {
    return pool[Math.floor(Math.random() * pool.length)];
  }
  return {
    speaking:  pick(PTE_MOCK_POOLS.speaking),
    writing:   pick(PTE_MOCK_POOLS.writing),
    reading:   pick(PTE_MOCK_POOLS.reading),
    listening: pick(PTE_MOCK_POOLS.listening),
  };
}

export function buildPTESessionSections(session: {
  assigned_speaking: string;
  assigned_writing: string;
  assigned_reading: string;
  assigned_listening: string;
}): PTEMockSection[] {
  return [
    {
      key: "speaking",
      label: "Speaking",
      testId: session.assigned_speaking,
      durationMinutes: 30,
      route: `/pte-speak/${session.assigned_speaking}`,
      questions: 5,
      description: "Read Aloud, Repeat Sentence, Describe Image, Re-tell Lecture, Answer Short Question.",
    },
    {
      key: "writing",
      label: "Writing",
      testId: session.assigned_writing,
      durationMinutes: 30,
      route: `/write/${session.assigned_writing}`,
      questions: 2,
      description: "Summarise Written Text + Essay. Tests academic writing under timed conditions.",
    },
    {
      key: "reading",
      label: "Reading",
      testId: session.assigned_reading,
      durationMinutes: 30,
      route: `/test/${session.assigned_reading}`,
      questions: 5,
      description: "Multiple choice, re-order paragraphs, fill in the blanks, and more.",
    },
    {
      key: "listening",
      label: "Listening",
      testId: session.assigned_listening,
      durationMinutes: 45,
      route: `/pte-listen/${session.assigned_listening}`,
      questions: 16,
      description: "All 8 PTE Listening task types including Summarise Spoken Text and Write from Dictation.",
    },
  ];
}
