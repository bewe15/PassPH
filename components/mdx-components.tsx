import type { MDXComponents } from "mdx/types";

const EXAM_STYLES = {
  ielts: {
    header: "bg-cyan-600 text-white",
    badge: "bg-cyan-50 text-cyan-700 border border-cyan-200",
    border: "border-cyan-300",
    stripe: "bg-cyan-50/40",
  },
  pte: {
    header: "bg-violet-600 text-white",
    badge: "bg-violet-50 text-violet-700 border border-violet-200",
    border: "border-violet-300",
    stripe: "bg-violet-50/40",
  },
} as const;

interface ExamTableProps {
  exam: "ielts" | "pte";
  title: string;
  rows: string[][];
}

export function ExamTable({ exam, title, rows }: ExamTableProps) {
  const s = EXAM_STYLES[exam];
  const headers = ["Section", "Time", "Format"];

  return (
    <div className={`rounded-xl border-2 ${s.border} overflow-hidden my-6 shadow-sm`}>
      <div className={`${s.header} px-5 py-3 flex items-center gap-2`}>
        <span className="font-bold text-base tracking-tight">{title}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800 text-white">
              {headers.map((h) => (
                <th key={h} className="px-4 py-2.5 text-left font-semibold text-xs uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-t border-slate-100 ${i % 2 === 1 ? s.stripe : "bg-white"}`}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 text-slate-700 ${j === 0 ? "font-semibold text-slate-800" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface CompareRowProps {
  feature: string;
  ielts: string;
  pte: string;
}

export function CompareTable({ rows }: { rows: CompareRowProps[] }) {
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

interface BandTableProps {
  rows: { band: string; score: string }[];
}

export function BandTable({ rows }: BandTableProps) {
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

export const mdxComponents: MDXComponents = {
  ExamTable: ExamTable as any,
  CompareTable: CompareTable as any,
  BandTable: BandTable as any,
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
