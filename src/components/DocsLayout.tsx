"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { DocsSearch } from "@/components/DocsSearch";
import { DocsVersionNotice } from "@/components/DocsVersionNotice";

interface DocsLayoutProps {
  children: ReactNode;
  activeSlug?: string;
}

interface SidebarSection {
  label: string;
  items: Array<{
    label: string;
    slug: string;
  }>;
}

export function DocsLayout({ children, activeSlug }: DocsLayoutProps) {
  const [sidebarData, setSidebarData] = useState<SidebarSection[]>([]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [sidebarError, setSidebarError] = useState(false);

  useEffect(() => {
    fetch("/docs/sidebar.json")
      .then((res) => res.json())
      .then((data: SidebarSection[]) => {
        setSidebarData(data);
        setExpandedSections(new Set(data.map((section) => section.label)));
      })
      .catch((err) => {
        console.error("Failed to load sidebar:", err);
        setSidebarError(true);
      });
  }, []);

  const toggleSection = (label: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <>
      <SiteHeader />
      
      {/* Main docs container - uses container padding to align sidebar with header logo */}
      <div className="min-h-screen pt-20 bg-[#050505] text-white">
        <div className="container flex">
        
        {/* Left Sidebar - Cream/Sand background */}
        <aside className="w-64 flex-shrink-0 hidden lg:block border-r border-white/10 bg-black">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-6 pr-4">
            
            <div className="mb-6">
              <DocsSearch />
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {sidebarError && (
                <div className="text-sm text-white/60">
                  <p className="mb-3">Sidebar unavailable.</p>
                  <div className="flex flex-col gap-2">
                    <Link href="/docs" className="text-white/80 hover:text-white">Docs Home</Link>
                    <Link href="/install" className="text-white/80 hover:text-white">Install</Link>
                    <Link href="/contact" className="text-white/80 hover:text-white">Contact</Link>
                  </div>
                </div>
              )}
              {!sidebarError && sidebarData.map((section) => (
                <div key={section.label} className="mb-4">
                  {/* Section header - collapsible */}
                  <button
                    onClick={() => toggleSection(section.label)}
                    className="flex items-center justify-between w-full py-2 text-sm font-bold text-[var(--color-brand-red)] hover:text-red-400"
                  >
                    <span>{section.label}</span>
                    {expandedSections.has(section.label) ? (
                      <ChevronDown size={14} className="text-white/40" />
                    ) : (
                      <ChevronRight size={14} className="text-white/40" />
                    )}
                  </button>
                  
                  {/* Section items */}
                  {expandedSections.has(section.label) && (
                    <ul className="ml-2 space-y-0.5 border-l border-neutral-200">
                      {section.items.map((item) => {
                        const isActive = activeSlug === item.slug.replace('docs/', '');
                        return (
                          <li key={item.slug}>
                            <Link
                              href={`/${item.slug}`}
                              className={`block pl-4 py-1.5 text-xs transition-colors border-l-2 -ml-px ${
                                isActive
                                  ? "text-[var(--color-brand-red)] border-[var(--color-brand-red)] font-medium bg-red-500/10"
                                  : "text-white/60 border-transparent hover:text-white hover:border-white/40"
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content - White background */}
        <main className="flex-1 bg-black">
          <div className="max-w-4xl px-12 py-12">
            <div className="lg:hidden mb-6">
              <DocsSearch />
            </div>
            <DocsVersionNotice />
            <article className="docs-content">
              {children}
            </article>
          </div>
        </main>
      </div>
      </div>
    </>
  );
}
