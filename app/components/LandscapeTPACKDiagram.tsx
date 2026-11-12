"use client";

import React from "react";
import { motion } from "framer-motion";
import TechEdBoxDecoration from "./TechEdBoxDecoration";
import { TPACKKey } from "../data/slides";

interface LandscapeTPACKDiagramProps {
  activeKey?: TPACKKey;
  onSelectKey?: (key: TPACKKey) => void;
}

const tpackPills: { key: Exclude<TPACKKey, "CLEAR" | "ALL">; label: string; color: string }[] = [
  { key: "CK", label: "CK – Content Knowledge", color: "border-cyan-300 bg-cyan-50/70 text-cyan-900" },
  { key: "PK", label: "PK – Pedagogical Knowledge", color: "border-amber-300 bg-amber-50/70 text-amber-900" },
  { key: "TK", label: "TK – Technological Knowledge", color: "border-pink-300 bg-pink-50/70 text-pink-900" },
  { key: "PCK", label: "PCK – Pedagogical Content Knowledge", color: "border-emerald-300 bg-emerald-50/70 text-emerald-900" },
  { key: "TCK", label: "TCK – Technological Content Knowledge", color: "border-indigo-300 bg-indigo-50/70 text-indigo-900" },
  { key: "TPK", label: "TPK – Technological Pedagogical Knowledge", color: "border-rose-300 bg-rose-50/70 text-rose-900" },
  { key: "TPACK", label: "TPACK", color: "border-purple-300 bg-purple-50/70 text-purple-900" }
];

