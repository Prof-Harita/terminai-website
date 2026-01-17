"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Star, X, ExternalLink, Copy, Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import extensions from "@/content/extensions.json";

interface Extension {
    name: string;
    packageName: string;
    description: string;
    tags: string[];
    githubUrl: string;
    stars: number;
    avatarUrl?: string;
    isSpotlight: boolean;
}

function ExtensionCard({ ext, onClick }: { ext: Extension; onClick: () => void }) {
    return (
        <motion.button
            onClick={onClick}
            className="text-left group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] hover:border-[var(--color-brand-red)]/30 transition-all cursor-pointer"
            whileHover={{ y: -2 }}
        >
            <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                    {ext.avatarUrl && (
                        <img
                            src={ext.avatarUrl}
                            alt=""
                            className="w-8 h-8 rounded-lg"
                        />
                    )}
                    <div>
                        <h3 className="font-semibold text-lg">{ext.name || ext.packageName.split('/')[1]}</h3>
                        <p className="text-xs opacity-50 font-mono">{ext.packageName}</p>
                    </div>
                </div>
            </div>
            
            <p className="text-sm opacity-60 line-clamp-2 mb-4 min-h-[2.5rem]">
                {ext.description || "No description available"}
            </p>
            
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {ext.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-1 text-sm opacity-50">
                    <Star size={14} />
                    <span>{ext.stars.toLocaleString()}</span>
                </div>
            </div>
        </motion.button>
    );
}

function ExtensionDialog({ ext, onClose }: { ext: Extension; onClose: () => void }) {
    const [copied, setCopied] = useState(false);
    const installCommand = `terminai extensions install ${ext.githubUrl}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(installCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Dialog */}
            <motion.div
                className="relative w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left column */}
                    <div className="flex-1 p-8">
                        <div className="flex items-center gap-4 mb-6">
                            {ext.avatarUrl && (
                                <img
                                    src={ext.avatarUrl}
                                    alt=""
                                    className="w-12 h-12 rounded-xl"
                                />
                            )}
                            <div>
                                <h2 className="text-2xl font-bold">{ext.name || ext.packageName.split('/')[1]}</h2>
                                <p className="text-sm opacity-50 font-mono">{ext.packageName}</p>
                            </div>
                        </div>

                        <p className="opacity-70 mb-8">
                            {ext.description || "No description available"}
                        </p>

                        <h3 className="font-semibold mb-3">Install this extension</h3>
                        <div className="bg-black rounded-lg border border-white/10 p-4 font-mono text-sm flex items-center justify-between gap-4">
                            <code className="text-[var(--color-brand-red)] overflow-x-auto">
                                $ {installCommand}
                            </code>
                            <button
                                onClick={handleCopy}
                                className="shrink-0 p-2 rounded hover:bg-white/10 transition-colors"
                            >
                                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                            </button>
                        </div>

                        <p className="text-xs opacity-40 mt-4">
                            This is a third-party extension. TerminaI does not guarantee the quality or safety of third-party extensions.
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="w-full md:w-64 bg-white/[0.02] border-t md:border-t-0 md:border-l border-white/10 p-6">
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs opacity-50 mb-1">Stars</p>
                                <div className="flex items-center gap-2">
                                    <Star size={16} className="text-yellow-400" />
                                    <span className="font-semibold">{ext.stars.toLocaleString()}</span>
                                </div>
                            </div>

                            {ext.tags.length > 0 && (
                                <div>
                                    <p className="text-xs opacity-50 mb-2">Tags</p>
                                    <div className="flex flex-wrap gap-2">
                                        {ext.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="pt-4 space-y-2">
                                <a
                                    href={ext.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
                                >
                                    <ExternalLink size={14} />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ExtensionsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedExtension, setSelectedExtension] = useState<Extension | null>(null);

    const spotlightExtensions = useMemo(() => 
        (extensions as Extension[]).filter(ext => ext.isSpotlight),
        []
    );

    const filteredExtensions = useMemo(() => {
        const query = searchQuery.toLowerCase();
        if (!query) return extensions as Extension[];
        return (extensions as Extension[]).filter(ext =>
            ext.name?.toLowerCase().includes(query) ||
            ext.packageName.toLowerCase().includes(query) ||
            ext.description?.toLowerCase().includes(query) ||
            ext.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }, [searchQuery]);

    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1 pt-32 pb-16">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Extensions
                    </h1>
                    <p className="text-xl opacity-60 max-w-2xl mx-auto">
                        Extend TerminaI with community-built extensions. MCP servers, context providers, and more.
                    </p>
                </div>

                {/* Search */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40" size={20} />
                        <input
                            type="text"
                            placeholder="Search extensions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/[0.02] border border-white/10 focus:border-[var(--color-brand-red)]/50 focus:outline-none transition-colors text-lg"
                        />
                    </div>
                </div>

                {/* Spotlight */}
                {!searchQuery && spotlightExtensions.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Star className="text-[var(--color-brand-red)]" size={24} />
                            Spotlight Extensions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {spotlightExtensions.map(ext => (
                                <ExtensionCard
                                    key={ext.packageName}
                                    ext={ext}
                                    onClick={() => setSelectedExtension(ext)}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* All Extensions */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">
                        {searchQuery ? `Search Results (${filteredExtensions.length})` : "All Extensions"}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredExtensions.map(ext => (
                            <ExtensionCard
                                key={ext.packageName}
                                ext={ext}
                                onClick={() => setSelectedExtension(ext)}
                            />
                        ))}
                    </div>

                    {filteredExtensions.length === 0 && (
                        <div className="text-center py-16 opacity-50">
                            <p>No extensions found matching &ldquo;{searchQuery}&rdquo;</p>
                        </div>
                    )}
                </section>
            </div>

            {/* Dialog */}
            <AnimatePresence>
                {selectedExtension && (
                    <ExtensionDialog
                        ext={selectedExtension}
                        onClose={() => setSelectedExtension(null)}
                    />
                )}
            </AnimatePresence>
        </main>
        <SiteFooter />
        </div>
    );
}
