"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandText } from "./BrandText";
import { Menu, X, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
            <div className="container h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-0 group select-none text-4xl no-underline">
                    <BrandText />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium px-6">
                    <Link href="/manifesto" className="opacity-70 hover:opacity-100 transition-opacity">
                        Overview
                    </Link>

                    <Link href="/extensions" className="opacity-70 hover:opacity-100 transition-opacity">
                        Extensions
                    </Link>
                    <Link href="/trust" className="opacity-70 hover:opacity-100 transition-opacity">
                        Trust & Safety
                    </Link>
                    <Link href="/docs" className="opacity-70 hover:opacity-100 transition-opacity">
                        Docs
                    </Link>
                    <Link href="/contribute" className="opacity-70 hover:opacity-100 transition-opacity">
                        Contribute
                    </Link>
                </nav>

                <div className="flex items-center gap-2 lg:gap-4">
                    <a 
                        href="https://github.com/Prof-Harita/terminaI" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden lg:flex items-center gap-2 text-xs uppercase font-bold tracking-widest opacity-60 hover:opacity-100 transition-all px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20"
                    >
                        <Github size={14} />
                        Star
                    </a>
                    
                    <Link href="/free" className="hidden sm:block text-xs uppercase font-bold tracking-widest opacity-60 hover:opacity-100 hover:text-brand-red transition-all">
                        Pricing
                    </Link>
                    
                    <Link href="/install" className="btn btn-primary text-sm py-2 px-6">
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
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md overflow-hidden"
                    >
                        <nav className="container py-8 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <Link href="/manifesto" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Overview
                                </Link>

                                <Link href="/extensions" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Extensions
                                </Link>
                                <Link href="/trust" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Trust & Safety
                                </Link>
                                <Link href="/docs" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Docs
                                </Link>
                                <Link href="/contribute" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Contribute
                                </Link>
                            </div>
                            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                                <Link href="/extensions" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Extensions
                                </Link>
                                <Link href="/free" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Pricing
                                </Link>
                                <Link href="/contact" className="text-lg py-2 opacity-80" onClick={() => setMobileMenuOpen(false)}>
                                    Contact
                                </Link>
                            </div>
                            <div className="pt-6">
                                <Link href="/install" className="btn btn-primary w-full justify-center py-4 text-lg" onClick={() => setMobileMenuOpen(false)}>
                                    Install terminaI
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