export default function LandscapeTPACKDiagram({
  activeKey = "ALL",
  onSelectKey
}: LandscapeTPACKDiagramProps) {
  // Landscape ellipse geometry (true horizontal oval shape)
  const tk = { cx: 430, cy: 132, rx: 142, ry: 74 };
  const pk = { cx: 345, cy: 205, rx: 142, ry: 74 };
  const ck = { cx: 515, cy: 205, rx: 142, ry: 74 };

  // PowerPoint Morph Camera Transforms: Zooms & Pans smoothly to bring the active region forward
  const cameraTargets: Record<TPACKKey, { scale: number; x: number; y: number }> = {
    CLEAR: { scale: 1, x: 0, y: 0 },
    ALL: { scale: 1, x: 0, y: 0 },
    CK: { scale: 1.22, x: -75, y: -22 },
    PK: { scale: 1.22, x: 75, y: -22 },
    TK: { scale: 1.22, x: 0, y: 42 },
    PCK: { scale: 1.32, x: 0, y: -42 },
    TCK: { scale: 1.32, x: -55, y: 18 },
    TPK: { scale: 1.32, x: 55, y: 18 },
    TPACK: { scale: 1.38, x: 0, y: 6 }
  };

  // Coordinates of each region in the SVG (used for 3D pop-forward badge & projection line)
  const regionCenters: Record<
    Exclude<TPACKKey, "CLEAR" | "ALL">,
    { cx: number; cy: number; rx: number; ry: number; color: string; short: string; full: string }
  > = {
    CK: { cx: 555, cy: 215, rx: 68, ry: 40, color: "#06b6d4", short: "1. CK", full: "Content Knowledge" },
    PK: { cx: 305, cy: 215, rx: 68, ry: 40, color: "#eab308", short: "2. PK", full: "Pedagogical Knowledge" },
    TK: { cx: 430, cy: 108, rx: 68, ry: 40, color: "#ec4899", short: "3. TK", full: "Technological Knowledge" },
    PCK: { cx: 430, cy: 222, rx: 56, ry: 34, color: "#10b981", short: "4. PCK", full: "Pedagogical Content Knowledge" },
    TCK: { cx: 486, cy: 158, rx: 56, ry: 34, color: "#6366f1", short: "5. TCK", full: "Technological Content Knowledge" },
    TPK: { cx: 374, cy: 158, rx: 56, ry: 34, color: "#f43f5e", short: "6. TPK", full: "Technological Pedagogical Knowledge" },
    TPACK: { cx: 430, cy: 176, rx: 60, ry: 36, color: "#7c3aed", short: "7. TPACK", full: "TPACK Core" }
  };

  const cam = cameraTargets[activeKey] || cameraTargets.ALL;
  const isAll = activeKey === "ALL" || activeKey === "CLEAR";
  const activeRegion =
    activeKey !== "ALL" && activeKey !== "CLEAR" ? regionCenters[activeKey] : null;

  const getRegionOpacity = (region: TPACKKey) => {
    if (isAll) return 1;
    if (activeKey === region) return 1;
    if (activeKey === "PCK" && (region === "PK" || region === "CK")) return 0.45;
    if (activeKey === "TCK" && (region === "TK" || region === "CK")) return 0.45;
    if (activeKey === "TPK" && (region === "TK" || region === "PK")) return 0.45;
    if (activeKey === "TPACK" && (region === "TK" || region === "PK" || region === "CK")) return 0.55;
    return 0.22;
  };

  const handleSelect = (k: TPACKKey) => {
    if (onSelectKey) onSelectKey(k);
  };

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 130, damping: 22 }}
      className="w-full bg-gradient-to-br from-white via-sky-50/40 to-indigo-50/45 rounded-2xl border border-sky-200/90 shadow-md p-3 sm:p-4 relative overflow-hidden group"
    >
      {/* Inside-Box Technology Education Orbital & Glowing Icon Orbs Design */}
      <TechEdBoxDecoration variant="diagram" accent="cyan" />

      {/* High-Tech HUD Corner Brackets */}
      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-blue-500 pointer-events-none z-10" />
      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-blue-500 pointer-events-none z-10" />
      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-blue-500 pointer-events-none z-10" />
      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-blue-500 pointer-events-none z-10" />

      {/* Landscape TPACK Venn Diagram SVG with PowerPoint Morph Camera */}
      <div className="relative z-10 w-full flex flex-col items-center overflow-hidden rounded-xl">
        <svg
          viewBox="0 0 860 356"
          className={`w-full h-auto select-none overflow-visible transition-all duration-500 ${
            isAll ? "max-h-[225px] sm:max-h-[265px]" : "max-h-[195px] sm:max-h-[230px]"
          }`}
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

            <filter id="pop-forward-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.35" />
            </filter>

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

          {/* Morphing Camera Group: Smoothly Pans & Zooms onto the active region */}
          <motion.g
            initial={false}
            animate={{
              scale: cam.scale,
              x: cam.x,
              y: cam.y
            }}
            transition={{
              type: "spring",
              stiffness: 115,
              damping: 20,
              mass: 0.9
            }}
            style={{ transformOrigin: "430px 178px" }}
          >
            {/* Outer Landscape Dashed "Contexts" Oval */}
            <ellipse
              cx="430"
              cy="178"
              rx="408"
              ry="170"
              fill="rgba(255, 255, 255, 0.78)"
              stroke="#818cf8"
              strokeWidth="3.5"
              strokeDasharray="16 10"
            />

            {/* Base Circle 1: TK (Top, Pink/Lavender) */}
            <motion.ellipse
              cx={tk.cx}
              cy={tk.cy}
              rx={tk.rx}
              ry={tk.ry}
              initial={false}
              animate={{
                fill: activeKey === "TK" ? "#f472b6" : "#f5d0fe",
                opacity: getRegionOpacity("TK"),
                scale: activeKey === "TK" ? 1.06 : 1
              }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              style={{ transformOrigin: `${tk.cx}px ${tk.cy}px` }}
              filter={activeKey === "TK" ? "url(#pop-forward-shadow)" : undefined}
              className="cursor-pointer"
              onClick={() => handleSelect("TK")}
            />

            {/* Base Circle 2: PK (Bottom Left, Soft Yellow) */}
            <motion.ellipse
              cx={pk.cx}
              cy={pk.cy}
              rx={pk.rx}
              ry={pk.ry}
              initial={false}
              animate={{
                fill: activeKey === "PK" ? "#facc15" : "#fef08a",
                opacity: getRegionOpacity("PK"),
                scale: activeKey === "PK" ? 1.06 : 1
              }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              style={{ transformOrigin: `${pk.cx}px ${pk.cy}px` }}
              filter={activeKey === "PK" ? "url(#pop-forward-shadow)" : undefined}
              className="cursor-pointer"
              onClick={() => handleSelect("PK")}
            />

            {/* Base Circle 3: CK (Bottom Right, Soft Cyan) */}
            <motion.ellipse
              cx={ck.cx}
              cy={ck.cy}
              rx={ck.rx}
              ry={ck.ry}
              initial={false}
              animate={{
                fill: activeKey === "CK" ? "#22d3ee" : "#99f6e4",
                opacity: getRegionOpacity("CK"),
                scale: activeKey === "CK" ? 1.06 : 1
              }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              style={{ transformOrigin: `${ck.cx}px ${ck.cy}px` }}
              filter={activeKey === "CK" ? "url(#pop-forward-shadow)" : undefined}
              className="cursor-pointer"
              onClick={() => handleSelect("CK")}
            />

            {/* Overlap 1: TPK (TK ∩ PK - Coral Red/Pink) */}
            <g clipPath="url(#landscape-clip-tk)">
              <motion.ellipse
                cx={pk.cx}
                cy={pk.cy}
                rx={pk.rx}
                ry={pk.ry}
                initial={false}
                animate={{
                  fill: activeKey === "TPK" ? "#f43f5e" : "#fb7185",
                  opacity: getRegionOpacity("TPK")
                }}
                transition={{ duration: 0.35 }}
                className="cursor-pointer"
                onClick={() => handleSelect("TPK")}
              />
            </g>

            {/* Overlap 2: TCK (TK ∩ CK - Periwinkle Blue/Indigo) */}
            <g clipPath="url(#landscape-clip-tk)">
              <motion.ellipse
                cx={ck.cx}
                cy={ck.cy}
                rx={ck.rx}
                ry={ck.ry}
                initial={false}
                animate={{
                  fill: activeKey === "TCK" ? "#4f46e5" : "#818cf8",
                  opacity: getRegionOpacity("TCK")
                }}
                transition={{ duration: 0.35 }}
                className="cursor-pointer"
                onClick={() => handleSelect("TCK")}
              />
            </g>

            {/* Overlap 3: PCK (PK ∩ CK - Sage Green) */}
            <g clipPath="url(#landscape-clip-pk)">
              <motion.ellipse
                cx={ck.cx}
                cy={ck.cy}
                rx={ck.rx}
                ry={ck.ry}
                initial={false}
                animate={{
                  fill: activeKey === "PCK" ? "#10b981" : "#86efac",
                  opacity: getRegionOpacity("PCK")
                }}
                transition={{ duration: 0.35 }}
                className="cursor-pointer"
                onClick={() => handleSelect("PCK")}
              />
            </g>

            {/* Center Overlap 4: TPACK (TK ∩ PK ∩ CK - Dark Olive / Rich Core) */}
            <g clipPath="url(#landscape-clip-tk)">
              <g clipPath="url(#landscape-clip-pk)">
                <motion.ellipse
                  cx={ck.cx}
                  cy={ck.cy}
                  rx={ck.rx}
                  ry={ck.ry}
                  initial={false}
                  animate={{
                    fill: activeKey === "TPACK" ? "#7c3aed" : "#655a30",
                    opacity: getRegionOpacity("TPACK")
                  }}
                  transition={{ duration: 0.35 }}
                  className="cursor-pointer"
                  onClick={() => handleSelect("TPACK")}
                />
              </g>
            </g>

            {/* Crisp Outlines for the 3 Landscape Ellipses */}
            <ellipse
              cx={tk.cx}
              cy={tk.cy}
              rx={tk.rx}
              ry={tk.ry}
              fill="none"
              stroke="#1e293b"
              strokeWidth={activeKey === "TK" ? "3.5" : "2"}
              opacity={isAll || activeKey === "TK" ? 1 : 0.45}
              className="pointer-events-none"
            />
            <ellipse
              cx={pk.cx}
              cy={pk.cy}
              rx={pk.rx}
              ry={pk.ry}
              fill="none"
              stroke="#1e293b"
              strokeWidth={activeKey === "PK" ? "3.5" : "2"}
              opacity={isAll || activeKey === "PK" ? 1 : 0.45}
              className="pointer-events-none"
            />
            <ellipse
              cx={ck.cx}
              cy={ck.cy}
              rx={ck.rx}
              ry={ck.ry}
              fill="none"
              stroke="#1e293b"
              strokeWidth={activeKey === "CK" ? "3.5" : "2"}
              opacity={isAll || activeKey === "CK" ? 1 : 0.45}
              className="pointer-events-none"
            />

            {/* PRIMARY LABELS INSIDE THE 3 LANDSCAPE CIRCLES */}
            <g
              className="cursor-pointer"
              opacity={isAll || activeKey === "TK" ? 1 : 0.45}
              onClick={() => handleSelect("TK")}
            >
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

            <g
              className="cursor-pointer"
              opacity={isAll || activeKey === "PK" ? 1 : 0.45}
              onClick={() => handleSelect("PK")}
            >
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

            <g
              className="cursor-pointer"
              opacity={isAll || activeKey === "CK" ? 1 : 0.45}
              onClick={() => handleSelect("CK")}
            >
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
            <g
              className="cursor-pointer"
              opacity={isAll || activeKey === "TPACK" ? 1 : 0.4}
              onClick={() => handleSelect("TPACK")}
            >
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

            <g
              className="cursor-pointer"
              opacity={isAll || activeKey === "TPK" ? 1 : 0.4}
              onClick={() => handleSelect("TPK")}
            >
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

            <g
              className="cursor-pointer"
              opacity={isAll || activeKey === "TCK" ? 1 : 0.4}
              onClick={() => handleSelect("TCK")}
            >
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

            <g
              className="cursor-pointer"
              opacity={isAll || activeKey === "PCK" ? 1 : 0.4}
              onClick={() => handleSelect("PCK")}
            >
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

            {/* 3D Pop-Forward Node & Projection Beam when a specific component is discussed */}
            {activeRegion && (
              <motion.g
                initial={false}
                animate={{
                  x: 0,
                  y: 0
                }}
              >
                {/* Glowing Projection Beam down toward the Foreground Discussion Box */}
                <motion.polygon
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.22,
                    points: `${activeRegion.cx - 32},${activeRegion.cy} ${activeRegion.cx + 32},${activeRegion.cy} 660,356 200,356`
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  fill={activeRegion.color}
                  className="pointer-events-none"
                />

                {/* Pulsing Outer Halo Ring on the Active Region in the Picture */}
                <motion.ellipse
                  initial={false}
                  animate={{
                    cx: activeRegion.cx,
                    cy: activeRegion.cy,
                    rx: activeRegion.rx + 14,
                    ry: activeRegion.ry + 12,
                    stroke: activeRegion.color
                  }}
                  transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  fill="none"
                  strokeWidth="3.5"
                  strokeDasharray="8 5"
                  className="pointer-events-none"
                />

                {/* Elevated 3D Badge Stepping Forward from the Picture */}
                <motion.ellipse
                  initial={false}
                  animate={{
                    cx: activeRegion.cx,
                    cy: activeRegion.cy,
                    rx: activeRegion.rx,
                    ry: activeRegion.ry,
                    fill: activeRegion.color
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 18 }}
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  filter="url(#pop-forward-shadow)"
                  className="pointer-events-none"
                />

                <motion.text
                  initial={false}
                  animate={{
                    x: activeRegion.cx,
                    y: activeRegion.cy + 5
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 18 }}
                  textAnchor="middle"
                  className="font-mono text-[14px] font-black fill-white pointer-events-none"
                >
                  {activeRegion.short}
                </motion.text>
              </motion.g>
            )}
          </motion.g>
        </svg>

        {/* Bottom 7-Abbreviation Strip with Staggered Pop-Up ("Mangsulpot") Animation */}
        {activeKey === "ALL" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.07, delayChildren: 0.25 }
              }
            }}
            className="mt-2 pt-2 border-t border-slate-200/70 w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
          >
            {tpackPills.map((pill) => (
              <motion.button
                key={pill.key}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 18 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 260, damping: 18 }
                  }
                }}
                onClick={() => handleSelect(pill.key)}
                className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] sm:text-xs font-bold transition hover:scale-105 cursor-pointer shadow-2xs ${pill.color}`}
              >
                {pill.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
