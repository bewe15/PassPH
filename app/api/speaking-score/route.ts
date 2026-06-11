import { NextResponse } from "next/server";
import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";
import type { SpeakingResponse, AIBandBreakdown } from "@/lib/tests/speaking-types";

export async function POST(request: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Pro check
    const { data: profile } = await supabase
      .from("profiles")
      .select("plan, plan_expires_at, is_admin")
      .eq("id", user.id)
      .single();

    const isAdmin = Boolean(profile?.is_admin);
    const isPaid = profile?.plan === "pro" || profile?.plan === "basic";
    let isPro = isAdmin || isPaid;
    if (isPaid && !isAdmin && profile?.plan_expires_at) {
      if (new Date(profile.plan_expires_at) < new Date()) isPro = false;
    }
    if (!isPro) {
      return NextResponse.json({ error: "Pro plan required." }, { status: 403 });
    }

    const { attemptId } = await request.json() as { attemptId: string };

    const { data: attempt } = await supabase
      .from("speaking_attempts")
      .select("*")
      .eq("id", attemptId)
      .eq("user_id", user.id)
      .single();

    if (!attempt) return NextResponse.json({ error: "Attempt not found." }, { status: 404 });

    const responses = attempt.responses as SpeakingResponse[];
    const transcripts: { label: string; text: string }[] = [];

    // Transcribe each recording via Whisper
    for (const r of responses) {
      if (!r.audioPath) continue;

      const { data: fileData, error: dlErr } = await supabase.storage
        .from("speaking-recordings")
        .download(r.audioPath);

      if (dlErr || !fileData) continue;

      try {
        const ext = r.audioPath.endsWith(".mp4") ? "mp4" : "webm";
        const file = new File([fileData], `audio.${ext}`, {
          type: ext === "mp4" ? "audio/mp4" : "audio/webm",
        });

        const transcription = await openai.audio.transcriptions.create({
          file,
          model: "whisper-1",
          language: "en",
        });

        const label =
          r.partNumber === 2
            ? "Part 2 Long Turn"
            : `Part ${r.partNumber} Question ${r.questionId}`;

        transcripts.push({ label, text: transcription.text });
      } catch (err) {
        console.error("Whisper transcription failed for", r.audioPath, err);
      }
    }

    if (!transcripts.length) {
      return NextResponse.json({ error: "No audio could be transcribed." }, { status: 422 });
    }

    // Score with Claude
    const transcriptBlock = transcripts
      .map((t) => `[${t.label}]\n${t.text}`)
      .join("\n\n");

    const systemPrompt = `You are a certified IELTS examiner with expertise in speaking assessment. You evaluate responses fairly and return only valid JSON with no markdown fences.`;

    const userPrompt = `Evaluate these IELTS Speaking transcripts and provide band scores (1–9) for each criterion.

TRANSCRIPTS:
${transcriptBlock}

Score on the four official IELTS criteria:
- fc: Fluency and Coherence
- lr: Lexical Resource
- gra: Grammatical Range and Accuracy
- p: Pronunciation (infer from the written text where possible; note any apparent repairs or hesitations)

Calculate the overall band as the mean of the four criteria, rounded to the nearest 0.5.

Return ONLY this JSON, no markdown:
{
  "fc": <1–9 in 0.5 steps>,
  "lr": <1–9 in 0.5 steps>,
  "gra": <1–9 in 0.5 steps>,
  "p": <1–9 in 0.5 steps>,
  "overall": <mean rounded to 0.5>,
  "feedback": "<2–3 sentence overall assessment>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "improvements": ["<improvement 1>", "<improvement 2>", "<improvement 3>"]
}`;

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const rawText = message.content[0].type === "text" ? message.content[0].text.trim() : "";
    const cleaned = rawText
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```\s*$/, "")
      .trim();

    let score: AIBandBreakdown;
    try {
      score = JSON.parse(cleaned);
    } catch {
      console.error("Claude returned non-JSON:", rawText);
      return NextResponse.json({ error: "AI returned invalid response." }, { status: 500 });
    }

    // Update attempt with transcripts and score
    const updatedResponses = responses.map((r) => {
      const label =
        r.partNumber === 2
          ? "Part 2 Long Turn"
          : `Part ${r.partNumber} Question ${r.questionId}`;
      const found = transcripts.find((t) => t.label === label);
      return found ? { ...r, transcript: found.text } : r;
    });

    await supabase
      .from("speaking_attempts")
      .update({
        band: score.overall,
        ai_scored: true,
        responses: updatedResponses,
      })
      .eq("id", attemptId);

    return NextResponse.json({ score });
  } catch (err) {
    console.error("Speaking score route error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
