import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-5",
  exam: "IELTS",
  title: "IELTS Speaking Test 5 — Health & Environment",
  parts: [
    {
      part: 1,
      topic: "Health and Lifestyle",
      speakSeconds: 40,
      questions: [
        {
          id: 1,
          question: "Do you do any sport or physical exercise? How often?",
          tip: "Name the activity and briefly describe your routine.",
        },
        {
          id: 2,
          question: "Do you think people in your country have a healthy diet? Why or why not?",
          tip: "Give a general observation and support it with an example.",
        },
        {
          id: 3,
          question: "How do you usually relax after a stressful day?",
          tip: "Describe 1-2 activities you do to unwind.",
        },
        {
          id: 4,
          question: "Do you spend much time outdoors? What do you do outside?",
          tip: "Mention your local environment and any outdoor habits.",
        },
        {
          id: 5,
          question: "How important is it to get enough sleep every night?",
          tip: "Share your view and mention any personal experience.",
        },
      ],
    },
    {
      part: 2,
      topic: "Helping the Environment",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a time when you did something to help protect the environment.",
      bulletPoints: [
        "What you did",
        "When and where you did it",
        "Why you decided to do it",
        "And explain what effect you think this action had",
      ],
    },
    {
      part: 3,
      topic: "Environmental Issues",
      speakSeconds: 60,
      questions: [
        {
          id: 1,
          question: "What do you think is the most serious environmental problem facing the world today?",
        },
        {
          id: 2,
          question: "Should governments or individuals take more responsibility for protecting the environment?",
        },
        {
          id: 3,
          question: "Do you think economic development and environmental protection can go hand in hand?",
        },
        {
          id: 4,
          question: "How effective do you think international agreements like climate summits are in addressing environmental issues?",
        },
        {
          id: 5,
          question: "What lifestyle changes should people make to reduce their impact on the environment?",
        },
      ],
    },
  ],
};

export default test;
