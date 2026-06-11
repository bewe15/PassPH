import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-18",
  exam: "IELTS",
  title: "IELTS Speaking Test 18 — Language & Communication",
  parts: [
    {
      part: 1,
      topic: "Languages and Communication",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "What languages can you speak? How did you learn them?", tip: "List the languages and briefly describe how you learned each." },
        { id: 2, question: "Why are you studying English? How long have you been learning it?", tip: "Give your reasons and describe your learning journey." },
        { id: 3, question: "Do you find it easy or difficult to learn new languages? Why?", tip: "Be honest and give a specific reason or experience." },
        { id: 4, question: "Do you think it is important for children to learn a foreign language at school?", tip: "Give your view and one clear reason." },
        { id: 5, question: "Have you ever been in a situation where you couldn't communicate because of a language barrier?", tip: "Describe the situation and what you did about it." },
      ],
    },
    {
      part: 2,
      topic: "A Language You Would Like to Learn",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a language you would like to learn or improve.",
      bulletPoints: [
        "What the language is",
        "Why you want to learn or improve it",
        "How you would go about learning it",
        "And explain how being able to speak this language would benefit you",
      ],
    },
    {
      part: 3,
      topic: "Language and Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "Do you think the dominance of English as a global language is beneficial or harmful to other languages?" },
        { id: 2, question: "What can governments and communities do to prevent minority languages from dying out?" },
        { id: 3, question: "How has technology changed the way people communicate with each other?" },
        { id: 4, question: "Do you think translation technology will ever replace the need for people to learn foreign languages?" },
        { id: 5, question: "How does language shape the way people think and understand the world around them?" },
      ],
    },
  ],
};

export default test;
