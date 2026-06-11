import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-10",
  exam: "IELTS",
  title: "IELTS Speaking Test 10 — Media & News",
  parts: [
    {
      part: 1,
      topic: "Media and News",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "How do you usually get your news — TV, newspapers, or online?", tip: "Name your main source and briefly explain why." },
        { id: 2, question: "How much time do you spend watching TV or streaming shows each day?", tip: "Give an estimate and mention what you watch." },
        { id: 3, question: "Do you read newspapers or news websites regularly?", tip: "Describe your news reading habits." },
        { id: 4, question: "Do you think the news media in your country is reliable?", tip: "Share your opinion with a brief reason." },
        { id: 5, question: "Has the way you consume media changed over the past few years?", tip: "Compare how you used to get information vs. now." },
      ],
    },
    {
      part: 2,
      topic: "An Interesting News Story",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe an interesting news story you have read or heard about recently.",
      bulletPoints: [
        "What the story was about",
        "Where you heard or read about it",
        "What the key facts or events were",
        "And explain why you found this story particularly interesting",
      ],
    },
    {
      part: 3,
      topic: "Media and Its Role in Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "How has social media changed the way news is reported and consumed?" },
        { id: 2, question: "What are the dangers of people getting all their news from social media platforms?" },
        { id: 3, question: "Do you think freedom of the press is essential in a democratic society? Why?" },
        { id: 4, question: "Should governments have the right to regulate what is published in the media?" },
        { id: 5, question: "How can people tell the difference between reliable and unreliable news sources?" },
      ],
    },
  ],
};

export default test;
