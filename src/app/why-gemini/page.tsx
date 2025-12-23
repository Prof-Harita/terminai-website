"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function WhyGeminiPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl">
           <h1 className="text-4xl font-bold mb-8">Why 2 Million Tokens?</h1>
           <p className="text-xl opacity-70 mb-8">
             Context is King.
           </p>
           <p className="opacity-70 mb-4">
             TerminaI leverages Gemini 1.5 Pro&apos;s massive context window to understand your entire project structure, 
             git history, and documentation in a single prompt. This allows for &quot;Deep System Awareness&quot; that smaller context models cannot match.
           </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
