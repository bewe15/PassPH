import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getAllPTEListeningTests } from "@/lib/tests/pte-listening-index";

const VOICE = "en-GB-Wavenet-D";

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
  if (!res.ok) throw new Error(await res.text());
  const json = await res.json();
  return Buffer.from(json.audioContent, "base64");
}

export async function POST(req: NextRequest) {
  const { testId } = await req.json();
  if (!testId) return NextResponse.json({ error: "testId required" }, { status: 400 });

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "GOOGLE_TTS_API_KEY not set" }, { status: 500 });

  const tests = getAllPTEListeningTests();
  const test = tests.find(t => t.id === testId);
  if (!test) return NextResponse.json({ error: "Test not found" }, { status: 404 });

  const supabase = createAdminClient();
  const results: { taskId: string; path: string; chars: number }[] = [];

  const tasks: { id: string; text: string }[] = [
    ...test.summariseSpokenText.map(t => ({ id: t.id, text: t.audioText })),
    ...test.mcMulti.map(t => ({ id: t.id, text: t.audioText })),
    ...test.fillBlanks.map(t => ({ id: t.id, text: t.audioText })),
    ...test.highlightSummary.map(t => ({ id: t.id, text: t.audioText })),
    ...test.mcSingle.map(t => ({ id: t.id, text: t.audioText })),
    ...test.selectMissingWord.map(t => ({ id: t.id, text: t.audioText })),
    ...test.highlightIncorrect.map(t => ({ id: t.id, text: t.audioText })),
    ...test.writeDictation.map(t => ({ id: t.id, text: t.sentence })),
  ];

  for (const task of tasks) {
    try {
      const audio = await synthesize(task.text, apiKey);
      const path = `pte-listening-audio/${testId}/${task.id}.mp3`;
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
