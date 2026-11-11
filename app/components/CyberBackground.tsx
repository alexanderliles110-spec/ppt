"use client";

import React from "react";

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 bg-gradient-to-br from-slate-100 via-blue-50/60 to-slate-200/90">
      {/* High-Contrast Dynamic Modern Grid */}
      <div className="absolute inset-0 cyber-grid opacity-90" />
      <div className="absolute inset-0 cyber-grid-dense opacity-50" />

      {/* Vibrant Ambient Light Glows with breathing pulse */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-blue-500/20 blur-[120px] animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[700px] h-[700px] rounded-full bg-cyan-400/20 blur-[130px] animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-400/15 blur-[140px] animate-pulse"
        style={{ animationDuration: "9s" }}
      />

      {/* Floating Educational Tech Badges & Symbols (Clearly Visible) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-[8%] px-3 py-1 rounded-full bg-blue-100/80 border border-blue-300 text-blue-800 text-xs font-mono font-bold shadow-sm animate-particle"
          style={{ animationDelay: "0s", animationDuration: "16s" }}
        >
          ⚡ 0101_EDTECH_SYSTEMS
        </div>
        <div
          className="absolute left-[30%] px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300 text-cyan-800 text-xs font-mono font-bold shadow-sm animate-particle"
          style={{ animationDelay: "3.5s", animationDuration: "18s" }}
        >
          🎓 &lt;PEDAGOGICAL_FRAMEWORK&gt;
        </div>
        <div
          className="absolute left-[62%] px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-800 text-xs font-mono font-bold shadow-sm animate-particle"
          style={{ animationDelay: "7s", animationDuration: "15s" }}
        >
          🌐 TPACK MODEL // MISHRA &amp; KOEHLER
        </div>
        <div
          className="absolute left-[82%] px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-300 text-indigo-800 text-xs font-mono font-bold shadow-sm animate-particle"
          style={{ animationDelay: "2s", animationDuration: "20s" }}
        >
          💡 {`{ DIGITAL_FLUENCY }`}
        </div>
        <div
          className="absolute left-[48%] px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold shadow-sm animate-particle"
          style={{ animationDelay: "10s", animationDuration: "17s" }}
        >
          ⚛️ CONTENT + TECHNOLOGY
        </div>
      </div>

      {/* Technology Education Vector Watermarks & Circuit Grid (High Visibility) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-85"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="edtech-line-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="edtech-line-amber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow-bright" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Top-Left Educational Tech Circuit Blueprint with Glowing Active Electric Pulses */}
        <g stroke="url(#edtech-line-blue)" strokeWidth="2" fill="none">
          <path d="M 0 120 L 180 120 L 240 180 L 480 180 L 520 220" />
          <path
            d="M 0 120 L 180 120 L 240 180 L 480 180 L 520 220"
            stroke="#0284c7"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="animate-circuit-pulse"
            filter="url(#glow-bright)"
          />
          <circle cx="480" cy="180" r="6" fill="#2563eb" />
          <circle cx="240" cy="180" r="5" fill="#38bdf8" />
          <circle cx="520" cy="220" r="6" fill="#06b6d4" />
          <path d="M 90 0 L 90 80 L 150 140 L 150 240" strokeDasharray="5 5" strokeWidth="1.5" />
        </g>

        {/* Graduation Cap Vector Motifs (Education Symbol - Top Left) with Gentle Float */}
        <g stroke="#1d4ed8" strokeWidth="2" fill="none" transform="translate(120, 240)" className="animate-float-slow">
          <path d="M 60 30 L 110 55 L 60 80 L 10 55 Z" fill="rgba(37,99,235,0.08)" />
          <path d="M 32 64 L 32 86 Q 60 106 88 86 L 88 64" strokeWidth="2.5" />
          <line x1="110" y1="55" x2="110" y2="95" strokeWidth="3" />
          <circle cx="110" cy="98" r="4" fill="#1d4ed8" />
          <text x="60" y="130" textAnchor="middle" className="font-mono text-xs fill-blue-700 font-bold tracking-widest">
            PEDAGOGICAL KNOWLEDGE
          </text>
        </g>

        {/* Code / Logic Bracket Watermark (Technology Symbol - Mid Left) with Float */}
        <g stroke="#0369a1" strokeWidth="2.5" fill="none" transform="translate(160, 680)" className="animate-float-reverse">
          <path d="M 45 25 L 15 55 L 45 85" strokeWidth="3" />
          <path d="M 85 25 L 115 55 L 85 85" strokeWidth="3" />
          <line x1="72" y1="20" x2="58" y2="90" strokeWidth="2.5" />
          <text x="65" y="120" textAnchor="middle" className="font-mono text-xs fill-sky-800 font-bold tracking-widest">
            TECHNOLOGY &amp; SYSTEMS
          </text>
        </g>

        {/* Connected Knowledge Network Nodes (Bottom Right) with Pulsing Connectors */}
        <g stroke="#0e7490" strokeWidth="2" fill="none" transform="translate(1420, 660)">
          <line x1="50" y1="50" x2="150" y2="25" strokeWidth="2.5" />
          <line x1="150" y1="25" x2="230" y2="95" strokeWidth="2.5" />
          <line x1="150" y1="25" x2="130" y2="150" strokeWidth="2.5" />
          <line x1="50" y1="50" x2="130" y2="150" strokeWidth="2.5" />
          <line x1="230" y1="95" x2="300" y2="50" strokeWidth="2.5" />
          
          {/* Animated Connecting Radar Rings */}
          <circle cx="50" cy="50" r="16" fill="none" stroke="#0284c7" strokeWidth="1.5" className="animate-ping opacity-60" style={{ animationDuration: "2.5s" }} />
          <circle cx="50" cy="50" r="7" fill="#0284c7" />

          <circle cx="150" cy="25" r="9" fill="#0369a1" />
          <circle cx="230" cy="95" r="7" fill="#06b6d4" />
          <circle cx="130" cy="150" r="8" fill="#0284c7" />

          <circle cx="300" cy="50" r="18" fill="none" stroke="#2563eb" strokeWidth="1.5" className="animate-ping opacity-60" style={{ animationDuration: "3s" }} />
          <circle cx="300" cy="50" r="7" fill="#2563eb" />
          
          <text x="150" y="190" textAnchor="middle" className="font-mono text-xs fill-cyan-900 font-bold tracking-widest">
            KNOWLEDGE NETWORK
          </text>
        </g>

        {/* Atom Science Orbit Symbol (Knowledge & Inquiry - Top Right) with Smooth Continuous Rotation */}
        <g transform="translate(1520, 140)">
          <g className="animate-orbit-slow" style={{ transformOrigin: "80px 80px" }}>
            <ellipse cx="80" cy="80" rx="65" ry="24" stroke="#d97706" strokeWidth="2" fill="none" transform="rotate(30 80 80)" />
            <ellipse cx="80" cy="80" rx="65" ry="24" stroke="#d97706" strokeWidth="2" fill="none" transform="rotate(-30 80 80)" />
            <ellipse cx="80" cy="80" rx="65" ry="24" stroke="#d97706" strokeWidth="2" fill="none" transform="rotate(90 80 80)" />
          </g>
          <circle cx="80" cy="80" r="8" fill="#d97706" />
          <text x="80" y="170" textAnchor="middle" className="font-mono text-xs fill-amber-700 font-bold tracking-widest">
            CONTENT &amp; INQUIRY
          </text>
        </g>

        {/* Bottom Left Tech Circuit Accent with Fast Pulse */}
        <g stroke="url(#edtech-line-amber)" strokeWidth="2" fill="none">
          <path d="M 0 920 L 220 920 L 280 860 L 460 860" />
          <path
            d="M 0 920 L 220 920 L 280 860 L 460 860"
            stroke="#f59e0b"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="animate-circuit-pulse-fast"
            filter="url(#glow-bright)"
          />
          <circle cx="460" cy="860" r="6" fill="#f59e0b" />
        </g>

        {/* Top-Right Circuit Accent */}
        <g stroke="#4f46e5" strokeWidth="1.8" fill="none">
          <path d="M 1920 180 L 1760 180 L 1710 120 L 1520 120" />
          <circle cx="1520" cy="120" r="5" fill="#4f46e5" />
        </g>
      </svg>
    </div>
  );
}
