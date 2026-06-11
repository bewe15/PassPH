import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-3",
  exam: "IELTS",
  title: "IELTS Speaking Test 3 — Education & Learning",
  parts: [
    {
      part: 1,
      topic: "School and Studying",
      speakSeconds: 40,
      questions: [
        {
          id: 1,
          question: "What subject did you enjoy most at school? Why?",
          tip: "Name the subject and give a specific reason you liked it.",
        },
        {
          id: 2,
          question: "Do you prefer studying alone or with other people?",
          tip: "Give your preference and explain with a reason or experience.",
        },
        {
          id: 3,
          question: "How do you usually prepare for exams or important tests?",
          tip: "Describe your study habits and any techniques you use.",
        },
        {
          id: 4,
          question: "Do you think it is important to continue learning after you finish school?",
          tip: "Give your view and support it with an example.",
        },
        {
          id: 5,
          question: "How much time do you spend reading each day?",
          tip: "Mention what you read and why (or why not) you read regularly.",
        },
      ],
    },
    {
      part: 2,
      topic: "An Influential Teacher",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a teacher who had a big influence on you.",
      bulletPoints: [
        "Who the teacher was and what subject they taught",
        "What made this teacher different from others",
        "How they influenced you",
        "And explain what you learned from this teacher beyond the subject",
      ],
    },
    {
      part: 3,
      topic: "Education and Society",
      speakSeconds: 60,
      questions: [
        {
          id: 1,
          question: "Do you think the education system in your country prepares young people well for adult life?",
        },
        {
          id: 2,
          question: "Some people believe university education should be free. What are the arguments for and against this?",
        },
        {
          id: 3,
          question: "How do you think online learning will change traditional education in the coming decades?",
        },
        {
          id: 4,
          question: "Should schools focus more on practical skills or academic knowledge? Why?",
        },
        {
          id: 5,
          question: "How does the level of education in a country affect its economic development?",
        },
      ],
    },
  ],
};

export default test;
