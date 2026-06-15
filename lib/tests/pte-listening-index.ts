import type { PTEListeningTest } from "./pte-listening-types";
import test1  from "./pte-listening-1";
import test2  from "./pte-listening-2";
import test3  from "./pte-listening-3";
import test4  from "./pte-listening-4";
import test5  from "./pte-listening-5";
import test6  from "./pte-listening-6";
import test7  from "./pte-listening-7";
import test8  from "./pte-listening-8";
import test9  from "./pte-listening-9";
import test10 from "./pte-listening-10";
import test11 from "./pte-listening-11";
import test12 from "./pte-listening-12";
import test13 from "./pte-listening-13";
import test14 from "./pte-listening-14";
import test15 from "./pte-listening-15";
import test16 from "./pte-listening-16";
import test17 from "./pte-listening-17";
import test18 from "./pte-listening-18";
import test19 from "./pte-listening-19";
import test20 from "./pte-listening-20";

const PTE_LISTENING_TESTS: Record<string, PTEListeningTest> = {
  "pte-listening-1":  test1,
  "pte-listening-2":  test2,
  "pte-listening-3":  test3,
  "pte-listening-4":  test4,
  "pte-listening-5":  test5,
  "pte-listening-6":  test6,
  "pte-listening-7":  test7,
  "pte-listening-8":  test8,
  "pte-listening-9":  test9,
  "pte-listening-10": test10,
  "pte-listening-11": test11,
  "pte-listening-12": test12,
  "pte-listening-13": test13,
  "pte-listening-14": test14,
  "pte-listening-15": test15,
  "pte-listening-16": test16,
  "pte-listening-17": test17,
  "pte-listening-18": test18,
  "pte-listening-19": test19,
  "pte-listening-20": test20,
};

export function getPTEListeningTest(id: string): PTEListeningTest | null {
  return PTE_LISTENING_TESTS[id] ?? null;
}

export function getAllPTEListeningTests(): PTEListeningTest[] {
  return Object.values(PTE_LISTENING_TESTS);
}
