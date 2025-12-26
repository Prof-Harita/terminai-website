"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mic, 
  Globe, 
  Monitor,
  Zap,
  Brain,
  Plug, 
  ShieldCheck, 
  Layers,
  DollarSign,
  Users,
  FileCode,
  GitBranch,
  Workflow,
  WifiOff,
  ScrollText,
  Eye
} from "lucide-react";

const features = [
  // Row 1
  {
    icon: Mic,
    title: "Voice Control",
    description: "Offline STT/TTS—your voice commands never leave your device.",
    link: "/docs/voice",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Globe,
    title: "Remote Viewing",
    description: "Cloud relay to watch and control from phone, iPad, or anywhere.",
    link: "/extensibility#a2a",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Monitor,
    title: "Control Screens",
    description: "Operate browsers, GUIs, and legacy apps via desktop automation.",
    link: "/docs/gui-automation",
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
  {
    icon: Zap,
    title: "Automate Anything",
    description: "Chain voice, shell, and GUI into powerful one-shot workflows.",
    link: "/recipes",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  // Row 2
  {
    icon: Brain,
    title: "SOTA Cognition",
    description: "Best-in-class agentic harness for robust problem solving.",
    link: "/intelligence",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: DollarSign,
    title: "Always Free",
    description: "Apache 2.0. Free forever, with Gemini's generous free tier.",
    link: "/free",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "By the people, for the people. No corporate strings attached.",
    link: "/roadmap",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: FileCode,
    title: "Extensible with TOMLs",
    description: "Configure policies, tools, and workflows via simple TOML files.",
    link: "/docs/configuration",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  // Row 3
  {
    icon: Plug,
    title: "MCP Ecosystem",
    description: "Connect to GitHub, Slack, databases, and custom APIs.",
    link: "/extensibility#mcp",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Safety Ladder",
    description: "Three-tier approval. PIN verification for destructive commands.",
    link: "/safety",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Layers,
    title: "Multi-LLM",
    description: "Gemini, GPT, Claude, or local models. Use the right one for the task.",
    link: "/docs/models",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: GitBranch,
    title: "A2A Protocol",
    description: "Agent-to-agent delegation for multi-machine orchestration.",
    link: "/protocols/a2a",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  // Row 4
  {
    icon: Workflow,
    title: "Recipes Library",
    description: "Community-curated task templates for common workflows.",
    link: "/recipes",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    icon: WifiOff,
    title: "Offline Capable",
    description: "Local models and voice let you work without internet.",
    link: "/docs/local-models",
    gradient: "from-slate-500/20 to-gray-500/20",
  },
  {
    icon: ScrollText,
    title: "Audit Trail",
    description: "Full logging of AI actions for trust and compliance.",
    link: "/safety#audit-trail",
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Eye,
    title: "Local First",
    description: "Your data never leaves your machine unless you choose to.",
    link: "/manifesto",
    gradient: "from-red-500/20 to-rose-500/20",
  },
];

export function BentoFeatures() {
  return (
    <section className="section border-t border-white/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What You Can Do</h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            Control your computer like never before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Link href={feature.link} className="block p-6 h-full">
                  {/* Background gradient on hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[var(--color-brand-red)] group-hover:bg-white/10 transition-colors">
                      <Icon size={20} />
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm opacity-60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
