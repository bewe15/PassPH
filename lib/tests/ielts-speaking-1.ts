import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-1",
  exam: "IELTS",
  title: "IELTS Speaking Test 1 — Technology & Communication",
  parts: [
    {
      part: 1,
      topic: "Technology in Daily Life",
      speakSeconds: 40,
      questions: [
        {
          id: 1,
          question: "How often do you use the internet in your daily life?",
          tip: "Talk about when, where, and what you use it for.",
        },
        {
          id: 2,
          question: "Do you prefer to communicate with friends by phone calls or by text messages? Why?",
          tip: "Give a clear preference and explain with a reason or example.",
        },
        {
          id: 3,
          question: "Has technology changed the way you spend your free time?",
          tip: "Compare what you do now vs. what you did before smartphones.",
        },
        {
          id: 4,
          question: "Do you think people rely too much on technology nowadays?",
          tip: "Share your opinion and support it with a specific example.",
        },
        {
          id: 5,
          question: "What type of technology do you find most useful in your studies or work?",
          tip: "Name a specific tool or device and explain why it helps you.",
        },
      ],
    },
    {
      part: 2,
      topic: "A Useful App or Website",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe an app or website that you find useful.",
      bulletPoints: [
        "What the app or website is",
        "How often you use it",
        "What you use it for",
        "And explain why you find it so useful",
      ],
    },
    {
      part: 3,
      topic: "Technology and Society",
      speakSeconds: 60,
      questions: [
        {
          id: 1,
          question: "How has the internet changed the way people communicate compared to 20 years ago?",
        },
        {
          id: 2,
          question: "Do you think social media has had a positive or negative effect on society overall?",
        },
        {
          id: 3,
          question: "Some people believe that technology is making people less social. Do you agree?",
        },
        {
          id: 4,
          question: "What are the main challenges that come with people being constantly connected to their devices?",
        },
        {
          id: 5,
          question: "How do you think technology will change education in the next 20 years?",
        },
      ],
    },
  ],
};

export default test;
