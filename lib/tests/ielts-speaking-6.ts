import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-6",
  exam: "IELTS",
  title: "IELTS Speaking Test 6 — Family & Relationships",
  parts: [
    {
      part: 1,
      topic: "Family and Home",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Do you have a large or small family? Tell me about them.", tip: "Briefly describe your family members and their roles." },
        { id: 2, question: "How much time do you spend with your family each week?", tip: "Describe your typical week and when you see family." },
        { id: 3, question: "What do you enjoy doing together as a family?", tip: "Name 1–2 activities and why you enjoy them together." },
        { id: 4, question: "Have family relationships changed compared to previous generations?", tip: "Compare modern families with how families used to be." },
        { id: 5, question: "Who in your family has influenced you the most? Why?", tip: "Name one person and explain their influence with a specific example." },
      ],
    },
    {
      part: 2,
      topic: "An Important Relationship",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe an important relationship in your life.",
      bulletPoints: [
        "Who the person is and how you know them",
        "How long you have known each other",
        "What makes this relationship special",
        "And explain why this person is important to you",
      ],
    },
    {
      part: 3,
      topic: "Relationships in Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "How have social media and technology changed the way people maintain relationships?" },
        { id: 2, question: "Do you think it is harder for young people today to form lasting friendships than it was in the past?" },
        { id: 3, question: "What role should governments play in supporting family structures?" },
        { id: 4, question: "How important are community relationships compared to family relationships in modern society?" },
        { id: 5, question: "Do you think the concept of marriage is becoming less important in contemporary society?" },
      ],
    },
  ],
};

export default test;
