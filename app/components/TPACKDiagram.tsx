"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  key: "TK" | "PK" | "CK" | "TPK" | "TCK" | "PCK" | "TPACK";
  title: string;
  fullName: string;
  worldName: string;
  desc: string;
  examples: string[];
  classroomScenario: string;
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

export const tpackWorlds: Record<string, TPACKWorld> = {
  TK: {
    key: "TK",
    title: "TK",
    fullName: "Technological Knowledge",
    worldName: "Technological Knowledge Domain",
    desc: "Includes the teacher's ability to understand and use digital tools, technologies, and systems in teaching and learning.",
    examples: ["Operating Systems", "Hardware Devices", "Software Suites", "Interactive Displays", "AI Platforms"],
    classroomScenario: "Navigating digital platforms, setting up classroom hardware, and mastering software workflows effortlessly.",
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
  PK: {
    key: "PK",
    title: "PK",
    fullName: "Pedagogical Knowledge",
    worldName: "Pedagogical Knowledge Domain",
    desc: "Focuses on the teacher's understanding of different teaching methods, strategies, and approaches that help students learn.",
    examples: ["Lesson Design", "Student Assessment", "Collaborative Groupwork", "Differentiated Instruction", "Behavior Management"],
    classroomScenario: "Structuring an engaging debate, tailoring pacing to different learning styles, and diagnosing misconceptions.",
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
  CK: {
    key: "CK",
    title: "CK",
    fullName: "Content Knowledge",
    worldName: "Content Knowledge Domain",
    desc: "Involves the teacher's knowledge and understanding of the subject matter or topic being taught.",
    examples: ["Scientific Theories", "Historical Timelines", "Mathematical Proofs", "Literary Analysis", "Core Subject Facts"],
    classroomScenario: "Mastering subject standards, understanding foundational theories, and answering deep student inquiries.",
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
  PCK: {
    key: "PCK",
    title: "PCK",
    fullName: "Pedagogical Content Knowledge",
    worldName: "Pedagogical Content Knowledge Synthesis",
    desc: "Combines subject knowledge with teaching strategies to make lessons easier for students to understand.",
    examples: ["Metaphors & Analogies", "Scaffolded Exercises", "Misconception Interventions", "Conceptual Roadmaps"],
    classroomScenario: "Using a memorable real-life analogy to explain photosynthesis or complex fractions so students instantly grasp it.",
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
    key: "TCK",
    title: "TCK",
    fullName: "Technological Content Knowledge",
    worldName: "Technological Content Knowledge Synthesis",
    desc: "Involves using technology to present, explain, and help students understand specific subject matter.",
    examples: ["PhET Science Simulations", "GeoGebra Geometry", "Digital GIS Maps", "3D Anatomy Explorers"],
    classroomScenario: "Displaying a 3D interactive molecular model so students manipulate chemical bonds in virtual space.",
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
    key: "TPK",
    title: "TPK",
    fullName: "Technological Pedagogical Knowledge",
    worldName: "Technological Pedagogical Knowledge Synthesis",
    desc: "Focuses on how technology can support and improve different teaching methods and strategies.",
    examples: ["Interactive Live Polls", "Gamified Quizzes (Kahoot)", "Online Discussion Boards", "Peer Feedback Tools"],
    classroomScenario: "Using real-time audience polling to check student understanding and immediately pivot the discussion.",
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
    key: "TPACK",
    title: "TPACK",
    fullName: "Technological Pedagogical Content Knowledge",
    worldName: "Unified TPACK Core",
    desc: "Brings together technology, teaching strategies, and subject knowledge to create effective and meaningful learning experiences.",
    examples: ["Global Virtual Exchanges", "Immersive Project Inquiry", "Student-Led Digital Portfolios", "Flipped Classrooms"],
    classroomScenario: "Designing a collaborative inquiry project where students use digital tools to research, solve, and present solutions for real-world environmental problems.",
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
  const [activeKey, setActiveKey] = useState<keyof typeof tpackWorlds>("TPACK");
  const currentWorld = tpackWorlds[activeKey];
  const IconComponent = currentWorld.icon;

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-6 py-1 sm:py-2">
      {/* Venn Diagram Visual Canvas (Rock-solid SVG layout, mobile responsive) */}
      <div className="relative w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[400px] aspect-square flex items-center justify-center shrink-0 mx-auto">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full overflow-visible drop-shadow-sm select-none"
        >
          {/* Outer Dashed Contexts Ring */}
          <circle
            cx="250"
            cy="250"
            r="235"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2.5"
            strokeDasharray="10 8"
            className="opacity-50"
          />
          <text
            x="250"
            y="470"
            textAnchor="middle"
            className="font-mono text-xs fill-slate-500 font-bold tracking-widest uppercase"
          >
            Contexts
          </text>

          {/* TK Circle (Top, Pink) */}
          <g className="cursor-pointer" onClick={() => setActiveKey("TK")}>
            <circle
              cx="250"
              cy="180"
              r={activeKey === "TK" ? 118 : 115}
              fill={activeKey === "TK" ? tpackWorlds.TK.theme.activeFill : tpackWorlds.TK.theme.fillColor}
              stroke={tpackWorlds.TK.theme.stroke}
              strokeWidth={activeKey === "TK" ? 4 : 2}
              className="transition-all duration-300"
            />
            <text x="250" y="135" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
              Technological
            </text>
            <text x="250" y="152" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
              Knowledge (TK)
            </text>
          </g>

          {/* PK Circle (Bottom Left, Yellow) */}
          <g className="cursor-pointer" onClick={() => setActiveKey("PK")}>
            <circle
              cx="175"
              cy="290"
              r={activeKey === "PK" ? 118 : 115}
              fill={activeKey === "PK" ? tpackWorlds.PK.theme.activeFill : tpackWorlds.PK.theme.fillColor}
              stroke={tpackWorlds.PK.theme.stroke}
              strokeWidth={activeKey === "PK" ? 4 : 2}
              className="transition-all duration-300"
            />
            <text x="140" y="320" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
              Pedagogical
            </text>
            <text x="140" y="337" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
              Knowledge (PK)
            </text>
          </g>

          {/* CK Circle (Bottom Right, Cyan) */}
          <g className="cursor-pointer" onClick={() => setActiveKey("CK")}>
            <circle
              cx="325"
              cy="290"
              r={activeKey === "CK" ? 118 : 115}
              fill={activeKey === "CK" ? tpackWorlds.CK.theme.activeFill : tpackWorlds.CK.theme.fillColor}
              stroke={tpackWorlds.CK.theme.stroke}
              strokeWidth={activeKey === "CK" ? 4 : 2}
              className="transition-all duration-300"
            />
            <text x="360" y="320" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
              Content
            </text>
            <text x="360" y="337" textAnchor="middle" className="font-mono text-xs sm:text-sm font-bold fill-slate-900 pointer-events-none">
              Knowledge (CK)
            </text>
          </g>

          {/* Fixed Intersections (Guaranteed Position Stability on all devices) */}

          {/* TPK */}
          <g className="cursor-pointer" onClick={() => setActiveKey("TPK")}>
            <circle
              cx="195"
              cy="225"
              r={activeKey === "TPK" ? 33 : 27}
              fill={activeKey === "TPK" ? "#f43f5e" : "#fb7185"}
              stroke="#ffffff"
              strokeWidth={activeKey === "TPK" ? 3.5 : 2}
              className="transition-all duration-200"
            />
            <text x="195" y="230" textAnchor="middle" className="font-mono text-xs font-black fill-white pointer-events-none">
              TPK
            </text>
          </g>

          {/* TCK */}
          <g className="cursor-pointer" onClick={() => setActiveKey("TCK")}>
            <circle
              cx="305"
              cy="225"
              r={activeKey === "TCK" ? 33 : 27}
              fill={activeKey === "TCK" ? "#4f46e5" : "#6366f1"}
              stroke="#ffffff"
              strokeWidth={activeKey === "TCK" ? 3.5 : 2}
              className="transition-all duration-200"
            />
            <text x="305" y="230" textAnchor="middle" className="font-mono text-xs font-black fill-white pointer-events-none">
              TCK
            </text>
          </g>

          {/* PCK */}
          <g className="cursor-pointer" onClick={() => setActiveKey("PCK")}>
            <circle
              cx="250"
              cy="330"
              r={activeKey === "PCK" ? 33 : 27}
              fill={activeKey === "PCK" ? "#16a34a" : "#22c55e"}
              stroke="#ffffff"
              strokeWidth={activeKey === "PCK" ? 3.5 : 2}
              className="transition-all duration-200"
            />
            <text x="250" y="335" textAnchor="middle" className="font-mono text-xs font-black fill-white pointer-events-none">
              PCK
            </text>
          </g>

          {/* TPACK Center Core */}
          <g className="cursor-pointer" onClick={() => setActiveKey("TPACK")}>
            <circle
              cx="250"
              cy="255"
              r={activeKey === "TPACK" ? 36 : 30}
              fill={activeKey === "TPACK" ? "#9333ea" : "#a855f7"}
              stroke="#ffffff"
              strokeWidth={activeKey === "TPACK" ? 4 : 2.5}
              className="transition-all duration-200"
            />
            <text x="250" y="259" textAnchor="middle" className="font-mono text-[11px] font-black fill-white pointer-events-none tracking-tight">
              TPACK
            </text>
          </g>
        </svg>
      </div>

      {/* Selected Component Card: Responsive & Elegant for Mobile & Desktop */}
      <div className="flex-1 flex flex-col justify-center space-y-2.5 sm:space-y-4 w-full">
        {/* Component Tabs for Instant Tap Navigation */}
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center lg:justify-start">
          {Object.keys(tpackWorlds).map((k) => {
            const isSelected = activeKey === k;
            return (
              <button
                key={k}
                onClick={() => setActiveKey(k as keyof typeof tpackWorlds)}
                className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl font-mono text-[11px] sm:text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-md scale-105"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {k}
              </button>
            );
          })}
        </div>

        {/* Selected Component Card: Steps Forward on Selection */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentWorld.key}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={`p-3.5 sm:p-7 rounded-xl sm:rounded-2xl bg-white border ${currentWorld.theme.border} shadow-lg relative overflow-hidden`}
          >
            {/* Top ambient color glow */}
            <div
              className={`absolute top-0 left-0 right-0 h-28 bg-gradient-to-b ${currentWorld.theme.bgGradient} pointer-events-none`}
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 border-b border-slate-100 pb-3 sm:pb-4">
              <div className="flex items-center space-x-2.5 sm:space-x-3.5">
                <div className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-slate-50 border ${currentWorld.theme.border} ${currentWorld.theme.textColor}`}>
                  <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>

                <div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase font-semibold text-slate-400 tracking-wider">
                    {currentWorld.worldName}
                  </span>
                  <div className="flex items-center space-x-1.5 sm:space-x-2 mt-0.5">
                    <h3 className={`font-mono text-lg sm:text-2xl font-black ${currentWorld.theme.textColor}`}>
                      {currentWorld.title}
                    </h3>
                    <span className="text-slate-300 font-mono">—</span>
                    <h4 className="font-mono text-xs sm:text-base font-bold text-slate-800">
                      {currentWorld.fullName}
                    </h4>
                  </div>
                </div>
              </div>

              <span className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-mono text-[10px] sm:text-xs font-bold uppercase shadow-sm ${currentWorld.theme.badgeBg}`}>
                Component {Object.keys(tpackWorlds).indexOf(currentWorld.key) + 1} of 7
              </span>
            </div>

            {/* Core Definition */}
            <div className="relative z-10 py-2.5 sm:py-3.5">
              <p className="text-xs sm:text-base text-slate-800 font-sans leading-relaxed">
                {currentWorld.desc}
              </p>
            </div>

            {/* Classroom Scenario */}
            <div className="relative z-10 p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 text-[11px] sm:text-sm text-slate-700 font-sans leading-relaxed">
              <span className="font-mono font-bold text-slate-900 block mb-1">
                IN THE CLASSROOM:
              </span>
              {currentWorld.classroomScenario}
            </div>

            {/* Key Elements Tags */}
            <div className="relative z-10 pt-2.5 sm:pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1 sm:gap-1.5 text-xs font-mono">
              <span className="text-slate-400 mr-1 text-[10px] sm:text-[11px] font-semibold">KEY ELEMENTS:</span>
              {currentWorld.examples.map((ex, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md sm:rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium"
                >
                  {ex}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
