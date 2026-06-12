import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getAllPTESpeakingTests } from "@/lib/tests/pte-speaking-index";

const VOICE = "en-GB-Wavenet-D"; // neutral British male for question/sentence audio

async function synthesize(text: string, apiKey: string): Promise<Buffer> {
  const res = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode: "en-GB", name: VOICE },
        audioConfig: { audioEncoding: "MP3", speakingRate: 0.9, pitch: 0 },
      }),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`TTS error: ${err}`);
  }
  const json = await res.json();
  return Buffer.from(json.audioContent, "base64");
}

export async function POST(req: NextRequest) {
  const { testId } = await req.json();
  if (!testId) return NextResponse.json({ error: "testId required" }, { status: 400 });

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "GOOGLE_TTS_API_KEY not set" }, { status: 500 });

  const tests = getAllPTESpeakingTests();
  const test = tests.find((t) => t.id === testId);
  if (!test) return NextResponse.json({ error: "Test not found" }, { status: 404 });

  const supabase = createAdminClient();
  const results: { taskId: string; path: string; chars: number }[] = [];

  const tasksToGenerate = [
    ...test.repeatSentence.map((t) => ({ id: t.id, text: t.sentence, folder: "rs" })),
    ...test.retellLecture.map((t) => ({ id: t.id, text: t.lectureText, folder: "rl" })),
    ...test.answerShort.map((t) => ({ id: t.id, text: t.question, folder: "as" })),
  ];

  for (const task of tasksToGenerate) {
    try {
      const audio = await synthesize(task.text, apiKey);
      const path = `pte-audio/${testId}/${task.id}.mp3`;
      const { error } = await supabase.storage
        .from("listening-audio")
        .upload(path, audio, { contentType: "audio/mpeg", upsert: true });

      if (error) throw new Error(error.message);
      results.push({ taskId: task.id, path, chars: task.text.length });
    } catch (err) {
      console.error(`Failed ${task.id}:`, err);
      results.push({ taskId: task.id, path: "ERROR", chars: 0 });
    }
  }

  return NextResponse.json({ testId, generated: results.length, results });
}
