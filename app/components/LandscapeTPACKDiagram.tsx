"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, GraduationCap, BookOpen, Layers, Atom, Network, Globe2, Sparkles, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface DomainInfo {
  key: string;
  name: string;
  code: string;
  desc: string;
  color: string;
  icon: React.ElementType;
}

const domains: Record<string, DomainInfo> = {
  TK: {
    key: "TK",
    name: "Technological Knowledge",
    code: "TK",
    desc: "Understanding digital tools, software architectures, device hardware, and educational interfaces.",
    color: "#ec4899",
    icon: Cpu
  },
  PK: {
    key: "PK",
    name: "Pedagogical Knowledge",
    code: "PK",
    desc: "Practices and methods of teaching, instructional design, classroom management, and assessment.",
    color: "#eab308",
    icon: GraduationCap
  },
  CK: {
    key: "CK",
    name: "Content Knowledge",
    code: "CK",
    desc: "Core subject matter: scientific theories, mathematical logic, history, and disciplinary concepts.",
    color: "#06b6d4",
    icon: BookOpen
  },
  TPK: {
    key: "TPK",
    name: "Technological Pedagogical Knowledge",
    code: "TPK",
    desc: "How digital platforms and classroom tech reshape teaching strategies, collaboration, and student engagement.",
    color: "#f43f5e",
    icon: Network
  },
  TCK: {
    key: "TCK",
    name: "Technological Content Knowledge",
    code: "TCK",
    desc: "How technology illuminates and visualizes complex content (e.g. 3D simulations, interactive models).",
    color: "#6366f1",
    icon: Atom
  },
  PCK: {
    key: "PCK",
    name: "Pedagogical Content Knowledge",
    code: "PCK",
    desc: "Transforming subject matter into accessible student understanding using targeted pedagogical analogies.",
    color: "#10b981",
    icon: Layers
  },
  TPACK: {
    key: "TPACK",
    name: "Technological Pedagogical Content Knowledge",
    code: "TPACK",
    desc: "The true synthesis: deep integration of technology, pedagogy, and curriculum for 21st-century education.",
    color: "#9333ea",
    icon: Globe2
  }
};

