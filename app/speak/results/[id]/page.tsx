"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft, Play, Pause, Sparkles, CheckCircle2, AlertCircle,
  Mic, Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { SPEAKING_BAND_DESCRIPTORS } from "@/lib/tests/speaking-types";
import type { SpeakingResponse, AIBandBreakdown } from "@/lib/tests/speaking-types";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// ── Audio playback ─────────────────────────────────────────────────────────

function AudioPlayback({ audioPath }: { audioPath: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.storage
      .from("speaking-recordings")
      .createSignedUrl(audioPath, 3600)
      .then(({ data }) => {
        if (data?.signedUrl) setUrl(data.signedUrl);
        setLoading(false);
      });
  }, [audioPath]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  if (loading) return <span className="text-xs text-slate-400">Loading audio…</span>;
  if (!url) return <span className="text-xs text-slate-400">Audio unavailable</span>;

  return (
    <div className="flex items-center gap-3">
      {url && (
        <audio
          ref={audioRef}
          src={url}
          onEnded={() => setPlaying(false)}
          className="hidden"
        />
      )}
      <button
        onClick={toggle}
        className="flex items-center gap-2 text-xs font-medium text-cyan-600 hover:text-cyan-800 transition"
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        {playing ? "Pause" : "Play recording"}
      </button>
      <Volume2 className="w-3.5 h-3.5 text-slate-300" />
    </div>
  );
}

// ── Band score circle ──────────────────────────────────────────────────────

function BandCircle({ band }: { band: number }) {
  const color =
    band >= 7 ? "text-green-600 bg-green-50 border-green-200" :
    band >= 5 ? "text-amber-600 bg-amber-50 border-amber-200" :
    "text-red-600 bg-red-50 border-red-200";
  return (
    <div className={cn("w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold text-xl", color)}>
      {band.toFixed(1)}
    </div>
  );
}

// ── Self-assess selector ───────────────────────────────────────────────────

