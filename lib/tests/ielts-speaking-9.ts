import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-9",
  exam: "IELTS",
  title: "IELTS Speaking Test 9 — Food & Cooking",
  parts: [
    {
      part: 1,
      topic: "Food and Eating Habits",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "What is your favourite food? Why do you enjoy it?", tip: "Name the dish and give specific reasons you like it." },
        { id: 2, question: "Do you prefer cooking at home or eating out? Why?", tip: "Give your preference and explain with a reason." },
        { id: 3, question: "How often do you cook? What do you usually make?", tip: "Describe your cooking habits briefly." },
        { id: 4, question: "Have your eating habits changed in recent years? How?", tip: "Compare what you eat now vs. before." },
        { id: 5, question: "Is there a food from another country that you enjoy? What is it?", tip: "Name the dish and describe the experience of trying it." },
      ],
    },
    {
      part: 2,
      topic: "A Special Meal",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a special meal you have had or would like to have.",
      bulletPoints: [
        "What the meal was or would be",
        "Where you had it or would have it",
        "Who you were with or would be with",
        "And explain why the meal was or would be special",
      ],
    },
    {
      part: 3,
      topic: "Food and Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "How has fast food culture changed people's eating habits globally?" },
        { id: 2, question: "Should governments do more to regulate unhealthy food products and advertising?" },
        { id: 3, question: "What are the main reasons why food waste is such a serious problem today?" },
        { id: 4, question: "Do you think people are becoming more conscious about the environmental impact of their food choices?" },
        { id: 5, question: "How important is it for countries to preserve their traditional cuisines?" },
      ],
    },
  ],
};

export default test;
