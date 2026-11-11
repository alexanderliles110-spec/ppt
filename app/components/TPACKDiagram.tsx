"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechEdBoxDecoration from "./TechEdBoxDecoration";
import {
  Cpu,
  GraduationCap,
  BookOpen,
  Layers,
  Atom,
  Network,
  Globe2
} from "lucide-react";

export interface TPACKWorld {
  num: number;
  key: "CK" | "PK" | "TK" | "PCK" | "TCK" | "TPK" | "TPACK";
  title: string;
  fullName: string;
  desc: string;
  icon: React.ElementType;
  theme: {
    bgGradient: string;
    border: string;
    stroke: string;
    textColor: string;
    badgeBg: string;
    fillColor: string;
    activeFill: string;
  };
}

export const tpackOrder: ("CK" | "PK" | "TK" | "PCK" | "TCK" | "TPK" | "TPACK")[] = [
  "CK",
  "PK",
  "TK",
  "PCK",
  "TCK",
  "TPK",
  "TPACK"
];

export const tpackWorlds: Record<string, TPACKWorld> = {
  CK: {
    num: 1,
    key: "CK",
    title: "CK",
    fullName: "Content Knowledge",
    desc: "Involves the teacher's knowledge and understanding of the subject matter or topic being taught.",
    icon: BookOpen,
    theme: {
      bgGradient: "from-cyan-500/10 to-transparent",
      border: "border-cyan-300",
      stroke: "#06b6d4",
      textColor: "text-cyan-600",
      badgeBg: "bg-cyan-100 text-cyan-800",
      fillColor: "rgba(6, 182, 212, 0.22)",
      activeFill: "rgba(6, 182, 212, 0.55)"
    }
  },
  PK: {
    num: 2,
    key: "PK",
    title: "PK",
    fullName: "Pedagogical Knowledge",
    desc: "Focuses on the teacher's understanding of different teaching methods, strategies, and approaches that help students learn.",
    icon: GraduationCap,
    theme: {
      bgGradient: "from-amber-500/10 to-transparent",
      border: "border-amber-300",
      stroke: "#eab308",
      textColor: "text-amber-600",
      badgeBg: "bg-amber-100 text-amber-800",
      fillColor: "rgba(234, 179, 8, 0.22)",
      activeFill: "rgba(234, 179, 8, 0.55)"
    }
  },
  TK: {
    num: 3,
    key: "TK",
    title: "TK",
    fullName: "Technological Knowledge",
    desc: "Includes the teacher's ability to understand and use digital tools, technologies, and systems in teaching and learning.",
    icon: Cpu,
    theme: {
      bgGradient: "from-pink-500/10 to-transparent",
      border: "border-pink-300",
      stroke: "#ec4899",
      textColor: "text-pink-600",
      badgeBg: "bg-pink-100 text-pink-800",
      fillColor: "rgba(236, 72, 153, 0.22)",
      activeFill: "rgba(236, 72, 153, 0.55)"
    }
  },
  PCK: {
    num: 4,
    key: "PCK",
    title: "PCK",
    fullName: "Pedagogical Content Knowledge",
    desc: "Combines subject knowledge with teaching strategies to make lessons easier for students to understand.",
    icon: Layers,
    theme: {
      bgGradient: "from-emerald-500/10 to-transparent",
      border: "border-emerald-300",
      stroke: "#22c55e",
      textColor: "text-emerald-600",
      badgeBg: "bg-emerald-100 text-emerald-800",
      fillColor: "rgba(34, 197, 94, 0.25)",
      activeFill: "rgba(34, 197, 94, 0.65)"
    }
  },
  TCK: {
    num: 5,
    key: "TCK",
    title: "TCK",
    fullName: "Technological Content Knowledge",
    desc: "Involves using technology to present, explain, and help students understand specific subject matter.",
    icon: Atom,
    theme: {
      bgGradient: "from-indigo-500/10 to-transparent",
      border: "border-indigo-300",
      stroke: "#6366f1",
      textColor: "text-indigo-600",
      badgeBg: "bg-indigo-100 text-indigo-800",
      fillColor: "rgba(99, 102, 241, 0.25)",
      activeFill: "rgba(99, 102, 241, 0.65)"
    }
  },
  TPK: {
    num: 6,
    key: "TPK",
    title: "TPK",
    fullName: "Technological Pedagogical Knowledge",
    desc: "Focuses on how technology can support and improve different teaching methods and strategies.",
    icon: Network,
    theme: {
      bgGradient: "from-rose-500/10 to-transparent",
      border: "border-rose-300",
      stroke: "#f43f5e",
      textColor: "text-rose-600",
      badgeBg: "bg-rose-100 text-rose-800",
      fillColor: "rgba(244, 63, 94, 0.25)",
      activeFill: "rgba(244, 63, 94, 0.65)"
    }
  },
  TPACK: {
    num: 7,
    key: "TPACK",
    title: "TPACK",
    fullName: "Technological Pedagogical Content Knowledge",
    desc: "Brings together technology, teaching strategies, and subject knowledge to create effective and meaningful learning experiences.",
    icon: Globe2,
    theme: {
      bgGradient: "from-purple-500/15 to-transparent",
      border: "border-purple-400",
      stroke: "#9333ea",
      textColor: "text-purple-600",
      badgeBg: "bg-purple-100 text-purple-800",
      fillColor: "rgba(147, 51, 234, 0.35)",
      activeFill: "rgba(147, 51, 234, 0.85)"
    }
  }
};

