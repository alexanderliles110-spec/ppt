"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlideData } from "../data/slides";
import SlideIcon from "./SlideIcon";
import TPACKDiagram from "./TPACKDiagram";
import LandscapeTPACKDiagram from "./LandscapeTPACKDiagram";

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
  totalSlides
}: SlideCardProps) {
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
      className="w-full max-w-[96vw] sm:max-w-5xl lg:max-w-6xl xl:max-w-[1260px] 2xl:max-w-[1360px] mx-auto px-1 sm:px-3 relative z-10 my-auto"
    >
      {/* Presentation Slide Canvas */}
      <div
        className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/94 backdrop-blur-2xl border ${themeStyles.border} ${themeStyles.glow} p-5 sm:p-7 md:p-8 lg:p-10 min-h-[74vh] sm:min-h-[78vh] flex flex-col justify-between transition-all duration-300 shadow-2xl`}
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

        {/* Main Presentation Body */}
        <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3.5 sm:space-y-4 py-1">
          {/* Slide Heading */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.35, type: "spring", stiffness: 220 }}
              className="font-mono text-xl sm:text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight"
            >
              {slide.title}
            </motion.h1>
          </div>

          {/* Slide 1: Landscape TPACK Diagram + 7 Abbreviations List */}
          {slide.id === 1 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="w-full"
            >
              <LandscapeTPACKDiagram />
            </motion.div>
          ) : (
            /* Slide 2: The Seven Components of TPACK (1–7) */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="w-full"
            >
              <TPACKDiagram />
            </motion.div>
          )}
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
      </div>
    </motion.div>
  );
}
