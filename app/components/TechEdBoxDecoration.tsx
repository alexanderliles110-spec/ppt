"use client";

import React from "react";

interface TechEdBoxDecorationProps {
  variant?: "wide" | "card" | "diagram";
  accent?: "cyan" | "pink" | "amber" | "indigo";
}

export default function TechEdBoxDecoration({
  variant = "wide",
  accent = "cyan"
}: TechEdBoxDecorationProps) {
  const palette = {
    cyan: {
      primary: "#0284c7",
      secondary: "#38bdf8",
      glow: "#0ea5e9",
      tint: "rgba(14, 165, 233, 0.08)"
    },
    pink: {
      primary: "#db2777",
      secondary: "#f472b6",
      glow: "#ec4899",
      tint: "rgba(236, 72, 153, 0.08)"
    },
    amber: {
      primary: "#d97706",
      secondary: "#fbbf24",
      glow: "#f59e0b",
      tint: "rgba(245, 158, 11, 0.08)"
    },
    indigo: {
      primary: "#4f46e5",
      secondary: "#818cf8",
      glow: "#6366f1",
      tint: "rgba(99, 102, 241, 0.08)"
    }
  }[accent];

  if (variant === "card") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded- inherit z-0">
        {/* Soft Ambient Tech-Ed Radial Glow in Corner */}
        <div
          className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full blur-2xl opacity-60"
          style={{
            background: `radial-gradient(circle, ${palette.tint} 0%, rgba(56, 189, 248, 0.12) 45%, transparent 75%)`
          }}
        />

        <svg
          className="absolute right-0 bottom-0 w-48 h-40 opacity-35"
          viewBox="0 0 220 180"
          fill="none"
        >
          <defs>
            <radialGradient id={`orb-grad-card-${accent}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="55%" stopColor={palette.secondary} stopOpacity="0.22" />
              <stop offset="100%" stopColor={palette.primary} stopOpacity="0.45" />
            </radialGradient>
          </defs>

          {/* Sweeping Orbital Arcs */}
          <ellipse
            cx="195"
            cy="155"
            rx="145"
            ry="95"
            transform="rotate(-22 195 155)"
            stroke={palette.primary}
            strokeWidth="1.4"
            strokeOpacity="0.55"
          />
          <ellipse
            cx="195"
            cy="155"
            rx="112"
            ry="72"
            transform="rotate(-15 195 155)"
            stroke={palette.secondary}
            strokeWidth="1.2"
            strokeDasharray="3 4"
            strokeOpacity="0.7"
          />
          <ellipse
            cx="185"
            cy="165"
            rx="75"
            ry="50"
            transform="rotate(-28 185 165)"
            stroke={palette.primary}
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />

          {/* Glowing Nodes on Orbits */}
          <circle cx="88" cy="112" r="3" fill={palette.secondary} />
          <circle cx="88" cy="112" r="6" fill={palette.secondary} fillOpacity="0.3" />
          <circle cx="148" cy="82" r="2.5" fill={palette.primary} />

          {/* Orb 1: Large Graduation Cap Bubble */}
          <g transform="translate(152, 96)">
            <circle
              cx="26"
              cy="26"
              r="24"
              fill={`url(#orb-grad-card-${accent})`}
              stroke={palette.primary}
              strokeWidth="1.6"
            />
            <circle cx="38" cy="12" r="3" fill="#ffffff" fillOpacity="0.9" />
            {/* Graduation Cap Icon */}
            <path
              d="M26 15 L12 22 L26 29 L40 22 Z"
              stroke={palette.primary}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M17 25 V33 C17 35.5 21 37.5 26 37.5 C31 37.5 35 35.5 35 33 V25"
              stroke={palette.primary}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path d="M39 22.5 V31" stroke={palette.primary} strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Orb 2: Open Book Bubble */}
          <g transform="translate(102, 42)">
            <circle
              cx="16"
              cy="16"
              r="15"
              fill={`url(#orb-grad-card-${accent})`}
              stroke={palette.primary}
              strokeWidth="1.4"
            />
            <circle cx="23" cy="7" r="2" fill="#ffffff" fillOpacity="0.9" />
            {/* Book Icon */}
            <path
              d="M16 11 C13.5 9.8 10.5 9.8 8.5 10.8 V21.5 C10.5 20.5 13.5 20.5 16 21.8 C18.5 20.5 21.5 20.5 23.5 21.5 V10.8 C21.5 9.8 18.5 9.8 16 11 Z"
              stroke={palette.primary}
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <line x1="16" y1="11" x2="16" y2="21.8" stroke={palette.primary} strokeWidth="1.2" />
          </g>

          {/* Orb 3: Magnifying Glass / Research Bubble */}
          <g transform="translate(96, 122)">
            <circle
              cx="14"
              cy="14"
              r="13"
              fill={`url(#orb-grad-card-${accent})`}
              stroke={palette.primary}
              strokeWidth="1.3"
            />
            <circle cx="12.5" cy="12.5" r="4.5" stroke={palette.primary} strokeWidth="1.4" />
            <line x1="16" y1="16" x2="20" y2="20" stroke={palette.primary} strokeWidth="1.6" strokeLinecap="round" />
          </g>

          {/* Orb 4: Globe Bubble */}
          <g transform="translate(52, 82)">
            <circle
              cx="12"
              cy="12"
              r="11"
              fill={`url(#orb-grad-card-${accent})`}
              stroke={palette.primary}
              strokeWidth="1.2"
            />
            <circle cx="12" cy="12" r="6.5" stroke={palette.primary} strokeWidth="1.1" />
            <ellipse cx="12" cy="12" rx="3.2" ry="6.5" stroke={palette.primary} strokeWidth="1" />
            <line x1="5.5" y1="12" x2="18.5" y2="12" stroke={palette.primary} strokeWidth="1" />
          </g>
        </svg>
      </div>
    );
  }

  // "wide" or "diagram" variant for large boxes
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit z-0">
      {/* Soft Tech-Ed Radial Glows */}
      <div
        className="absolute -right-10 -top-10 w-64 h-64 rounded-full blur-3xl opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.14) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 75%)"
        }}
      />
      <div
        className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full blur-3xl opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 75%)"
        }}
      />

      {/* Right Side Technology Education Orbital & Icon Bubbles Graphic */}
      <svg
        className={`absolute right-0 top-0 h-full w-72 sm:w-96 ${
          variant === "diagram" ? "opacity-40" : "opacity-45"
        }`}
        viewBox="0 0 360 220"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="orb-grad-wide" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.48" />
          </radialGradient>
        </defs>

        {/* Sweeping Orbital Trajectories */}
        <ellipse
          cx="320"
          cy="110"
          rx="230"
          ry="135"
          transform="rotate(-14 320 110)"
          stroke="#0284c7"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
        <ellipse
          cx="320"
          cy="110"
          rx="185"
          ry="108"
          transform="rotate(-8 320 110)"
          stroke="#38bdf8"
          strokeWidth="1.3"
          strokeDasharray="4 5"
          strokeOpacity="0.65"
        />
        <ellipse
          cx="330"
          cy="115"
          rx="135"
          ry="82"
          transform="rotate(-20 330 115)"
          stroke="#6366f1"
          strokeWidth="1.3"
          strokeOpacity="0.4"
        />

        {/* Glowing Orbital Spark Nodes */}
        <circle cx="145" cy="65" r="3" fill="#0ea5e9" />
        <circle cx="145" cy="65" r="7" fill="#38bdf8" fillOpacity="0.3" />
        <circle cx="205" cy="175" r="3" fill="#0284c7" />
        <circle cx="205" cy="175" r="6" fill="#38bdf8" fillOpacity="0.3" />
        <circle cx="255" cy="40" r="2.5" fill="#6366f1" />

        {/* Bubble 1: Large Graduation Cap Orb */}
        <g transform="translate(272, 74)">
          <circle cx="34" cy="34" r="32" fill="url(#orb-grad-wide)" stroke="#0284c7" strokeWidth="1.8" />
          <circle cx="50" cy="14" r="4" fill="#ffffff" fillOpacity="0.95" />
          <path
            d="M34 20 L16 29 L34 38 L52 29 Z"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M22 32.5 V42.5 C22 46 27.5 48.5 34 48.5 C40.5 48.5 46 46 46 42.5 V32.5"
            stroke="#0369a1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M50 30 V41" stroke="#0369a1" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* Bubble 2: Open Book Orb */}
        <g transform="translate(205, 16)">
          <circle cx="22" cy="22" r="20" fill="url(#orb-grad-wide)" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="31" cy="10" r="2.5" fill="#ffffff" fillOpacity="0.95" />
          <path
            d="M22 15 C18.5 13.5 14.5 13.5 12 14.8 V28.5 C14.5 27.2 18.5 27.2 22 28.8 C25.5 27.2 29.5 27.2 32 28.5 V14.8 C29.5 13.5 25.5 13.5 22 15 Z"
            stroke="#0369a1"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <line x1="22" y1="15" x2="22" y2="28.8" stroke="#0369a1" strokeWidth="1.5" />
        </g>

        {/* Bubble 3: Magnifying Glass Orb */}
        <g transform="translate(208, 112)">
          <circle cx="19" cy="19" r="17" fill="url(#orb-grad-wide)" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="27" cy="9" r="2.2" fill="#ffffff" fillOpacity="0.9" />
          <circle cx="17" cy="17" r="6" stroke="#0369a1" strokeWidth="1.7" />
          <line x1="21.5" y1="21.5" x2="26.5" y2="26.5" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Bubble 4: Globe Network Orb */}
        <g transform="translate(148, 78)">
          <circle cx="16" cy="16" r="14.5" fill="url(#orb-grad-wide)" stroke="#0284c7" strokeWidth="1.4" />
          <circle cx="16" cy="16" r="8.5" stroke="#0369a1" strokeWidth="1.3" />
          <ellipse cx="16" cy="16" rx="4.2" ry="8.5" stroke="#0369a1" strokeWidth="1.2" />
          <line x1="7.5" y1="16" x2="24.5" y2="16" stroke="#0369a1" strokeWidth="1.2" />
        </g>

        {/* Bubble 5: Lightbulb Innovation Orb */}
        <g transform="translate(252, 162)">
          <circle cx="18" cy="18" r="16.5" fill="url(#orb-grad-wide)" stroke="#0284c7" strokeWidth="1.4" />
          <path
            d="M18 10 C14.5 10 12 12.5 12 15.8 C12 18 13.3 19.8 15 20.8 V23.5 H21 V20.8 C22.7 19.8 24 18 24 15.8 C24 12.5 21.5 10 18 10 Z"
            stroke="#0369a1"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <line x1="15.5" y1="26" x2="20.5" y2="26" stroke="#0369a1" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </svg>

      {variant === "diagram" && (
        /* Left Flank Orbital & Education Bubbles for Widescreen Diagram Balance */
        <svg
          className="absolute left-0 bottom-0 h-full w-56 sm:w-72 opacity-35"
          viewBox="0 0 260 220"
          preserveAspectRatio="xMinYMid slice"
          fill="none"
        >
          <ellipse
            cx="-20"
            cy="120"
            rx="190"
            ry="115"
            transform="rotate(16 -20 120)"
            stroke="#0284c7"
            strokeWidth="1.4"
            strokeOpacity="0.45"
          />
          <ellipse
            cx="-20"
            cy="120"
            rx="145"
            ry="88"
            transform="rotate(10 -20 120)"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="4 5"
            strokeOpacity="0.6"
          />
          <circle cx="122" cy="74" r="3" fill="#0ea5e9" />
          {/* Globe Orb on Left */}
          <g transform="translate(28, 36)">
            <circle cx="18" cy="18" r="16" fill="url(#orb-grad-wide)" stroke="#0284c7" strokeWidth="1.4" />
            <circle cx="18" cy="18" r="9" stroke="#0369a1" strokeWidth="1.3" />
            <ellipse cx="18" cy="18" rx="4.5" ry="9" stroke="#0369a1" strokeWidth="1.2" />
            <line x1="9" y1="18" x2="27" y2="18" stroke="#0369a1" strokeWidth="1.2" />
          </g>
          {/* Book Orb on Bottom Left */}
          <g transform="translate(56, 152)">
            <circle cx="18" cy="18" r="16" fill="url(#orb-grad-wide)" stroke="#0284c7" strokeWidth="1.4" />
            <path
              d="M18 12.5 C15 11.2 11.8 11.2 9.8 12.2 V23.5 C11.8 22.5 15 22.5 18 23.8 C21 22.5 24.2 22.5 26.2 23.5 V12.2 C24.2 11.2 21 11.2 18 12.5 Z"
              stroke="#0369a1"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <line x1="18" y1="12.5" x2="18" y2="23.8" stroke="#0369a1" strokeWidth="1.3" />
          </g>
        </svg>
      )}
    </div>
  );
}
