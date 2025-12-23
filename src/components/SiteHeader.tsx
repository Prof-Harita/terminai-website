"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandText } from "./BrandText";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
            <div className="container h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-0 group select-none text-2xl no-underline">
                    <BrandText />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/contribute" className="opacity-80 hover:opacity-100 transition-opacity">
                        Contribute
                    </Link>
                    <Link href="/architecture" className="opacity-80 hover:opacity-100 transition-opacity">
                        Architecture
                    </Link>
                    <div className="group relative flex items-center gap-1 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                        <span>Protocols</span>
                        <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-32">
                            <div className="bg-black border border-white/10 rounded-md p-2 flex flex-col gap-2">
                                <Link href="/protocols/a2a" className="hover:text-brand-red whitespace-nowrap">A2A</Link>
                                <Link href="/protocols/mcp" className="hover:text-brand-red whitespace-nowrap">MCP</Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/safety" className="opacity-80 hover:opacity-100 transition-opacity">
                        Safety
                    </Link>
                    <Link href="/docs" className="opacity-80 hover:opacity-100 transition-opacity">
                        Docs
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    {/* GitHub Stars Badge */}
                    <a 
                        href="https://github.com/Prof-Harita/terminaI" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
                    >
                        <svg viewBox="0 0 16 16" className="w-4 h-4" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span className="font-medium">Star</span>
                    </a>
                    
                    <Link href="/manifesto" className="hidden sm:block text-xs uppercase font-bold tracking-widest opacity-60 hover:opacity-100 hover:text-brand-red transition-all">
                        Manifesto
                    </Link>
                    
                    <Link href="/download" className="btn btn-primary text-sm py-2 px-4">
                        Install
                    </Link>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
                    <nav className="container py-6 flex flex-col gap-4">
                        <Link href="/manifesto" className="text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                            Manifesto
                        </Link>
                        <Link href="/contribute" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                            Contribute
                        </Link>
                        <Link href="/architecture" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                            Architecture
                        </Link>
                        <Link href="/safety" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                            Safety
                        </Link>
                        <Link href="/docs" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                            Docs
                        </Link>
                        <Link href="/protocols/a2a" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                            A2A Protocol
                        </Link>
                        <Link href="/protocols/mcp" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                            MCP Protocol
                        </Link>
                        <div className="pt-4 border-t border-white/10">
                            <a 
                                href="https://github.com/Prof-Harita/terminaI" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn btn-outline w-full justify-center"
                            >
                                Star on GitHub
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
