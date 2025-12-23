"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Scroll, Plus } from "lucide-react";

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

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
             <div className="card">
               <Scroll className="text-brand-red mb-4" size={32} />
               <h3 className="text-xl font-bold mb-2">Laravel Deployer</h3>
               <p className="opacity-70 text-sm mb-4">
                 A set of prompts and safe-listed commands for deploying Laravel apps to Forge.
               </p>
               <div className="text-xs opacity-50">By @taylor</div>
             </div>
             
             <div className="card">
               <Scroll className="text-brand-red mb-4" size={32} />
               <h3 className="text-xl font-bold mb-2">K8sDebugger</h3>
               <p className="opacity-70 text-sm mb-4">
                 Read-only kubectl access prompts for analyzing crash loops.
               </p>
               <div className="text-xs opacity-50">By @kelsey</div>
             </div>
           </div>

           <div className="text-center p-12 bg-white/5 rounded-2xl border border-dashed border-white/20">
             <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
               <Plus /> Contribute a Recipe
             </h2>
             <p className="opacity-70 mb-6">
               Recipes are just TOML files. PRs open.
             </p>
             <button className="btn btn-outline">Read Recipe Spec</button>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
