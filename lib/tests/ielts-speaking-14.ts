import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-14",
  exam: "IELTS",
  title: "IELTS Speaking Test 14 — Animals & Nature",
  parts: [
    {
      part: 1,
      topic: "Animals and the Natural World",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Do you have or have you ever had a pet? Tell me about it.", tip: "Describe the animal and your relationship with it." },
        { id: 2, question: "Do you enjoy spending time in nature? What do you like to do outdoors?", tip: "Name an outdoor activity and why you enjoy it." },
        { id: 3, question: "Are there any wild animals native to your country that you find interesting?", tip: "Name one and say what makes it interesting." },
        { id: 4, question: "Did you learn about animals and nature at school?", tip: "Briefly describe what you learned or remember." },
        { id: 5, question: "Do you prefer going to the beach, the mountains, or the countryside?", tip: "Pick one and explain your preference." },
      ],
    },
    {
      part: 2,
      topic: "An Animal You Find Fascinating",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe an animal that you find particularly fascinating.",
      bulletPoints: [
        "What the animal is and where it lives",
        "What it looks like and how it behaves",
        "How you first became interested in this animal",
        "And explain why you find this animal so fascinating",
      ],
    },
    {
      part: 3,
      topic: "Wildlife and Conservation",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "Why is biodiversity important and what threatens it most today?" },
        { id: 2, question: "Do you think keeping animals in zoos is ethical? Why or why not?" },
        { id: 3, question: "What can individuals do to help protect wildlife and natural habitats?" },
        { id: 4, question: "How do you think climate change is affecting animal populations around the world?" },
        { id: 5, question: "Should countries with endangered species receive international financial support for conservation?" },
      ],
    },
  ],
};

export default test;
