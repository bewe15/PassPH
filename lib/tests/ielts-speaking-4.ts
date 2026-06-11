import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-4",
  exam: "IELTS",
  title: "IELTS Speaking Test 4 — Travel & Culture",
  parts: [
    {
      part: 1,
      topic: "Travel and Holidays",
      speakSeconds: 40,
      questions: [
        {
          id: 1,
          question: "Do you enjoy travelling? Why or why not?",
          tip: "Give your view and mention what you enjoy or dislike about it.",
        },
        {
          id: 2,
          question: "What is your hometown like? Would you recommend it to visitors?",
          tip: "Describe 2-3 things about your hometown briefly.",
        },
        {
          id: 3,
          question: "Do you prefer beach holidays or city holidays? Why?",
          tip: "Choose one and give clear reasons.",
        },
        {
          id: 4,
          question: "Have you ever tried food from another country? What was it like?",
          tip: "Describe the experience and your reaction to it.",
        },
        {
          id: 5,
          question: "How do people in your country typically celebrate important occasions or festivals?",
          tip: "Describe a specific festival or tradition briefly.",
        },
      ],
    },
    {
      part: 2,
      topic: "A Place You Would Like to Visit",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a country or place you would like to visit.",
      bulletPoints: [
        "Where the place is",
        "Why you want to visit it",
        "What you would do or see there",
        "And explain why this place appeals to you more than other destinations",
      ],
    },
    {
      part: 3,
      topic: "Tourism and Globalisation",
      speakSeconds: 60,
      questions: [
        {
          id: 1,
          question: "What are the main benefits of international tourism for local communities?",
        },
        {
          id: 2,
          question: "Some people argue that mass tourism is destroying local cultures. Do you agree?",
        },
        {
          id: 3,
          question: "How has globalisation affected cultural traditions around the world?",
        },
        {
          id: 4,
          question: "Do you think it is important for countries to protect their cultural heritage? How can this be done?",
        },
        {
          id: 5,
          question: "What responsibilities do tourists have when visiting other countries and cultures?",
        },
      ],
    },
  ],
};

export default test;
