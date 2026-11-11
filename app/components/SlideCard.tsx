"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideData } from "../data/slides";
import SlideIcon from "./SlideIcon";
import TPACKDiagram from "./TPACKDiagram";
import LandscapeTPACKDiagram from "./LandscapeTPACKDiagram";
import NetworkDiagram from "./NetworkDiagram";
import { RotateCcw, LogOut, Cpu, GraduationCap, BookOpen } from "lucide-react";

export type TransitionEffect = "dynamic" | "cube" | "zoom" | "stack" | "glide";

interface SlideCardProps {
  slide: SlideData;
  direction: number;
  totalSlides: number;
  onRestart?: () => void;
  onExit?: () => void;
}

export default function SlideCard({
  slide,
  direction,
  totalSlides,
  onRestart,
  onExit
}: SlideCardProps) {
  const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);

  // Dynamic theme styling for White/Light background
  const themeStyles = {
    cyan: {
      border: "border-cyan-200",
      glow: "shadow-[0_20px_50px_-20px_rgba(6,182,212,0.25)]",
      badge: "bg-cyan-50 text-cyan-800 border-cyan-200",
      textAccent: "text-cyan-600",
      gradient: "from-cyan-500/15 via-cyan-500/5 to-transparent",
      accentBar: "bg-cyan-500",
      cardActive: "bg-cyan-50/80 border-cyan-500 text-slate-900",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200"
    },
    orange: {
      border: "border-orange-200",
      glow: "shadow-[0_20px_50px_-20px_rgba(249,115,22,0.25)]",
      badge: "bg-orange-50 text-orange-800 border-orange-200",
      textAccent: "text-orange-600",
      gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
      accentBar: "bg-orange-500",
      cardActive: "bg-orange-50/80 border-orange-500 text-slate-900",
      iconBg: "bg-orange-50 text-orange-600 border-orange-200"
    },
    gold: {
      border: "border-amber-200",
      glow: "shadow-[0_20px_50px_-20px_rgba(234,179,8,0.25)]",
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      textAccent: "text-amber-600",
      gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
      accentBar: "bg-amber-500",
      cardActive: "bg-amber-50/80 border-amber-500 text-slate-900",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200"
    }
  }[slide.accent];

  // Cycles every slide automatically across 4 distinct presentation transitions
  const activeEffect: "cube" | "zoom" | "stack" | "glide" = (
    ["cube", "zoom", "stack", "glide"] as const
  )[Math.abs(slide.id - 1) % 4];

  // Distinct PowerPoint Transition Variant Generators (Prominent, Visible & Smooth)
  const getVariants = () => {
    switch (activeEffect) {
      case "cube":
        return {
          enter: (dir: number) => ({
            rotateY: dir > 0 ? 50 : -50,
            x: dir > 0 ? 200 : -200,
            scale: 0.86,
            opacity: 0
          }),
          center: {
            rotateY: 0,
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring" as const,
              stiffness: 180,
              damping: 20,
              duration: 0.5
            }
          },
          exit: (dir: number) => ({
            rotateY: dir > 0 ? -50 : 50,
            x: dir > 0 ? -200 : 200,
            scale: 0.86,
            opacity: 0,
            transition: { duration: 0.35, ease: "easeInOut" as const }
          })
        };
      case "zoom":
        return {
          enter: (dir: number) => ({
            scale: 0.72,
            opacity: 0,
            y: dir > 0 ? 80 : -80
          }),
          center: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              type: "spring" as const,
              stiffness: 200,
              damping: 20,
              duration: 0.5
            }
          },
          exit: (dir: number) => ({
            scale: 1.25,
            opacity: 0,
            y: dir > 0 ? -80 : 80,
            transition: { duration: 0.32, ease: "easeInOut" as const }
          })
        };
      case "stack":
        return {
          enter: (dir: number) => ({
            y: dir > 0 ? 180 : -180,
            scale: 0.9,
            opacity: 0,
            rotateX: dir > 0 ? 15 : -15
          }),
          center: {
            y: 0,
            scale: 1,
            opacity: 1,
            rotateX: 0,
            transition: {
              type: "spring" as const,
              stiffness: 190,
              damping: 20,
              duration: 0.52
            }
          },
          exit: (dir: number) => ({
            y: dir > 0 ? -180 : 180,
            scale: 0.9,
            opacity: 0,
            rotateX: dir > 0 ? -15 : 15,
            transition: { duration: 0.32 }
          })
        };
      case "glide":
      default:
        return {
          enter: (dir: number) => ({
            x: dir > 0 ? 280 : -280,
            scale: 0.92,
            opacity: 0
          }),
          center: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring" as const,
              stiffness: 210,
              damping: 22,
              duration: 0.5
            }
          },
          exit: (dir: number) => ({
            x: dir > 0 ? -280 : 280,
            scale: 0.92,
            opacity: 0,
            transition: { duration: 0.32 }
          })
        };
    }
  };

  const slideVariants = getVariants();

  return (
    <motion.div
      key={slide.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{ transformStyle: "preserve-3d" }}
      className="w-full max-w-[96vw] 2xl:max-w-[1520px] mx-auto px-1 sm:px-3 relative z-10 my-auto"
    >
      {/* Expansive Presentation Slide Canvas (Translucent Glassmorphism with visible background effects) */}
      <div
        className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/94 backdrop-blur-2xl border ${themeStyles.border} ${themeStyles.glow} p-4 sm:p-8 md:p-11 lg:p-14 min-h-[72vh] sm:min-h-[80vh] lg:min-h-[82vh] flex flex-col justify-between transition-all duration-300 shadow-2xl`}
      >
        {/* Animated Tech Accent Line Across Top Edge */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-500 animate-pulse"
          style={{ animationDuration: "3s" }}
        />

        {/* Subtle Tech Grid inside the card */}
        <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

        {/* High-Tech HUD Corner Brackets */}
        <div className="absolute top-3 left-4 flex items-center space-x-1.5 pointer-events-none opacity-60">
          <div className="w-2.5 h-2.5 border-t-2 border-l-2 border-blue-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
        </div>
        <div className="absolute bottom-3 right-4 flex items-center space-x-1.5 pointer-events-none opacity-60">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
          <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-500" />
        </div>

        {/* Subtle Ambient Color Banner */}
        <div
          className={`absolute top-0 left-0 right-0 h-44 bg-gradient-to-b ${themeStyles.gradient} pointer-events-none opacity-80`}
        />

        {/* Slide Top Banner */}
        <div className="relative z-10 flex items-center justify-between border-b border-slate-100 pb-2.5 mb-2.5 sm:pb-3 sm:mb-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl border ${themeStyles.iconBg}`}>
              <SlideIcon name={slide.icon} className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-mono text-[10px] sm:text-sm text-slate-500 tracking-wider uppercase font-semibold">
                {slide.category}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 font-mono text-xs sm:text-sm text-slate-400">
            <span>SLIDE {String(slide.id).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Main Presentation Body */}
        <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3.5 sm:space-y-6 md:space-y-7 py-1">
          {/* Slide Heading & Subtitle with Staggered Entrance */}
          <div className="space-y-1 sm:space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.35, type: "spring", stiffness: 220 }}
              className="font-mono text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.35 }}
              className={`font-mono text-xs sm:text-base md:text-xl font-bold tracking-wide ${themeStyles.textAccent}`}
            >
              {`// ${slide.subtitle}`}
            </motion.p>
          </div>

          {/* Core Content Callout Box with High-Tech Terminal Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.35, type: "spring", stiffness: 200 }}
            className={`relative p-4 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50/95 via-white to-slate-50/80 border ${themeStyles.border} shadow-sm overflow-hidden group`}
          >
            {/* Tech Terminal Header */}
            <div className="flex items-center justify-between border-b border-slate-100/90 pb-2 mb-3 font-mono text-[10px] sm:text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <span className="flex space-x-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500/70" />
                  <span className="w-2 h-2 rounded-full bg-cyan-500/70" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                </span>
                <span className="font-bold tracking-wider text-slate-500 uppercase">{"// CORE_DEFINITION_SPECIFICATION"}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-slate-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] tracking-wider">SYS.VERIFIED</span>
              </div>
            </div>

            {/* Circuit Watermark Vector */}
            <svg className="absolute right-3 bottom-2 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 100 100">
              <path d="M 10 90 L 40 90 L 60 70 L 90 70" stroke="#0284c7" strokeWidth="2.5" fill="none" />
              <circle cx="90" cy="70" r="3.5" fill="#0284c7" />
              <circle cx="40" cy="90" r="3" fill="#38bdf8" />
            </svg>

            {/* Left Neon Accent Notch */}
            <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${themeStyles.accentBar}`} />

            <p className="relative z-10 text-xs sm:text-lg md:text-2xl text-slate-800 font-sans leading-relaxed font-normal pl-2 sm:pl-3">
              &ldquo;{slide.content}&rdquo;
            </p>
          </motion.div>

          {/* Slide 1: Widescreen Landscape TPACK Diagram ONLY (Boxes removed per user request) */}
          {slide.id === 1 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="w-full"
            >
              <LandscapeTPACKDiagram />
            </motion.div>
          ) : slide.id === 2 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="w-full"
            >
              <TPACKDiagram />
            </motion.div>
          ) : slide.id === 4 ? (
            /* Slide 4: Interactive Network Architecture Diagram */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="w-full"
            >
              <NetworkDiagram />
            </motion.div>
          ) : (
            /* Standard Slides: 3 Technology Education Key Pillar Cards in Landscape */
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-2">
                {slide.keyPoints.map((point, idx) => {
                  const isSelected = selectedPointIndex === idx;
                  const cardThemes = [
                    {
                      border: isSelected
                        ? "bg-white border-pink-400 shadow-xl ring-2 ring-pink-500/25 -translate-y-1"
                        : "bg-white/95 border-pink-200/90 hover:border-pink-400 hover:shadow-lg hover:-translate-y-0.5",
                      topBar: "from-pink-500 via-rose-400 to-transparent",
                      bracket: "border-pink-400 group-hover:border-pink-600",
                      badgeBg: "bg-pink-100 text-pink-700",
                      subTag: "EDTECH HARDWARE",
                      statusBg: "text-emerald-600 bg-emerald-50",
                      statusDot: "bg-emerald-500",
                      statusLabel: "SYS.ONLINE",
                      iconBg: "bg-pink-500 shadow-pink-500/30",
                      Icon: Cpu,
                      titleHover: "group-hover:text-pink-600",
                      footerText: "text-pink-600",
                      footerCode: "// TOOL.MASTERY",
                      strokeColor: "#ec4899"
                    },
                    {
                      border: isSelected
                        ? "bg-white border-amber-400 shadow-xl ring-2 ring-amber-500/25 -translate-y-1"
                        : "bg-white/95 border-amber-200/90 hover:border-amber-400 hover:shadow-lg hover:-translate-y-0.5",
                      topBar: "from-amber-500 via-yellow-400 to-transparent",
                      bracket: "border-amber-400 group-hover:border-amber-600",
                      badgeBg: "bg-amber-100 text-amber-700",
                      subTag: "INSTRUCTION METHOD",
                      statusBg: "text-amber-600 bg-amber-50",
                      statusDot: "bg-amber-500",
                      statusLabel: "ENGAGE.HIGH",
                      iconBg: "bg-amber-500 shadow-amber-500/30",
                      Icon: GraduationCap,
                      titleHover: "group-hover:text-amber-600",
                      footerText: "text-amber-600",
                      footerCode: "// PEDAGOGY.OPTIMAL",
                      strokeColor: "#eab308"
                    },
                    {
                      border: isSelected
                        ? "bg-white border-cyan-400 shadow-xl ring-2 ring-cyan-500/25 -translate-y-1"
                        : "bg-white/95 border-cyan-200/90 hover:border-cyan-400 hover:shadow-lg hover:-translate-y-0.5",
                      topBar: "from-cyan-500 via-blue-400 to-transparent",
                      bracket: "border-cyan-400 group-hover:border-cyan-600",
                      badgeBg: "bg-cyan-100 text-cyan-700",
                      subTag: "CURRICULUM CORE",
                      statusBg: "text-cyan-600 bg-cyan-50",
                      statusDot: "bg-cyan-500",
                      statusLabel: "CORE.EXACT",
                      iconBg: "bg-cyan-500 shadow-cyan-500/30",
                      Icon: BookOpen,
                      titleHover: "group-hover:text-cyan-600",
                      footerText: "text-cyan-600",
                      footerCode: "// SUBJECT.COHERENCE",
                      strokeColor: "#06b6d4"
                    }
                  ];

                  const ct = cardThemes[idx % 3];
                  const CardIcon = ct.Icon;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.34 + idx * 0.08,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 220
                      }}
                      onClick={() => setSelectedPointIndex(isSelected ? null : idx)}
                      className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 text-left overflow-hidden group cursor-pointer ${ct.border}`}
                    >
                      {/* Top Neon Accent Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ct.topBar}`} />

                      {/* High-Tech HUD Corner Accents */}
                      <div className={`absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 ${ct.bracket} transition-colors pointer-events-none`} />
                      <div className={`absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 ${ct.bracket} transition-colors pointer-events-none`} />
                      <div className={`absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 ${ct.bracket} transition-colors pointer-events-none`} />
                      <div className={`absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 ${ct.bracket} transition-colors pointer-events-none`} />

                      {/* Technology Education Watermark Vector */}
                      <svg className="absolute -right-2 -bottom-2 w-24 h-24 opacity-10 pointer-events-none" viewBox="0 0 100 100">
                        {idx === 0 ? (
                          <>
                            <path d="M 10 90 L 50 90 L 70 70 L 90 70 M 50 90 L 50 50 L 30 30" stroke={ct.strokeColor} strokeWidth="2.5" fill="none" />
                            <circle cx="90" cy="70" r="3" fill={ct.strokeColor} />
                            <circle cx="30" cy="30" r="3" fill={ct.strokeColor} />
                          </>
                        ) : idx === 1 ? (
                          <>
                            <rect x="20" y="20" width="25" height="20" rx="3" stroke={ct.strokeColor} strokeWidth="2" fill="none" />
                            <rect x="60" y="20" width="25" height="20" rx="3" stroke={ct.strokeColor} strokeWidth="2" fill="none" />
                            <rect x="40" y="65" width="25" height="20" rx="3" stroke={ct.strokeColor} strokeWidth="2" fill="none" />
                            <path d="M 32 40 L 32 52 L 52 52 L 52 65 M 72 40 L 72 52 L 52 52" stroke={ct.strokeColor} strokeWidth="2" fill="none" />
                          </>
                        ) : (
                          <>
                            <circle cx="50" cy="50" r="30" stroke={ct.strokeColor} strokeWidth="2" fill="none" />
                            <circle cx="50" cy="50" r="10" stroke={ct.strokeColor} strokeWidth="2" fill="none" />
                            <path d="M 20 50 L 80 50 M 50 20 L 50 80" stroke={ct.strokeColor} strokeWidth="1.5" />
                          </>
                        )}
                      </svg>

                      {/* Top Micro-Header */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="font-mono text-xs font-black tracking-wider flex items-center space-x-1.5">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] ${ct.badgeBg}`}>
                            0{idx + 1}
                          </span>
                          <span className="text-[10px] text-slate-400 uppercase tracking-widest">{ct.subTag}</span>
                        </span>

                        <span className={`flex items-center space-x-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${ct.statusBg}`}>
                          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${ct.statusDot}`} />
                          <span>{ct.statusLabel}</span>
                        </span>
                      </div>

                      {/* Pillar Title with EdTech Icon */}
                      <div className="flex items-center space-x-2.5 mb-2">
                        <div className={`w-8 h-8 rounded-lg text-white flex items-center justify-center shrink-0 shadow-sm ${ct.iconBg}`}>
                          <CardIcon className="w-4 h-4" />
                        </div>
                        <h4 className={`font-mono text-xs sm:text-base font-bold text-slate-900 transition-colors ${ct.titleHover}`}>
                          {point.label}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 leading-relaxed font-sans mb-3">
                        {point.desc}
                      </p>

                      {/* Bottom Circuit Trace Bar */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className={`tracking-widest font-semibold ${ct.footerText}`}>{ct.footerCode}</span>
                        <span className={`text-[9px] uppercase font-bold text-slate-300 transition-colors ${ct.titleHover}`}>
                          {isSelected ? "FOCUSED" : "TAP TO FOCUS"}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Thank You & Exit Action Buttons (Only on the Final Exit Slide) */}
              {slide.id === totalSlides && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.35 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-4 pt-2 sm:pt-3"
                >
                  <button
                    onClick={onRestart}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition active:scale-95 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Restart Presentation</span>
                  </button>

                  <button
                    onClick={onExit}
                    className="flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs sm:text-sm font-bold shadow-md transition active:scale-95 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Exit Deck</span>
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>

        {/* Slide Footer */}
        <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-3 mt-4 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <span className={`w-2.5 h-2.5 rounded-full ${themeStyles.accentBar}`} />
            <span className="tracking-wider uppercase text-slate-500 font-medium">
              Basic Concepts in ICT &amp; TPACK
            </span>
          </div>

          <div className="flex items-center space-x-1 font-semibold text-slate-600 text-xs sm:text-sm">
            <span className={themeStyles.textAccent}>{String(slide.id).padStart(2, "0")}</span>
            <span className="text-slate-300">/</span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
