"use client";

import React from "react";

export default function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 bg-gradient-to-br from-slate-100 via-sky-50/70 to-indigo-100/80">
      {/* Crisp Modern Grid */}
      <div className="absolute inset-0 cyber-grid opacity-80" />

      {/* Lightweight Radial Gradient Accents (No expensive CSS blur filters) */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 12% 15%, rgba(59, 130, 246, 0.16) 0%, transparent 42%), radial-gradient(circle at 88% 85%, rgba(6, 182, 212, 0.16) 0%, transparent 45%), radial-gradient(circle at 75% 22%, rgba(245, 158, 11, 0.1) 0%, transparent 38%)"
        }}
      />

      {/* Technology Education Vector Watermarks & Circuit Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-80"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="edtech-line-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="edtech-line-amber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Top-Left Educational Tech Circuit Blueprint */}
        <g stroke="url(#edtech-line-blue)" strokeWidth="2" fill="none">
          <path d="M 0 120 L 180 120 L 240 180 L 480 180 L 520 220" />
          <circle cx="480" cy="180" r="6" fill="#2563eb" />
          <circle cx="240" cy="180" r="5" fill="#38bdf8" />
          <circle cx="520" cy="220" r="6" fill="#06b6d4" />
          <path d="M 90 0 L 90 80 L 150 140 L 150 240" strokeDasharray="5 5" strokeWidth="1.5" />
        </g>

        {/* Graduation Cap Vector Motifs (Top Left) */}
        <g stroke="#1d4ed8" strokeWidth="2" fill="none" transform="translate(120, 240)">
          <path d="M 60 30 L 110 55 L 60 80 L 10 55 Z" fill="rgba(37,99,235,0.08)" />
          <path d="M 32 64 L 32 86 Q 60 106 88 86 L 88 64" strokeWidth="2.5" />
          <line x1="110" y1="55" x2="110" y2="95" strokeWidth="3" />
          <circle cx="110" cy="98" r="4" fill="#1d4ed8" />
        </g>

        {/* Code / Logic Bracket Watermark (Mid Left) */}
        <g stroke="#0369a1" strokeWidth="2.5" fill="none" transform="translate(160, 680)">
          <path d="M 45 25 L 15 55 L 45 85" strokeWidth="3" />
          <path d="M 85 25 L 115 55 L 85 85" strokeWidth="3" />
          <line x1="72" y1="20" x2="58" y2="90" strokeWidth="2.5" />
        </g>

        {/* Connected Knowledge Network Nodes (Bottom Right) */}
        <g stroke="#0e7490" strokeWidth="2" fill="none" transform="translate(1420, 660)">
          <line x1="50" y1="50" x2="150" y2="25" strokeWidth="2.5" />
          <line x1="150" y1="25" x2="230" y2="95" strokeWidth="2.5" />
          <line x1="150" y1="25" x2="130" y2="150" strokeWidth="2.5" />
          <line x1="50" y1="50" x2="130" y2="150" strokeWidth="2.5" />
          <line x1="230" y1="95" x2="300" y2="50" strokeWidth="2.5" />

          <circle cx="50" cy="50" r="7" fill="#0284c7" />
          <circle cx="150" cy="25" r="9" fill="#0369a1" />
          <circle cx="230" cy="95" r="7" fill="#06b6d4" />
          <circle cx="130" cy="150" r="8" fill="#0284c7" />
          <circle cx="300" cy="50" r="7" fill="#2563eb" />
        </g>

        {/* Atom Science Orbit Symbol (Top Right) */}
        <g transform="translate(1520, 140)">
          <ellipse cx="80" cy="80" rx="65" ry="24" stroke="#d97706" strokeWidth="2" fill="none" transform="rotate(30 80 80)" />
          <ellipse cx="80" cy="80" rx="65" ry="24" stroke="#d97706" strokeWidth="2" fill="none" transform="rotate(-30 80 80)" />
          <ellipse cx="80" cy="80" rx="65" ry="24" stroke="#d97706" strokeWidth="2" fill="none" transform="rotate(90 80 80)" />
          <circle cx="80" cy="80" r="8" fill="#d97706" />
        </g>

        {/* Bottom Left Tech Circuit Accent */}
        <g stroke="url(#edtech-line-amber)" strokeWidth="2" fill="none">
          <path d="M 0 920 L 220 920 L 280 860 L 460 860" />
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
