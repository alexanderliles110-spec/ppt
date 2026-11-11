"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { slides } from "./data/slides";
import SlideCard from "./components/SlideCard";
import CyberBackground from "./components/CyberBackground";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

export default function PresentationPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [controlsVisible, setControlsVisible] = useState<boolean>(true);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];

  // Touch swipe handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-hide controls on mouse idle
  useEffect(() => {
    const handleMouseMove = () => {
      setControlsVisible(true);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      idleTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 3500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  // Navigation handlers
  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : 0));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalSlides - 1));
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const toggleFullscreen = () => {
    if (typeof document === "undefined") return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  // Touch Gestures for mobile (Accurate horizontal swipe, smooth scrolling)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    // Only change slides if horizontal swipe is clearly intentional and dominates vertical scrolling
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard Navigation (Standard presentation keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ": // Spacebar advances slide
        case "Enter":
          e.preventDefault();
          goToNext();
          break;
        case "ArrowLeft":
        case "PageUp":
        case "Backspace":
          e.preventDefault();
          goToPrev();
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev, goToSlide, totalSlides]);

  // Sync fullscreen change event
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;

  return (
    <main
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen flex flex-col justify-between items-center py-2 sm:py-3 px-2 sm:px-4 bg-transparent text-slate-900 selection:bg-blue-500/20"
    >
      {/* Rich Educational Technology Background (Positioned at z-0, always visible) */}
      <CyberBackground />

      {/* Main Slide Presentation Canvas (Persistent for PowerPoint Morph transition) */}
      <div className="w-full flex-1 flex items-center justify-center relative z-20 my-auto">
        <SlideCard
          slide={currentSlide}
          direction={direction}
          totalSlides={totalSlides}
          onSelectSlide={goToSlide}
          onRestart={() => goToSlide(0)}
          onExit={() => {
            if (typeof document !== "undefined" && document.fullscreenElement && document.exitFullscreen) {
              document.exitFullscreen().catch(() => {});
              setIsFullscreen(false);
            }
            goToSlide(0);
          }}
        />
      </div>

      {/* Floating PowerPoint Presenter Controls */}
      <div
        className={`relative z-30 pb-2 sm:pb-3 pt-1 flex flex-col items-center space-y-1.5 transition-opacity duration-500 ${
          controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center space-x-1 sm:space-x-3 bg-white/95 backdrop-blur-xl border border-slate-200 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg pointer-events-auto max-w-[96vw]">
          {/* Previous Arrow */}
          <button
            onClick={goToPrev}
            title="Previous Slide (← / Swipe Right)"
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-700 active:scale-90 transition cursor-pointer shrink-0"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Compact Slide Number Counter for Mobile Phones */}
          <div className="sm:hidden font-mono text-xs font-bold text-slate-800 px-2 shrink-0">
            {String(currentIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
          </div>

          {/* Slide Dots Indicator for Tablets & Desktops */}
          <div className="hidden sm:flex items-center space-x-1 sm:space-x-1.5 px-1 sm:px-2 shrink-0">
            {slides.map((s, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  title={`Slide ${s.id}: ${s.title}`}
                  className="p-0.5 focus:outline-none cursor-pointer"
                >
                  <div
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? "w-5 sm:w-6 h-1.5 sm:h-2 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                        : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Next Arrow */}
          <button
            onClick={goToNext}
            title="Next Slide (→ / Swipe Left)"
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-700 active:scale-90 transition cursor-pointer shrink-0"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="h-4 w-px bg-slate-200 mx-0.5 sm:mx-1 shrink-0" />

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            title="Toggle Fullscreen (F)"
            className="p-1.5 sm:p-2 rounded-full hover:bg-slate-100 text-slate-700 active:scale-90 transition cursor-pointer shrink-0"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>

        {/* Subtle Presentation Helper Hint */}
        <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 hidden sm:block">
          Use <kbd className="text-slate-600 font-medium">←</kbd> / <kbd className="text-slate-600 font-medium">→</kbd> or <kbd className="text-slate-600 font-medium">Space</kbd> to present • Swipe on mobile
        </p>
      </div>

      {/* Slim Progress Bar at the very bottom edge */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-slate-200 pointer-events-none z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </main>
  );
}
