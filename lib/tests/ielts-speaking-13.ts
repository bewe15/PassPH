import type { SpeakingTest } from "./speaking-types";

const test: SpeakingTest = {
  id: "ielts-speaking-13",
  exam: "IELTS",
  title: "IELTS Speaking Test 13 — Music & Entertainment",
  parts: [
    {
      part: 1,
      topic: "Music and Entertainment",
      speakSeconds: 40,
      questions: [
        { id: 1, question: "Do you enjoy listening to music? What kind of music do you prefer?", tip: "Name a genre or artist and briefly explain your preference." },
        { id: 2, question: "Have you ever played a musical instrument or sung in a group?", tip: "Describe your experience, even if brief or in childhood." },
        { id: 3, question: "How often do you go to concerts, the cinema, or other live events?", tip: "Describe your entertainment habits." },
        { id: 4, question: "Do you prefer listening to music alone or with others? Why?", tip: "Give your preference with a reason." },
        { id: 5, question: "Has your taste in music changed as you have grown older?", tip: "Compare what you listened to before and now." },
      ],
    },
    {
      part: 2,
      topic: "A Song or Piece of Music",
      prepSeconds: 60,
      speakSeconds: 120,
      taskCard: "Describe a song or piece of music that is meaningful to you.",
      bulletPoints: [
        "What the song or piece of music is",
        "When you first heard it",
        "How it makes you feel",
        "And explain why this song or music is meaningful to you",
      ],
    },
    {
      part: 3,
      topic: "Music and Entertainment in Society",
      speakSeconds: 60,
      questions: [
        { id: 1, question: "How has the rise of streaming platforms changed the music industry?" },
        { id: 2, question: "Do you think music has the power to bring people from different cultures together?" },
        { id: 3, question: "Should the government fund music education in schools? Why?" },
        { id: 4, question: "How has entertainment changed in the past 20 years? Is it better or worse now?" },
        { id: 5, question: "Do you think online entertainment is replacing traditional forms like theatre and live concerts?" },
      ],
    },
  ],
};

export default test;
