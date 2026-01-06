"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { 
  Folder, BarChart, PenTool, Calendar, Shield, Server,
  GraduationCap, GitBranch, Mic, Settings, Palette, Gamepad2, FlaskConical
} from "lucide-react";

const useCaseBuckets = [
  {
    icon: Folder,
    title: "File & System Operations",
    examples: [
      "Semantic file search across your machine",
      "Intelligent cleanup of stale files and directories",
      "Natural language shell commands",
      "Batch rename with smart pattern detection",
      "Organize downloads into structured folders"
    ]
  },
  {
    icon: BarChart,
    title: "Data Analysis & Reporting",
    examples: [
      "Automated CSV cleaning and statistics",
      "Text-to-SQL for natural language queries",
      "Generate PDF reports from raw data",
      "Visual data extraction from spreadsheets"
    ]
  },
  {
    icon: PenTool,
    title: "Content Creation & Writing",
    examples: [
      "Automated release notes from git commits",
      "Technical blog posts from feature branches",
      "Intelligent GitHub issue creation",
      "Context-aware email drafting",
      "Documentation generation"
    ]
  },
  {
    icon: Shield,
    title: "Maintenance",
    examples: [
      "CVE scanning in dependencies",
      "Pre-commit secret detection",
      "Self-healing CI/CD pipelines"
    ]
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    examples: [
      "Incident triage and root cause analysis",
      "Kubernetes manifest generation",
      "Terraform from natural language",
      "Observability queries"
    ]
  },
  {
    icon: GitBranch,
    title: "Workflow Integration",
    examples: [
      "Tool pipelining and chaining",
      "Cross-platform automation"
    ]
  }
];

export default function UseCasesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Example <span className="text-[var(--color-brand-red)]">Use Cases</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto mb-4">
              From organizing your files to running scientific experiments
            </p>
            <p className="text-lg opacity-50 max-w-2xl mx-auto">
              terminaI transforms how you interact with your computer. 
              See real examples of what developers are building every day.
            </p>
          </div>
        </section>

        {/* Use Case Buckets */}
        {useCaseBuckets.map((bucket, bucketIndex) => {
          const Icon = bucket.icon;
          const isAlt = bucketIndex % 2 === 1;
          
          return (
            <section 
              key={bucket.title}
              id={bucket.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              className={`py-16 scroll-mt-24 ${isAlt ? 'bg-[#2a2520]' : 'bg-[#1f1b17]'}`}
            >
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-red)]/10 border border-[var(--color-brand-red)]/20 flex items-center justify-center text-[var(--color-brand-red)]">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{bucket.title}</h2>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {bucket.examples.map((example, i) => (
                    <motion.div
                      key={example}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="group p-6 rounded-xl bg-[#3d352d] border border-[#4d433a] shadow-md hover:border-[var(--color-brand-red)]/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] transition-all duration-300 cursor-default"
                    >
                      <p className="text-lg font-medium text-white/90 group-hover:text-white transition-colors leading-relaxed">
                        {example}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to try these examples yourself?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/install" className="btn btn-primary">
                Install terminaI
              </Link>
              <Link href="/docs" className="btn btn-outline">
                Read the Docs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
