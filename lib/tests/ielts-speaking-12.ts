import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-12",
  exam: "IELTS",
  title: "IELTS Speaking Test 12 — Shopping & Consumerism",
  parts: [
    {
      part: 1,
      topic: "Shopping Habits",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Do you enjoy shopping? What do you most like to buy?", tip: "State your view and give a specific category of things you buy." },
        { id: 2, question: "Do you prefer shopping in physical stores or online? Why?", tip: "Pick one and give two clear reasons." },
        { id: 3, question: "How often do you go shopping for non-essential items?", tip: "Describe your shopping frequency briefly." },
        { id: 4, question: "Do you ever buy second-hand items? Why or why not?", tip: "Give your view on second-hand shopping." },
        { id: 5, question: "Has the way you shop changed since you were younger?", tip: "Compare your past and present shopping habits." },
      ],
    },
    {
      part: 2,
      topic: "A Purchase You Were Happy With",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a purchase you made that you were very happy with.",
      bulletPoints: [
        "What you bought",
        "When and where you bought it",
        "Why you decided to buy it",
        "And explain why you were so happy with this purchase",
      ],
    },
    {
      part: 3,
      topic: "Consumerism and Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "Do you think people in your country buy too many things they do not really need?" },
        { id: 2, question: "How has online shopping changed the retail industry and high streets?" },
        { id: 3, question: "What are the environmental consequences of excessive consumerism?" },
        { id: 4, question: "Should governments introduce policies to discourage overconsumption?" },
        { id: 5, question: "Do you think advertising manipulates people into buying things they don't need?" },
      ],
    },
  ],
};

export default test;
