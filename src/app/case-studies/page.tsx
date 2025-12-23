"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl text-center">
           <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
           <p className="text-xl opacity-70 mb-8">
             See how developers are using TerminaI to automate their workflows.
           </p>
           <div className="p-8 border border-dashed border-white/20 rounded-xl">
             <p className="opacity-50">Coming Soon. Are you building something cool? Let us know.</p>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
