"use client";

import { motion } from "framer-motion";
import { Terminal, Plug, Command, CornerDownRight } from "lucide-react";

// Persona colors matching Roo Code style
const personaColors = [
  "text-violet-500",
  "text-pink-500",
  "text-cyan-500",
  "text-emerald-500",
  "text-amber-500",
  "text-rose-500",
  "text-blue-500",
  "text-teal-500",
];

const avatarGradients = [
  "from-violet-500 to-purple-600",
  "from-pink-500 to-rose-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-green-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-red-600",
  "from-blue-500 to-indigo-600",
  "from-teal-500 to-cyan-600",
];

interface UseCase {
  task: string;
  delivery: "base" | "slash" | "mcp";
  x: number; // percentage from left
  y: number; // percentage from top
  zIndex: number;
  opacity?: number;
}

// Scattered positions with varying z-index for overlapping effect
const useCases: UseCase[] = [
  // Layer 1 - Background (lower opacity)
  { task: "Take Lisa's feedback and incorporate it into the landing page.", x: 5, y: 8, zIndex: 1, delivery: "mcp", opacity: 0.6 },
  { task: "What would be causing this bug?", x: 72, y: 5, zIndex: 1, delivery: "base", opacity: 0.5 },
  
  // Layer 2 - Mid layer
  { task: "Automate the regression suite for the checkout process.", x: 28, y: 12, zIndex: 2, delivery: "slash" },
  { task: "Copy what we did in PR #4253 and apply to this component.", x: 58, y: 8, zIndex: 2, delivery: "mcp" },
  
  // Layer 3 - Foreground
  { task: "Review this pull request for potential performance improvements.", x: 3, y: 28, zIndex: 3, delivery: "mcp" },
  { task: "How big of a change would it be to turn this from yes/no to 4 options?", x: 32, y: 25, zIndex: 3, delivery: "base" },
  { task: "Create a migration denormalizing total_cost and backfill the remainder.", x: 62, y: 22, zIndex: 3, delivery: "base" },
  
  // Layer 4 - More cards
  { task: "Refactor user_preferences to use named columns instead of a single JSON blob.", x: 8, y: 45, zIndex: 4, delivery: "slash" },
  { task: "Explain how useEffect dependencies work here.", x: 35, y: 42, zIndex: 4, delivery: "base" },
  { task: "Generate JSDoc comments for the auth utility functions.", x: 58, y: 40, zIndex: 4, delivery: "base" },
  
  // Layer 5 - Bottom row
  { task: "Implement the loading spinner animation in CSS.", x: 12, y: 62, zIndex: 5, delivery: "slash" },
  { task: "Write a Playwright test for the login flow failure case.", x: 38, y: 58, zIndex: 5, delivery: "mcp" },
  { task: "Do we use any of the libraries mentioned in the thread?", x: 60, y: 55, zIndex: 5, delivery: "mcp" },
  
  // Layer 6 - Bottom edge
  { task: "Understand why this build error only happens in prod and fix it.", x: 5, y: 78, zIndex: 6, delivery: "slash" },
  { task: "Update the Dockerfile to use Node 20 Alpine.", x: 42, y: 75, zIndex: 6, delivery: "mcp" },
  { task: "Break down this user profile feature into technical tasks, grouped by skill.", x: 68, y: 72, zIndex: 6, delivery: "base" },
];

const deliveryLabels: Record<string, { icon: typeof Terminal; label: string }> = {
  base: { icon: Terminal, label: "Base Agent" },
  slash: { icon: Command, label: "/slash command" },
  mcp: { icon: Plug, label: "/mcp" },
};

export function UseCaseShowcase() {
  return (
    <section className="py-24 bg-black/60 relative overflow-hidden" style={{ minHeight: "700px" }}>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Can You Use It For?
          </h2>
          <p className="text-xl opacity-60 max-w-3xl mx-auto">
            SREs, developers, researchers, admins—everyone moves faster with terminaI.
          </p>
        </motion.div>
      </div>

      {/* Floating Cards Container */}
      <div className="relative w-full" style={{ height: "600px" }}>
        {useCases.map((uc, index) => {
          const colorIndex = index % personaColors.length;
          const personaColor = personaColors[colorIndex];
          const avatarGradient = avatarGradients[colorIndex];
          const delivery = deliveryLabels[uc.delivery];
          const DeliveryIcon = delivery.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: uc.opacity ?? 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.06,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 100,
                transition: { duration: 0.2 }
              }}
              className="absolute cursor-pointer group"
              style={{
                left: `${uc.x}%`,
                top: `${uc.y}%`,
                zIndex: uc.zIndex,
                maxWidth: "280px",
                opacity: uc.opacity ?? 1,
              }}
            >
              <div className="rounded-xl outline outline-1 outline-white/10 bg-black/80 backdrop-blur-sm p-4 shadow-xl transition-all duration-300 group-hover:outline-white/30 group-hover:shadow-2xl group-hover:bg-black/90">
                {/* Avatar + Role */}
                <div className={`flex items-center gap-2 font-semibold ${personaColor} mb-1 text-sm`}>
                  <div className={`h-6 w-6 rounded-full bg-gradient-to-br ${avatarGradient} flex-shrink-0`} />
                  <span>User Request</span>
                </div>
                
                {/* Target Agent */}
                <div className="flex items-center gap-1 text-white/40 text-[10px] ml-3 mb-2">
                  <CornerDownRight size={10} />
                  <span className="font-mono">To {delivery.label}</span>
                </div>
                
                {/* Task Description */}
                <div className="text-sm font-light text-white/90 ml-8 leading-relaxed">
                  {uc.task}
                </div>
                
                {/* Delivery Method */}
                <div className="flex items-center gap-1.5 text-[10px] text-white/30 ml-8 mt-3">
                  <DeliveryIcon size={10} />
                  <span>via {uc.delivery === "mcp" ? "MCP" : uc.delivery === "slash" ? "Slash Command" : "Agent"}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
