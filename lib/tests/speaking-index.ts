import type { SpeakingTest } from "./speaking-types";
import test1 from "./ielts-speaking-1";
import test2 from "./ielts-speaking-2";
import test3 from "./ielts-speaking-3";
import test4 from "./ielts-speaking-4";
import test5 from "./ielts-speaking-5";

const SPEAKING_TESTS: Record<string, SpeakingTest> = {
  "ielts-speaking-1": test1,
  "ielts-speaking-2": test2,
  "ielts-speaking-3": test3,
  "ielts-speaking-4": test4,
  "ielts-speaking-5": test5,
};

export function getSpeakingTest(id: string): SpeakingTest | null {
  return SPEAKING_TESTS[id] ?? null;
}

export function getAllSpeakingTests(): SpeakingTest[] {
  return Object.values(SPEAKING_TESTS);
}
