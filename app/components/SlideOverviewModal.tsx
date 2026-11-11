"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides, SlideData } from "../data/slides";
import SlideIcon from "./SlideIcon";
import { X, Search } from "lucide-react";

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export default function SlideOverviewModal({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide
}: SlideOverviewModalProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  if (!isOpen) return null;

  const filteredSlides = slides.filter((s) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      s.title.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q) ||
      s.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="relative w-full max-w-5xl max-h-[85vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b border-slate-800 bg-slate-950/50">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <h2 className="font-mono text-sm sm:text-base font-bold text-white tracking-wider">
                DECK MATRIX // 12 SLIDES OVERVIEW
              </h2>
            </div>

            {/* Search Input Bar */}
            <div className="flex items-center space-x-3">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter slides..."
                  className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid of Slides */}
          <div className="overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSlides.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-500 font-mono text-sm">
                NO SLIDES MATCH QUERY "{searchQuery}"
              </div>
            ) : (
              filteredSlides.map((s) => {
                const originalIndex = s.id - 1;
                const isActive = originalIndex === currentIndex;
                const accentColor =
                  s.accent === "cyan"
                    ? "border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)]"
                    : s.accent === "orange"
                    ? "border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.4)]"
                    : "border-amber-500/50 hover:border-amber-400 hover:shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)]";

                return (
                  <div
                    key={s.id}
                    onClick={() => {
                      onSelectSlide(originalIndex);
                      onClose();
                    }}
                    className={`group cursor-pointer rounded-2xl p-4 border transition-all duration-300 flex flex-col justify-between text-left relative ${
                      isActive
                        ? "bg-slate-800/90 border-cyan-400 shadow-[0_0_25px_-5px_rgba(6,182,212,0.5)] ring-1 ring-cyan-400"
                        : `bg-slate-950/60 border-slate-800 ${accentColor}`
                    }`}
                  >
                    {/* Top line indicator */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-cyan-300">
                        #{String(s.id).padStart(2, "0")}
                      </span>
                      <div className="flex items-center space-x-1.5">
                        <SlideIcon name={s.icon} className="w-4 h-4 text-slate-400 group-hover:text-white" />
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        )}
                      </div>
                    </div>

                    <h3 className="font-mono text-sm font-bold text-white line-clamp-1 mb-1 group-hover:text-cyan-200">
                      {s.title}
                    </h3>

                    <p className="text-[11px] text-slate-400 line-clamp-2 mb-3">
                      {s.subtitle}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                      <span className="uppercase">{s.accent}</span>
                      <span>SELECT →</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
