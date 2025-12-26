"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Copy, Check } from "lucide-react";

interface TerminalLine {
  type: "command" | "output" | "system";
  text: string;
  delay?: number;
  color?: string;
}

const terminalScript: TerminalLine[] = [
  { type: "command", text: "What's eating my disk space?", delay: 0 },
  { type: "output", text: "Analyzing filesystem usage...", delay: 1000 },
  { type: "output", text: "Found: ~/Downloads (47GB), ~/.cache (12GB)", delay: 800 },
  { type: "output", text: "Cleaning cache files older than 30 days...", delay: 600 },
  { type: "output", text: "Freed 8.3GB. Want me to archive old downloads?", delay: 800, color: "text-green-400" },
];

export function Hero() {
  const [displayedLines, setDisplayedLines] = useState<{ type: string; text: string; typing: boolean; color?: string }[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const installCommand = "npm i -g @google/gemini-cli";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (currentLineIndex >= terminalScript.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentLine = terminalScript[currentLineIndex];
    const isTypingLine = currentLine.type === "command";

    const startTimeout = setTimeout(() => {
      if (currentCharIndex === 0) {
        setDisplayedLines((prev) => [
          ...prev,
          { type: currentLine.type, text: isTypingLine ? "" : currentLine.text, typing: isTypingLine, color: currentLine.color },
        ]);

        if (!isTypingLine) {
          setCurrentLineIndex((prev) => prev + 1);
          return;
        }
      }

      if (isTypingLine && currentCharIndex < currentLine.text.length) {
        intervalRef.current = setTimeout(() => {
          setDisplayedLines((prev) => {
            const updated = [...prev];
            const lastIndex = updated.length - 1;
            updated[lastIndex] = {
              ...updated[lastIndex],
              text: currentLine.text.slice(0, currentCharIndex + 1),
            };
            return updated;
          });
          setCurrentCharIndex((prev) => prev + 1);
        }, 50);
      } else if (isTypingLine) {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          const lastIndex = updated.length - 1;
          updated[lastIndex] = { ...updated[lastIndex], typing: false };
          return updated;
        });
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, currentLineIndex === 0 && currentCharIndex === 0 ? 500 : currentLine.delay || 0);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [currentLineIndex, currentCharIndex]);

  return (
    <section className="section min-h-screen flex items-center justify-center pt-32 pb-0">
      <div className="container">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center gap-8 mb-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >


            {/* Main Headline */}
            <h1 className="mb-6 leading-tight tracking-tight text-[clamp(2.5rem,6vw,4.5rem)]">
              Ask It Anything.{" "}
              <span className="text-[var(--color-brand-red)]">Watch It Happen.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto leading-relaxed mb-10">
              The first AI that controls your entire computer—terminal, apps, and screens. 
              Voice-powered. Remotely viewable. Always under your command.
            </p>

            {/* Install Command (Primary CTA) */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <div 
                className="group flex items-center gap-3 bg-black/60 border border-white/10 rounded-lg px-6 py-4 font-mono text-base cursor-pointer hover:border-white/30 transition-colors"
                onClick={handleCopy}
              >
                <span className="text-gray-500">$</span>
                <code className="text-white">{installCommand}</code>
                <button className="ml-4 p-1.5 rounded hover:bg-white/10 transition-colors">
                  {copied ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} className="opacity-50 group-hover:opacity-100" />
                  )}
                </button>
              </div>
              <span className="text-xs opacity-40">Then run: terminai</span>
            </div>

            {/* Secondary CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/install"
                className="btn btn-primary text-base px-8 py-3 flex items-center gap-2"
              >
                Installation Guide
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://github.com/Prof-Harita/terminaI/stargazers"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-base px-8 py-3 flex items-center gap-2"
              >
                <Github size={18} />
                Star on GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Terminal Demo */}
        <motion.div
          className="terminal-window w-full max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 40px 100px -20px rgba(0,0,0,0.8)",
          }}
        >
          <div className="terminal-header bg-white/[0.03] border-b border-white/[0.05] p-4 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="terminal-dot terminal-dot--red" />
              <div className="terminal-dot terminal-dot--yellow" />
              <div className="terminal-dot terminal-dot--green" />
            </div>
            <div className="text-xs font-medium text-white/20 tracking-widest uppercase flex items-baseline gap-[1px]">
              termina<span className="text-[var(--color-brand-red)] animate-cursor-blink font-extrabold">I</span>
            </div>
            <div className="w-16" />
          </div>
          <div className="terminal-body min-h-[300px] text-base md:text-lg p-6 md:p-8 bg-black/80 backdrop-blur-sm font-mono">
            <div className="flex flex-col gap-2">
              {displayedLines.map((line, index) => (
                <div key={index} className={`${line.color || "text-white"} break-words`}>
                  {line.type === "command" && (
                    <span className="text-gray-500 mr-3 select-none">$</span>
                  )}
                  {line.text}
                  {line.typing && (
                    <span className="inline-block h-5 w-2.5 bg-brand-red ml-1 animate-pulse" />
                  )}
                </div>
              ))}
              {displayedLines.length === 0 && (
                <div>
                  <span className="text-gray-500 mr-3 select-none">$</span>
                  <span className="inline-block h-5 w-2.5 bg-brand-red ml-1 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
