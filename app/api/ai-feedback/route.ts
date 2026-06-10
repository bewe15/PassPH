import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export interface AIFeedbackCriterion {
  name: string;
  band: number;
  feedback: string;
  suggestions: string[];
}

export interface AIFeedback {
  overallBand: number;
  summary: string;
  strengths: string[];
  improvements: string[];
  criteria: AIFeedbackCriterion[];
}

export async function POST(request: Request) {
  try {
    // ── Auth check ────────────────────────────────────────────────────────────
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ── Plan / Pro check ──────────────────────────────────────────────────────
    const { data: profile } = await supabase
      .from("profiles")
      .select("plan, plan_expires_at, is_admin")
      .eq("id", user.id)
      .single();

    const isAdmin = Boolean(profile?.is_admin);
    const isPaid = profile?.plan === "pro" || profile?.plan === "basic";

    let isPro = isAdmin || isPaid;

    // Check expiry for paid plans
    if (isPaid && !isAdmin && profile?.plan_expires_at) {
      const expired = new Date(profile.plan_expires_at) < new Date();
      if (expired) isPro = false;
    }

    if (!isPro) {
      return NextResponse.json(
        { error: "Pro plan required to use AI feedback." },
        { status: 403 }
      );
    }

    // ── Request body ──────────────────────────────────────────────────────────
    const body = await request.json();
    const { taskType, prompt, userResponse } = body as {
      taskType: "task1" | "task2";
      prompt: string;
      userResponse: string;
    };

    if (!userResponse?.trim()) {
      return NextResponse.json(
        { error: "No response text provided." },
        { status: 400 }
      );
    }

    // ── Build Claude prompt ───────────────────────────────────────────────────
    const isTask1 = taskType === "task1";
    const taskTypeName = isTask1 ? "Task 1 (Academic)" : "Task 2 (Essay)";

    const criteriaNames = isTask1
      ? [
          "Task Achievement",
          "Coherence and Cohesion",
          "Lexical Resource",
          "Grammatical Range and Accuracy",
        ]
      : [
          "Task Response",
          "Coherence and Cohesion",
          "Lexical Resource",
          "Grammatical Range and Accuracy",
        ];

    const systemPrompt = `You are a certified IELTS examiner with over 10 years of experience marking Academic Writing papers. Your evaluations are precise, specific, and actionable. You always return valid JSON with no markdown fences or extra text.`;

    const userPrompt = `Evaluate the following IELTS Writing ${taskTypeName} response according to official IELTS band descriptors.

TASK PROMPT:
${prompt}

STUDENT'S RESPONSE (${userResponse.trim().split(/\s+/).length} words):
${userResponse}

Rate the response on these four criteria: ${criteriaNames.join(", ")}.

Return ONLY the following JSON object — no markdown, no extra commentary:
{
  "overallBand": <number between 4.0 and 9.0, in 0.5 increments — average of the 4 criteria>,
  "summary": "<2–3 sentence overall assessment of the response>",
  "strengths": [
    "<specific strength observed in the response>",
    "<specific strength observed in the response>",
    "<specific strength observed in the response>"
  ],
  "improvements": [
    "<specific area to improve with a concrete example>",
    "<specific area to improve with a concrete example>",
    "<specific area to improve with a concrete example>"
  ],
  "criteria": [
    {
      "name": "${criteriaNames[0]}",
      "band": <number 4.0–9.0 in 0.5 steps>,
      "feedback": "<2–3 sentences of specific, examiner-level feedback>",
      "suggestions": ["<actionable suggestion>", "<actionable suggestion>"]
    },
    {
      "name": "${criteriaNames[1]}",
      "band": <number 4.0–9.0 in 0.5 steps>,
      "feedback": "<2–3 sentences of specific feedback>",
      "suggestions": ["<actionable suggestion>", "<actionable suggestion>"]
    },
    {
      "name": "${criteriaNames[2]}",
      "band": <number 4.0–9.0 in 0.5 steps>,
      "feedback": "<2–3 sentences of specific feedback>",
      "suggestions": ["<actionable suggestion>", "<actionable suggestion>"]
    },
    {
      "name": "${criteriaNames[3]}",
      "band": <number 4.0–9.0 in 0.5 steps>,
      "feedback": "<2–3 sentences of specific feedback>",
      "suggestions": ["<actionable suggestion>", "<actionable suggestion>"]
    }
  ]
}`;

    // ── Call Claude ───────────────────────────────────────────────────────────
    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1200,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });

    const rawText =
      message.content[0].type === "text" ? message.content[0].text.trim() : "";

    let feedback: AIFeedback;
    try {
      // Strip markdown code fences if present (```json ... ``` or ``` ... ```)
      const cleaned = rawText
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```\s*$/, "")
        .trim();
      feedback = JSON.parse(cleaned);
    } catch {
      console.error("Claude returned non-JSON:", rawText);
      return NextResponse.json(
        { error: "AI returned an invalid response. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ feedback });
  } catch (err) {
    console.error("AI feedback route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
