import Link from "next/link";
import { CheckCircle, ClipboardCheck, Cloud, Lock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const outcomes = [
  {
    icon: Lock,
    title: "Governed autonomy",
    description: "Approval ladders, PIN gates, and auditable command history for every action.",
  },
  {
    icon: Cloud,
    title: "Private deployment",
    description: "Run inside your VPC, bring your own models, and keep data within your trust boundary.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit-ready operations",
    description: "Capture who approved what, when, and why across every system operator session.",
  },
];

const checklist = [
  "Schedule a pilot scope call.",
  "Review the safety ladder and policy schema.",
  "Plan a 2-week proof-of-value deployment.",
];

export default function EnterprisePersonaPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Enterprise</p>
              <h1 className="mb-4">Governed autonomy for fleets, not just laptops.</h1>
              <p className="text-lg opacity-70 mb-8">
                TerminaI brings a policy-enforced system operator to your organization with audit trails,
                zero-trust approvals, and deploy-anywhere flexibility.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="mailto:enterprise@terminai.org"
                  className="btn btn-primary text-sm px-6 py-3"
                >
                  Request a pilot
                </a>
                <Link href="/enterprise" className="btn btn-outline text-sm px-6 py-3">
                  Enterprise Overview
                </Link>
                <Link href="/safety" className="btn btn-outline text-sm px-6 py-3">
                  Safety Model
                </Link>
              </div>
              <p className="text-sm opacity-60">
                The core is open source. Services focus on deployment, onboarding, and policy design.
              </p>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-8">Outcomes your security team can trust</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outcomes.map((outcome) => {
                const Icon = outcome.icon;
                return (
                  <div key={outcome.title} className="card">
                    <Icon size={28} className="text-[var(--color-brand-red)] mb-4" />
                    <h3 className="text-lg font-bold mb-2">{outcome.title}</h3>
                    <p className="text-sm opacity-70">{outcome.description}</p>
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
