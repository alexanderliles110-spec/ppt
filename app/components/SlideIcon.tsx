"use client";

import React from "react";
import {
  Cpu,
  Terminal,
  Globe,
  BookOpen,
  Compass,
  Laptop,
  Zap,
  WifiOff,
  FileText,
  Code,
  Sparkles,
  Users,
  GraduationCap,
  Heart,
  CheckCircle2,
  LucideIcon
} from "lucide-react";

interface SlideIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Terminal,
  Globe,
  BookOpen,
  Compass,
  Laptop,
  Zap,
  WifiOff,
  FileText,
  Code,
  Sparkles,
  Users,
  GraduationCap,
  Heart,
  CheckCircle2
};

export default function SlideIcon({ name, className = "w-6 h-6" }: SlideIconProps) {
  const IconComponent = iconMap[name] || Cpu;
  return <IconComponent className={className} />;
}

