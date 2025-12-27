import { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contribute an Update | TerminaI",
  description: "How to publish release notes and monthly updates for TerminaI.",
};

const template = `---
title: "Update: <title>"
date: "YYYY-MM-DD"
summary: "One sentence summary of the update."
tags:
  - release
  - docs
---

# Update Title

## What shipped
- Item 1
- Item 2

## Why it matters
- Outcome 1
- Outcome 2

## Next up
- Planned item
`;

export default function UpdatesContributePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Updates</p>
            <h1 className="mb-4">Contribute an update.</h1>
            <p className="text-lg opacity-70 mb-8">
              Updates live in <code>src/content/updates</code>. Add a new MDX file, follow the template, and keep the
              summary short and concrete.
            </p>

            <div className="card mb-8">
              <h2 className="text-lg font-bold mb-3">Workflow</h2>
              <ol className="list-decimal list-outside ml-5 space-y-2 text-sm text-white/70">
                <li>Copy the template below into a new file named <code>YYYY-MM-title.mdx</code>.</li>
                <li>Write a one-sentence summary and 2-4 bullet points per section.</li>
                <li>Run <code>npm run updates:validate</code> before committing.</li>
              </ol>
            </div>

            <div className="card">
              <h2 className="text-lg font-bold mb-3">Template</h2>
              <pre className="bg-black text-white/90 border border-white/10 rounded-lg p-4 overflow-x-auto text-sm font-mono">
                <code>{template}</code>
              </pre>
            </div>

            <div className="mt-10">
              <Link href="/updates" className="text-sm text-[var(--color-brand-red)]">
                Back to updates
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
