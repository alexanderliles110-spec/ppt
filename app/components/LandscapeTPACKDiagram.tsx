"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, GraduationCap, BookOpen, Layers, Atom, Network, Globe2 } from "lucide-react";
import TechEdBoxDecoration from "./TechEdBoxDecoration";

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
    desc: "Understanding digital tools, hardware, operating systems, and educational software.",
    color: "#ec4899",
    icon: Cpu
  },
  PK: {
    key: "PK",
    name: "Pedagogical Knowledge",
    code: "PK",
    desc: "Methods and practices of teaching, lesson planning, instructional strategies, and student evaluation.",
    color: "#eab308",
    icon: GraduationCap
  },
  CK: {
    key: "CK",
    name: "Content Knowledge",
    code: "CK",
    desc: "The core subject matter, theories, concepts, and disciplinary knowledge to be learned.",
    color: "#06b6d4",
    icon: BookOpen
  },
  TPK: {
    key: "TPK",
    name: "Technological Pedagogical Knowledge",
    code: "TPK",
    desc: "How digital tools and classroom technology transform teaching strategies and student engagement.",
    color: "#f43f5e",
    icon: Network
  },
  TCK: {
    key: "TCK",
    name: "Technological Content Knowledge",
    code: "TCK",
    desc: "Using technology to represent, simulate, and visualize specific subject matter concepts.",
    color: "#6366f1",
    icon: Atom
  },
  PCK: {
    key: "PCK",
    name: "Pedagogical Content Knowledge",
    code: "PCK",
    desc: "Blending subject knowledge with effective teaching strategies to make content accessible.",
    color: "#10b981",
    icon: Layers
  },
  TPACK: {
    key: "TPACK",
    name: "Technological Pedagogical Content Knowledge",
    code: "TPACK",
    desc: "The core intersection: seamlessly integrating technology, pedagogy, and content for 21st-century learning.",
    color: "#7c3aed",
    icon: Globe2
  }
};

