"use client";

export default function DashboardLoading() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0a0e27", minHeight: "100vh", width: "100vw" }}>
      {/* Spinning ring + logo */}
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full animate-spin"
          style={{ background: "conic-gradient(from 0deg, #22d3ee 0%, #3b82f6 40%, transparent 70%)" }} />
        {/* Inner mask */}
        <div className="absolute inset-[5px] rounded-full bg-[#0a0e27]" />
        {/* Logo */}
        <div className="relative z-10">
          <svg viewBox="0 0 116 120" className="w-11 h-11">
            <polygon points="58,8 15,33 15,87 58,112" fill="#0e7490" />
            <polygon points="58,8 101,33 101,87 58,112" fill="#06b6d4" />
            <text x="58" y="80" fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="800" fontSize="58" fill="white" textAnchor="middle">S</text>
            <polyline points="43,90 49,99 72,79" fill="none" stroke="#0e7490"
              strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Brand */}
      <p className="mt-5 text-white font-bold text-base tracking-widest uppercase">Scoravo</p>

      {/* Bouncing dots */}
      <div className="flex gap-2 mt-3">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
