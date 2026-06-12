import type { PTESpeakingTest } from "./pte-speaking-types";
import test1 from "./pte-speaking-1";
import test2 from "./pte-speaking-2";
import test3 from "./pte-speaking-3";
import test4 from "./pte-speaking-4";
import test5 from "./pte-speaking-5";
import test6 from "./pte-speaking-6";
import test7 from "./pte-speaking-7";
import test8 from "./pte-speaking-8";
import test9 from "./pte-speaking-9";
import test10 from "./pte-speaking-10";
import test11 from "./pte-speaking-11";
import test12 from "./pte-speaking-12";
import test13 from "./pte-speaking-13";
import test14 from "./pte-speaking-14";
import test15 from "./pte-speaking-15";
import test16 from "./pte-speaking-16";
import test17 from "./pte-speaking-17";
import test18 from "./pte-speaking-18";
import test19 from "./pte-speaking-19";
import test20 from "./pte-speaking-20";

const PTE_SPEAKING_TESTS: Record<string, PTESpeakingTest> = {
  "pte-speaking-1": test1,
  "pte-speaking-2": test2,
  "pte-speaking-3": test3,
  "pte-speaking-4": test4,
  "pte-speaking-5": test5,
  "pte-speaking-6": test6,
  "pte-speaking-7": test7,
  "pte-speaking-8": test8,
  "pte-speaking-9": test9,
  "pte-speaking-10": test10,
  "pte-speaking-11": test11,
  "pte-speaking-12": test12,
  "pte-speaking-13": test13,
  "pte-speaking-14": test14,
  "pte-speaking-15": test15,
  "pte-speaking-16": test16,
  "pte-speaking-17": test17,
  "pte-speaking-18": test18,
  "pte-speaking-19": test19,
  "pte-speaking-20": test20,
};

export function getPTESpeakingTest(id: string): PTESpeakingTest | null {
  return PTE_SPEAKING_TESTS[id] ?? null;
}

export function getAllPTESpeakingTests(): PTESpeakingTest[] {
  return Object.values(PTE_SPEAKING_TESTS);
}
