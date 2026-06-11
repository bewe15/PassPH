import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-17",
  exam: "IELTS",
  title: "IELTS Speaking Test 17 — Business & Money",
  parts: [
    {
      part: 1,
      topic: "Money and Finances",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Do you think it is important to save money? Why?", tip: "Give your view and support it with a reason." },
        { id: 2, question: "Do you prefer to pay for things in cash or by card?", tip: "State your preference and explain why." },
        { id: 3, question: "Have you ever started or thought about starting your own business?", tip: "Share your experience or ambition briefly." },
        { id: 4, question: "Do you think money can buy happiness?", tip: "Give a nuanced answer — not just yes or no." },
        { id: 5, question: "What do you usually spend most of your money on?", tip: "Identify your main spending area and whether you think it is worthwhile." },
      ],
    },
    {
      part: 2,
      topic: "A Successful Business or Entrepreneur",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a business or entrepreneur that you admire.",
      bulletPoints: [
        "Who the entrepreneur is or what the business does",
        "How it became successful",
        "What makes it stand out from others",
        "And explain why you admire this business or person",
      ],
    },
    {
      part: 3,
      topic: "Business and the Economy",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "What qualities do you think are most important for someone who wants to run a successful business?" },
        { id: 2, question: "Do small businesses play an important role in a country's economy? How?" },
        { id: 3, question: "What are the advantages and disadvantages of multinational corporations operating in developing countries?" },
        { id: 4, question: "Should businesses have a responsibility to society beyond making profit?" },
        { id: 5, question: "Do you think the growing gap between rich and poor is inevitable in a free-market economy?" },
      ],
    },
  ],
};

export default test;
