"use client";

import React, { useEffect, useState } from "react";

interface LaserPointerProps {
  active: boolean;
}

export default function LaserPointer({ active }: LaserPointerProps) {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      style={{ left: pos.x, top: pos.y }}
    >
      {/* Outer Reticle Ring */}
      <div className="w-8 h-8 rounded-full border border-cyan-400/60 animate-ping opacity-60 absolute -inset-2" />
      <div className="w-6 h-6 rounded-full border border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.9)] flex items-center justify-center">
        {/* Core Laser Dot */}
        <div className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
      </div>
    </div>
  );
}

