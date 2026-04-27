import type { WritingTest } from "./writing-types";
import { ieltsWriting1 } from "./ielts-writing-1";
import { ieltsWriting2 } from "./ielts-writing-2";
import { ieltsWriting3 } from "./ielts-writing-3";
import { pteWriting1 } from "./pte-writing-1";
import { pteWriting2 } from "./pte-writing-2";
import { pteWriting3 } from "./pte-writing-3";

export const WRITING_REGISTRY: Record<string, WritingTest> = {
  "ielts-writing-1": ieltsWriting1,
  "ielts-writing-2": ieltsWriting2,
  "ielts-writing-3": ieltsWriting3,
  "pte-writing-1": pteWriting1,
  "pte-writing-2": pteWriting2,
  "pte-writing-3": pteWriting3,
};

export function getWritingTest(id: string): WritingTest | null {
  return WRITING_REGISTRY[id] ?? null;
}
