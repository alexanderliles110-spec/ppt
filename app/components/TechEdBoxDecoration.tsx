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
      dark: "#0369a1"
    },
    pink: {
      primary: "#db2777",
      secondary: "#f472b6",
      dark: "#be185d"
    },
    amber: {
      primary: "#d97706",
      secondary: "#fbbf24",
      dark: "#b45309"
    },
    indigo: {
      primary: "#4f46e5",
      secondary: "#818cf8",
      dark: "#4338ca"
    }
  }[accent];

  if (variant === "card") {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit z-0">
        <svg
          className="w-full h-full opacity-35"
          viewBox="0 0 800 220"
          preserveAspectRatio="xMaxYMid meet"
          fill="none"
        >
          <defs>
            <radialGradient id={`orb-grad-card-${accent}`} cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="55%" stopColor={palette.secondary} stopOpacity="0.2" />
              <stop offset="100%" stopColor={palette.primary} stopOpacity="0.4" />
            </radialGradient>
          </defs>

          <ellipse
            cx="760"
            cy="140"
            rx="165"
            ry="105"
            transform="rotate(-18 760 140)"
            stroke={palette.primary}
            strokeWidth="1.4"
            strokeOpacity="0.45"
          />
          <ellipse
            cx="760"
            cy="140"
            rx="125"
            ry="80"
            transform="rotate(-12 760 140)"
            stroke={palette.secondary}
            strokeWidth="1.2"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
          />

          {/* Graduation Cap Orb */}
          <g transform="translate(715, 85)">
            <circle
              cx="26"
              cy="26"
              r="24"
              fill={`url(#orb-grad-card-${accent})`}
              stroke={palette.primary}
              strokeWidth="1.5"
            />
            <path
              d="M26 15 L12 22 L26 29 L40 22 Z"
              stroke={palette.dark}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M17 25 V33 C17 35.5 21 37.5 26 37.5 C31 37.5 35 35.5 35 33 V25"
              stroke={palette.dark}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>

          {/* Book Orb */}
          <g transform="translate(655, 36)">
            <circle
              cx="16"
              cy="16"
              r="15"
              fill={`url(#orb-grad-card-${accent})`}
              stroke={palette.primary}
              strokeWidth="1.3"
            />
            <path
              d="M16 11 C13.5 9.8 10.5 9.8 8.5 10.8 V21.5 C10.5 20.5 13.5 20.5 16 21.8 C18.5 20.5 21.5 20.5 23.5 21.5 V10.8 C21.5 9.8 18.5 9.8 16 11 Z"
              stroke={palette.dark}
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
            <line x1="16" y1="11" x2="16" y2="21.8" stroke={palette.dark} strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    );
  }

  // Unified full-canvas SVG without slicing ("meet" instead of "slice") so zero vertical cutoff lines ever appear
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit z-0">
      <svg
        className="w-full h-full opacity-45"
        viewBox="0 0 1280 720"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="orb-grad-canvas" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#38bdf8" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.45" />
          </radialGradient>
        </defs>

        {/* RIGHT FLANK: Sweeping Orbital Trajectories */}
        <ellipse
          cx="1220"
          cy="360"
          rx="420"
          ry="280"
          transform="rotate(-14 1220 360)"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeOpacity="0.35"
        />
        <ellipse
          cx="1220"
          cy="360"
          rx="330"
          ry="220"
          transform="rotate(-8 1220 360)"
          stroke="#38bdf8"
          strokeWidth="1.6"
          strokeDasharray="7 8"
          strokeOpacity="0.55"
        />
        <ellipse
          cx="1240"
          cy="375"
          rx="240"
          ry="165"
          transform="rotate(-20 1240 375)"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />

        {/* Orbital Spark Nodes (Right) */}
        <circle cx="910" cy="240" r="4.5" fill="#0ea5e9" fillOpacity="0.7" />
        <circle cx="1010" cy="500" r="4.5" fill="#0284c7" fillOpacity="0.65" />
        <circle cx="1095" cy="180" r="4" fill="#6366f1" fillOpacity="0.55" />

        {/* Right Bubble 1: Large Graduation Cap Orb */}
        <g transform="translate(1110, 290)">
          <circle cx="56" cy="56" r="52" fill="url(#orb-grad-canvas)" stroke="#0284c7" strokeWidth="2.2" />
          <circle cx="82" cy="24" r="6" fill="#ffffff" fillOpacity="0.9" />
          <path
            d="M56 34 L28 48 L56 62 L84 48 Z"
            stroke="#0369a1"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          <path
            d="M37 53 V69 C37 74.5 45.5 78.5 56 78.5 C66.5 78.5 75 74.5 75 69 V53"
            stroke="#0369a1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path d="M81 49.5 V67" stroke="#0369a1" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Right Bubble 2: Open Book Orb */}
        <g transform="translate(975, 130)">
          <circle cx="34" cy="34" r="31" fill="url(#orb-grad-canvas)" stroke="#0284c7" strokeWidth="2" />
          <circle cx="48" cy="16" r="4" fill="#ffffff" fillOpacity="0.9" />
          <path
            d="M34 23 C28.5 20.8 22.5 20.8 18.5 22.8 V44 C22.5 42 28.5 42 34 44.5 C39.5 42 45.5 42 49.5 44 V22.8 C45.5 20.8 39.5 20.8 34 23 Z"
            stroke="#0369a1"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line x1="34" y1="23" x2="34" y2="44.5" stroke="#0369a1" strokeWidth="2" />
        </g>

        {/* Right Bubble 3: Magnifying Glass Orb */}
        <g transform="translate(980, 380)">
          <circle cx="30" cy="30" r="27" fill="url(#orb-grad-canvas)" stroke="#0284c7" strokeWidth="2" />
          <circle cx="27" cy="27" r="9.5" stroke="#0369a1" strokeWidth="2.3" />
          <line x1="34" y1="34" x2="42" y2="42" stroke="#0369a1" strokeWidth="2.8" strokeLinecap="round" />
        </g>

        {/* Right Bubble 4: Lightbulb Innovation Orb */}
        <g transform="translate(1055, 495)">
          <circle cx="28" cy="28" r="26" fill="url(#orb-grad-canvas)" stroke="#0284c7" strokeWidth="1.9" />
          <path
            d="M28 15.5 C22.5 15.5 18.5 19.5 18.5 24.5 C18.5 28 20.5 30.8 23.2 32.5 V36.5 H32.8 V32.5 C35.5 30.8 37.5 28 37.5 24.5 C37.5 19.5 33.5 15.5 28 15.5 Z"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line x1="24" y1="40.5" x2="32" y2="40.5" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* LEFT FLANK: Sweeping Orbital Trajectories & Education Bubbles */}
        <ellipse
          cx="40"
          cy="380"
          rx="340"
          ry="230"
          transform="rotate(16 40 380)"
          stroke="#0284c7"
          strokeWidth="1.8"
          strokeOpacity="0.32"
        />
        <ellipse
          cx="40"
          cy="380"
          rx="260"
          ry="175"
          transform="rotate(10 40 380)"
          stroke="#38bdf8"
          strokeWidth="1.6"
          strokeDasharray="7 8"
          strokeOpacity="0.5"
        />
        <circle cx="290" cy="265" r="4.5" fill="#0ea5e9" fillOpacity="0.65" />

        {/* Left Bubble 1: Globe Network Orb */}
        <g transform="translate(105, 165)">
          <circle cx="30" cy="30" r="27" fill="url(#orb-grad-canvas)" stroke="#0284c7" strokeWidth="2" />
          <circle cx="30" cy="30" r="15" stroke="#0369a1" strokeWidth="1.9" />
          <ellipse cx="30" cy="30" rx="7.5" ry="15" stroke="#0369a1" strokeWidth="1.7" />
          <line x1="15" y1="30" x2="45" y2="30" stroke="#0369a1" strokeWidth="1.7" />
        </g>

        {/* Left Bubble 2: Book Orb on Bottom Left */}
        <g transform="translate(155, 465)">
          <circle cx="30" cy="30" r="27" fill="url(#orb-grad-canvas)" stroke="#0284c7" strokeWidth="2" />
          <path
            d="M30 20.5 C25 18.5 19.5 18.5 16.5 20.2 V39 C19.5 37.2 25 37.2 30 39.5 C35 37.2 40.5 37.2 43.5 39 V20.2 C40.5 18.5 35 18.5 30 20.5 Z"
            stroke="#0369a1"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line x1="30" y1="20.5" x2="30" y2="39.5" stroke="#0369a1" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}
