import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-2",
  exam: "IELTS",
  title: "IELTS Speaking Test 2 — Work & Career",
  parts: [
    {
      part: 1,
      topic: "Work and Study",
      speakSeconds: 40,
      questions: [
        {
          id: 1,
          question: "Do you work or are you a student? What do you do?",
          tip: "Briefly describe your role or field of study.",
        },
        {
          id: 2,
          question: "Do you enjoy your work or studies? Why or why not?",
          tip: "Give specific reasons and an example if possible.",
        },
        {
          id: 3,
          question: "What hours do you work or study each day?",
          tip: "Describe your typical daily schedule briefly.",
        },
        {
          id: 4,
          question: "Would you prefer to work from home or in an office? Why?",
          tip: "Pick one and give two reasons.",
        },
        {
          id: 5,
          question: "What kind of job would you like to have in the future?",
          tip: "Talk about a dream job or career goal and why it appeals to you.",
        },
      ],
    },
    {
      part: 2,
      topic: "A Skill You Would Like to Learn",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a skill you would like to learn or improve.",
      bulletPoints: [
        "What the skill is",
        "Why you want to learn or improve it",
        "How you would go about learning it",
        "And explain how it would benefit you in the future",
      ],
    },
    {
      part: 3,
      topic: "Work and Employment",
      speakSeconds: 60,
      questions: [
        {
          id: 1,
          question: "What qualities do you think are most important for a person to be successful in their career?",
        },
        {
          id: 2,
          question: "Do you think it is better to have job security or a high salary? Why?",
        },
        {
          id: 3,
          question: "How is the concept of a 'career for life' changing in modern society?",
        },
        {
          id: 4,
          question: "To what extent do you think automation and artificial intelligence will change the job market?",
        },
        {
          id: 5,
          question: "Should governments do more to support people who lose their jobs due to technological change?",
        },
      ],
    },
  ],
};

export default test;
