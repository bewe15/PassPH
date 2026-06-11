import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-8",
  exam: "IELTS",
  title: "IELTS Speaking Test 8 — Sports & Fitness",
  parts: [
    {
      part: 1,
      topic: "Sports and Physical Activity",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Do you play any sports or do regular exercise?", tip: "Name the activity and how often you do it." },
        { id: 2, question: "Did you play sports when you were a child? What did you play?", tip: "Describe a sport from your childhood briefly." },
        { id: 3, question: "Do you prefer watching sports or playing them? Why?", tip: "Pick one and give two reasons." },
        { id: 4, question: "Is there a sport you would like to try but haven't? Why that sport?", tip: "Name it and explain your interest." },
        { id: 5, question: "Are sports facilities easily available in your area?", tip: "Describe what's available and whether it's enough." },
      ],
    },
    {
      part: 2,
      topic: "A Sporting Achievement or Event",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a sporting event you have watched or participated in.",
      bulletPoints: [
        "What the sporting event was",
        "When and where it took place",
        "What happened during the event",
        "And explain why it was significant or memorable to you",
      ],
    },
    {
      part: 3,
      topic: "Sport and Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "Why do you think some countries invest so heavily in elite sports programmes?" },
        { id: 2, question: "Do professional athletes deserve the very high salaries they often receive?" },
        { id: 3, question: "How can governments encourage more people to take up physical activity?" },
        { id: 4, question: "Do you think competitive sports teach children important life skills?" },
        { id: 5, question: "Should performance-enhancing drugs ever be allowed in sports competitions?" },
      ],
    },
  ],
};

export default test;
