export default function DashboardLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0e27]">
      {/* Outer glow ring */}
      <div className="relative flex items-center justify-center">
        {/* Spinning gradient ring */}
        <div
          className="absolute w-24 h-24 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #22d3ee, #3b82f6, #0a0e27, #0a0e27)",
            animation: "spin 1.2s linear infinite",
          }}
        />
        {/* Inner dark circle */}
        <div className="absolute w-20 h-20 rounded-full bg-[#0a0e27]" />

        {/* Logo icon */}
        <div className="relative z-10 w-14 h-14 flex items-center justify-center">
          <svg viewBox="0 0 116 120" className="w-12 h-12 drop-shadow-lg">
            <polygon points="58,8 15,33 15,87 58,112" fill="#0e7490" />
            <polygon points="58,8 101,33 101,87 58,112" fill="#06b6d4" />
            <text
              x="58"
              y="80"
              fontFamily="Arial, Helvetica, sans-serif"
              fontWeight="800"
              fontSize="58"
              fill="white"
              textAnchor="middle"
            >
              S
            </text>
            <polyline
              points="43,90 49,99 72,79"
              fill="none"
              stroke="#0e7490"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand name */}
      <p className="mt-6 text-white font-bold text-lg tracking-wide">Scoravo</p>

      {/* Animated dots */}
      <div className="flex gap-1.5 mt-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
            style={{
              animation: "bounce 1s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
