import Link from "next/link";
import { ReactNode } from "react";
import { DocSection } from "@/types";

interface DocsLayoutProps {
  children: ReactNode;
  sections: DocSection[];
  activeSlug?: string;
}

export function DocsLayout({ children, sections, activeSlug }: DocsLayoutProps) {
  return (
    <div className="container pt-24 pb-24 min-h-screen flex gap-12">
      <aside className="w-64 flex-shrink-0 hidden lg:block">
        <div className="fixed top-24 w-64 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4">
           {sections.map((section) => (
            <div key={section.title} className="mb-8">
              <h4 className="font-bold text-sm mb-4 opacity-100">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const isActive = activeSlug === item.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        className={`block text-sm transition-colors ${
                          isActive
                            ? "text-brand-red font-medium opacity-100"
                            : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
      
      <main className="flex-1 max-w-3xl min-w-0">
        <div className="prose prose-invert prose-headings:font-bold prose-a:text-brand-red hover:prose-a:text-brand-red/80 max-w-none">
          {children}
        </div>
      </main>
    </div>
  );
}