function SelfAssessSection({ onSelfScore }: { onSelfScore: (bands: Record<string, number>) => void }) {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const allSelected = SPEAKING_BAND_DESCRIPTORS.every((d) => selected[d.key]);

  const handleSelect = (key: string, band: number) => {
    const next = { ...selected, [key]: band };
    setSelected(next);
    if (SPEAKING_BAND_DESCRIPTORS.every((d) => next[d.key])) {
      onSelfScore(next);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-slate-400" />
        <p className="text-sm font-semibold text-slate-700">Self-Assessment</p>
      </div>
      <p className="text-xs text-slate-500 -mt-4">
        Listen to your recordings, then select the band that best describes your performance for each criterion.
      </p>

      {SPEAKING_BAND_DESCRIPTORS.map((descriptor) => (
        <div key={descriptor.key}>
          <p className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">
            {descriptor.criterion}
          </p>
          <div className="space-y-1.5">
            {([9, 8, 7, 6, 5] as const).map((band) => (
              <button
                key={band}
                onClick={() => handleSelect(descriptor.key, band)}
                className={cn(
                  "w-full text-left px-3 py-2.5 rounded-lg border text-xs transition",
                  selected[descriptor.key] === band
                    ? "border-cyan-400 bg-cyan-50 text-cyan-800 font-medium"
                    : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                )}
              >
                <span className="font-bold mr-2">Band {band}</span>
                {descriptor.bands[band]}
              </button>
            ))}
          </div>
        </div>
      ))}

      {!allSelected && (
        <p className="text-xs text-slate-400 text-center">
          Select a band for all 4 criteria to see your estimated overall band.
        </p>
      )}
    </div>
  );
}

// ── AI Score section ───────────────────────────────────────────────────────

function AIScoreSection({
  attemptId,
  isPro,
  existingScore,
}: {
  attemptId: string;
  isPro: boolean;
  existingScore: AIBandBreakdown | null;
}) {
  const [scoring, setScoring] = useState(false);
  const [score, setScore] = useState<AIBandBreakdown | null>(existingScore);
  const [error, setError] = useState<string | null>(null);

  const getScore = async () => {
    setScoring(true);
    setError(null);
    try {
      const res = await fetch("/api/speaking-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Scoring failed");
      setScore(data.score);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setScoring(false);
    }
  };

  if (!isPro) {
    return (
      <div className="bg-gradient-to-br from-cyan-50 to-violet-50 border border-cyan-200 rounded-xl p-5 text-center">
        <Sparkles className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
        <p className="text-sm font-semibold text-slate-800 mb-1">AI Scoring (Pro)</p>
        <p className="text-xs text-slate-500 mb-4">
          Upgrade to Pro to get AI-powered band scores for Fluency, Lexical Resource, Grammar, and Pronunciation — powered by Whisper + Claude.
        </p>
        <Link href="/pricing">
          <Button size="sm" variant="outline">Upgrade to Pro →</Button>
        </Link>
      </div>
    );
  }

  if (score) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-cyan-500" />
          <p className="text-sm font-bold text-slate-800">AI Score</p>
          <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full font-medium">Pro</span>
        </div>

        <div className="flex items-center justify-center mb-5">
          <div className="text-center">
            <BandCircle band={score.overall} />
            <p className="text-xs text-slate-500 mt-1">Overall Band</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { label: "Fluency & Coherence", val: score.fc },
            { label: "Lexical Resource", val: score.lr },
            { label: "Grammar", val: score.gra },
            { label: "Pronunciation", val: score.p },
          ].map(({ label, val }) => (
            <div key={label} className="bg-slate-50 rounded-lg p-3 text-center">
              <p className="text-lg font-bold text-slate-800">{val.toFixed(1)}</p>
              <p className="text-xs text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-slate-700 mb-3 leading-relaxed">{score.feedback}</p>

        {score.strengths.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-bold text-green-700 mb-1">Strengths</p>
            <ul className="space-y-1">
              {score.strengths.map((s, i) => (
                <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                  <span className="text-green-500 mt-0.5">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
        )}

        {score.improvements.length > 0 && (
          <div>
            <p className="text-xs font-bold text-amber-700 mb-1">Areas to Improve</p>
            <ul className="space-y-1">
              {score.improvements.map((s, i) => (
                <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5">→</span> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 text-center">
      <Sparkles className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
      <p className="text-sm font-bold text-slate-800 mb-1">Get AI Score</p>
      <p className="text-xs text-slate-500 mb-4">
        Claude will transcribe your recordings with Whisper and score your speaking on all 4 IELTS criteria.
      </p>
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg mb-3">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </div>
      )}
      <Button onClick={getScore} disabled={scoring} className="gap-2">
        <Sparkles className="w-4 h-4" />
        {scoring ? "Scoring… (this may take ~30s)" : "Score with AI →"}
      </Button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

interface AttemptRow {
  id: string;
  test_id: string;
  exam: string;
  band: number | null;
  ai_scored: boolean;
  responses: SpeakingResponse[];
  created_at: string;
}

export default function SpeakResultsPage() {
  const { id } = useParams<{ id: string }>();
  const [attempt, setAttempt] = useState<AttemptRow | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selfBands, setSelfBands] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const supabase = createClient();
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const [{ data: attemptData }, { data: profile }] = await Promise.all([
        supabase.from("speaking_attempts").select("*").eq("id", id).eq("user_id", user.id).single(),
        supabase.from("profiles").select("plan, plan_expires_at, is_admin").eq("id", user.id).single(),
      ]);

      if (attemptData) setAttempt(attemptData as AttemptRow);

      const isAdmin = Boolean(profile?.is_admin);
      const isPaid = profile?.plan === "pro" || profile?.plan === "basic";
      let pro = isAdmin || isPaid;
      if (isPaid && !isAdmin && profile?.plan_expires_at) {
        if (new Date(profile.plan_expires_at) < new Date()) pro = false;
      }
      setIsPro(pro);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center text-slate-400">
          <Mic className="w-8 h-8 mx-auto mb-3 opacity-40" />
          <p className="text-sm">Loading results…</p>
        </div>
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Results not found.</p>
          <Link href="/dashboard"><Button>Back to Dashboard</Button></Link>
        </div>
      </div>
    );
  }

  const selfOverall = selfBands
    ? Math.round((Object.values(selfBands).reduce((a, b) => a + b, 0) / 4) * 2) / 2
    : null;

  const partLabels: Record<number, string> = {
    1: "Part 1 — Introduction & Interview",
    2: "Part 2 — Long Turn",
    3: "Part 3 — Discussion",
  };

  const grouped: Record<number, SpeakingResponse[]> = { 1: [], 2: [], 3: [] };
  for (const r of attempt.responses) {
    grouped[r.partNumber]?.push(r);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-600">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-sm font-bold text-slate-900">Speaking Results</h1>
            <p className="text-xs text-slate-500">
              {attempt.exam} · {new Date(attempt.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Band summary */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Test ID</p>
              <p className="text-sm font-semibold text-slate-800">{attempt.test_id}</p>
            </div>
            {(selfOverall || attempt.band) && (
              <div className="text-center">
                <BandCircle band={selfOverall ?? attempt.band ?? 0} />
                <p className="text-xs text-slate-500 mt-1">
                  {selfOverall ? "Self-assessed" : "AI Score"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recordings by part */}
        {([1, 2, 3] as const).map((part) => {
          const responses = grouped[part];
          if (!responses.length) return null;
          return (
            <div key={part} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-100 bg-slate-50">
                <p className="text-xs font-bold text-slate-700">{partLabels[part]}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {responses.map((r, i) => (
                  <div key={i} className="px-5 py-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-slate-500">
                        {part === 2 ? "Long Turn" : `Question ${r.questionId}`}
                        {r.durationSeconds !== undefined && (
                          <span className="ml-2 text-slate-400">
                            · {r.durationSeconds}s recorded
                          </span>
                        )}
                      </p>
                      {r.audioPath ? (
                        <AudioPlayback audioPath={r.audioPath} />
                      ) : (
                        <span className="text-xs text-slate-400">No recording</span>
                      )}
                    </div>
                    {r.transcript && (
                      <div className="mt-2 bg-slate-50 rounded-lg px-3 py-2">
                        <p className="text-xs text-slate-600 leading-relaxed">{r.transcript}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Self-assess */}
        {!selfBands && !attempt.ai_scored && (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <SelfAssessSection onSelfScore={setSelfBands} />
          </div>
        )}

        {selfBands && (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <p className="text-sm font-bold text-slate-800">Self-Assessment Results</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              {SPEAKING_BAND_DESCRIPTORS.map((d) => (
                <div key={d.key} className="bg-slate-50 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-slate-800">{selfBands[d.key]}</p>
                  <p className="text-xs text-slate-500">{d.criterion}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-2 border-t border-slate-100">
              <p className="text-2xl font-bold text-slate-900">{selfOverall}</p>
              <p className="text-xs text-slate-500">Estimated Overall Band</p>
            </div>
          </div>
        )}

        {/* AI scoring */}
        <AIScoreSection
          attemptId={attempt.id}
          isPro={isPro}
          existingScore={null}
        />

        {/* Actions */}
        <div className="flex gap-3">
          <Link href="/dashboard" className="flex-1">
            <Button variant="outline" className="w-full">Back to Dashboard</Button>
          </Link>
          <Link href={`/speak/${attempt.test_id}`} className="flex-1">
            <Button className="w-full">Try Again</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
