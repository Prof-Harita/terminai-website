"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

interface TerminalLine {
    type: "command" | "output" | "system" | "input";
    text: string;
    delay?: number;
    color?: string;
}

const terminalScript: TerminalLine[] = [
    { type: "command", text: "fix the wifi driver, it keeps dropping", delay: 0 },
    { type: "system", text: "[Policymaker] Critical Action: Modify System Config", delay: 1000, color: "text-yellow-400" },
    { type: "input", text: "Requesting approval explicitly. Allow? [y/N]", delay: 1500 },
    { type: "command", text: "y", delay: 3000 },
    { type: "output", text: "Restarting NetworkManager...", delay: 50 },
    { type: "output", text: "Reloading iwlwifi kernel module...", delay: 800 },
    { type: "system", text: "✓ Action Audited (Log ID #9F2A)", delay: 1500, color: "text-green-400" },
];

export function Hero() {
    const [displayedLines, setDisplayedLines] = useState<{ type: string; text: string; typing: boolean; color?: string }[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (currentLineIndex >= terminalScript.length) {
            // Restart after a pause
            const timeout = setTimeout(() => {
                setDisplayedLines([]);
                setCurrentLineIndex(0);
                setCurrentCharIndex(0);
            }, 5000);
            return () => clearTimeout(timeout);
        }

        const currentLine = terminalScript[currentLineIndex];
        const isTypingLine = currentLine.type === "command";

        // Wait for initial delay
        const startTimeout = setTimeout(() => {
            if (currentCharIndex === 0) {
                setDisplayedLines((prev) => [
                    ...prev,
                    { type: currentLine.type, text: isTypingLine ? "" : currentLine.text, typing: isTypingLine, color: currentLine.color },
                ]);
                
                // If not typing, immediate next line
                if (!isTypingLine) {
                    setCurrentLineIndex((prev) => prev + 1);
                    return;
                }
            }

            // Type character by character
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
                // Line complete
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
                {/* Centered Hero Content */}
                <div className="flex flex-col items-center text-center gap-12 mb-24 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }} // Removed complex cubicBezier for lint fix
                        className="max-w-5xl mx-auto"
                    >
                        <h1 className="mb-8 leading-tight tracking-tighter text-[clamp(3.5rem,8vw,6rem)]">
                            The Sovereign Shell
                        </h1>
                        <p className="text-lg md:text-xl mb-4 opacity-90 max-w-3xl mx-auto leading-relaxed">
                            <span className="font-semibold text-white">
                                What if your computer could just do things for you—safely?
                            </span>
                        </p>
                        <p className="text-lg opacity-60 max-w-2xl mx-auto leading-relaxed mb-10">
                            Not suggest commands. Not generate scripts. Actually operate your system:
                            diagnose issues, fix problems, orchestrate workflows—with guardrails that
                            make it trustworthy.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/install"
                                className="btn btn-primary text-lg px-8 py-4 flex items-center gap-2"
                            >
                                Install terminaI
                                <ArrowRight size={20} />
                            </Link>
                            <a
                                href="https://github.com/Prof-Harita/terminaI/stargazers"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline text-lg px-8 py-4 flex items-center gap-2"
                            >
                                <Github size={20} />
                                Star on GitHub
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Massive Centered Terminal Window */}
                <motion.div
                    className="terminal-window w-full max-w-4xl mx-auto relative z-10"
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }} // Removed complex cubicBezier
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
                        <div className="w-16" /> {/* Spacer */}
                    </div>
                    <div className="terminal-body min-h-[400px] text-lg md:text-xl p-8 bg-black/80 backdrop-blur-sm font-mono">
                         <div className="flex flex-col gap-2">
                            {displayedLines.map((line, index) => (
                                <div key={index} className={`${line.color || "text-white"} break-words`}>
                                    {line.type === "command" && (
                                        <span className="text-gray-500 mr-3 select-none">$</span>
                                    )}
                                    {line.type === "input" && (
                                        <span className="text-brand-red mr-3 select-none">?</span>
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
