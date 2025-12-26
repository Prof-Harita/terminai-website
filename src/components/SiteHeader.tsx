"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BrandText } from "./BrandText";
import { Menu, X, ChevronDown, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    {
        label: "Product",
        items: [
            { label: "Always Free", href: "/product#free", description: "FOSS, Gemini Free Tier, and Community" },
            { label: "Intelligence", href: "/product#intelligence", description: "Agentic harness & SOTA models" },
            { label: "Extensibility", href: "/product#extensibility", description: "MCP, A2A, and Configuration" },
            { label: "Safety", href: "/product#safety", description: "Approval Ladder & Trust" },
        ]
    },
];

export function SiteHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (label: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
            <div className="container h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-0 group select-none text-4xl no-underline">
                    <BrandText />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-1 items-center justify-evenly text-xl font-medium px-8">
                    {navItems.map((group) => (
                        <div 
                            key={group.label}
                            className="relative py-4"
                            onMouseEnter={() => handleMouseEnter(group.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity px-4">
                                {group.label}
                                <ChevronDown size={18} className={`transition-transform duration-200 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === group.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-2"
                                    >
                                        <div className="bg-black/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl p-2">
                                            <div className="grid grid-cols-1 gap-1">
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="group flex flex-col p-3 rounded-lg hover:bg-white/5 transition-colors"
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        <span className="text-white group-hover:text-brand-red font-semibold transition-colors">
                                                            {item.label}
                                                        </span>
                                                        <span className="text-xs opacity-50 mt-1 leading-relaxed">
                                                            {item.description}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <Link
                        href="/use-cases"
                        className="opacity-70 hover:opacity-100 transition-opacity py-4 px-4"
                    >
                        Use Cases
                    </Link>
                    <Link
                        href="/docs"
                        className="opacity-70 hover:opacity-100 transition-opacity py-4 px-4"
                    >
                        Docs
                    </Link>
                    <Link
                        href="/recipes"
                        className="opacity-70 hover:opacity-100 transition-opacity py-4 px-4"
                    >
                        Recipes
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
                    
                    <Link href="/manifesto" className="hidden sm:block text-xs uppercase font-bold tracking-widest opacity-60 hover:opacity-100 hover:text-brand-red transition-all">
                        Manifesto
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
                            {navItems.map((group) => (
                                <div key={group.label} className="flex flex-col gap-3">
                                    <h3 className="text-xs uppercase font-bold tracking-widest opacity-40 px-2">{group.label}</h3>
                                    <div className="flex flex-col gap-1">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="text-lg py-3 px-2 rounded-lg hover:bg-white/5"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                                <Link
                                    href="/docs"
                                    className="text-lg py-2 opacity-80"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Docs
                                </Link>
                                <Link
                                    href="/recipes"
                                    className="text-lg py-2 opacity-80"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Recipes
                                </Link>
                                <Link
                                    href="/manifesto"
                                    className="text-lg py-2 opacity-80"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Manifesto
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
