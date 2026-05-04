"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function getBandColor(band: number) {
  if (band >= 7.5) return "#22c55e";
  if (band >= 6.5) return "#06b6d4";
  if (band >= 5.5) return "#eab308";
  return "#f87171";
}

function getBandLabel(band: number) {
  if (band >= 8.0) return "Excellent";
  if (band >= 7.0) return "Good";
  if (band >= 6.0) return "Competent";
  if (band >= 5.0) return "Modest";
  return "Limited";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ReadingReport({ result, attempt }: { result: any; attempt: any }) {
  const pct = Math.round((result.score / result.total) * 100);
  const correct = result.questions.filter((q: { isCorrect: boolean }) => q.isCorrect).length;

  return (
    <div>
      {/* Score summary */}
      <div style={{ background: "linear-gradient(135deg,#0a0e27,#0f1535)", borderRadius: 12, padding: "32px", color: "white", marginBottom: 24, textAlign: "center" }}>
        <p style={{ color: "#67e8f9", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>Score Report</p>
        <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 24 }}>{result.exam} — {result.type}</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 48 }}>
          <div>
            <p style={{ fontSize: 44, fontWeight: 800 }}>{result.score}<span style={{ fontSize: 20, color: "#94a3b8" }}>/{result.total}</span></p>
            <p style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Questions Correct</p>
          </div>
          <div>
            <p style={{ fontSize: 44, fontWeight: 800, color: getBandColor(result.band) }}>{result.band}</p>
            <p style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Band Estimate</p>
          </div>
          <div>
            <p style={{ fontSize: 44, fontWeight: 800 }}>{pct}<span style={{ fontSize: 20, color: "#94a3b8" }}>%</span></p>
            <p style={{ color: "#94a3b8", fontSize: 12, marginTop: 4 }}>Accuracy</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Correct", value: correct, color: "#22c55e" },
          { label: "Incorrect", value: result.questions.length - correct, color: "#f87171" },
          { label: "Time Taken", value: result.timeTaken, color: "#64748b" },
        ].map((s) => (
          <div key={s.label} style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: "16px", textAlign: "center" }}>
            <p style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.value}</p>
            <p style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Answer review */}
      <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 12, fontSize: 14 }}>Answer Review</h3>
      <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              <th style={{ padding: "10px 16px", textAlign: "left", color: "#64748b", fontWeight: 600, borderBottom: "1px solid #e2e8f0", width: 40 }}>Q</th>
              <th style={{ padding: "10px 16px", textAlign: "left", color: "#64748b", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>Result</th>
              <th style={{ padding: "10px 16px", textAlign: "left", color: "#64748b", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>Your Answer</th>
              <th style={{ padding: "10px 16px", textAlign: "left", color: "#64748b", fontWeight: 600, borderBottom: "1px solid #e2e8f0" }}>Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {result.questions.map((q: any, i: number) => (
              <tr key={q.id} style={{ background: i % 2 === 0 ? "white" : "#f8fafc", borderBottom: "1px solid #f1f5f9" }}>
                <td style={{ padding: "8px 16px", color: "#64748b" }}>{q.id}</td>
                <td style={{ padding: "8px 16px" }}>
                  <span style={{ color: q.isCorrect ? "#22c55e" : "#f87171", fontWeight: 600 }}>
                    {q.isCorrect ? "✓ Correct" : "✗ Incorrect"}
                  </span>
                </td>
                <td style={{ padding: "8px 16px", color: q.isCorrect ? "#0f172a" : "#f87171" }}>{q.given ?? "—"}</td>
                <td style={{ padding: "8px 16px", color: "#22c55e", fontWeight: q.isCorrect ? 400 : 600 }}>{q.correct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function WritingReport({ result }: { result: any }) {
  const totalWords = result.tasks.reduce((s: number, t: { wordCount: number }) => s + t.wordCount, 0);

  return (
    <div>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#06b6d4,#0891b2)", borderRadius: 12, padding: "28px 32px", color: "white", marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: "#cffafe", marginBottom: 4 }}>{result.exam} Academic Writing</p>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{result.title}</h2>
        <p style={{ fontSize: 13, color: "#cffafe" }}>{result.date} · {result.timeTaken}</p>
        <div style={{ marginTop: 16, display: "flex", gap: 24 }}>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "12px 20px", textAlign: "center" }}>
            <p style={{ fontSize: 28, fontWeight: 800 }}>{totalWords}</p>
            <p style={{ fontSize: 12, color: "#cffafe" }}>total words</p>
          </div>
          {result.overallBand && (
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "12px 20px", textAlign: "center" }}>
              <p style={{ fontSize: 28, fontWeight: 800 }}>{result.overallBand}</p>
              <p style={{ fontSize: 12, color: "#cffafe" }}>band estimate</p>
            </div>
          )}
        </div>
      </div>

      {/* Tasks */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {result.tasks.map((task: any) => (
        <div key={task.taskId} style={{ border: "1px solid #e2e8f0", borderRadius: 8, marginBottom: 20, overflow: "hidden" }}>
          <div style={{ background: "#f8fafc", padding: "14px 20px", borderBottom: "1px solid #e2e8f0" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#06b6d4", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>{task.taskLabel}</p>
            <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.6 }}>{task.prompt}</p>
            {task.wordCount > 0 && <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>{task.wordCount} words written</p>}
          </div>
          <div style={{ padding: "16px 20px" }}>
            {/* Score breakdown */}
            {task.scoreBreakdown && (
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>Score Analysis</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
                  {[
                    { label: "Words", s: task.scoreBreakdown.wordCount },
                    { label: "Vocab", s: task.scoreBreakdown.vocabulary },
                    { label: "Cohesion", s: task.scoreBreakdown.cohesion },
                    { label: "Sentences", s: task.scoreBreakdown.sentenceVariety },
                    { label: "Grammar", s: task.scoreBreakdown.grammar },
                  ].map((m) => (
                    <div key={m.label} style={{ textAlign: "center", background: "#f8fafc", borderRadius: 6, padding: "8px 4px" }}>
                      <p style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>{m.s.score}<span style={{ fontSize: 11, color: "#94a3b8" }}>/{m.s.max}</span></p>
                      <p style={{ fontSize: 10, color: "#64748b" }}>{m.label}</p>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: 8, fontSize: 13, fontWeight: 700, color: getBandColor(task.scoreBreakdown.band) }}>
                  Band {task.scoreBreakdown.band} — {getBandLabel(task.scoreBreakdown.band)}
                </p>
              </div>
            )}
            {/* Response */}
            <p style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>Your Response</p>
            {task.userResponse?.trim() ? (
              <p style={{ fontSize: 13, color: "#334155", lineHeight: 1.7, background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "12px 16px", whiteSpace: "pre-wrap" }}>
                {task.userResponse}
              </p>
            ) : (
              <p style={{ fontSize: 13, color: "#94a3b8", fontStyle: "italic" }}>No response written.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ReportPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [attempt, setAttempt] = useState<any>(null);
  const [plan, setPlan]       = useState<string>("free");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      const [attemptRes, profileRes] = await Promise.all([
        supabase.from("test_attempts").select("*").eq("id", params.id).single(),
        supabase.from("profiles").select("plan").eq("id", user.id).single(),
      ]);

      if (attemptRes.error || !attemptRes.data) { router.push("/dashboard"); return; }
      if (profileRes.data?.plan !== "pro") { router.push(`/history/${params.id}`); return; }

      setAttempt(attemptRes.data);
      setPlan(profileRes.data?.plan ?? "free");
      setLoading(false);
    }
    load();
  }, [params.id, router]);

  useEffect(() => {
    if (!loading && attempt) {
      setTimeout(() => window.print(), 500);
    }
  }, [loading, attempt]);

  if (loading || !attempt) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 32, height: 32, border: "4px solid #06b6d4", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      </div>
    );
  }

  const result    = attempt.result_json;
  const isWriting = !!result?.tasks;
  const date      = new Date(attempt.created_at).toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          @page { margin: 16mm; size: A4; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      `}</style>

      {/* Print action bar */}
      <div className="no-print" style={{ background: "#0f172a", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#06b6d4", fontWeight: 800, fontSize: 18 }}>PassPH</span>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => router.back()} style={{ background: "transparent", border: "1px solid #334155", color: "#94a3b8", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>
            ← Back
          </button>
          <button onClick={() => window.print()} style={{ background: "#06b6d4", border: "none", color: "white", padding: "8px 20px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
            Download PDF
          </button>
        </div>
      </div>

      {/* Report content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 24px", background: "white", minHeight: "100vh" }}>
        {/* Report header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, paddingBottom: 20, borderBottom: "2px solid #e2e8f0" }}>
          <div>
            <p style={{ fontSize: 24, fontWeight: 800, color: "#06b6d4", marginBottom: 2 }}>PassPH</p>
            <p style={{ fontSize: 13, color: "#64748b" }}>Practice Score Report</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 13, color: "#64748b" }}>Generated: {date}</p>
            <p style={{ fontSize: 13, color: "#64748b" }}>{isWriting ? "Writing Practice" : "Reading Practice"}</p>
            <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>This is a practice estimate, not an official score.</p>
          </div>
        </div>

        {/* Result content */}
        {isWriting
          ? <WritingReport result={result} />
          : <ReadingReport result={result} attempt={attempt} />
        }

        {/* Footer */}
        <div style={{ marginTop: 40, paddingTop: 16, borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", fontSize: 11, color: "#94a3b8" }}>
          <span>© 2026 PassPH — practice.passph.com</span>
          <span>Not affiliated with British Council, IDP, or Pearson</span>
        </div>
      </div>
    </>
  );
}
