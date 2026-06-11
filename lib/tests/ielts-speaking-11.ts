import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-11",
  exam: "IELTS",
  title: "IELTS Speaking Test 11 — Transport & Cities",
  parts: [
    {
      part: 1,
      topic: "Transport and Getting Around",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "How do you usually travel to work or school?", tip: "Name your main mode of transport and briefly describe the journey." },
        { id: 2, question: "Is public transport in your city reliable and affordable?", tip: "Give your honest opinion with a reason." },
        { id: 3, question: "Do you enjoy driving or would you prefer someone else to drive?", tip: "Give your preference and explain why." },
        { id: 4, question: "Have you ever experienced traffic problems in your city? What happened?", tip: "Describe a specific experience briefly." },
        { id: 5, question: "How long does it typically take you to get to your workplace or school?", tip: "Describe your commute time and whether you find it acceptable." },
      ],
    },
    {
      part: 2,
      topic: "A City You Have Visited",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a city you have visited or would like to visit.",
      bulletPoints: [
        "Where the city is located",
        "What the city is known for",
        "What you did or would do there",
        "And explain why this city appealed or would appeal to you",
      ],
    },
    {
      part: 3,
      topic: "Urban Life and Transport",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "What are the main challenges faced by large cities in managing traffic and transport?" },
        { id: 2, question: "Do you think cities should ban private cars from city centres? Why or why not?" },
        { id: 3, question: "How can urban planners make cities more liveable and sustainable?" },
        { id: 4, question: "What are the advantages and disadvantages of living in a large city compared to a small town?" },
        { id: 5, question: "Do you think remote working will change the design and function of cities in the future?" },
      ],
    },
  ],
};

export default test;
