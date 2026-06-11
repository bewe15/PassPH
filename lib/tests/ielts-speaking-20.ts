import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-20",
  exam: "IELTS",
  title: "IELTS Speaking Test 20 — Future & Goals",
  parts: [
    {
      part: 1,
      topic: "Plans and Goals",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "What are your main goals for the next few years?", tip: "Describe 1–2 specific goals and why they matter to you." },
        { id: 2, question: "Do you prefer to plan ahead or live in the moment? Why?", tip: "Give your preference with a clear reason." },
        { id: 3, question: "Is there something new you would like to try or achieve this year?", tip: "Name one specific thing and explain your motivation." },
        { id: 4, question: "Do you think the future looks bright for young people in your country?", tip: "Share your view with a reason or example." },
        { id: 5, question: "How do you feel about change in your life — do you welcome it or find it difficult?", tip: "Be honest and give an example of how you've handled change." },
      ],
    },
    {
      part: 2,
      topic: "A Goal You Would Like to Achieve",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a goal you would like to achieve in the future.",
      bulletPoints: [
        "What the goal is",
        "Why you want to achieve it",
        "What steps you are taking or plan to take",
        "And explain how achieving this goal would change your life",
      ],
    },
    {
      part: 3,
      topic: "Society and the Future",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "What do you think will be the biggest challenges facing the world in the next 50 years?" },
        { id: 2, question: "Do you think advances in medicine will significantly extend the average human lifespan? Is this desirable?" },
        { id: 3, question: "How do you think artificial intelligence will transform the job market over the next two decades?" },
        { id: 4, question: "Should countries prioritise economic growth or quality of life in their long-term planning?" },
        { id: 5, question: "Do you think the younger generation will be better or worse off than the current generation? Why?" },
      ],
    },
  ],
};

export default test;
