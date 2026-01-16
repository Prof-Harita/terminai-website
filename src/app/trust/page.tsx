import { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  FileText,
  KeyRound,
  Lock,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trust Center | TerminaI",
  description: "Security, safety, and governance for the TerminaI system operator.",
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "Governed Autonomy",
    description: "Every action follows an approval ladder with human-in-the-loop control.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Trails",
    description: "Every approval and command is recorded for review and compliance.",
  },
  {
    icon: Lock,
    title: "Sovereign by Default",
    description: "Local-first execution keeps data within your trust boundary.",
  },
  {
    icon: KeyRound,
    title: "Bring Your Own Model",
    description: "Route prompts to your own providers, keys, or on-prem models.",
  },
];

const ladder = [
  {
    level: "Level A",
    label: "Safe & Reversible",
    example: "List files, check status, summarize logs",
  },
  {
    level: "Level B",
    label: "Sensitive Changes",
    example: "Install packages, modify configs, restart services",
  },
  {
    level: "Level C",
    label: "Destructive or High Risk",
    example: "Delete data, change firewall rules, rotate credentials",
  },
];

const boundaries = [
  "Local sessions stay on-device unless you explicitly enable remote access.",
  "Remote viewing uses a separate relay with end-to-end encryption.",
  "Every action can be traced back to the approval decision.",
];

const securityPosture = [
  {
    icon: KeyRound,
    title: "Bring your own keys",
    description: "Model keys stay with you and can be rotated without server dependency.",
  },
  {
    icon: FileText,
    title: "Audit-ready logs",
    description: "Approvals and commands are captured for review and export.",
  },
  {
    icon: Lock,
    title: "Retention control",
    description: "You decide how long logs persist and when they are purged.",
  },
];

export default function TrustPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Trust Center</p>
              <h1 className="mb-4">Security that matches the power of a system operator.</h1>
              <p className="text-lg opacity-70 mb-8">
                TerminaI is designed for governed autonomy. Every risky action pauses for approval,
                every command is logged, and you decide what happens next.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/safety" className="btn btn-primary text-sm px-6 py-3">
                  Safety Ladder
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="card">
                    <Icon size={28} className="text-[var(--color-brand-red)] mb-4" />
                    <h2 className="text-lg font-bold mb-2">{pillar.title}</h2>
                    <p className="text-sm opacity-70">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-4">
              <Timer size={14} />
              Approval Ladder
            </div>
            <h2 className="mb-6">Three tiers of governed action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ladder.map((step) => (
                <div key={step.level} className="card">
                  <p className="text-sm uppercase tracking-widest text-white/40 mb-2">{step.level}</p>
                  <h3 className="text-lg font-bold mb-2">{step.label}</h3>
                  <p className="text-sm opacity-70">{step.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-6">Data boundaries and transparency</h2>
            <div className="space-y-3 text-sm text-white/70">
              {boundaries.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-400 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="mb-6">Security posture</h2>
                <div className="space-y-4">
                  {securityPosture.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="card">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-2">
                          <Icon size={14} />
                          {item.title}
                        </div>
                        <p className="text-sm opacity-70">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="card">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-3">Approval ladder</div>
                {/* TODO: Approval Screenshot */}
                <Image
                  src="/illustrations/trust-ladder.svg"
                  alt="Approval ladder diagram"
                  width={640}
                  height={320}
                  className="w-full h-auto border border-white/10 rounded-2xl bg-black"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
