"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const IELTS_TESTS = Array.from({ length: 20 }, (_, i) => `ielts-listening-${i + 1}`);
const PTE_TESTS = ["pte-speaking-1"];

export default function AdminListeningPage() {
  const [ieltsTest, setIeltsTest] = useState(IELTS_TESTS[0]);
  const [ieltsResults, setIeltsResults] = useState<Record<string, unknown> | null>(null);
  const [ieltsLoading, setIeltsLoading] = useState(false);

  const [pteTest, setPteTest] = useState(PTE_TESTS[0]);
  const [pteResults, setPteResults] = useState<Record<string, unknown> | null>(null);
  const [pteLoading, setPteLoading] = useState(false);

  async function generateIelts() {
    setIeltsLoading(true);
    setIeltsResults(null);
    try {
      const res = await fetch("/api/admin/generate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testId: ieltsTest }),
      });
      setIeltsResults(await res.json());
    } catch (e) {
      setIeltsResults({ error: String(e) });
    } finally {
      setIeltsLoading(false);
    }
  }

  async function generatePte() {
    setPteLoading(true);
    setPteResults(null);
    try {
      const res = await fetch("/api/admin/generate-pte-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testId: pteTest }),
      });
      setPteResults(await res.json());
    } catch (e) {
      setPteResults({ error: String(e) });
    } finally {
      setPteLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Audio Generation</h1>
          <p className="text-sm text-slate-500">Admin only. Calls Google TTS and uploads to Supabase Storage.</p>
        </div>

        {/* IELTS Listening */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-1">IELTS Listening</h2>
          <p className="text-xs text-slate-400 mb-4">Generates all 4 parts (multi-voice dialogue + monologue)</p>
          <select
            value={ieltsTest}
            onChange={(e) => setIeltsTest(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm mb-3"
          >
            {IELTS_TESTS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <Button onClick={generateIelts} disabled={ieltsLoading} className="w-full">
            {ieltsLoading ? "Generating (may take ~30s)…" : "Generate Audio"}
          </Button>
          {ieltsResults && (
            <pre className="mt-4 text-xs text-slate-600 bg-slate-50 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(ieltsResults, null, 2)}
            </pre>
          )}
        </div>

        {/* PTE Speaking */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-bold text-slate-900 mb-1">PTE Speaking</h2>
          <p className="text-xs text-slate-400 mb-4">
            Generates audio for Repeat Sentence, Re-tell Lecture, and Answer Short Question tasks.
            Uploads to <code className="bg-slate-100 px-1 rounded">listening-audio/pte-audio/{"{testId}/"}</code>
          </p>
          <select
            value={pteTest}
            onChange={(e) => setPteTest(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm mb-3"
          >
            {PTE_TESTS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <Button onClick={generatePte} disabled={pteLoading} className="w-full">
            {pteLoading ? "Generating (may take ~60s)…" : "Generate Audio"}
          </Button>
          {pteResults && (
            <pre className="mt-4 text-xs text-slate-600 bg-slate-50 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(pteResults, null, 2)}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
