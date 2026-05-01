import type { WritingTest } from "./writing-types";
import { ieltsWriting1 } from "./ielts-writing-1";
import { ieltsWriting2 } from "./ielts-writing-2";
import { ieltsWriting3 } from "./ielts-writing-3";
import { ieltsWriting4 } from "./ielts-writing-4";
import { ieltsWriting5 } from "./ielts-writing-5";
import { ieltsWriting6 } from "./ielts-writing-6";
import { ieltsWriting7 } from "./ielts-writing-7";
import { ieltsWriting8 } from "./ielts-writing-8";
import { ieltsWriting9 } from "./ielts-writing-9";
import { ieltsWriting10 } from "./ielts-writing-10";
import { ieltsWriting11 } from "./ielts-writing-11";
import { ieltsWriting12 } from "./ielts-writing-12";
import { ieltsWriting13 } from "./ielts-writing-13";
import { ieltsWriting14 } from "./ielts-writing-14";
import { ieltsWriting15 } from "./ielts-writing-15";
import { ieltsWriting16 } from "./ielts-writing-16";
import { ieltsWriting17 } from "./ielts-writing-17";
import { ieltsWriting18 } from "./ielts-writing-18";
import { ieltsWriting19 } from "./ielts-writing-19";
import { ieltsWriting20 } from "./ielts-writing-20";
import { pteWriting1 } from "./pte-writing-1";
import { pteWriting2 } from "./pte-writing-2";
import { pteWriting3 } from "./pte-writing-3";
import { pteWriting4 } from "./pte-writing-4";
import { pteWriting5 } from "./pte-writing-5";
import { pteWriting6 } from "./pte-writing-6";
import { pteWriting7 } from "./pte-writing-7";
import { pteWriting8 } from "./pte-writing-8";
import { pteWriting9 } from "./pte-writing-9";
import { pteWriting10 } from "./pte-writing-10";
import { pteWriting11 } from "./pte-writing-11";
import { pteWriting12 } from "./pte-writing-12";
import { pteWriting13 } from "./pte-writing-13";
import { pteWriting14 } from "./pte-writing-14";
import { pteWriting15 } from "./pte-writing-15";
import { pteWriting16 } from "./pte-writing-16";
import { pteWriting17 } from "./pte-writing-17";
import { pteWriting18 } from "./pte-writing-18";
import { pteWriting19 } from "./pte-writing-19";
import { pteWriting20 } from "./pte-writing-20";

export const WRITING_REGISTRY: Record<string, WritingTest> = {
  "ielts-writing-1": ieltsWriting1,
  "ielts-writing-2": ieltsWriting2,
  "ielts-writing-3": ieltsWriting3,
  "ielts-writing-4": ieltsWriting4,
  "ielts-writing-5": ieltsWriting5,
  "ielts-writing-6": ieltsWriting6,
  "ielts-writing-7": ieltsWriting7,
  "ielts-writing-8": ieltsWriting8,
  "ielts-writing-9": ieltsWriting9,
  "ielts-writing-10": ieltsWriting10,
  "ielts-writing-11": ieltsWriting11,
  "ielts-writing-12": ieltsWriting12,
  "ielts-writing-13": ieltsWriting13,
  "ielts-writing-14": ieltsWriting14,
  "ielts-writing-15": ieltsWriting15,
  "ielts-writing-16": ieltsWriting16,
  "ielts-writing-17": ieltsWriting17,
  "ielts-writing-18": ieltsWriting18,
  "ielts-writing-19": ieltsWriting19,
  "ielts-writing-20": ieltsWriting20,
  "pte-writing-1": pteWriting1,
  "pte-writing-2": pteWriting2,
  "pte-writing-3": pteWriting3,
  "pte-writing-4": pteWriting4,
  "pte-writing-5": pteWriting5,
  "pte-writing-6": pteWriting6,
  "pte-writing-7": pteWriting7,
  "pte-writing-8": pteWriting8,
  "pte-writing-9": pteWriting9,
  "pte-writing-10": pteWriting10,
  "pte-writing-11": pteWriting11,
  "pte-writing-12": pteWriting12,
  "pte-writing-13": pteWriting13,
  "pte-writing-14": pteWriting14,
  "pte-writing-15": pteWriting15,
  "pte-writing-16": pteWriting16,
  "pte-writing-17": pteWriting17,
  "pte-writing-18": pteWriting18,
  "pte-writing-19": pteWriting19,
  "pte-writing-20": pteWriting20,
};

export function getWritingTest(id: string): WritingTest | null {
  return WRITING_REGISTRY[id] ?? null;
}
