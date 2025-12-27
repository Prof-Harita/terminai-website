import Link from "next/link";
import { CheckCircle, Shield, Terminal, Workflow } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const workflows = [
  {
    icon: Terminal,
    title: "Incident response",
    description: "Summarize logs, run diagnostics, and propose fixes with explicit approval gates.",
  },
  {
    icon: Workflow,
    title: "Routine maintenance",
    description: "Patch fleets, rotate secrets, and clean disk usage with repeatable runbooks.",
  },
  {
    icon: Shield,
    title: "Safety-first automation",
    description: "Every destructive action requires a human-approved step and full audit trail.",
  },
];

const checklist = [
  "Connect a staging host and run a health check.",
  "Approve a non-destructive cleanup task.",
  "Save the runbook as a shared recipe.",
];

export default function OperatorsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Operators & Sysadmins</p>
              <h1 className="mb-4">Operate faster without losing control.</h1>
              <p className="text-lg opacity-70 mb-8">
                TerminaI is a system operator that follows policy ladders, captures audits, and keeps humans in the loop.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/start#operators" className="btn btn-primary text-sm px-6 py-3">
                  Start the operator guide
                </Link>
                <Link href="/docs" className="btn btn-outline text-sm px-6 py-3">
                  Operator Docs
                </Link>
                <Link href="/safety" className="btn btn-outline text-sm px-6 py-3">
                  Safety Model
                </Link>
              </div>
              <p className="text-sm opacity-60">
                Use the same approval ladder across desktops, terminals, and remote sessions.
              </p>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-8">High-leverage workflows</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workflows.map((flow) => {
                const Icon = flow.icon;
                return (
                  <div key={flow.title} className="card">
                    <Icon size={28} className="text-[var(--color-brand-red)] mb-4" />
                    <h3 className="text-lg font-bold mb-2">{flow.title}</h3>
                    <p className="text-sm opacity-70">{flow.description}</p>
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
