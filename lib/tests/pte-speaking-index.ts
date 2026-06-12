import type { PTESpeakingTest } from "./pte-speaking-types";
import test1 from "./pte-speaking-1";

const PTE_SPEAKING_TESTS: Record<string, PTESpeakingTest> = {
  "pte-speaking-1": test1,
};

export function getPTESpeakingTest(id: string): PTESpeakingTest | null {
  return PTE_SPEAKING_TESTS[id] ?? null;
}

export function getAllPTESpeakingTests(): PTESpeakingTest[] {
  return Object.values(PTE_SPEAKING_TESTS);
}
