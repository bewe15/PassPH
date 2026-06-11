import type { SpeakingTest } from "./speaking-types";
import test1 from "./ielts-speaking-1";
import test2 from "./ielts-speaking-2";
import test3 from "./ielts-speaking-3";
import test4 from "./ielts-speaking-4";
import test5 from "./ielts-speaking-5";
import test6 from "./ielts-speaking-6";
import test7 from "./ielts-speaking-7";
import test8 from "./ielts-speaking-8";
import test9 from "./ielts-speaking-9";
import test10 from "./ielts-speaking-10";
import test11 from "./ielts-speaking-11";
import test12 from "./ielts-speaking-12";
import test13 from "./ielts-speaking-13";
import test14 from "./ielts-speaking-14";
import test15 from "./ielts-speaking-15";
import test16 from "./ielts-speaking-16";
import test17 from "./ielts-speaking-17";
import test18 from "./ielts-speaking-18";
import test19 from "./ielts-speaking-19";
import test20 from "./ielts-speaking-20";

const SPEAKING_TESTS: Record<string, SpeakingTest> = {
  "ielts-speaking-1": test1,
  "ielts-speaking-2": test2,
  "ielts-speaking-3": test3,
  "ielts-speaking-4": test4,
  "ielts-speaking-5": test5,
  "ielts-speaking-6": test6,
  "ielts-speaking-7": test7,
  "ielts-speaking-8": test8,
  "ielts-speaking-9": test9,
  "ielts-speaking-10": test10,
  "ielts-speaking-11": test11,
  "ielts-speaking-12": test12,
  "ielts-speaking-13": test13,
  "ielts-speaking-14": test14,
  "ielts-speaking-15": test15,
  "ielts-speaking-16": test16,
  "ielts-speaking-17": test17,
  "ielts-speaking-18": test18,
  "ielts-speaking-19": test19,
  "ielts-speaking-20": test20,
};

export function getSpeakingTest(id: string): SpeakingTest | null {
  return SPEAKING_TESTS[id] ?? null;
}

export function getAllSpeakingTests(): SpeakingTest[] {
  return Object.values(SPEAKING_TESTS);
}
