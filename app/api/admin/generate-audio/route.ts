import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getListeningTest } from "@/lib/tests/listening-index";

function prepareTranscript(transcript: string): string {
  // Remove speaker labels like "David:", "Claire:", etc.
  return transcript
    .replace(/^[A-Za-z ]+:/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// Voices per part (British English)
const PART_VOICES: Record<number, string> = {
  1: "en-GB-Standard-B", // male receptionist
  2: "en-GB-Standard-A", // female tour guide
  3: "en-GB-Standard-D", // male tutor
  4: "en-GB-Standard-B", // male lecturer
};

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_admin")
    .eq("id", user.id)
    .single();
  if (!profile?.is_admin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const { testId } = await req.json();
  if (!testId) return NextResponse.json({ error: "testId required" }, { status: 400 });

  const test = getListeningTest(testId);
  if (!test) return NextResponse.json({ error: "Test not found" }, { status: 404 });

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "GOOGLE_TTS_API_KEY not set" }, { status: 500 });

  const results = [];

  for (const part of test.parts) {
    const text = prepareTranscript(part.transcript ?? "");
    const voice = PART_VOICES[part.part] ?? "en-GB-Standard-B";

    const ttsRes = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: "en-GB", name: voice },
          audioConfig: { audioEncoding: "MP3", speakingRate: 0.85, pitch: 0 },
        }),
      }
    );

    if (!ttsRes.ok) {
      const err = await ttsRes.text();
      results.push({ part: part.part, error: err });
      continue;
    }

    const { audioContent } = await ttsRes.json();
    const buffer = Buffer.from(audioContent, "base64");

    const filePath = `${testId}/part-${part.part}.mp3`;
    const { error: uploadError } = await supabase.storage
      .from("listening-audio")
      .upload(filePath, buffer, { contentType: "audio/mpeg", upsert: true });

    if (uploadError) {
      results.push({ part: part.part, error: uploadError.message });
    } else {
      const { data: { publicUrl } } = supabase.storage
        .from("listening-audio")
        .getPublicUrl(filePath);
      results.push({ part: part.part, url: publicUrl });
    }
  }

  return NextResponse.json({ testId, results });
}
