"use client";

import React from "react";
import { motion } from "framer-motion";
import TechEdBoxDecoration from "./TechEdBoxDecoration";
import { TPACKKey } from "../data/slides";

interface LandscapeTPACKDiagramProps {
  activeKey?: TPACKKey;
  onSelectKey?: (key: TPACKKey) => void;
}

export default function LandscapeTPACKDiagram({
  activeKey = "ALL",
  onSelectKey
}: LandscapeTPACKDiagramProps) {
  // Landscape ellipse geometry (true horizontal oval shape)
  const tk = { cx: 430, cy: 132, rx: 142, ry: 74 };
  const pk = { cx: 345, cy: 205, rx: 142, ry: 74 };
  const ck = { cx: 515, cy: 205, rx: 142, ry: 74 };

  // PowerPoint Morph Camera Transforms (Smooth Zoom, Pan & Subtle Perspective Tilt per Slide)
  const cameraTargets: Record<TPACKKey, { scale: number; x: number; y: number; rotate: number }> = {
    ALL: { scale: 1, x: 0, y: 0, rotate: 0 },
    CK: { scale: 1.28, x: -90, y: -28, rotate: -1.5 },
    PK: { scale: 1.28, x: 90, y: -28, rotate: 1.5 },
    TK: { scale: 1.28, x: 0, y: 48, rotate: 0 },
    PCK: { scale: 1.42, x: 0, y: -52, rotate: -1 },
    TCK: { scale: 1.42, x: -72, y: 22, rotate: 1 },
    TPK: { scale: 1.42, x: 72, y: 22, rotate: -1 },
    TPACK: { scale: 1.52, x: 0, y: 6, rotate: 0 }
  };

  // Spotlight Halo Coordinates for Morphing Focus Ring
  const haloTargets: Record<Exclude<TPACKKey, "ALL">, { cx: number; cy: number; rx: number; ry: number; stroke: string }> = {
    CK: { cx: ck.cx, cy: ck.cy, rx: ck.rx + 8, ry: ck.ry + 8, stroke: "#06b6d4" },
    PK: { cx: pk.cx, cy: pk.cy, rx: pk.rx + 8, ry: pk.ry + 8, stroke: "#eab308" },
    TK: { cx: tk.cx, cy: tk.cy, rx: tk.rx + 8, ry: tk.ry + 8, stroke: "#ec4899" },
    PCK: { cx: 430, cy: 205, rx: 66, ry: 54, stroke: "#10b981" },
    TCK: { cx: 482, cy: 162, rx: 68, ry: 48, stroke: "#6366f1" },
    TPK: { cx: 378, cy: 162, rx: 68, ry: 48, stroke: "#f43f5e" },
    TPACK: { cx: 430, cy: 176, rx: 58, ry: 42, stroke: "#7c3aed" }
  };

  const cam = cameraTargets[activeKey] || cameraTargets.ALL;
  const isAll = activeKey === "ALL";

  const getRegionOpacity = (region: TPACKKey) => {
    if (isAll) return 1;
    if (activeKey === region) return 1;
    if (activeKey === "PCK" && (region === "PK" || region === "CK")) return 0.55;
    if (activeKey === "TCK" && (region === "TK" || region === "CK")) return 0.55;
    if (activeKey === "TPK" && (region === "TK" || region === "PK")) return 0.55;
    if (activeKey === "TPACK" && (region === "TK" || region === "PK" || region === "CK")) return 0.65;
    return 0.25;
  };

  const handleSelect = (k: TPACKKey) => {
    if (onSelectKey) onSelectKey(k);
  };

  const activeHalo = activeKey !== "ALL" ? haloTargets[activeKey] : null;

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 130, damping: 22, mass: 0.9 }}
      className="w-full bg-gradient-to-br from-white via-sky-50/40 to-indigo-50/45 rounded-2xl border border-sky-200/90 shadow-lg p-3 sm:p-4 relative overflow-hidden group"
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
          className="w-full h-auto max-h-[240px] sm:max-h-[290px] select-none overflow-visible"
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

          {/* Morphing Camera Group: Smoothly Pans, Zooms, and Tilts across slides */}
          <motion.g
            initial={false}
            animate={{
              scale: cam.scale,
              x: cam.x,
              y: cam.y,
              rotate: cam.rotate
            }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 20,
              mass: 0.95
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
                opacity: getRegionOpacity("TK")
              }}
              transition={{ duration: 0.45 }}
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
                opacity: getRegionOpacity("PK")
              }}
              transition={{ duration: 0.45 }}
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
                opacity: getRegionOpacity("CK")
              }}
              transition={{ duration: 0.45 }}
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
                transition={{ duration: 0.45 }}
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
                transition={{ duration: 0.45 }}
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
                transition={{ duration: 0.45 }}
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
                  transition={{ duration: 0.45 }}
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
              strokeWidth={activeKey === "TK" ? "3" : "2"}
              className="pointer-events-none"
            />
            <ellipse
              cx={pk.cx}
              cy={pk.cy}
              rx={pk.rx}
              ry={pk.ry}
              fill="none"
              stroke="#1e293b"
              strokeWidth={activeKey === "PK" ? "3" : "2"}
              className="pointer-events-none"
            />
            <ellipse
              cx={ck.cx}
              cy={ck.cy}
              rx={ck.rx}
              ry={ck.ry}
              fill="none"
              stroke="#1e293b"
              strokeWidth={activeKey === "CK" ? "3" : "2"}
              className="pointer-events-none"
            />

            {/* Morphing Spotlight Focus Halo */}
            {activeHalo && (
              <motion.ellipse
                initial={false}
                animate={{
                  cx: activeHalo.cx,
                  cy: activeHalo.cy,
                  rx: activeHalo.rx,
                  ry: activeHalo.ry,
                  stroke: activeHalo.stroke
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18
                }}
                fill="none"
                strokeWidth="4"
                strokeDasharray="10 6"
                className="pointer-events-none"
              />
            )}

            {/* PRIMARY LABELS INSIDE THE 3 LANDSCAPE CIRCLES */}
            {/* TK Label */}
            <g className="cursor-pointer" onClick={() => handleSelect("TK")}>
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
            <g className="cursor-pointer" onClick={() => handleSelect("PK")}>
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
            <g className="cursor-pointer" onClick={() => handleSelect("CK")}>
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
            <g className="cursor-pointer" onClick={() => handleSelect("TPACK")}>
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
            <g className="cursor-pointer" onClick={() => handleSelect("TPK")}>
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
            <g className="cursor-pointer" onClick={() => handleSelect("TCK")}>
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
            <g className="cursor-pointer" onClick={() => handleSelect("PCK")}>
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
          </motion.g>
        </svg>
      </div>
    </motion.div>
  );
}
