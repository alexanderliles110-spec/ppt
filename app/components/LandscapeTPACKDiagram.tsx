"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import TechEdBoxDecoration from "./TechEdBoxDecoration";

interface DomainItem {
  key: string;
  label: string;
  border: string;
  activeBorder: string;
  accent: "cyan" | "amber" | "pink" | "indigo";
}

const tpackList: DomainItem[] = [
  {
    key: "CK",
    label: "CK – Content Knowledge",
    border: "border-cyan-200/90",
    activeBorder: "border-cyan-500 ring-2 ring-cyan-500/25 bg-cyan-50/60",
    accent: "cyan"
  },
  {
    key: "PK",
    label: "PK – Pedagogical Knowledge",
    border: "border-amber-200/90",
    activeBorder: "border-amber-500 ring-2 ring-amber-500/25 bg-amber-50/60",
    accent: "amber"
  },
  {
    key: "TK",
    label: "TK – Technological Knowledge",
    border: "border-pink-200/90",
    activeBorder: "border-pink-500 ring-2 ring-pink-500/25 bg-pink-50/60",
    accent: "pink"
  },
  {
    key: "PCK",
    label: "PCK – Pedagogical Content Knowledge",
    border: "border-emerald-200/90",
    activeBorder: "border-emerald-500 ring-2 ring-emerald-500/25 bg-emerald-50/60",
    accent: "cyan"
  },
  {
    key: "TCK",
    label: "TCK – Technological Content Knowledge",
    border: "border-indigo-200/90",
    activeBorder: "border-indigo-500 ring-2 ring-indigo-500/25 bg-indigo-50/60",
    accent: "indigo"
  },
  {
    key: "TPK",
    label: "TPK – Technological Pedagogical Knowledge",
    border: "border-rose-200/90",
    activeBorder: "border-rose-500 ring-2 ring-rose-500/25 bg-rose-50/60",
    accent: "pink"
  },
  {
    key: "TPACK",
    label: "TPACK",
    border: "border-purple-300/90",
    activeBorder: "border-purple-600 ring-2 ring-purple-500/25 bg-purple-50/60",
    accent: "indigo"
  }
];

export default function LandscapeTPACKDiagram() {
  const [selectedKey, setSelectedKey] = useState<string>("TPACK");

  // Landscape ellipse geometry (true horizontal oval shape)
  const tk = { cx: 430, cy: 132, rx: 142, ry: 74 };
  const pk = { cx: 345, cy: 205, rx: 142, ry: 74 };
  const ck = { cx: 515, cy: 205, rx: 142, ry: 74 };

  return (
    <div className="w-full space-y-4">
      {/* Landscape TPACK Venn Diagram Box */}
      <div className="w-full bg-gradient-to-br from-white via-sky-50/35 to-indigo-50/40 rounded-2xl border border-sky-200/90 shadow-md p-3.5 sm:p-5 relative overflow-hidden group">
        {/* Inside-Box Technology Education Orbital & Glowing Icon Orbs Design */}
        <TechEdBoxDecoration variant="diagram" accent="cyan" />

        {/* High-Tech HUD Corner Brackets */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-blue-500 pointer-events-none z-10" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-blue-500 pointer-events-none z-10" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-blue-500 pointer-events-none z-10" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-blue-500 pointer-events-none z-10" />

        {/* Landscape TPACK Venn Diagram SVG */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <svg
            viewBox="0 0 860 356"
            className="w-full h-auto max-h-[220px] sm:max-h-[260px] select-none overflow-visible"
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

            {/* POINTER ARROWS & INTERSECTION LABELS */}

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
        </div>
      </div>

      {/* Exact List of 7 TPACK Abbreviations in Technology Education Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
        {tpackList.map((item) => {
          const isSelected = selectedKey === item.key;
          return (
            <motion.div
              key={item.key}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedKey(item.key)}
              className={`relative px-4 py-3 rounded-xl border bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/30 shadow-sm overflow-hidden cursor-pointer transition-all ${
                isSelected ? item.activeBorder : item.border
              } ${item.key === "TPACK" ? "sm:col-span-2 lg:col-span-3 text-center" : ""}`}
            >
              <TechEdBoxDecoration variant="card" accent={item.accent} />
              <span className="relative z-10 font-mono text-xs sm:text-sm md:text-base font-bold text-slate-900">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
