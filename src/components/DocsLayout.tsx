"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { Search, Copy, Check } from "lucide-react";

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
  const [tocItems, setTocItems] = useState<Array<{id: string, text: string, level: number}>>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    // Load sidebar data
    fetch('/docs/sidebar.json')
      .then(res => res.json())
      .then(data => setSidebarData(data))
      .catch(err => console.error('Failed to load sidebar:', err));

    // Generate table of contents from headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocData = Array.from(headings).map(heading => ({
      id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '',
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1))
    })).filter(item => item.text);
    setTocItems(tocData);

    // Add copy functionality to code blocks
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block, index) => {
      const pre = block.parentElement;
      if (pre && !pre.querySelector('.copy-button')) {
        const button = document.createElement('button');
        button.className = 'copy-button absolute top-2 right-2 p-1 rounded bg-black/50 hover:bg-black/70 transition-colors';
        button.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
        button.onclick = () => copyToClipboard(block.textContent || '', `code-${index}`);
        pre.style.position = 'relative';
        pre.appendChild(button);
      }
    });

    // Add Cmd+K search shortcut
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

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const filteredSidebar = sidebarData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <>
      {/* Search Modal */}
      {searchQuery && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-20">
          <div className="bg-black border border-white/20 rounded-lg p-4 w-full max-w-2xl mx-4">
            <input
              id="docs-search"
              type="text"
              placeholder="Search documentation... (Cmd+K)"
              className="w-full bg-transparent border-none outline-none text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setSearchQuery('');
              }}
            />
          </div>
        </div>
      )}

      <div className="container pt-24 pb-24 min-h-screen flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 hidden lg:block">
          <div className="fixed top-24 w-64 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  id="docs-search"
                  type="text"
                  placeholder="Search docs... (⌘K)"
                  className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 pl-9 text-sm focus:outline-none focus:border-brand-red"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Navigation */}
            {filteredSidebar.map((section) => (
              <div key={section.label} className="mb-8">
                <h4 className="font-bold text-sm mb-4 opacity-100">{section.label}</h4>
                <ul className="space-y-2">
                  {section.items.map((item) => {
                    const isActive = activeSlug === item.slug.replace('docs/', '');
                    return (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}`}
                          className={`block text-sm transition-colors ${
                            isActive
                              ? "text-brand-red font-medium opacity-100"
                              : "opacity-60 hover:opacity-100"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl min-w-0">
          <div className="prose prose-invert prose-headings:font-bold prose-a:text-brand-red hover:prose-a:text-brand-red/80 max-w-none">
            {children}
          </div>

          {/* Prev/Next Navigation */}
          <div className="mt-12 pt-8 border-t border-white/10 flex justify-between">
            <div>
              {/* Prev link would go here */}
            </div>
            <div>
              {/* Next link would go here */}
            </div>
          </div>
        </main>

        {/* Table of Contents */}
        <aside className="w-64 flex-shrink-0 hidden xl:block">
          <div className="fixed top-24 w-64 max-h-[calc(100vh-6rem)] overflow-y-auto pl-4">
            <h4 className="font-bold text-sm mb-4 opacity-100">On this page</h4>
            <nav>
              <ul className="space-y-1">
                {tocItems.map((item) => (
                  <li key={item.id} style={{ paddingLeft: `${(item.level - 1) * 12}px` }}>
                    <a
                      href={`#${item.id}`}
                      className="block text-sm opacity-60 hover:opacity-100 transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}
