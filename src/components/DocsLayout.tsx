"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch('/docs/sidebar.json')
      .then(res => res.json())
      .then((data: SidebarSection[]) => {
        setSidebarData(data);
        // Auto-expand all sections initially
        setExpandedSections(new Set(data.map(s => s.label)));
      })
      .catch(err => console.error('Failed to load sidebar:', err));

    // Cmd+K search shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('#docs-search') as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
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

  const filteredSidebar = sidebarData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <>
      <SiteHeader />
      
      {/* Main docs container - uses container padding to align sidebar with header logo */}
      <div className="min-h-screen pt-20" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="container flex">
        
        {/* Left Sidebar - Cream/Sand background */}
        <aside className="w-64 flex-shrink-0 hidden lg:block border-r border-neutral-200" style={{ backgroundColor: '#FDFCF8' }}>
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-6 pr-4">
            
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                <input
                  id="docs-search"
                  type="text"
                  placeholder="Search docs... (⌘K)"
                  className="w-full bg-white border border-neutral-200 rounded-md px-3 py-2 pl-9 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {filteredSidebar.map((section) => (
                <div key={section.label} className="mb-4">
                  {/* Section header - collapsible */}
                  <button
                    onClick={() => toggleSection(section.label)}
                    className="flex items-center justify-between w-full py-2 text-sm font-bold text-red-600 hover:text-red-700"
                  >
                    <span>{section.label}</span>
                    {expandedSections.has(section.label) ? (
                      <ChevronDown size={14} className="text-neutral-400" />
                    ) : (
                      <ChevronRight size={14} className="text-neutral-400" />
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
                                  ? "text-red-600 border-red-600 font-medium bg-red-50"
                                  : "text-neutral-600 border-transparent hover:text-neutral-900 hover:border-neutral-300"
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
        <main className="flex-1 bg-white">
          <div className="max-w-4xl px-12 py-12">
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
