import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Terminal } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Case Studies | TerminaI",
  description: "Real-world scenarios where TerminaI delivers governed autonomy.",
};

const caseStudies = [
  {
    title: "Laptop Rescue for a Non-Technical User",
    environment: "macOS, personal laptop",
    approvals: "Level A approvals only",
    outcome: "Freed 12GB and removed startup blockers in 6 minutes.",
  },
  {
    title: "Incident Triage for a Production API",
    environment: "Linux, Kubernetes cluster",
    approvals: "Level B approvals for restarts",
    outcome: "Summarized logs, identified regression, and staged rollback.",
  },
  {
    title: "Secure Patch Window for 40 Hosts",
    environment: "Ubuntu fleet, bastion access",
    approvals: "Level B with audit logs",
    outcome: "Patched hosts with full approval trail and reporting.",
  },
  {
    title: "Developer Onboarding Bootstrap",
    environment: "Node + Python mono-repo",
    approvals: "Level A approvals",
    outcome: "Automated setup and test run for new engineers.",
  },
  {
    title: "Compliance Audit Snapshot",
    environment: "Security compliance team",
    approvals: "Level C for sensitive exports",
    outcome: "Generated audit summary and flagged anomalies.",
  },
  {
    title: "Remote Build Monitoring",
    environment: "CI runner + mobile viewer",
    approvals: "Level A approvals",
    outcome: "Delivered live updates without VPN access.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Case Studies</p>
              <h1 className="mb-4">Proof of governed autonomy in action.</h1>
              <p className="text-lg opacity-70 mb-8">
                Each story highlights the environment, approvals, and outcomes achieved with TerminaI.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/start" className="btn btn-primary text-sm px-6 py-3">
                  Start Here
                </Link>
                <Link href="/trust" className="btn btn-outline text-sm px-6 py-3">
                  Trust Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study) => (
                <div key={study.title} className="card">
                  <h2 className="text-xl font-bold mb-3">{study.title}</h2>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-start gap-2">
                      <Terminal size={16} className="text-[var(--color-brand-red)] mt-0.5" />
                      <span>{study.environment}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ShieldCheck size={16} className="text-[var(--color-brand-red)] mt-0.5" />
                      <span>{study.approvals}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-emerald-400 mt-0.5" />
                      <span>{study.outcome}</span>
                    </div>
                  </div>
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
