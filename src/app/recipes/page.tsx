"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Scroll, Plus } from "lucide-react";
import Link from "next/link";

export default function RecipesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <h1 className="text-5xl font-bold mb-6">Recipes</h1>
             <p className="text-xl opacity-70">
               Community-contributed prompt packs and Policy definitions.
             </p>
           </div>

           <div className="text-center p-12 bg-white/5 rounded-2xl border border-dashed border-white/20">
             <Scroll className="mx-auto mb-6 text-brand-red" size={48} />
             <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
               <Plus size={20} /> Contribute a Recipe
             </h2>
             <p className="opacity-70 mb-6 max-w-lg mx-auto">
               Recipes are TOML files that define prompts and policy rules. 
               We&apos;re building out the spec—contribute yours as a PR.
             </p>
             <Link href="/contribute" className="btn btn-primary">
               View Contributing Guide
             </Link>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
