import Link from "next/link";
import { CheckCircle, Headphones, Sparkles, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const wins = [
  {
    icon: Wrench,
    title: "Fix common tech issues",
    description: "Diagnose Wi-Fi drops, printer problems, and slow startups without digging through settings.",
  },
  {
    icon: Sparkles,
    title: "Clean and speed up",
    description: "Remove junk files, free disk space, and keep your machine healthy with guided approvals.",
  },
  {
    icon: Headphones,
    title: "Voice-first assistance",
    description: "Speak your request, watch the steps, and approve only the actions you want.",
  },
];

const checklist = [
  "Install TerminaI and run your first voice command.",
  "Approve a safe clean-up action.",
  "Save your first reusable routine.",
];

export default function EverydayPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Everyday Users</p>
              <h1 className="mb-4">Everyday help, without terminal stress.</h1>
              <p className="text-lg opacity-70 mb-8">
                TerminaI listens, explains the plan, and waits for your approval. No guesswork. No risky commands.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/start#everyday" className="btn btn-primary text-sm px-6 py-3">
                  Start the 10-minute guide
                </Link>
                <Link href="/install" className="btn btn-outline text-sm px-6 py-3">
                  Install TerminaI
                </Link>
                <Link href="/safety" className="btn btn-outline text-sm px-6 py-3">
                  Safety Ladder
                </Link>
              </div>
              <p className="text-sm opacity-60">
                You approve every change. The AI never runs destructive commands without permission.
              </p>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-8">What you can ask right away</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wins.map((win) => {
                const Icon = win.icon;
                return (
                  <div key={win.title} className="card">
                    <Icon size={28} className="text-[var(--color-brand-red)] mb-4" />
                    <h3 className="text-lg font-bold mb-2">{win.title}</h3>
                    <p className="text-sm opacity-70">{win.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-6">First success checklist</h2>
            <div className="space-y-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckCircle size={18} className="text-emerald-400 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
