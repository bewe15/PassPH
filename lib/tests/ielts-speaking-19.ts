import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-19",
  exam: "IELTS",
  title: "IELTS Speaking Test 19 — Happiness & Well-being",
  parts: [
    {
      part: 1,
      topic: "Happiness and Daily Life",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "What do you do to relax and unwind after a busy day?", tip: "Name 1–2 activities and explain why they help you relax." },
        { id: 2, question: "What makes you feel happiest in your everyday life?", tip: "Be specific — name one or two things that bring you joy." },
        { id: 3, question: "Do you think you have a good work-life balance? Why or why not?", tip: "Be honest and give a reason." },
        { id: 4, question: "Are there things you do regularly that help you stay mentally healthy?", tip: "Describe a habit or routine that supports your wellbeing." },
        { id: 5, question: "Do you think the people in your country are generally happy? Why?", tip: "Share your observation with a reason or example." },
      ],
    },
    {
      part: 2,
      topic: "A Time When You Felt Very Happy",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a time in your life when you felt very happy.",
      bulletPoints: [
        "When and where this happened",
        "What you were doing at the time",
        "Who you were with",
        "And explain why you felt so happy on this occasion",
      ],
    },
    {
      part: 3,
      topic: "Happiness in Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "Do you think wealth and material possessions lead to happiness? Why or why not?" },
        { id: 2, question: "Should governments measure the happiness of their citizens, not just economic growth?" },
        { id: 3, question: "How has the pace of modern life affected people's levels of stress and happiness?" },
        { id: 4, question: "Do you think social comparison on social media is making people less happy?" },
        { id: 5, question: "What do you think are the key factors that determine a person's overall wellbeing?" },
      ],
    },
  ],
};

export default test;
