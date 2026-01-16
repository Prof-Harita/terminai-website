import Link from "next/link";
import { Terminal, Play, Zap } from "lucide-react";

export function FirstWin() {
  return (
    <section className="section border-t border-white/5 bg-white/[0.01]">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">
          Your First Win in 10 Minutes
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Terminal size={20} /> Install CLI
            </h3>
            <div className="code-block text-sm p-4 bg-black/40 rounded-lg border border-white/5">
              npm install -g @terminai/cli
            </div>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Play size={20} /> Run TerminaI
            </h3>
            <div className="code-block text-sm p-4 bg-black/40 rounded-lg border border-white/5">
              terminai
            </div>
            <p className="text-xs opacity-50 italic">
              (First run handles auth & discovery)
            </p>
          </div>

          <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Zap size={20} /> Solve a Problem
            </h3>
            <div className="code-block text-xs p-4 bg-black/40 rounded-lg border border-white/5 leading-relaxed">
              &quot;Find large folders and propose a cleanup plan.&quot;
            </div>
            <Link href="/recipes/disk-space-triage" className="text-xs text-[var(--color-brand-red)] hover:underline">
              See Recipe Details →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