export default function LandscapeTPACKDiagram() {
  const [selectedKey, setSelectedKey] = useState<string>("TPACK");
  const [showOriginalImage, setShowOriginalImage] = useState<boolean>(false);

  const activeDomain = domains[selectedKey] || domains.TPACK;
  const ActiveIcon = activeDomain.icon;

  return (
    <div className="w-full bg-white/95 rounded-2xl border border-slate-200/90 shadow-md p-3 sm:p-5 relative overflow-hidden group">
      {/* High-Tech HUD Corner Brackets */}
      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-blue-500 pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-blue-500 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-blue-500 pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-blue-500 pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5 mb-3 font-mono text-[10px] sm:text-xs">
        <div className="flex items-center space-x-2">
          <span className="flex space-x-1">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          </span>
          <span className="font-bold tracking-wider text-slate-700 uppercase">
            {"// TPACK.LANDSCAPE_CONVERGENCE_MODEL"}
          </span>
          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 font-bold text-[9px] uppercase tracking-wider hidden sm:inline-block">
            Mishra &amp; Koehler
          </span>
        </div>

        {/* Toggle Mode: Interactive Landscape Vector vs Original Reference Graphic */}
        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => setShowOriginalImage(false)}
            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all flex items-center space-x-1 ${
              !showOriginalImage
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Interactive Landscape</span>
          </button>
          <button
            onClick={() => setShowOriginalImage(true)}
            className={`px-2.5 py-1 rounded text-[10px] font-bold transition-all flex items-center space-x-1 ${
              showOriginalImage
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <ImageIcon className="w-3 h-3" />
            <span>Reference Diagram</span>
          </button>
        </div>
      </div>

      {/* Main Diagram Area */}
      {showOriginalImage ? (
        /* Reference Graphic Mode (User's Exact Uploaded Diagram in Landscape Frame) */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full flex flex-col items-center justify-center py-2"
        >
          <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[16/10] bg-white rounded-xl overflow-hidden border border-slate-100 p-2 shadow-inner flex items-center justify-center">
            <Image
              src="/images/tpack-diagram.jpg"
              alt="Technological Pedagogical Content Knowledge (TPACK) Framework Diagram"
              width={540}
              height={440}
              priority
              className="w-full h-full object-contain select-none"
            />
          </div>
          <p className="mt-2 text-center font-mono text-[10px] text-slate-400">
            {"// FIG 1.0: MISHRA & KOEHLER TPACK TRIADIC KNOWLEDGE MODEL"}
          </p>
        </motion.div>
      ) : (
        /* Interactive Landscape Vector Mode (True Landscape Ellipse & Widescreen Callouts) */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative w-full flex flex-col items-center"
        >
          <svg
            viewBox="0 0 860 380"
            className="w-full h-auto max-h-[340px] drop-shadow-sm select-none"
          >
            {/* Outer Landscape "Contexts" Ellipse */}
            <ellipse
              cx="430"
              cy="190"
              rx="410"
              ry="175"
              fill="#f8fafc"
              stroke="#818cf8"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              className="opacity-70 transition-all duration-300"
            />
            {/* Contexts Label */}
            <text
              x="430"
              y="355"
              textAnchor="middle"
              className="font-mono text-xs fill-indigo-600 font-bold tracking-widest uppercase"
            >
              Contexts (21st-Century Learning Environment)
            </text>

            {/* CALLOUT LINES AND LABELS (LANDSCAPE HORIZONTAL SPREAD) */}

            {/* Top TPACK Callout */}
            <g className="cursor-pointer" onClick={() => setSelectedKey("TPACK")}>
              <path
                d="M 430 190 L 430 85 L 530 45"
                stroke="#9333ea"
                strokeWidth="2"
                strokeDasharray="3 3"
                fill="none"
              />
              <circle cx="430" cy="190" r="4.5" fill="#9333ea" />
              <circle cx="530" cy="45" r="3.5" fill="#9333ea" />
              <rect
                x="535"
                y="26"
                width="240"
                height="32"
                rx="6"
                fill={selectedKey === "TPACK" ? "#9333ea" : "#f3e8ff"}
                stroke="#c084fc"
                strokeWidth="1.5"
              />
              <text
                x="545"
                y="41"
                className={`font-mono text-[10px] font-bold ${
                  selectedKey === "TPACK" ? "fill-white" : "fill-purple-900"
                }`}
              >
                Technological Pedagogical Content
              </text>
              <text
                x="545"
                y="52"
                className={`font-mono text-[9px] font-bold ${
                  selectedKey === "TPACK" ? "fill-purple-200" : "fill-purple-700"
                }`}
              >
                Knowledge (TPACK)
              </text>
            </g>

            {/* Left TPK Callout */}
            <g className="cursor-pointer" onClick={() => setSelectedKey("TPK")}>
              <path
                d="M 385 175 L 300 155 L 180 155"
                stroke="#f43f5e"
                strokeWidth="2"
                strokeDasharray="3 3"
                fill="none"
              />
              <circle cx="385" cy="175" r="4.5" fill="#f43f5e" />
              <circle cx="180" cy="155" r="3.5" fill="#f43f5e" />
              <rect
                x="15"
                y="135"
                width="160"
                height="36"
                rx="6"
                fill={selectedKey === "TPK" ? "#f43f5e" : "#ffe4e6"}
                stroke="#fda4af"
                strokeWidth="1.5"
              />
              <text
                x="95"
                y="150"
                textAnchor="middle"
                className={`font-mono text-[10px] font-bold ${
                  selectedKey === "TPK" ? "fill-white" : "fill-rose-900"
                }`}
              >
                Technological Pedagogical
              </text>
              <text
                x="95"
                y="163"
                textAnchor="middle"
                className={`font-mono text-[9px] font-bold ${
                  selectedKey === "TPK" ? "fill-rose-200" : "fill-rose-700"
                }`}
              >
                Knowledge (TPK)
              </text>
            </g>

            {/* Right TCK Callout */}
            <g className="cursor-pointer" onClick={() => setSelectedKey("TCK")}>
              <path
                d="M 475 175 L 560 155 L 680 155"
                stroke="#6366f1"
                strokeWidth="2"
                strokeDasharray="3 3"
                fill="none"
              />
              <circle cx="475" cy="175" r="4.5" fill="#6366f1" />
              <circle cx="680" cy="155" r="3.5" fill="#6366f1" />
              <rect
                x="685"
                y="135"
                width="160"
                height="36"
                rx="6"
                fill={selectedKey === "TCK" ? "#6366f1" : "#e0e7ff"}
                stroke="#a5b4fc"
                strokeWidth="1.5"
              />
              <text
                x="765"
                y="150"
                textAnchor="middle"
                className={`font-mono text-[10px] font-bold ${
                  selectedKey === "TCK" ? "fill-white" : "fill-indigo-900"
                }`}
              >
                Technological Content
              </text>
              <text
                x="765"
                y="163"
                textAnchor="middle"
                className={`font-mono text-[9px] font-bold ${
                  selectedKey === "TCK" ? "fill-indigo-200" : "fill-indigo-700"
                }`}
              >
                Knowledge (TCK)
              </text>
            </g>

            {/* Bottom PCK Callout */}
            <g className="cursor-pointer" onClick={() => setSelectedKey("PCK")}>
              <path
                d="M 430 245 L 430 300"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="3 3"
                fill="none"
              />
              <circle cx="430" cy="245" r="4.5" fill="#10b981" />
              <circle cx="430" cy="300" r="3.5" fill="#10b981" />
              <rect
                x="330"
                y="298"
                width="200"
                height="28"
                rx="6"
                fill={selectedKey === "PCK" ? "#10b981" : "#d1fae5"}
                stroke="#6ee7b7"
                strokeWidth="1.5"
              />
              <text
                x="430"
                y="316"
                textAnchor="middle"
                className={`font-mono text-[10px] font-bold ${
                  selectedKey === "PCK" ? "fill-white" : "fill-emerald-900"
                }`}
              >
                Pedagogical Content Knowledge (PCK)
              </text>
            </g>

            {/* THREE PRIMARY KNOWLEDGE CIRCLES */}

            {/* TK Circle (Top, Pink) */}
            <g className="cursor-pointer group/tk" onClick={() => setSelectedKey("TK")}>
              <circle
                cx="430"
                cy="135"
                r={selectedKey === "TK" ? 95 : 90}
                fill={selectedKey === "TK" ? "rgba(244, 114, 182, 0.55)" : "rgba(244, 114, 182, 0.35)"}
                stroke="#ec4899"
                strokeWidth={selectedKey === "TK" ? 3.5 : 2}
                className="transition-all duration-300"
              />
              <text
                x="430"
                y="98"
                textAnchor="middle"
                className="font-mono text-xs font-black fill-slate-900 pointer-events-none"
              >
                Technological
              </text>
              <text
                x="430"
                y="114"
                textAnchor="middle"
                className="font-mono text-xs font-black fill-pink-900 pointer-events-none"
              >
                Knowledge (TK)
              </text>
            </g>

            {/* PK Circle (Bottom Left, Yellow) */}
            <g className="cursor-pointer group/pk" onClick={() => setSelectedKey("PK")}>
              <circle
                cx="365"
                cy="230"
                r={selectedKey === "PK" ? 95 : 90}
                fill={selectedKey === "PK" ? "rgba(250, 204, 21, 0.55)" : "rgba(250, 204, 21, 0.35)"}
                stroke="#eab308"
                strokeWidth={selectedKey === "PK" ? 3.5 : 2}
                className="transition-all duration-300"
              />
              <text
                x="330"
                y="255"
                textAnchor="middle"
                className="font-mono text-xs font-black fill-slate-900 pointer-events-none"
              >
                Pedagogical
              </text>
              <text
                x="330"
                y="271"
                textAnchor="middle"
                className="font-mono text-xs font-black fill-amber-900 pointer-events-none"
              >
                Knowledge (PK)
              </text>
            </g>

            {/* CK Circle (Bottom Right, Cyan) */}
            <g className="cursor-pointer group/ck" onClick={() => setSelectedKey("CK")}>
              <circle
                cx="495"
                cy="230"
                r={selectedKey === "CK" ? 95 : 90}
                fill={selectedKey === "CK" ? "rgba(6, 182, 212, 0.55)" : "rgba(6, 182, 212, 0.35)"}
                stroke="#06b6d4"
                strokeWidth={selectedKey === "CK" ? 3.5 : 2}
                className="transition-all duration-300"
              />
              <text
                x="530"
                y="255"
                textAnchor="middle"
                className="font-mono text-xs font-black fill-slate-900 pointer-events-none"
              >
                Content
              </text>
              <text
                x="530"
                y="271"
                textAnchor="middle"
                className="font-mono text-xs font-black fill-cyan-900 pointer-events-none"
              >
                Knowledge (CK)
              </text>
            </g>

            {/* Center Overlap Nodes (Active Focus Nodes) */}
            <g className="cursor-pointer" onClick={() => setSelectedKey("TPK")}>
              <circle
                cx="385"
                cy="175"
                r={selectedKey === "TPK" ? 22 : 18}
                fill={selectedKey === "TPK" ? "#f43f5e" : "rgba(244, 63, 94, 0.6)"}
                stroke="#ffffff"
                strokeWidth="1.5"
                className="transition-all"
              />
              <text x="385" y="179" textAnchor="middle" className="font-mono text-[9px] font-bold fill-white pointer-events-none">
                TPK
              </text>
            </g>

            <g className="cursor-pointer" onClick={() => setSelectedKey("TCK")}>
              <circle
                cx="475"
                cy="175"
                r={selectedKey === "TCK" ? 22 : 18}
                fill={selectedKey === "TCK" ? "#6366f1" : "rgba(99, 102, 241, 0.6)"}
                stroke="#ffffff"
                strokeWidth="1.5"
                className="transition-all"
              />
              <text x="475" y="179" textAnchor="middle" className="font-mono text-[9px] font-bold fill-white pointer-events-none">
                TCK
              </text>
            </g>

            <g className="cursor-pointer" onClick={() => setSelectedKey("PCK")}>
              <circle
                cx="430"
                cy="245"
                r={selectedKey === "PCK" ? 22 : 18}
                fill={selectedKey === "PCK" ? "#10b981" : "rgba(16, 185, 129, 0.6)"}
                stroke="#ffffff"
                strokeWidth="1.5"
                className="transition-all"
              />
              <text x="430" y="249" textAnchor="middle" className="font-mono text-[9px] font-bold fill-white pointer-events-none">
                PCK
              </text>
            </g>

            {/* Central TPACK Core */}
            <g className="cursor-pointer" onClick={() => setSelectedKey("TPACK")}>
              <circle
                cx="430"
                cy="195"
                r={selectedKey === "TPACK" ? 24 : 20}
                fill={selectedKey === "TPACK" ? "#9333ea" : "rgba(147, 51, 234, 0.85)"}
                stroke="#ffffff"
                strokeWidth="2"
                className="transition-all animate-pulse"
              />
              <text x="430" y="198" textAnchor="middle" className="font-mono text-[8px] font-black fill-white pointer-events-none">
                TPACK
              </text>
            </g>
          </svg>

          {/* Interactive Domain Spotlight Pill */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedKey}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="mt-2 w-full max-w-2xl px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3 text-left"
            >
              <div className="flex items-center space-x-2.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm"
                  style={{ backgroundColor: activeDomain.color }}
                >
                  <ActiveIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono font-bold text-xs text-slate-900 block leading-tight">
                    {activeDomain.code}: {activeDomain.name}
                  </span>
                  <p className="text-[11px] text-slate-600 font-sans leading-snug line-clamp-1">
                    {activeDomain.desc}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
                {"// TAP CIRCLE TO EXPLORE"}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