export default function LandscapeTPACKDiagram() {
  const [selectedKey, setSelectedKey] = useState<string>("TPACK");

  const activeDomain = domains[selectedKey] || domains.TPACK;
  const ActiveIcon = activeDomain.icon;

  // Landscape ellipse geometry (true horizontal oval shape)
  const tk = { cx: 430, cy: 132, rx: 142, ry: 74 };
  const pk = { cx: 345, cy: 205, rx: 142, ry: 74 };
  const ck = { cx: 515, cy: 205, rx: 142, ry: 74 };

  return (
    <div className="w-full bg-gradient-to-br from-white via-sky-50/35 to-indigo-50/40 rounded-2xl border border-sky-200/90 shadow-md p-2.5 sm:p-3.5 relative overflow-hidden group">
      {/* Inside-Box Technology Education Orbital & Glowing Icon Orbs Design */}
      <TechEdBoxDecoration variant="diagram" accent="cyan" />

      {/* High-Tech HUD Corner Brackets */}
      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-blue-500 pointer-events-none z-10" />
      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-blue-500 pointer-events-none z-10" />
      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-blue-500 pointer-events-none z-10" />
      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-blue-500 pointer-events-none z-10" />

      {/* Top Tech Header Bar */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-slate-200/70 pb-1.5 mb-1.5 font-mono text-[9px] sm:text-[11px]">
        <div className="flex items-center space-x-2">
          <span className="flex space-x-1">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400" />
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400" />
          </span>
          <span className="font-bold tracking-wider text-slate-700 uppercase">
            {"// TPACK.LANDSCAPE_FRAMEWORK_MODEL"}
          </span>
        </div>
        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 font-mono font-bold text-[9px] uppercase tracking-wider">
          FIG 1.0 • INTERACTIVE VENN
        </span>
      </div>

      {/* Landscape TPACK Venn Diagram SVG */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <svg
          viewBox="0 0 860 356"
          className="w-full h-auto max-h-[195px] sm:max-h-[230px] select-none overflow-visible"
        >
          <defs>
            <clipPath id="landscape-clip-tk">
              <ellipse cx={tk.cx} cy={tk.cy} rx={tk.rx} ry={tk.ry} />
            </clipPath>
            <clipPath id="landscape-clip-pk">
              <ellipse cx={pk.cx} cy={pk.cy} rx={pk.rx} ry={pk.ry} />
            </clipPath>
            <clipPath id="landscape-clip-ck">
              <ellipse cx={ck.cx} cy={ck.cy} rx={ck.rx} ry={ck.ry} />
            </clipPath>
            {/* Intersection of TK and PK for 3-way clip */}
            <clipPath id="landscape-clip-tk-pk" clipPathUnits="userSpaceOnUse">
              <ellipse cx={pk.cx} cy={pk.cy} rx={pk.rx} ry={pk.ry} clipPath="url(#landscape-clip-tk)" />
            </clipPath>

            <marker
              id="arrow-dot"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b" />
            </marker>
          </defs>

          {/* Outer Landscape Dashed "Contexts" Oval */}
          <ellipse
            cx="430"
            cy="178"
            rx="408"
            ry="170"
            fill="rgba(255, 255, 255, 0.72)"
            stroke="#818cf8"
            strokeWidth="3.5"
            strokeDasharray="16 10"
          />

          {/* Base Circle 1: TK (Top, Pink/Lavender) */}
          <ellipse
            cx={tk.cx}
            cy={tk.cy}
            rx={tk.rx}
            ry={tk.ry}
            fill={selectedKey === "TK" ? "#f472b6" : "#f5d0fe"}
            className="cursor-pointer transition-colors duration-200 hover:opacity-90"
            onClick={() => setSelectedKey("TK")}
          />

          {/* Base Circle 2: PK (Bottom Left, Soft Yellow) */}
          <ellipse
            cx={pk.cx}
            cy={pk.cy}
            rx={pk.rx}
            ry={pk.ry}
            fill={selectedKey === "PK" ? "#facc15" : "#fef08a"}
            className="cursor-pointer transition-colors duration-200 hover:opacity-90"
            onClick={() => setSelectedKey("PK")}
          />

          {/* Base Circle 3: CK (Bottom Right, Soft Cyan) */}
          <ellipse
            cx={ck.cx}
            cy={ck.cy}
            rx={ck.rx}
            ry={ck.ry}
            fill={selectedKey === "CK" ? "#22d3ee" : "#99f6e4"}
            className="cursor-pointer transition-colors duration-200 hover:opacity-90"
            onClick={() => setSelectedKey("CK")}
          />

          {/* Overlap 1: TPK (TK ∩ PK - Coral Red/Pink) */}
          <g clipPath="url(#landscape-clip-tk)">
            <ellipse
              cx={pk.cx}
              cy={pk.cy}
              rx={pk.rx}
              ry={pk.ry}
              fill={selectedKey === "TPK" ? "#f43f5e" : "#fb7185"}
              className="cursor-pointer transition-colors duration-200"
              onClick={() => setSelectedKey("TPK")}
            />
          </g>

          {/* Overlap 2: TCK (TK ∩ CK - Periwinkle Blue/Indigo) */}
          <g clipPath="url(#landscape-clip-tk)">
            <ellipse
              cx={ck.cx}
              cy={ck.cy}
              rx={ck.rx}
              ry={ck.ry}
              fill={selectedKey === "TCK" ? "#4f46e5" : "#818cf8"}
              className="cursor-pointer transition-colors duration-200"
              onClick={() => setSelectedKey("TCK")}
            />
          </g>

          {/* Overlap 3: PCK (PK ∩ CK - Sage Green) */}
          <g clipPath="url(#landscape-clip-pk)">
            <ellipse
              cx={ck.cx}
              cy={ck.cy}
              rx={ck.rx}
              ry={ck.ry}
              fill={selectedKey === "PCK" ? "#10b981" : "#86efac"}
              className="cursor-pointer transition-colors duration-200"
              onClick={() => setSelectedKey("PCK")}
            />
          </g>

          {/* Center Overlap 4: TPACK (TK ∩ PK ∩ CK - Dark Olive / Rich Core) */}
          <g clipPath="url(#landscape-clip-tk)">
            <g clipPath="url(#landscape-clip-pk)">
              <ellipse
                cx={ck.cx}
                cy={ck.cy}
                rx={ck.rx}
                ry={ck.ry}
                fill={selectedKey === "TPACK" ? "#6d28d9" : "#655a30"}
                className="cursor-pointer transition-colors duration-200"
                onClick={() => setSelectedKey("TPACK")}
              />
            </g>
          </g>

          {/* Crisp Black/Slate Outlines for the 3 Landscape Ellipses */}
          <ellipse
            cx={tk.cx}
            cy={tk.cy}
            rx={tk.rx}
            ry={tk.ry}
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
            className="pointer-events-none"
          />
          <ellipse
            cx={pk.cx}
            cy={pk.cy}
            rx={pk.rx}
            ry={pk.ry}
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
            className="pointer-events-none"
          />
          <ellipse
            cx={ck.cx}
            cy={ck.cy}
            rx={ck.rx}
            ry={ck.ry}
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
            className="pointer-events-none"
          />

          {/* PRIMARY LABELS INSIDE THE 3 LANDSCAPE CIRCLES */}
          {/* TK Label */}
          <g className="cursor-pointer" onClick={() => setSelectedKey("TK")}>
            <text x="430" y="92" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Technological
            </text>
            <text x="430" y="108" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Knowledge
            </text>
            <text x="430" y="124" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              (TK)
            </text>
          </g>

          {/* PK Label */}
          <g className="cursor-pointer" onClick={() => setSelectedKey("PK")}>
            <text x="275" y="205" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Pedagogical
            </text>
            <text x="275" y="221" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Knowledge
            </text>
            <text x="275" y="237" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              (PK)
            </text>
          </g>

          {/* CK Label */}
          <g className="cursor-pointer" onClick={() => setSelectedKey("CK")}>
            <text x="585" y="205" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Content
            </text>
            <text x="585" y="221" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Knowledge
            </text>
            <text x="585" y="237" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              (CK)
            </text>
          </g>

          {/* POINTER ARROWS & INTERSECTION LABELS (MATCHING CLASSIC DIAGRAM IN LANDSCAPE) */}

          {/* 1. Top TPACK Label & Bent Pointer Line to Center */}
          <g className="cursor-pointer" onClick={() => setSelectedKey("TPACK")}>
            <text x="430" y="33" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Technological Pedagogical Content
            </text>
            <text x="430" y="48" textAnchor="middle" className="font-sans text-[13px] font-bold fill-slate-900">
              Knowledge (TPACK)
            </text>
            <circle cx="515" cy="44" r="3" fill="#1e293b" />
            <polyline
              points="515,44 555,86 435,172"
              fill="none"
              stroke="#1e293b"
              strokeWidth="1.6"
              markerEnd="url(#arrow-dot)"
            />
          </g>

          {/* 2. Left TPK Label & Pointer Line */}
          <g className="cursor-pointer" onClick={() => setSelectedKey("TPK")}>
            <text x="145" y="102" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-slate-800">
              Technological
            </text>
            <text x="145" y="118" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-slate-800">
              Pedagogical
            </text>
            <text x="145" y="134" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-slate-800">
              Knowledge (TPK)
            </text>
            <circle cx="215" cy="128" r="3" fill="#1e293b" />
            <line
              x1="215"
              y1="128"
              x2="352"
              y2="156"
              stroke="#1e293b"
              strokeWidth="1.6"
              markerEnd="url(#arrow-dot)"
            />
          </g>

          {/* 3. Right TCK Label & Pointer Line */}
          <g className="cursor-pointer" onClick={() => setSelectedKey("TCK")}>
            <text x="715" y="102" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-slate-800">
              Technological
            </text>
            <text x="715" y="118" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-slate-800">
              Content
            </text>
            <text x="715" y="134" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-slate-800">
              Knowledge (TCK)
            </text>
            <circle cx="645" cy="128" r="3" fill="#1e293b" />
            <line
              x1="645"
              y1="128"
              x2="508"
              y2="156"
              stroke="#1e293b"
              strokeWidth="1.6"
              markerEnd="url(#arrow-dot)"
            />
          </g>

          {/* 4. Bottom PCK Label & Pointer Line */}
          <g className="cursor-pointer" onClick={() => setSelectedKey("PCK")}>
            <circle cx="430" cy="272" r="3" fill="#1e293b" />
            <line
              x1="430"
              y1="272"
              x2="430"
              y2="225"
              stroke="#1e293b"
              strokeWidth="1.6"
              markerEnd="url(#arrow-dot)"
            />
            <text x="430" y="290" textAnchor="middle" className="font-sans text-[13px] font-semibold fill-slate-800">
              Pedagogical Content Knowledge (PCK)
            </text>
          </g>

          {/* Bottom "Contexts" Label */}
          <text
            x="430"
            y="324"
            textAnchor="middle"
            className="font-sans text-[16px] font-semibold fill-slate-800 tracking-wide"
          >
            Contexts
          </text>
        </svg>

        {/* Compact Interactive Domain Bar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedKey}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1 w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3 text-left"
          >
            <div className="flex items-center space-x-2.5">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm"
                style={{ backgroundColor: activeDomain.color }}
              >
                <ActiveIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-mono font-bold text-xs text-slate-900">
                  {activeDomain.code} — {activeDomain.name}:{" "}
                </span>
                <span className="text-xs text-slate-600 font-sans">
                  {activeDomain.desc}
                </span>
              </div>
            </div>
            <span className="shrink-0 text-[9px] font-mono text-slate-400 uppercase tracking-wider hidden md:inline">
              {"// CLICK ANY REGION"}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
