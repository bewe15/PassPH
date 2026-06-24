import type { MDXComponents } from "mdx/types";

function ExamTableShell({
  title,
  headerClass,
  borderClass,
  stripeClass,
  rows,
}: {
  title: string;
  headerClass: string;
  borderClass: string;
  stripeClass: string;
  rows: string[][];
}) {
  return (
    <div className={`rounded-xl border-2 ${borderClass} overflow-hidden my-6 shadow-sm`}>
      <div className={`${headerClass} px-5 py-3`}>
        <span className="font-bold text-base tracking-tight text-white">{title}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800 text-white">
              {["Section", "Time", "Format"].map((h) => (
                <th key={h} className="px-4 py-2.5 text-left font-semibold text-xs uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-t border-slate-100 ${i % 2 === 1 ? stripeClass : "bg-white"}`}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 text-slate-700 ${j === 0 ? "font-semibold text-slate-800" : ""}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function IELTSAcademicTable() {
  return (
    <ExamTableShell
      title="IELTS Academic"
      headerClass="bg-cyan-600"
      borderClass="border-cyan-300"
      stripeClass="bg-cyan-50/40"
      rows={[
        ["Listening", "30 min", "Audio recordings, 40 questions"],
        ["Reading", "60 min", "3 passages, 40 questions"],
        ["Writing", "60 min", "Task 1 (graph/chart) + Task 2 (essay)"],
        ["Speaking", "11–14 min", "Face-to-face with examiner"],
      ]}
    />
  );
}

export function PTEAcademicTable() {
  return (
    <ExamTableShell
      title="PTE Academic"
      headerClass="bg-violet-600"
      borderClass="border-violet-300"
      stripeClass="bg-violet-50/40"
      rows={[
        ["Speaking & Writing", "77–93 min", "Read aloud, essays, summarize text"],
        ["Reading", "32–41 min", "Fill blanks, multiple choice"],
        ["Listening", "45–57 min", "Summarize, highlight, dictation"],
      ]}
    />
  );
}

export function IELTSPTECompareTable() {
  const rows = [
    { feature: "Grading", ielts: "Human examiner", pte: "AI (fully automated)" },
    { feature: "Results turnaround", ielts: "3–13 days", pte: "Within 48 hours" },
    { feature: "Speaking format", ielts: "Face-to-face interview", pte: "Speak into microphone" },
    { feature: "Writing format", ielts: "Handwritten or typed", pte: "Always typed" },
    { feature: "Exam duration", ielts: "~2 hrs 45 min", pte: "~2 hrs 15 min" },
    { feature: "Cost (Philippines)", ielts: "₱14,000–₱16,000", pte: "₱10,000–₱13,000" },
    { feature: "Score validity", ielts: "2 years", pte: "2 years" },
    { feature: "Retakes", ielts: "Anytime (full fee)", pte: "Anytime (no limit)" },
  ];
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden my-6 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider w-1/3">Feature</th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider text-cyan-300">IELTS</th>
              <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider text-violet-300">PTE Academic</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-t border-slate-100 ${i % 2 === 1 ? "bg-slate-50" : "bg-white"}`}>
                <td className="px-4 py-3 font-semibold text-slate-800">{row.feature}</td>
                <td className="px-4 py-3 text-slate-600">{row.ielts}</td>
                <td className="px-4 py-3 text-slate-600">{row.pte}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function IELTSBandTable() {
  const rows = [
    { band: "9.0", score: "39–40" },
    { band: "8.0", score: "35–36" },
    { band: "7.0", score: "30" },
    { band: "6.0", score: "23" },
    { band: "5.0", score: "15" },
  ];
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden my-6 shadow-sm max-w-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wider">Band</th>
            <th className="px-5 py-3 text-left font-semibold text-xs uppercase tracking-wider">Score out of 40</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-t border-slate-100 ${i % 2 === 1 ? "bg-slate-50" : "bg-white"}`}>
              <td className="px-5 py-3 font-bold text-cyan-700">{row.band}</td>
              <td className="px-5 py-3 text-slate-700">{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const mdxComponents: MDXComponents = {
  IELTSAcademicTable: IELTSAcademicTable as any,
  PTEAcademicTable: PTEAcademicTable as any,
  IELTSPTECompareTable: IELTSPTECompareTable as any,
  IELTSBandTable: IELTSBandTable as any,
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-6 rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full text-sm" {...props}>{children}</table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-slate-900 text-white" {...props}>{children}</thead>
  ),
  th: ({ children, ...props }) => (
    <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider text-slate-200" {...props}>{children}</th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3 text-slate-700 border-t border-slate-100" {...props}>{children}</td>
  ),
  tr: ({ children, ...props }) => (
    <tr className="even:bg-slate-50 odd:bg-white" {...props}>{children}</tr>
  ),
};
