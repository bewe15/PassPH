"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Mic, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

interface Attempt {
  id: string;
  test_id: string;
  created_at: string;
  responses: Record<string, string>;
  band: number | null;
  ai_scored: boolean;
}

function sectionLabel(taskId: string) {
  if (taskId.startsWith("ra-")) return "Read Aloud";
  if (taskId.startsWith("rs-")) return "Repeat Sentence";
  if (taskId.startsWith("di-")) return "Describe Image";
  if (taskId.startsWith("rl-")) return "Re-tell Lecture";
  if (taskId.startsWith("as-")) return "Answer Short Question";
  return "Task";
}

function RecordingPlayer({ path }: { path: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.storage.from("speaking-recordings").createSignedUrl(path, 3600)
      .then(({ data }) => { if (data) setUrl(data.signedUrl); });
  }, [path]);

  function toggle() {
    if (!audioRef.current || !url) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  }

  return (
    <div className="flex items-center gap-2">
      {url && <audio ref={audioRef} src={url} onEnded={() => setPlaying(false)} />}
      <button onClick={toggle}
        className="w-7 h-7 rounded-full bg-cyan-100 hover:bg-cyan-200 flex items-center justify-center transition shrink-0">
        <Mic className="w-3.5 h-3.5 text-cyan-700" />
      </button>
      <span className="text-xs text-slate-500">{playing ? "Playing…" : "Play recording"}</span>
    </div>
  );
}

export default function PTESpeakResultsPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [loading, setLoading] = useState(true);
  const [scoring, setScoring] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.from("speaking_attempts").select("*").eq("id", id).single()
      .then(({ data }) => { setAttempt(data); setLoading(false); });
  }, [id]);

  async function getAIScore() {
    if (!attempt) return;
    setScoring(true);
    try {
      const res = await fetch("/api/pte-speaking-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId: attempt.id }),
      });
      const data = await res.json();
      if (data.score) {
        setAttempt((prev) => prev ? { ...prev, band: data.score, ai_scored: true } : prev);
      }
    } finally {
      setScoring(false);
    }
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-slate-400">Loading results…</p></div>;
  if (!attempt) return <div className="min-h-screen flex items-center justify-center"><p className="text-slate-400">Attempt not found.</p></div>;

  const responseEntries = Object.entries(attempt.responses ?? {});
  const date = new Date(attempt.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Score card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">PTE Speaking Result</p>
          {attempt.ai_scored && attempt.band ? (
            <>
              <div className="text-7xl font-extrabold text-cyan-500 mb-2">{attempt.band}</div>
              <p className="text-slate-500 text-sm">Overall Communicative Score (10–90)</p>
            </>
          ) : (
            <div className="py-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-slate-500 text-sm mb-1">Score not yet calculated</p>
              <p className="text-xs text-slate-400">Use AI Scoring below to get your PTE score</p>
            </div>
          )}
          <div className="flex items-center justify-center gap-8 text-sm mt-4">
            <div>
              <p className="font-bold text-slate-900 text-lg">{responseEntries.length}</p>
              <p className="text-slate-400">Tasks recorded</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="font-bold text-slate-900 text-lg">{date}</p>
              <p className="text-slate-400">Date</p>
            </div>
          </div>
        </div>

        {/* AI Scoring */}
        {!attempt.ai_scored && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8">
            <h2 className="font-bold text-slate-900 mb-1">AI Scoring</h2>
            <p className="text-sm text-slate-500 mb-4">
              Get your PTE communicative score (10–90) based on fluency, pronunciation, and content. Available for Pro users.
            </p>
            <Button onClick={getAIScore} disabled={scoring} className="gap-2">
              <Star className="w-4 h-4" />
              {scoring ? "Scoring…" : "Get AI Score"}
            </Button>
          </div>
        )}

        {/* Recordings */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-bold text-slate-900">Your Recordings</h2>
            <p className="text-xs text-slate-400 mt-0.5">Listen back to your responses</p>
          </div>
          <div className="divide-y divide-slate-100">
            {responseEntries.length === 0 && (
              <p className="px-6 py-4 text-sm text-slate-400">No recordings found.</p>
            )}
            {responseEntries.map(([taskId, path]) => (
              <div key={taskId} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-cyan-700 mb-0.5">{sectionLabel(taskId)}</p>
                  <p className="text-xs text-slate-400">{taskId}</p>
                </div>
                <RecordingPlayer path={path} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full" variant="outline">Back to Dashboard</Button>
          </Link>
          <Link href={`/pte-speak/${attempt.test_id}`} className="flex-1">
            <Button className="w-full gap-2">Try Again <ChevronRight className="w-4 h-4" /></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
