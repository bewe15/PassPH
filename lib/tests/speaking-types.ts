export interface SpeakingQuestion {
  id: number;
  question: string;
  tip?: string;
}

export interface SpeakingPart1 {
  part: 1;
  topic: string;
  questions: SpeakingQuestion[];
  speakSeconds: number;
}

export interface SpeakingPart2 {
  part: 2;
  topic: string;
  taskCard: string;
  bulletPoints: string[];
  prepSeconds: number;
  speakSeconds: number;
}

export interface SpeakingPart3 {
  part: 3;
  topic: string;
  questions: SpeakingQuestion[];
  speakSeconds: number;
}

export type SpeakingPart = SpeakingPart1 | SpeakingPart2 | SpeakingPart3;

export interface SpeakingTest {
  id: string;
  exam: "IELTS";
  title: string;
  parts: [SpeakingPart1, SpeakingPart2, SpeakingPart3];
}

export interface SpeakingResponse {
  partNumber: 1 | 2 | 3;
  questionId: number;
  audioPath?: string;
  durationSeconds?: number;
  transcript?: string;
}

export interface AIBandBreakdown {
  fc: number;
  lr: number;
  gra: number;
  p: number;
  overall: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
}

export const SPEAKING_BAND_DESCRIPTORS = [
  {
    criterion: "Fluency & Coherence",
    key: "fc",
    bands: {
      5: "Maintains some flow but uses noticeable repetition or hesitation. Limited range of connectives used.",
      6: "Willing to speak at length but loses coherence at times. Uses basic cohesive devices.",
      7: "Speaks without noticeable effort; some hesitation while searching for words but mostly coherent.",
      8: "Fluent with only occasional hesitation; develops topics coherently with clear sequencing.",
      9: "Speaks fluently with only natural hesitation; fully coherent and cohesive throughout.",
    },
  },
  {
    criterion: "Lexical Resource",
    key: "lr",
    bands: {
      5: "Uses simple vocabulary; some inappropriate word choices; attempts paraphrase with limited success.",
      6: "Adequate vocabulary for familiar topics; some errors but communicates meaning clearly.",
      7: "Uses wide vocabulary flexibly; occasional inappropriate choices; paraphrases successfully.",
      8: "Uses wide vocabulary fluently and flexibly; rare errors; effective and precise paraphrase.",
      9: "Full flexibility and precision in vocabulary use; uses idiomatic language naturally.",
    },
  },
  {
    criterion: "Grammatical Range & Accuracy",
    key: "gra",
    bands: {
      5: "Uses basic sentence forms with some accuracy; limited complex structures; frequent errors.",
      6: "Mix of simple and complex structures; errors occur but generally maintains control.",
      7: "Wide range of structures; frequent error-free sentences; few non-systematic errors.",
      8: "Wide range of structures flexibly; most sentences error-free; only minor slips.",
      9: "Full range used naturally and appropriately; no noticeable grammatical errors.",
    },
  },
  {
    criterion: "Pronunciation",
    key: "p",
    bands: {
      5: "Pronunciation is understandable but L1 accent is evident; occasional unclear articulation.",
      6: "Uses pronunciation features with mixed control; listener occasionally needs to concentrate.",
      7: "Easy to understand throughout; uses connected speech; L1 accent has minor effect.",
      8: "Wide range of features; easy to understand; minimal effect of L1 accent on intelligibility.",
      9: "Expert control of pronunciation features; effortless to understand; fully natural prosody.",
    },
  },
];
