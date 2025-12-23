"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Laptop, Terminal } from "lucide-react";

export default function LaptopAssistantPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
           <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-4 rounded-full bg-pink-500/10 text-pink-500 mb-6">
               <Laptop size={48} />
             </div>
             <h1 className="text-5xl font-bold mb-6">The Android Assistant for your Desktop</h1>
             <p className="text-xl opacity-70">
               Why should your phone be smarter than your workstation?
             </p>
           </div>

           <div className="space-y-12">
             <section className="card">
               <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                 <Terminal className="text-brand-red" />
                 Context Check
               </h2>
               <p className="opacity-70 mb-4">
                 TerminaI knows your OS, your shell, your installed packages, and your active git branch.
               </p>
               <div className="code-block">
                 <code>$ terminai &quot;Why is my wifi dropping?&quot;</code>
                 <br />
                 <span className="text-green-400 opacity-80">{`> I see you're on Linux Mint. Let me check dmesg for iwlwifi errors.`}</span>
               </div>
             </section>

             <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card bg-white/5 border-transparent">
                  <h3 className="font-bold text-xl mb-2">Local Knowledge</h3>
                  <p className="opacity-60 text-sm">
                    It can read your `~/.ssh/config` (if you let it), your docker containers, and your messy `~/Downloads` folder.
                  </p>
                </div>
                <div className="card bg-white/5 border-transparent">
                  <h3 className="font-bold text-xl mb-2">Native Actions</h3>
                  <p className="opacity-60 text-sm">
                    It doesn&apos;t just suggest commands. It runs them in a real PTY, handling interactive prompts and signals correctly.
                  </p>
                </div>
             </section>
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
