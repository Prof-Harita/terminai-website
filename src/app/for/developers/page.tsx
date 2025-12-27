import Link from "next/link";
import { CheckCircle, Code, GitPullRequest, Play } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const workflows = [
  {
    icon: GitPullRequest,
    title: "Review and refactor",
    description: "Summarize diffs, spot regressions, and draft fixes without leaving the terminal.",
  },
  {
    icon: Code,
    title: "Automate local setup",
    description: "Bootstrap environments, install dependencies, and keep configs in sync.",
  },
  {
    icon: Play,
    title: "Test and deploy",
    description: "Run test suites, watch outputs, and ship builds with approvals.",
  },
];

const checklist = [
  "Install TerminaI and connect a repo.",
  "Ask for a PR review summary.",
  "Generate a repeatable test command.",
];

export default function DevelopersPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Developers</p>
              <h1 className="mb-4">Ship faster with a governed terminal operator.</h1>
              <p className="text-lg opacity-70 mb-8">
                TerminaI runs real commands in your shell, shows you the plan, and waits for approval.
                It is automation you can trust.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/start#developers" className="btn btn-primary text-sm px-6 py-3">
                  Start the developer guide
                </Link>
                <Link href="/docs" className="btn btn-outline text-sm px-6 py-3">
                  Developer Docs
                </Link>
                <Link href="/recipes" className="btn btn-outline text-sm px-6 py-3">
                  Prompt Recipes
                </Link>
              </div>
              <p className="text-sm opacity-60">
                Bring your own model, keep data local, and integrate with MCP tools when you need them.
              </p>
            </div>
          </div>
        </section>

        <section className="section border-t border-white/5">
          <div className="container">
            <h2 className="mb-8">What developers ship with TerminaI</h2>
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
