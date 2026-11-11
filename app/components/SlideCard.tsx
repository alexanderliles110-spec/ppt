"use client";

import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { SlideData, TPACKKey } from "../data/slides";
import SlideIcon from "./SlideIcon";
import LandscapeTPACKDiagram from "./LandscapeTPACKDiagram";
import TechEdBoxDecoration from "./TechEdBoxDecoration";

interface SlideCardProps {
  slide: SlideData;
  direction: number;
  totalSlides: number;
  onSelectSlide?: (index: number) => void;
}

const tpackAbbreviations: {
  key: Exclude<TPACKKey, "ALL">;
  slideIndex: number;
  label: string;
  border: string;
  accent: "cyan" | "amber" | "pink" | "indigo";
}[] = [
  {
    key: "CK",
    slideIndex: 1,
    label: "CK – Content Knowledge",
    border: "border-cyan-200/90 hover:border-cyan-400",
    accent: "cyan"
  },
  {
    key: "PK",
    slideIndex: 2,
    label: "PK – Pedagogical Knowledge",
    border: "border-amber-200/90 hover:border-amber-400",
    accent: "amber"
  },
  {
    key: "TK",
    slideIndex: 3,
    label: "TK – Technological Knowledge",
    border: "border-pink-200/90 hover:border-pink-400",
    accent: "pink"
  },
  {
    key: "PCK",
    slideIndex: 4,
    label: "PCK – Pedagogical Content Knowledge",
    border: "border-emerald-200/90 hover:border-emerald-400",
    accent: "cyan"
  },
  {
    key: "TCK",
    slideIndex: 5,
    label: "TCK – Technological Content Knowledge",
    border: "border-indigo-200/90 hover:border-indigo-400",
    accent: "indigo"
  },
  {
    key: "TPK",
    slideIndex: 6,
    label: "TPK – Technological Pedagogical Knowledge",
    border: "border-rose-200/90 hover:border-rose-400",
    accent: "pink"
  },
  {
    key: "TPACK",
    slideIndex: 7,
    label: "TPACK",
    border: "border-purple-300/90 hover:border-purple-500",
    accent: "indigo"
  }
];

const keyToSlideIndex: Record<TPACKKey, number> = {
  ALL: 0,
  CK: 1,
  PK: 2,
  TK: 3,
  PCK: 4,
  TCK: 5,
  TPK: 6,
  TPACK: 7
};

