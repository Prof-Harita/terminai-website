"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function RoadmapPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl text-center">
           <h1 className="text-4xl font-bold mb-8">Roadmap</h1>
           <p className="text-xl opacity-70 mb-8">
             The path to 1.0.
           </p>
           <a href="https://github.com/Prof-Harita/termAI" className="btn btn-outline">
             View GitHub Projects
           </a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
