"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Command, Search, X } from "lucide-react";

interface DocSearchEntry {
  slug: string;
  title: string;
  section: string;
  description?: string;
  content?: string;
}

export function DocsSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [entries, setEntries] = useState<DocSearchEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetch("/docs/search-index.json")
      .then((res) => res.json())
      .then((data: DocSearchEntry[]) => {
        setEntries(data);
      })
      .catch(() => {
        setEntries([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return entries
      .filter((entry) => {
        const haystack = `${entry.title} ${entry.section} ${entry.description ?? ""} ${entry.content ?? ""}`.toLowerCase();
        return haystack.includes(normalized);
      })
      .slice(0, 8);
  }, [entries, query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full flex items-center gap-2 rounded-md border border-white/10 bg-black/60 px-3 py-2 text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors"
      >
        <Search size={16} className="text-white/40" />
        <span className="flex-1 text-left">Search docs...</span>
        <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-white/40">
          <Command size={12} />
          K
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto mt-24 bg-black/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
              <Search size={16} className="text-white/40" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {loading && (
                <div className="px-4 py-6 text-sm text-white/40">Loading index...</div>
              )}
              {!loading && results.length === 0 && (
                <div className="px-4 py-6 text-sm text-white/40">
                  {query.trim() ? "No results found." : "Start typing to search the docs."}
                </div>
              )}
              {!loading && results.length > 0 && (
                <ul className="divide-y divide-white/5">
                  {results.map((result) => (
                    <li key={result.slug}>
                      <Link
                        href={`/${result.slug}`}
                        className="block px-4 py-4 hover:bg-white/5 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/40 mb-2">
                          <span>{result.section}</span>
                          <span>Docs</span>
                        </div>
                        <div className="text-sm font-semibold text-white mb-1">{result.title}</div>
                        {result.description && (
                          <div className="text-xs text-white/50">{result.description}</div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
