"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, FileCode2 } from "lucide-react";

export default function NetworkDiagram() {
  const [activeLayer, setActiveLayer] = useState<"internet" | "web">("web");

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-3 sm:gap-6 pt-1 sm:pt-3">
      {/* Visual Interactive Diagram */}
      <div className="w-full md:w-1/2 flex flex-col gap-2.5 sm:gap-3">
        {/* Layer 2: World Wide Web (Software & Documents) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => setActiveLayer("web")}
          className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all cursor-pointer ${
            activeLayer === "web"
              ? "bg-cyan-50 border-cyan-500 shadow-md"
              : "bg-white border-slate-200 hover:border-slate-300 opacity-75"
          }`}
        >
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 sm:p-2 rounded-lg bg-cyan-100 text-cyan-700">
                <FileCode2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-cyan-600 font-bold uppercase tracking-wider">
                  Top Layer // Software &amp; Hypertext
                </span>
                <h4 className="font-mono text-sm sm:text-base font-extrabold text-slate-900">
                  The World Wide Web (WWW)
                </h4>
              </div>
            </div>
            {activeLayer === "web" && (
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            )}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans pl-7 sm:pl-9 leading-relaxed">
            The graphical environment that allows users to access, navigate, and view multimedia documents using URLs and HTTP.
          </p>
        </motion.div>

        {/* Connecting Pipe / Data Flow Indicator */}
        <div className="flex items-center justify-center space-x-2 py-0.5 sm:py-1 text-slate-400 font-mono text-[11px] sm:text-xs">
          <span>▲ Runs on top of the physical network ▼</span>
        </div>

        {/* Layer 1: The Internet (Hardware & Infrastructure) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          onClick={() => setActiveLayer("internet")}
          className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all cursor-pointer ${
            activeLayer === "internet"
              ? "bg-amber-50 border-amber-500 shadow-md"
              : "bg-white border-slate-200 hover:border-slate-300 opacity-75"
          }`}
        >
          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 sm:p-2 rounded-lg bg-amber-100 text-amber-700">
                <Server className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] sm:text-xs text-amber-600 font-bold uppercase tracking-wider">
                  Foundation Layer // Physical Pipeline
                </span>
                <h4 className="font-mono text-sm sm:text-base font-extrabold text-slate-900">
                  The Internet
                </h4>
              </div>
            </div>
            {activeLayer === "internet" && (
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            )}
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-sans pl-7 sm:pl-9 leading-relaxed">
            The massive global infrastructure of connected computers, undersea fiber optic cables, routers, and satellites.
          </p>
        </motion.div>
      </div>

      {/* Explanatory Deep-Dive Card */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between min-h-0 sm:min-h-[220px]">
        <div>
          <span className="font-mono text-[10px] sm:text-xs uppercase font-bold text-slate-400 tracking-wider">
            Layer Breakdown
          </span>
          <h3 className="font-mono text-base sm:text-lg font-bold text-slate-900 mt-1 mb-1.5 sm:mb-2">
            {activeLayer === "web"
              ? "The Web: Cargo & Vehicles"
              : "The Internet: The Highway Pipeline"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
            {activeLayer === "web"
              ? "Think of the World Wide Web as the vehicles, cargo, and traffic traveling upon the road system. It consists of websites, web pages, videos, and hyperlinks that make the network human-friendly."
              : "Think of the Internet as the physical asphalt, bridges, and highways connecting continents. Without this foundational pipeline, web documents and media have no physical way to travel across the globe."}
          </p>
        </div>

        <div className="pt-3 sm:pt-4 border-t border-slate-200 mt-2 sm:mt-3 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500">
          <span>Tap either layer to toggle</span>
          <span className="font-bold text-slate-700">INTERACTIVE // ARCHITECTURE</span>
        </div>
      </div>
    </div>
  );
}

