import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getListeningTest } from "@/lib/tests/listening-index";

// Neural2 voices — highest quality, most distinct (en-GB)
const FEMALE_VOICE_1 = "en-GB-Neural2-A"; // Claire, Helen
const FEMALE_VOICE_2 = "en-GB-Neural2-C"; // Emma
const MALE_VOICE_1   = "en-GB-Neural2-B"; // David, Jack
const MALE_VOICE_2   = "en-GB-Neural2-D"; // Dr Mills (deeper, mature)

// Pitch offset per speaker to further differentiate same-gender voices
const SPEAKER_PITCH: Record<string, number> = {
  David:       0,
  Claire:      1,
  Helen:       0,
  Emma:        2,    // slightly brighter
  Jack:        1,    // slightly higher than Dr Mills
  "Dr Mills": -3,    // lower, authoritative
  "Emma and Jack": 1,
};

// Known speakers → voice assignment
const SPEAKER_VOICE: Record<string, string> = {
  David:           MALE_VOICE_1,
  Claire:          FEMALE_VOICE_1,
  Helen:           FEMALE_VOICE_1,
  Emma:            FEMALE_VOICE_2,
  Jack:            MALE_VOICE_1,
  "Dr Mills":      MALE_VOICE_2,
  "Emma and Jack": MALE_VOICE_1,
};

// Monologue voice per part (used when transcript has no speaker labels)
const PART_VOICE: Record<number, string> = {
  1: MALE_VOICE_1,
  2: FEMALE_VOICE_1,
  3: MALE_VOICE_2,
  4: MALE_VOICE_2,
};

interface Segment { voice: string; text: string; pitch: number }

function isProperName(s: string): boolean {
  // Matches "David", "Dr Mills", "Emma and Jack" but not "Caller's surname"
  return /^[A-Z][a-zA-Z ]+$/.test(s) && !s.includes("'");
}

function guessVoice(name: string): string {
  if (SPEAKER_VOICE[name]) return SPEAKER_VOICE[name];
  // Simple heuristic: names ending in a/e/i tend female, others male
  const lower = name.toLowerCase();
  const likelyFemale = lower.endsWith("a") || lower.endsWith("e") || lower.endsWith("i");
  return likelyFemale ? FEMALE_VOICE_2 : MALE_VOICE_1;
}

function parseTranscript(transcript: string, partNum: number): Segment[] {
  const lines = transcript.trim().split("\n");
  const raw: { speaker: string | null; text: string }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const colonIdx = trimmed.indexOf(":");
    if (colonIdx > 0) {
      const candidate = trimmed.slice(0, colonIdx).trim();
      const rest = trimmed.slice(colonIdx + 1).trim();
      if (isProperName(candidate) && rest) {
        raw.push({ speaker: candidate, text: rest });
        continue;
      }
    }
    // Continuation or narration
    if (raw.length > 0) {
      raw[raw.length - 1].text += " " + trimmed;
    } else {
      raw.push({ speaker: null, text: trimmed });
    }
  }

  // Merge consecutive same-speaker lines, then map to voice + pitch
  const merged: Segment[] = [];
  for (const seg of raw) {
    const voice = seg.speaker
      ? guessVoice(seg.speaker)
      : PART_VOICE[partNum] ?? MALE_VOICE_1;
    const pitch = seg.speaker ? (SPEAKER_PITCH[seg.speaker] ?? 0) : 0;
    const last = merged[merged.length - 1];
    if (last && last.voice === voice && last.pitch === pitch) {
      last.text += " " + seg.text;
    } else {
      merged.push({ voice, text: seg.text, pitch });
    }
  }

  return merged;
}

async function synthesize(text: string, voice: string, pitch: number, apiKey: string): Promise<Buffer> {
  const res = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode: "en-GB", name: voice },
        audioConfig: { audioEncoding: "MP3", speakingRate: 0.85, pitch },
      }),
    }
  );
  if (!res.ok) throw new Error(await res.text());
  const { audioContent } = await res.json();
  return Buffer.from(audioContent, "base64");
}

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

  const adminSupabase = createAdminClient();
  const results = [];

  for (const part of test.parts) {
    try {
      const segments = parseTranscript(part.transcript ?? "", part.part);

      // Generate each segment and concatenate buffers
      const buffers: Buffer[] = [];
      for (const seg of segments) {
        const buf = await synthesize(seg.text, seg.voice, seg.pitch, apiKey);
        buffers.push(buf);
      }
      const combined = Buffer.concat(buffers);

      const filePath = `${testId}/part-${part.part}.mp3`;
      const { error: uploadError } = await adminSupabase.storage
        .from("listening-audio")
        .upload(filePath, combined, { contentType: "audio/mpeg", upsert: true });

      if (uploadError) {
        results.push({ part: part.part, error: uploadError.message });
      } else {
        const { data: { publicUrl } } = adminSupabase.storage
          .from("listening-audio")
          .getPublicUrl(filePath);
        results.push({ part: part.part, url: publicUrl, segments: segments.length });
      }
    } catch (e) {
      results.push({ part: part.part, error: String(e) });
    }
  }

  return NextResponse.json({ testId, results });
}
