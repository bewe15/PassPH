"use client";

import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import type { ChartData } from "@/lib/tests/writing-types";

const DEFAULT_COLORS = [
  "#22d3ee", "#f59e0b", "#10b981", "#f43f5e", "#8b5cf6", "#3b82f6",
];

export function ChartDisplay({ chart }: { chart: ChartData }) {
  if (chart.type === "line") {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <p className="text-xs font-semibold text-slate-500 text-center mb-4">{chart.title}</p>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={chart.data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="label" tick={{ fontSize: 11 }} label={chart.xAxisLabel ? { value: chart.xAxisLabel, position: "insideBottom", offset: -2, fontSize: 11 } : undefined} />
            <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}${chart.unit ?? ""}`} label={chart.yAxisLabel ? { value: chart.yAxisLabel, angle: -90, position: "insideLeft", fontSize: 11 } : undefined} />
            <Tooltip formatter={(value) => [`${value}${chart.unit ?? ""}`, ""]} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            {(chart.series ?? []).map((s, i) => (
              <Line key={s.key} type="monotone" dataKey={s.key} name={s.label} stroke={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]} strokeWidth={2} dot={{ r: 3 }} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chart.type === "bar") {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <p className="text-xs font-semibold text-slate-500 text-center mb-4">{chart.title}</p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chart.data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="label" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}${chart.unit ?? ""}`} />
            <Tooltip formatter={(value) => [`${value}${chart.unit ?? ""}`, ""]} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            {(chart.series ?? []).map((s, i) => (
              <Bar key={s.key} dataKey={s.key} name={s.label} fill={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]} radius={[3, 3, 0, 0]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chart.type === "pie") {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <p className="text-xs font-semibold text-slate-500 text-center mb-2">{chart.title}</p>
        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie data={chart.pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={95} label={({ name, value }) => `${name}: ${value}%`} labelLine={true}>
              {(chart.pieData ?? []).map((entry, i) => (
                <Cell key={i} fill={entry.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, ""]} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (chart.type === "table") {
    return (
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <p className="text-xs font-semibold text-slate-500 px-4 py-3 border-b border-slate-100">{chart.title}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50">
                {(chart.tableHeaders ?? []).map((h, i) => (
                  <th key={i} className="px-4 py-2.5 text-left text-xs font-bold text-slate-600 border-b border-slate-200 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(chart.tableRows ?? []).map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  {row.map((cell, j) => (
                    <td key={j} className={`px-4 py-2.5 text-xs border-b border-slate-100 ${j === 0 ? "font-semibold text-slate-700" : "text-slate-600"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (chart.type === "process") {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <p className="text-xs font-semibold text-slate-500 mb-3">{chart.title}</p>
        <pre className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap font-sans">{chart.processText}</pre>
      </div>
    );
  }

  return null;
}
