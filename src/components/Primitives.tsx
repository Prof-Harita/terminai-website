"use client";

import { motion } from "framer-motion";
import { Network, Database, Scale, TerminalSquare } from "lucide-react";

const primitives = [
  {
    icon: Network,
    title: "A2A Protocol",
    description: "Standardized JSON-RPC for agents to talk to agents. Task delegation, tool handoff, and streaming.",
    lines: ["POST /rpc/v1/call", "{ method: 'delegate_task', params: {...} }"],
  },
  {
    icon: Database,
    title: "MCP Host",
    description: "Plug in any Model Context Protocol server. GitHub, Linear, Postage, Filesystem—no hardcoding.",
    lines: ["mcp_connect('github')", "tools: ['create_issue', 'pr_review']"],
  },
  {
    icon: Scale,
    title: "Policy Engine",
    description: "The Governance Layer. Define what requires 'y/n', what requires a PIN, and what is auto-approved.",
    lines: ["policy: { rm_rf: 'critical', ls: 'allow' }", "Approval required for: sudo"],
  },
  {
    icon: TerminalSquare,
    title: "True PTY Bridge",
    description: "Not a subprocess wrapper. A real pseudo-terminal integration that respects TTY size, colors, and signals.",
    lines: ["ioctl(TIOCSWINSZ)", "raw_mode: enabled"],
  },
];

export function Primitives() {
  return (
    <section className="py-24 bg-black/50">
      <div className="container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core Primitives</h2>
          <p className="text-xl opacity-60 max-w-2xl mx-auto">
            The building blocks of governed autonomy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {primitives.map((prim, index) => {
            const Icon = prim.icon;
            return (
              <motion.div
                key={prim.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl border border-white/10 bg-white/[0.02]"
              >
                 <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-red border border-white/10">
                        <Icon size={32} />
                    </div>
                 </div>
                 <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{prim.title}</h3>
                    <p className="text-sm opacity-70 mb-6 leading-relaxed">
                        {prim.description}
                    </p>
                    <div className="font-mono text-xs bg-black/50 p-4 rounded-lg border border-white/10 text-emerald-400">
                        {prim.lines.map((line, i) => (
                            <div key={i} className="mb-1 last:mb-0 opacity-80">{line}</div>
                        ))}
                    </div>
                 </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
