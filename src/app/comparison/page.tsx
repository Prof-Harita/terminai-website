import { Metadata } from "next";
import Link from "next/link";
import { Layers, Scale, TerminalSquare } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
export const metadata: Metadata = {
  title: "Positioning | TerminaI",
  description: "How TerminaI differs from chatbots, terminals, and AI IDEs.",
};

const differentiators = [
  {
    title: "System operator, not a chatbot",
    description: "Runs real terminal commands and controls apps with explicit approvals.",
  },
  {
    title: "Governed autonomy",
    description: "Tiered approval ladder with PIN gates for high-risk actions.",
  },
  {
    title: "Voice + remote view",
    description: "Operate hands-free and observe sessions from any device.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Positioning</p>
              <h1 className="mb-4">Why TerminaI is a new category.</h1>
              <p className="text-lg opacity-70 mb-8">
                Traditional chatbots respond with text. TerminaI operates your system with a governed safety ladder,
                visible approvals, and full auditability.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/trust" className="btn btn-primary text-sm px-6 py-3">
                  Trust Center
                </Link>
                <Link href="/use-cases" className="btn btn-outline text-sm px-6 py-3">
                  Use Cases
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {differentiators.map((item) => (
                <div key={item.title} className="card">
                  <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                  <p className="text-sm opacity-70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="card">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-2">
                  <TerminalSquare size={14} />
                  System Operator
                </div>
                <h2 className="text-xl font-bold mb-3">What is a system operator?</h2>
                <p className="text-sm opacity-70">
                  A system operator is an agent that can safely execute tasks on your machine, not just suggest them.
                  It uses real terminals, listens for approvals, and produces auditable actions.
                </p>
              </div>
              <div className="card">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-2">
                  <Layers size={14} />
                  Governance Layers
                </div>
                <h2 className="text-xl font-bold mb-3">Built-in guardrails</h2>
                <p className="text-sm opacity-70">
                  TerminaI separates intent, planning, and execution with explicit checkpoints so you can approve the
                  right actions at the right time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
