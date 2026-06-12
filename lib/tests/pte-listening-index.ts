import type { PTEListeningTest } from "./pte-listening-types";
import test1 from "./pte-listening-1";

const PTE_LISTENING_TESTS: Record<string, PTEListeningTest> = {
  "pte-listening-1": test1,
};

export function getPTEListeningTest(id: string): PTEListeningTest | null {
  return PTE_LISTENING_TESTS[id] ?? null;
}

export function getAllPTEListeningTests(): PTEListeningTest[] {
  return Object.values(PTE_LISTENING_TESTS);
}
