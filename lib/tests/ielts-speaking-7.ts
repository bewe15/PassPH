import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-7",
  exam: "IELTS",
  title: "IELTS Speaking Test 7 — Arts & Culture",
  parts: [
    {
      part: 1,
      topic: "Arts and Hobbies",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Do you enjoy visiting art galleries or museums? Why or why not?", tip: "Give your preference and a specific reason." },
        { id: 2, question: "Did you study any arts subjects at school? Did you enjoy them?", tip: "Name the subject and describe your experience." },
        { id: 3, question: "Do you have any creative hobbies such as drawing, painting, or music?", tip: "Describe what you do and how often." },
        { id: 4, question: "Is art important in everyday life? Why?", tip: "Give your view with at least one example." },
        { id: 5, question: "What kind of music do you enjoy listening to?", tip: "Name a genre or artist and explain why you like it." },
      ],
    },
    {
      part: 2,
      topic: "A Cultural Event or Performance",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a cultural event or performance you have attended or would like to attend.",
      bulletPoints: [
        "What the event or performance was",
        "Where and when it took place or will take place",
        "Who you went with or would go with",
        "And explain what made or would make it memorable",
      ],
    },
    {
      part: 3,
      topic: "Culture and Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "How important is it for governments to fund arts and cultural programmes?" },
        { id: 2, question: "Do you think traditional art forms are in danger of dying out? What can be done to preserve them?" },
        { id: 3, question: "How has globalisation affected local cultures and artistic traditions?" },
        { id: 4, question: "Should art education be compulsory in schools? Why or why not?" },
        { id: 5, question: "Do you think commercial success and artistic quality always go hand in hand?" },
      ],
    },
  ],
};

export default test;
