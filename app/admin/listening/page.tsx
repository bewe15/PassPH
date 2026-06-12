"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const TESTS = Array.from({ length: 1 }, (_, i) => `ielts-listening-${i + 1}`);

export default function AdminListeningPage() {
  const [results, setResults] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedTest, setSelectedTest] = useState(TESTS[0]);

  async function generate() {
    setLoading(true);
    setResults(null);
    try {
      const res = await fetch("/api/admin/generate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testId: selectedTest }),
      });
      const data = await res.json();
      setResults(data);
    } catch (e) {
      setResults({ error: String(e) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Generate Listening Audio</h1>
        <p className="text-sm text-slate-500 mb-6">
          Calls Google TTS and uploads MP3 files to Supabase Storage (listening-audio bucket).
          Admin only.
        </p>

        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Select Test</label>
          <select
            value={selectedTest}
            onChange={(e) => setSelectedTest(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm mb-4"
          >
            {TESTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <Button onClick={generate} disabled={loading} className="w-full">
            {loading ? "Generating audio (may take ~30s)…" : "Generate Audio for All 4 Parts"}
          </Button>
        </div>

        {results && (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-900 mb-3">Results</h2>
            <pre className="text-xs text-slate-600 bg-slate-50 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(results, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
