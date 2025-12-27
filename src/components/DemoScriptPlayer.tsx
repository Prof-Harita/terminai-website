"use client";

import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";

const steps = [
  {
    role: "User",
    label: "Ask",
    text: "What is eating my disk space?",
    duration: 1800,
  },
  {
    role: "TerminaI",
    label: "Analyze",
    text: "Found Downloads (47GB) and Cache (12GB).",
    duration: 2200,
  },
  {
    role: "Safety",
    label: "Approve",
    text: "Clean cache older than 30 days? (Level A approval)",
    duration: 2200,
  },
  {
    role: "User",
    label: "Approve",
    text: "Approve.",
    duration: 1400,
  },
  {
    role: "TerminaI",
    label: "Execute",
    text: "Freed 8.3GB. Archive old downloads next?",
    duration: 2200,
  },
];

export function DemoScriptPlayer() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      setPrefersReducedMotion(media.matches);
      if (!media.matches) {
        setIsPlaying(true);
        setHasStarted(true);
      }
    };
    applyPreference();
    media.addEventListener("change", applyPreference);
    return () => media.removeEventListener("change", applyPreference);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timeout = window.setTimeout(() => {
      if (activeIndex >= steps.length - 1) {
        setIsPlaying(false);
        return;
      }
      setActiveIndex((prev) => prev + 1);
    }, steps[activeIndex].duration);

    return () => window.clearTimeout(timeout);
  }, [activeIndex, hasStarted, isPlaying]);

  const isComplete = hasStarted && activeIndex >= steps.length - 1 && !isPlaying;

  const handlePrimaryAction = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    if (isComplete) {
      setActiveIndex(0);
    }
    setHasStarted(true);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setHasStarted(false);
    setActiveIndex(0);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/80 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-white/40">Interactive Demo</p>
          <h3 className="text-lg font-bold text-white">Ask / Approve / Execute</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrimaryAction}
            className="btn btn-outline text-xs px-4 py-2"
          >
            {isPlaying ? <Pause size={14} /> : isComplete ? <Play size={14} /> : <Play size={14} />}
            {isPlaying ? "Pause" : isComplete ? "Replay" : "Play"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="btn btn-outline text-xs px-3 py-2"
            aria-label="Reset demo"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => {
          const isActive = hasStarted && index === activeIndex;
          const isCompleteStep = hasStarted && index < activeIndex;
          return (
            <div
              key={`${step.role}-${step.text}`}
              className={`rounded-lg border px-4 py-3 transition-colors ${
                isActive
                  ? "border-[var(--color-brand-red)] bg-white/10 text-white"
                  : "border-white/10 bg-black/60 text-white/70"
              }`}
            >
              <div className="flex items-center justify-between mb-2 text-xs uppercase tracking-widest">
                <span className="text-[var(--color-brand-red)]">{step.role}</span>
                <span className={isCompleteStep ? "text-emerald-400" : "text-white/40"}>
                  {isCompleteStep ? "Done" : step.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{step.text}</p>
            </div>
          );
        })}
      </div>

      {prefersReducedMotion && (
        <p className="mt-4 text-xs text-white/40">
          Auto-play disabled to respect reduced motion preferences.
        </p>
      )}
    </div>
  );
}
