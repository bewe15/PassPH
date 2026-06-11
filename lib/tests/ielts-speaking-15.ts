import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-15",
  exam: "IELTS",
  title: "IELTS Speaking Test 15 — Memory & Childhood",
  parts: [
    {
      part: 1,
      topic: "Childhood and Memories",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Where did you grow up? What was it like?", tip: "Describe your hometown or neighbourhood in 2–3 sentences." },
        { id: 2, question: "What did you enjoy doing most as a child?", tip: "Name an activity and explain why you loved it." },
        { id: 3, question: "Do you have a good memory? Can you recall things easily?", tip: "Describe your memory ability with an example." },
        { id: 4, question: "What is one of your earliest childhood memories?", tip: "Describe the memory in detail — who, what, where." },
        { id: 5, question: "Are there things you miss about being a child?", tip: "Name 1–2 specific things and explain why you miss them." },
      ],
    },
    {
      part: 2,
      topic: "A Happy Childhood Memory",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a happy memory from your childhood.",
      bulletPoints: [
        "What happened and when it occurred",
        "Who was involved",
        "Where it took place",
        "And explain why this memory makes you happy when you think about it",
      ],
    },
    {
      part: 3,
      topic: "Childhood and Growing Up",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "How has childhood changed for children growing up today compared to previous generations?" },
        { id: 2, question: "Do you think children today have too much screen time? What are the effects?" },
        { id: 3, question: "What are the most important things parents can do to ensure a happy childhood for their children?" },
        { id: 4, question: "How much do childhood experiences shape a person's adult personality and behaviour?" },
        { id: 5, question: "Do you think children today face more pressure than previous generations? Why?" },
      ],
    },
  ],
};

export default test;
