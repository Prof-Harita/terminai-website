import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Calendar, Users, GitBranch, Zap, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap | terminaI",
  description: "Future plans and development roadmap for terminaI - the sovereign shell.",
};

const roadmapItems = [
  {
    quarter: "Q1 2025",
    title: "Voice & Multimodal",
    status: "in-progress",
    items: [
      "Offline STT (Whisper integration) - COMPLETED",
      "Advanced voice commands and barge-in",
      "Multimodal input (voice + text)",
      "Voice-guided tutorials"
    ],
    icon: Zap
  },
  {
    quarter: "Q2 2025",
    title: "Enterprise & Security",
    status: "planned",
    items: [
      "Enterprise audit logging (SIEM integration)",
      "BYOM (Bring Your Own Model) support",
      "Advanced permission controls",
      "Compliance certifications"
    ],
    icon: Shield
  },
  {
    quarter: "Q3 2025",
    title: "Agent Ecosystem",
    status: "planned",
    items: [
      "Agent-to-Agent marketplace",
      "Pre-built automation templates",
      "Third-party integrations",
      "Agent orchestration tools"
    ],
    icon: Users
  },
  {
    quarter: "Q4 2025",
    title: "Platform Expansion",
    status: "planned",
    items: [
      "Mobile companion apps",
      "Web-based terminal interface",
      "Multi-device synchronization",
      "Cross-platform deployment"
    ],
    icon: Globe
  }
];

const communityFeatures = [
  {
    title: "Community Voting",
    description: "Vote on upcoming features and influence the roadmap",
    link: "https://github.com/Prof-Harita/terminaI/discussions/categories/feature-requests",
    icon: Users
  },
  {
    title: "Contribute Code",
    description: "Help build the future of terminal AI",
    link: "/contribute",
    icon: GitBranch
  },
  {
    title: "Beta Testing",
    description: "Get early access to new features",
    link: "https://github.com/Prof-Harita/terminaI/releases",
    icon: Calendar
  }
];

export default function RoadmapPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="mb-6">
              The Future of{" "}
              <span className="text-[var(--color-brand-red)]">Terminal AI</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto mb-4">
              Our roadmap for building the most capable terminal operator
            </p>
            <p className="text-lg opacity-50 max-w-2xl mx-auto">
              Governed autonomy that scales from personal use to enterprise deployment
            </p>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="section pt-0">
          <div className="container">
            <div className="space-y-12">
              {roadmapItems.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <div key={index} className="relative">
                    {/* Timeline line */}
                    {index < roadmapItems.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-24 bg-gradient-to-b from-brand-red to-transparent"></div>
                    )}

                    <div className="flex gap-8">
                      {/* Quarter indicator */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                          phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          phase.status === 'in-progress' ? 'bg-brand-red/20 text-brand-red' :
                          'bg-white/10 text-white/50'
                        }`}>
                          <Icon size={24} />
                        </div>
                        <div className="text-sm font-medium mt-2 opacity-70">{phase.quarter}</div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-12">
                        <div className="flex items-center gap-3 mb-4">
                          <h2 className="text-2xl font-bold">{phase.title}</h2>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            phase.status === 'in-progress' ? 'bg-brand-red/20 text-brand-red' :
                            'bg-white/10 text-white/60'
                          }`}>
                            {phase.status === 'completed' ? 'Completed' :
                             phase.status === 'in-progress' ? 'In Progress' : 'Planned'}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-lg opacity-70">
                              <span className="text-brand-red mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-4">Shape the Future</h2>
            <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto">
              terminaI is built by and for its community. Help us decide what comes next.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <a
                    key={index}
                    href={feature.link}
                    target={feature.link.startsWith('http') ? '_blank' : undefined}
                    rel={feature.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <Icon size={32} className="text-brand-red mb-4 mx-auto" />
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm opacity-70 mb-4">{feature.description}</p>
                    <span className="text-sm text-brand-red group-hover:underline">Learn more →</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="text-center mb-8">Current Development Focus</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-brand-red/20 bg-brand-red/5">
                <h3 className="text-lg font-bold text-brand-red mb-4">🔥 Active Development</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Voice integration and barge-in controls</li>
                  <li>• Enhanced A2A protocol for remote operation</li>
                  <li>• MCP ecosystem expansion</li>
                  <li>• Enterprise security features</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-white/20 bg-white/5">
                <h3 className="text-lg font-bold mb-4">📋 Recently Completed</h3>
                <ul className="space-y-2 text-sm opacity-70">
                  <li>• Core safety approval system (A/B/C levels)</li>
                  <li>• Real-time system awareness</li>
                  <li>• PTY-based terminal execution</li>
                  <li>• Initial voice TTS support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Ready to help build the future?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contribute" className="btn btn-primary">
                Start Contributing
              </a>
              <a href="/contact" className="btn btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}