import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-16",
  exam: "IELTS",
  title: "IELTS Speaking Test 16 — Science & Innovation",
  parts: [
    {
      part: 1,
      topic: "Science and Technology",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Were you interested in science at school? Why or why not?", tip: "Describe your experience with science subjects." },
        { id: 2, question: "What scientific discovery or invention do you think has had the biggest impact on daily life?", tip: "Name one and briefly explain its impact." },
        { id: 3, question: "Do you follow news about science and technology? Where do you get this information?", tip: "Describe your interest and sources." },
        { id: 4, question: "Do you use any apps or devices that use AI or smart technology in your daily life?", tip: "Name a specific technology and how you use it." },
        { id: 5, question: "Are you excited about scientific progress, or does it concern you? Why?", tip: "Share your feelings about modern science with a specific reason." },
      ],
    },
    {
      part: 2,
      topic: "A Scientific Discovery or Invention",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a scientific discovery or invention that you think is very important.",
      bulletPoints: [
        "What the discovery or invention is",
        "When and how it was developed",
        "How it has changed people's lives",
        "And explain why you consider it so important",
      ],
    },
    {
      part: 3,
      topic: "Science, Technology and Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "To what extent should scientific research be driven by commercial profit rather than public good?" },
        { id: 2, question: "What are the ethical issues surrounding the development of artificial intelligence?" },
        { id: 3, question: "Do you think space exploration is worth the enormous financial investment required?" },
        { id: 4, question: "How can countries ensure that the benefits of scientific progress are shared equally?" },
        { id: 5, question: "Should scientists have a responsibility to consider the social and ethical consequences of their research?" },
      ],
    },
  ],
};

export default test;