export default function TPACKDiagram() {
  const [activeKey, setActiveKey] = useState<keyof typeof tpackWorlds>("CK");
  const currentWorld = tpackWorlds[activeKey];
  const IconComponent = currentWorld.icon;

  return (
    <div className="w-full flex flex-col gap-4 py-1">
      {/* Top Row: Interactive Landscape Venn Diagram + Active Selected Component Box */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Venn Diagram Visual Canvas (Landscape Oval SVG layout) */}
        <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[340px] aspect-[3/2] flex items-center justify-center shrink-0 mx-auto">
          <svg
            viewBox="0 0 600 400"
            className="w-full h-full overflow-visible drop-shadow-sm select-none"
          >
            {/* Outer Dashed Landscape Contexts Oval */}
            <ellipse
              cx="300"
              cy="200"
              rx="282"
              ry="185"
              fill="none"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeDasharray="12 8"
              className="opacity-65"
            />
            <text
              x="300"
              y="372"
              textAnchor="middle"
              className="font-mono text-xs fill-slate-500 font-bold tracking-widest uppercase"
            >
              Contexts
            </text>

            {/* TK Landscape Circle (Top, Pink) */}
            <g className="cursor-pointer" onClick={() => setActiveKey("TK")}>
              <ellipse
                cx="300"
                cy="142"
                rx={activeKey === "TK" ? 142 : 138}
                ry={activeKey === "TK" ? 95 : 92}
                fill={activeKey === "TK" ? tpackWorlds.TK.theme.activeFill : tpackWorlds.TK.theme.fillColor}
                stroke={tpackWorlds.TK.theme.stroke}
                strokeWidth={activeKey === "TK" ? 4 : 2}
                className="transition-all duration-300"
              />
              <text x="300" y="98" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
                Technological
              </text>
              <text x="300" y="115" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
                Knowledge (TK)
              </text>
            </g>

            {/* PK Landscape Circle (Bottom Left, Yellow) */}
            <g className="cursor-pointer" onClick={() => setActiveKey("PK")}>
              <ellipse
                cx="210"
                cy="238"
                rx={activeKey === "PK" ? 142 : 138}
                ry={activeKey === "PK" ? 95 : 92}
                fill={activeKey === "PK" ? tpackWorlds.PK.theme.activeFill : tpackWorlds.PK.theme.fillColor}
                stroke={tpackWorlds.PK.theme.stroke}
                strokeWidth={activeKey === "PK" ? 4 : 2}
                className="transition-all duration-300"
              />
              <text x="155" y="262" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
                Pedagogical
              </text>
              <text x="155" y="279" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
                Knowledge (PK)
              </text>
            </g>

            {/* CK Landscape Circle (Bottom Right, Cyan) */}
            <g className="cursor-pointer" onClick={() => setActiveKey("CK")}>
              <ellipse
                cx="390"
                cy="238"
                rx={activeKey === "CK" ? 142 : 138}
                ry={activeKey === "CK" ? 95 : 92}
                fill={activeKey === "CK" ? tpackWorlds.CK.theme.activeFill : tpackWorlds.CK.theme.fillColor}
                stroke={tpackWorlds.CK.theme.stroke}
                strokeWidth={activeKey === "CK" ? 4 : 2}
                className="transition-all duration-300"
              />
              <text x="445" y="262" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
                Content
              </text>
              <text x="445" y="279" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
                Knowledge (CK)
              </text>
            </g>

            {/* TPK */}
            <g className="cursor-pointer" onClick={() => setActiveKey("TPK")}>
              <ellipse
                cx="232"
                cy="182"
                rx={activeKey === "TPK" ? 36 : 30}
                ry={activeKey === "TPK" ? 26 : 22}
                fill={activeKey === "TPK" ? "#f43f5e" : "#fb7185"}
                stroke="#ffffff"
                strokeWidth={activeKey === "TPK" ? 3.5 : 2}
                className="transition-all duration-200"
              />
              <text x="232" y="186" textAnchor="middle" className="font-mono text-xs font-black fill-white pointer-events-none">
                TPK
              </text>
            </g>

            {/* TCK */}
            <g className="cursor-pointer" onClick={() => setActiveKey("TCK")}>
              <ellipse
                cx="368"
                cy="182"
                rx={activeKey === "TCK" ? 36 : 30}
                ry={activeKey === "TCK" ? 26 : 22}
                fill={activeKey === "TCK" ? "#4f46e5" : "#6366f1"}
                stroke="#ffffff"
                strokeWidth={activeKey === "TCK" ? 3.5 : 2}
                className="transition-all duration-200"
              />
              <text x="368" y="186" textAnchor="middle" className="font-mono text-xs font-black fill-white pointer-events-none">
                TCK
              </text>
            </g>

            {/* PCK */}
            <g className="cursor-pointer" onClick={() => setActiveKey("PCK")}>
              <ellipse
                cx="300"
                cy="268"
                rx={activeKey === "PCK" ? 36 : 30}
                ry={activeKey === "PCK" ? 26 : 22}
                fill={activeKey === "PCK" ? "#16a34a" : "#22c55e"}
                stroke="#ffffff"
                strokeWidth={activeKey === "PCK" ? 3.5 : 2}
                className="transition-all duration-200"
              />
              <text x="300" y="272" textAnchor="middle" className="font-mono text-xs font-black fill-white pointer-events-none">
                PCK
              </text>
            </g>

            {/* TPACK Center Core */}
            <g className="cursor-pointer" onClick={() => setActiveKey("TPACK")}>
              <ellipse
                cx="300"
                cy="208"
                rx={activeKey === "TPACK" ? 40 : 34}
                ry={activeKey === "TPACK" ? 28 : 24}
                fill={activeKey === "TPACK" ? "#9333ea" : "#a855f7"}
                stroke="#ffffff"
                strokeWidth={activeKey === "TPACK" ? 4 : 2.5}
                className="transition-all duration-200"
              />
              <text x="300" y="212" textAnchor="middle" className="font-mono text-[11px] font-black fill-white pointer-events-none tracking-tight">
                TPACK
              </text>
            </g>
          </svg>
        </div>

        {/* Selected Component Box (Exact Title & Definition Only) */}
        <div className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWorld.key}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-sky-50/35 to-indigo-50/35 border ${currentWorld.theme.border} shadow-lg relative overflow-hidden`}
            >
              {/* Inside-Box Technology Education Orbital & Glowing Icon Orbs Design */}
              <TechEdBoxDecoration variant="wide" accent="cyan" />

              {/* Top ambient color glow */}
              <div
                className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${currentWorld.theme.bgGradient} pointer-events-none`}
              />

              <div className="relative z-10 flex items-center space-x-3 border-b border-slate-100 pb-3">
                <div className={`p-2 sm:p-2.5 rounded-xl bg-slate-50 border ${currentWorld.theme.border} ${currentWorld.theme.textColor} shrink-0`}>
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="font-mono text-sm sm:text-lg md:text-xl font-black text-slate-900">
                  <span className={currentWorld.theme.textColor}>
                    {currentWorld.num}. {currentWorld.title} – {currentWorld.fullName}:
                  </span>
                </h3>
              </div>

              {/* Exact Definition */}
              <div className="relative z-10 pt-3">
                <p className="text-sm sm:text-base md:text-lg text-slate-800 font-sans leading-relaxed">
                  {currentWorld.desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* All 7 Components Full Definitions (1. CK through 7. TPACK) inside Tech-Ed Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
        {tpackOrder.map((k) => {
          const item = tpackWorlds[k];
          const isSelected = activeKey === k;
          return (
            <div
              key={k}
              onClick={() => setActiveKey(k)}
              className={`relative p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer overflow-hidden ${
                isSelected
                  ? `${item.theme.border} bg-gradient-to-br from-white via-sky-50/60 to-indigo-50/50 shadow-md ring-2 ring-sky-400/30`
                  : "border-slate-200/90 bg-gradient-to-br from-white via-sky-50/20 to-indigo-50/20 hover:border-sky-300"
              } ${k === "TPACK" ? "md:col-span-2" : ""}`}
            >
              <TechEdBoxDecoration variant="card" accent="cyan" />
              <p className="relative z-10 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                <strong className={`font-mono ${item.theme.textColor}`}>
                  {item.num}. {item.title} – {item.fullName}:
                </strong>{" "}
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
