"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideData } from "../data/slides";
import SlideIcon from "./SlideIcon";
import LandscapeTPACKDiagram from "./LandscapeTPACKDiagram";
import NetworkDiagram from "./NetworkDiagram";
import { ChevronRight, CheckCircle2, RotateCcw, LogOut, Cpu, GraduationCap, BookOpen } from "lucide-react";

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

          {/* Slide 1: 3 Technology Education Boxes in Landscape */}
          {slide.id === 1 ? (
            <div className="w-full pt-1">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span>{"// 3 FOUNDATIONAL KNOWLEDGE PILLARS // TECHNOLOGY EDUCATION"}</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline-block">
                  {"[STATUS: ACTIVE TELEMETRY]"}
                </span>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  {/* Pillar 01: Technological Knowledge (TK) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38, duration: 0.4 }}
                    onClick={() => setSelectedPointIndex(selectedPointIndex === 0 ? null : 0)}
                    className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 text-left overflow-hidden group cursor-pointer ${
                      selectedPointIndex === 0
                        ? "bg-white border-pink-400 shadow-xl ring-2 ring-pink-500/25 -translate-y-1"
                        : "bg-white/95 border-pink-200/90 hover:border-pink-400 hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Top Neon Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-400 to-transparent" />

                    {/* HUD Corner Tech Brackets */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-pink-400 group-hover:border-pink-600 transition-colors pointer-events-none" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-pink-400 group-hover:border-pink-600 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-pink-400 group-hover:border-pink-600 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-pink-400 group-hover:border-pink-600 transition-colors pointer-events-none" />

                    {/* Circuit Board Watermark Vector */}
                    <svg className="absolute -right-2 -bottom-2 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 100 100">
                      <path d="M 10 90 L 50 90 L 70 70 L 90 70 M 50 90 L 50 50 L 30 30" stroke="#ec4899" strokeWidth="2.5" fill="none" />
                      <circle cx="90" cy="70" r="3" fill="#ec4899" />
                      <circle cx="30" cy="30" r="3" fill="#ec4899" />
                      <circle cx="50" cy="90" r="2.5" fill="#f43f5e" />
                    </svg>

                    {/* Header Bar */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-xs font-black tracking-wider flex items-center space-x-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-pink-100 text-pink-700 text-[10px]">
                          01 TK
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest">EDTECH HARDWARE</span>
                      </span>
                      <span className="flex items-center space-x-1 text-[9px] font-mono text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>SYS.ONLINE</span>
                      </span>
                    </div>

                    {/* Title with EdTech Icon */}
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-pink-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-pink-500/30">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <h4 className="font-mono text-sm sm:text-base font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                        Technological Knowledge
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans mb-3">
                      Understanding tools, hardware, and digital systems in educational settings.
                    </p>

                    {/* EdTech Badges */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">AI TOOLS</span>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">LMS PLATFORMS</span>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">SMART HARDWARE</span>
                    </div>

                    {/* Bottom Status Line */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="tracking-widest text-pink-600 font-semibold">{"// TOOL.MASTERY"}</span>
                      <span className="text-[9px] uppercase font-bold text-slate-300 group-hover:text-pink-600 transition-colors">
                        {selectedPointIndex === 0 ? "FOCUSED" : "TAP TO FOCUS"}
                      </span>
                    </div>
                  </motion.div>

                  {/* Pillar 02: Pedagogical Knowledge (PK) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.46, duration: 0.4 }}
                    onClick={() => setSelectedPointIndex(selectedPointIndex === 1 ? null : 1)}
                    className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 text-left overflow-hidden group cursor-pointer ${
                      selectedPointIndex === 1
                        ? "bg-white border-amber-400 shadow-xl ring-2 ring-amber-500/25 -translate-y-1"
                        : "bg-white/95 border-amber-200/90 hover:border-amber-400 hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Top Neon Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-transparent" />

                    {/* HUD Corner Tech Brackets */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-amber-400 group-hover:border-amber-600 transition-colors pointer-events-none" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-amber-400 group-hover:border-amber-600 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-amber-400 group-hover:border-amber-600 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-amber-400 group-hover:border-amber-600 transition-colors pointer-events-none" />

                    {/* Flowchart Watermark Vector */}
                    <svg className="absolute -right-2 -bottom-2 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 100 100">
                      <rect x="20" y="20" width="25" height="20" rx="3" stroke="#eab308" strokeWidth="2" fill="none" />
                      <rect x="60" y="20" width="25" height="20" rx="3" stroke="#eab308" strokeWidth="2" fill="none" />
                      <rect x="40" y="65" width="25" height="20" rx="3" stroke="#eab308" strokeWidth="2" fill="none" />
                      <path d="M 32 40 L 32 52 L 52 52 L 52 65 M 72 40 L 72 52 L 52 52" stroke="#eab308" strokeWidth="2" fill="none" />
                    </svg>

                    {/* Header Bar */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-xs font-black tracking-wider flex items-center space-x-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 text-[10px]">
                          02 PK
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest">INSTRUCTION METHOD</span>
                      </span>
                      <span className="flex items-center space-x-1 text-[9px] font-mono text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span>ENGAGE.HIGH</span>
                      </span>
                    </div>

                    {/* Title with EdTech Icon */}
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-amber-500/30">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <h4 className="font-mono text-sm sm:text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        Pedagogical Knowledge
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans mb-3">
                      Methods, instructional practices, differentiated teaching, and student evaluation.
                    </p>

                    {/* EdTech Badges */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">INQUIRY</span>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">COLLABORATION</span>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">SCAFFOLDING</span>
                    </div>

                    {/* Bottom Status Line */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="tracking-widest text-amber-600 font-semibold">{"// PEDAGOGY.OPTIMAL"}</span>
                      <span className="text-[9px] uppercase font-bold text-slate-300 group-hover:text-amber-600 transition-colors">
                        {selectedPointIndex === 1 ? "FOCUSED" : "TAP TO FOCUS"}
                      </span>
                    </div>
                  </motion.div>

                  {/* Pillar 03: Content Knowledge (CK) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.54, duration: 0.4 }}
                    onClick={() => setSelectedPointIndex(selectedPointIndex === 2 ? null : 2)}
                    className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 text-left overflow-hidden group cursor-pointer ${
                      selectedPointIndex === 2
                        ? "bg-white border-cyan-400 shadow-xl ring-2 ring-cyan-500/25 -translate-y-1"
                        : "bg-white/95 border-cyan-200/90 hover:border-cyan-400 hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Top Neon Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-400 to-transparent" />

                    {/* HUD Corner Tech Brackets */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-cyan-400 group-hover:border-cyan-600 transition-colors pointer-events-none" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyan-400 group-hover:border-cyan-600 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyan-400 group-hover:border-cyan-600 transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-cyan-400 group-hover:border-cyan-600 transition-colors pointer-events-none" />

                    {/* Matrix Grid Watermark Vector */}
                    <svg className="absolute -right-2 -bottom-2 w-28 h-28 opacity-10 pointer-events-none" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="30" stroke="#06b6d4" strokeWidth="2" fill="none" />
                      <circle cx="50" cy="50" r="10" stroke="#06b6d4" strokeWidth="2" fill="none" />
                      <path d="M 20 50 L 80 50 M 50 20 L 50 80" stroke="#06b6d4" strokeWidth="1.5" />
                    </svg>

                    {/* Header Bar */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-mono text-xs font-black tracking-wider flex items-center space-x-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-700 text-[10px]">
                          03 CK
                        </span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest">CURRICULUM CORE</span>
                      </span>
                      <span className="flex items-center space-x-1 text-[9px] font-mono text-cyan-600 font-bold bg-cyan-50 px-1.5 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        <span>CORE.EXACT</span>
                      </span>
                    </div>

                    {/* Title with EdTech Icon */}
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-cyan-500/30">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h4 className="font-mono text-sm sm:text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                        Content Knowledge
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-sans mb-3">
                      The core subject matter, disciplinary theories, scientific facts, and curriculum logic.
                    </p>

                    {/* EdTech Badges */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">THEORIES</span>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">STEM LOGIC</span>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">DISCIPLINARY</span>
                    </div>

                    {/* Bottom Status Line */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="tracking-widest text-cyan-600 font-semibold">{"// SUBJECT.COHERENCE"}</span>
                      <span className="text-[9px] uppercase font-bold text-slate-300 group-hover:text-cyan-600 transition-colors">
                        {selectedPointIndex === 2 ? "FOCUSED" : "TAP TO FOCUS"}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
          ) : slide.id === 2 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="w-full"
            >
              <LandscapeTPACKDiagram />
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
            /* Standard Slides: 3 Generously Sized Key Pillar Cards with Staggered Cascades */
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-2">
                {slide.keyPoints.map((point, idx) => {
                  const isSelected = selectedPointIndex === idx;
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
                      className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 text-left overflow-hidden group cursor-pointer ${
                        isSelected
                          ? `${themeStyles.cardActive} shadow-lg ring-2 ring-blue-500/25`
                          : "bg-white/95 border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5"
                      }`}
                    >
                      {/* High-Tech HUD Corner Accents */}
                      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-slate-200 group-hover:border-blue-500 transition-colors pointer-events-none" />
                      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-slate-200 group-hover:border-blue-500 transition-colors pointer-events-none" />
                      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-slate-200 group-hover:border-blue-500 transition-colors pointer-events-none" />
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-slate-200 group-hover:border-blue-500 transition-colors pointer-events-none" />

                      {/* Top Micro-Header */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider flex items-center space-x-1.5">
                          <span className={`px-1.5 py-0.5 rounded font-mono text-[9px] sm:text-[10px] font-black ${
                            isSelected ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                          }`}>
                            0{idx + 1}
                          </span>
                          <span className="tracking-widest uppercase">PILLAR</span>
                        </span>

                        <div className="flex items-center space-x-1">
                          {isSelected ? (
                            <CheckCircle2 className={`w-4 h-4 ${themeStyles.textAccent}`} />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400 group-hover:animate-ping" />
                          )}
                        </div>
                      </div>

                      {/* Pillar Title with Arrow */}
                      <div className="flex items-center space-x-1.5 mb-1.5">
                        <ChevronRight
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                            isSelected ? `rotate-90 ${themeStyles.textAccent}` : "text-slate-400 group-hover:text-slate-700"
                          }`}
                        />
                        <h4 className="font-mono text-xs sm:text-base font-bold text-slate-900">
                          {point.label}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed font-sans pl-5 sm:pl-6">
                        {point.desc}
                      </p>

                      {/* Bottom Circuit Trace Bar */}
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="tracking-widest">{"// NODE.ACTIVE"}</span>
                        <span className="text-[9px] uppercase font-semibold text-slate-300 group-hover:text-blue-500 transition-colors">
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