export default function SlideCard({
  slide,
  totalSlides,
  onSelectSlide
}: SlideCardProps) {
  const themeStyles = {
    cyan: {
      border: "border-cyan-200",
      glow: "shadow-[0_20px_50px_-20px_rgba(6,182,212,0.25)]",
      textAccent: "text-cyan-600",
      gradient: "from-cyan-500/15 via-cyan-500/5 to-transparent",
      accentBar: "bg-cyan-500",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-200"
    },
    orange: {
      border: "border-orange-200",
      glow: "shadow-[0_20px_50px_-20px_rgba(249,115,22,0.25)]",
      textAccent: "text-orange-600",
      gradient: "from-orange-500/15 via-orange-500/5 to-transparent",
      accentBar: "bg-orange-500",
      iconBg: "bg-orange-50 text-orange-600 border-orange-200"
    },
    gold: {
      border: "border-amber-200",
      glow: "shadow-[0_20px_50px_-20px_rgba(234,179,8,0.25)]",
      textAccent: "text-amber-600",
      gradient: "from-amber-500/15 via-amber-500/5 to-transparent",
      accentBar: "bg-amber-500",
      iconBg: "bg-amber-50 text-amber-600 border-amber-200"
    }
  }[slide.accent];

  const isSlideOne = slide.id === 1;
  // Alternate left/right diagram placement on Slides 2–8 for a true PowerPoint Morph movement across the slide
  const isDiagramRight = !isSlideOne && slide.id % 2 === 1;

  const handleDiagramSelect = (key: TPACKKey) => {
    if (onSelectSlide && keyToSlideIndex[key] !== undefined) {
      onSelectSlide(keyToSlideIndex[key]);
    }
  };

  return (
    <LayoutGroup>
      <div className="w-full max-w-[96vw] sm:max-w-5xl lg:max-w-6xl xl:max-w-[1260px] 2xl:max-w-[1360px] mx-auto px-1 sm:px-3 relative z-10 my-auto">
        {/* Presentation Slide Canvas */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/94 backdrop-blur-2xl border ${themeStyles.border} ${themeStyles.glow} p-5 sm:p-7 md:p-8 lg:p-10 min-h-[74vh] sm:min-h-[78vh] flex flex-col justify-between transition-colors duration-500 shadow-2xl`}
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
          <div className="relative z-10 flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
            <div className="flex items-center space-x-2.5">
              <div className={`p-2 rounded-xl border ${themeStyles.iconBg}`}>
                <SlideIcon name={slide.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-slate-500 tracking-wider uppercase font-semibold">
                  {slide.category}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 font-mono text-xs text-slate-400">
              <span>SLIDE {String(slide.id).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Main Presentation Body with PowerPoint Morph Layout */}
          <div className="relative z-10 flex-1 flex flex-col justify-center space-y-4 py-1">
            {/* Morphing Slide Heading */}
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`header-${slide.id}`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ type: "spring", stiffness: 200, damping: 24 }}
              >
                {!isSlideOne && (
                  <p className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 ${themeStyles.textAccent}`}>
                    {slide.subtitle}
                  </p>
                )}
                <h1 className="font-mono text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
                  {slide.title}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Shared Morph Stage: The TPACK Diagram Picture stays mounted and physically glides/morphs across slides */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 115, damping: 21, mass: 0.95 }}
              className={`w-full flex gap-4 sm:gap-6 items-center ${
                isSlideOne
                  ? "flex-col"
                  : isDiagramRight
                  ? "flex-col lg:flex-row-reverse"
                  : "flex-col lg:flex-row"
              }`}
            >
              {/* Persistent Morphing TPACK Diagram Picture */}
              <motion.div
                layout
                layoutId="tpack-morph-picture"
                transition={{ type: "spring", stiffness: 115, damping: 21, mass: 0.95 }}
                className={isSlideOne ? "w-full" : "w-full lg:w-[54%] shrink-0"}
              >
                <LandscapeTPACKDiagram
                  activeKey={slide.tpackKey}
                  onSelectKey={handleDiagramSelect}
                />
              </motion.div>

              {/* Morphing Slide Content Area */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
                className={isSlideOne ? "w-full" : "w-full lg:w-[46%]"}
              >
                <AnimatePresence mode="popLayout">
                  {isSlideOne ? (
                    /* Slide 1: The 7 Abbreviations List */
                    <motion.div
                      key="slide-1-abbreviations"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3"
                    >
                      {tpackAbbreviations.map((item) => (
                        <motion.div
                          key={item.key}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => onSelectSlide && onSelectSlide(item.slideIndex)}
                          className={`relative px-4 py-3 rounded-xl border bg-gradient-to-br from-white via-sky-50/35 to-indigo-50/35 shadow-sm overflow-hidden cursor-pointer transition-all ${item.border} ${
                            item.key === "TPACK" ? "sm:col-span-2 lg:col-span-3 text-center" : ""
                          }`}
                        >
                          <TechEdBoxDecoration variant="card" accent={item.accent} />
                          <span className="relative z-10 font-mono text-xs sm:text-sm md:text-base font-bold text-slate-900">
                            {item.label}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    /* Slides 2–8: Single Component Definition Box (1. CK through 7. TPACK) */
                    <motion.div
                      key={`component-box-${slide.id}`}
                      initial={{ opacity: 0, scale: 0.92, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -20 }}
                      transition={{ type: "spring", stiffness: 160, damping: 20 }}
                      className={`relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-sky-50/45 to-indigo-50/45 border-2 ${themeStyles.border} shadow-xl overflow-hidden`}
                    >
                      {/* Inside-Box Technology Education Orbital & Glowing Icon Orbs Design */}
                      <TechEdBoxDecoration variant="wide" accent="cyan" />

                      {/* Left Neon Accent Notch */}
                      <div className={`absolute top-0 bottom-0 left-0 w-2 z-10 ${themeStyles.accentBar}`} />

                      {/* High-Tech HUD Corner Accents */}
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-blue-400 pointer-events-none z-10" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-blue-400 pointer-events-none z-10" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-blue-400 pointer-events-none z-10" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-blue-400 pointer-events-none z-10" />

                      <div className="relative z-10 space-y-4 pl-2">
                        <h2 className={`font-mono text-lg sm:text-2xl font-black ${themeStyles.textAccent}`}>
                          {slide.title}:
                        </h2>

                        <p className="text-base sm:text-xl md:text-2xl text-slate-800 font-sans leading-relaxed font-medium">
                          {slide.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* Slide Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-slate-100 pt-3 mt-4 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full ${themeStyles.accentBar}`} />
              <span className="tracking-wider uppercase text-slate-500 font-medium">
                TPACK
              </span>
            </div>

            <div className="flex items-center space-x-1 font-semibold text-slate-600 text-sm">
              <span className={themeStyles.textAccent}>{String(slide.id).padStart(2, "0")}</span>
              <span className="text-slate-300">/</span>
              <span>{String(totalSlides).padStart(2, "0")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </LayoutGroup>
  );
}
