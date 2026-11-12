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

const keyToSlideIndex: Record<TPACKKey, number> = {
  CLEAR: 0,
  ALL: 1,
  CK: 2,
  PK: 3,
  TK: 4,
  PCK: 5,
  TCK: 6,
  TPK: 7,
  TPACK: 8
};

// Exact vector offset from each region inside the TPACK Diagram picture
// so the discussion box literally pops/projects FORWARD out of that circle in the picture!
const popFromPictureOffsets: Record<Exclude<TPACKKey, "CLEAR" | "ALL">, { x: number; y: number }> = {
  CK: { x: 130, y: -135 },
  PK: { x: -130, y: -135 },
  TK: { x: 0, y: -195 },
  PCK: { x: 0, y: -125 },
  TCK: { x: 85, y: -165 },
  TPK: { x: -85, y: -165 },
  TPACK: { x: 0, y: -155 }
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

  const isClearSlide = slide.tpackKey === "CLEAR";
  const isOverviewSlide = slide.tpackKey === "ALL";
  const originOffset =
    slide.tpackKey !== "ALL" && slide.tpackKey !== "CLEAR"
      ? popFromPictureOffsets[slide.tpackKey]
      : { x: 0, y: -140 };

  const handleDiagramSelect = (key: TPACKKey) => {
    if (onSelectSlide && keyToSlideIndex[key] !== undefined) {
      onSelectSlide(keyToSlideIndex[key]);
    }
  };

  return (
    <LayoutGroup>
      <div
        className="w-full max-w-[96vw] sm:max-w-5xl lg:max-w-6xl xl:max-w-[1260px] 2xl:max-w-[1360px] mx-auto px-1 sm:px-3 relative z-10 my-auto"
        style={{ perspective: "1200px" }}
      >
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

          {/* Inside-Card Technology Education Orbital & Glowing Icon Orbs Design */}
          <TechEdBoxDecoration variant="diagram" accent="cyan" />

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

          {/* Slide Top Banner (Hidden on Slide 1 so First Slide is 100% Clear of Text) */}
          <div className="relative z-10 min-h-[36px]">
            <AnimatePresence mode="wait">
              {!isClearSlide && (
                <motion.div
                  key="top-banner"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Presentation Body */}
          <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3.5 sm:space-y-4 py-1">
            {isClearSlide ? (
              /* Slide 1: Completely Clear First Slide (Technology Education Visual Canvas Only, Zero Text!) */
              <motion.div
                key="clear-first-slide"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full min-h-[58vh] rounded-2xl border border-sky-200/70 bg-gradient-to-br from-sky-50/40 via-white/70 to-indigo-50/45 relative overflow-hidden shadow-inner flex items-center justify-center"
              >
                <TechEdBoxDecoration variant="diagram" accent="cyan" />
              </motion.div>
            ) : (
              /* Slide 2+: Mangsulpot Tanan Text & Interactive Morphing TPACK Diagram! */
              <>
                {/* Slide Heading & Subtitle Pop-In ("Mangsulpot") */}
                <motion.div
                  key={`heading-${slide.title}`}
                  initial={{ opacity: 0, scale: 0.85, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="space-y-1"
                >
                  <h1 className="font-mono text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
                    {slide.title}
                  </h1>

                  <motion.p
                    key={`sub-${slide.subtitle}-${slide.id}`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20, delay: 0.06 }}
                    className={`font-mono text-xs sm:text-base md:text-lg font-bold tracking-wide ${themeStyles.textAccent}`}
                  >
                    {`// ${slide.subtitle}`}
                  </motion.p>
                </motion.div>

                {/* Overview Intro Definition Box (Dedicated Top Anchor Slot) */}
                <div className="w-full">
                  <AnimatePresence mode="wait">
                    {isOverviewSlide && (
                      <motion.div
                        key="overview-intro-box"
                        initial={{ opacity: 0, scale: 0.82, y: 28 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: -15 }}
                        transition={{ type: "spring", stiffness: 210, damping: 20, delay: 0.1 }}
                        className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-50/60 via-white to-indigo-50/45 border ${themeStyles.border} shadow-sm overflow-hidden group`}
                      >
                        <TechEdBoxDecoration variant="wide" accent="cyan" />
                        <div className={`absolute top-0 bottom-0 left-0 w-1.5 z-10 ${themeStyles.accentBar}`} />
                        <p className="relative z-10 text-xs sm:text-sm md:text-base text-slate-800 font-sans leading-relaxed font-normal pl-2 sm:pl-3">
                          &ldquo;{slide.content}&rdquo;
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* The Persistent Landscape TPACK Picture (Pops in on Slide 2, then Morphs & Zooms on Slides 3–9) */}
                <motion.div
                  layout
                  layoutId="tpack-morph-picture"
                  initial={{ opacity: 0, scale: 0.84, y: 32 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 160, damping: 20, delay: isOverviewSlide ? 0.16 : 0 }}
                  className="w-full"
                >
                  <LandscapeTPACKDiagram
                    activeKey={slide.tpackKey}
                    onSelectKey={handleDiagramSelect}
                  />
                </motion.div>

                {/* Slides 3–9: The Discussion Box that Pops/Comes FORWARD directly from the active circle in the Picture! */}
                <AnimatePresence mode="popLayout">
                  {!isOverviewSlide && (
                    <motion.div
                      key={`forward-discussion-${slide.id}`}
                      initial={{
                        opacity: 0,
                        scale: 0.18,
                        x: originOffset.x,
                        y: originOffset.y,
                        rotateX: 28
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        rotateX: 0
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.2,
                        x: originOffset.x,
                        y: originOffset.y,
                        rotateX: -20
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 135,
                        damping: 19,
                        mass: 0.9
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                      className={`relative p-5 sm:p-6 md:p-7 rounded-2xl bg-gradient-to-br from-white via-sky-50/60 to-indigo-50/55 border-2 ${themeStyles.border} shadow-[0_25px_60px_-15px_rgba(15,23,42,0.22)] overflow-hidden`}
                    >
                      {/* Inside-Box Technology Education Orbital & Glowing Icon Orbs Design */}
                      <TechEdBoxDecoration variant="wide" accent="cyan" />

                      {/* Left Neon Accent Notch */}
                      <div className={`absolute top-0 bottom-0 left-0 w-2 z-10 ${themeStyles.accentBar}`} />

                      {/* High-Tech HUD Corner Accents */}
                      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-blue-500 pointer-events-none z-10" />
                      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-blue-500 pointer-events-none z-10" />
                      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-blue-500 pointer-events-none z-10" />
                      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-blue-500 pointer-events-none z-10" />

                      <div className="relative z-10 space-y-2 pl-2 sm:pl-3">
                        <h2 className={`font-mono text-base sm:text-xl md:text-2xl font-black ${themeStyles.textAccent}`}>
                          {slide.subtitle}:
                        </h2>

                        <p className="text-sm sm:text-lg md:text-xl text-slate-800 font-sans leading-relaxed font-medium">
                          {slide.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>

          {/* Slide Footer (Hidden on Slide 1 so First Slide is 100% Clear of Text) */}
          <div className="relative z-10 min-h-[28px]">
            <AnimatePresence mode="wait">
              {!isClearSlide && (
                <motion.div
                  key="slide-footer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4 text-xs font-mono text-slate-400"
                >
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </LayoutGroup>
  );
}
