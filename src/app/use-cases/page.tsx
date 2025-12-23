"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Laptop, Network, Building, Server } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const useCases = [
  {
    icon: Laptop,
    title: "Laptop Assistant",
    description: "Your daily driver. Automate local workflows, fix config drift, and manage your dev environment.",
    href: "/use-cases/laptop-assistant",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Network,
    title: "Automation Hub",
    description: "The glue between services. Connect GitHub, Linear, and Slack using MCP to orchestrate complex tasks.",
    href: "/use-cases/automation-hub",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building,
    title: "Endpoints",
    description: "Fleet management for the modern era. Enforce policy and audit actions across 1000s of machines.",
    href: "/use-cases/endpoints",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Server,
    title: "Server Ops",
    description: "SRE in a box. Interactive runbooks, incident response, and safe production access.",
    href: "/use-cases/servers",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container max-w-6xl">
           <div className="text-center mb-16">
             <h1 className="text-5xl font-bold mb-6">Use Cases</h1>
             <p className="text-xl opacity-70 max-w-2xl mx-auto">
               From personal productivity to enterprise fleet management. TerminaI scales with your trust.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {useCases.map((useCase, index) => {
               const Icon = useCase.icon;
               return (
                 <Link href={useCase.href} key={useCase.title} className="group block">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors relative overflow-hidden"
                   >
                     <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.gradient} opacity-10 blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:opacity-20 transition-opacity`} />
                     
                     <div className="flex items-center gap-4 mb-4">
                       <div className={`p-3 rounded-lg bg-white/5 text-white group-hover:scale-110 transition-transform`}>
                         <Icon size={32} />
                       </div>
                       <h2 className="text-2xl font-bold">{useCase.title}</h2>
                     </div>
                     <p className="text-lg opacity-70 leading-relaxed">
                       {useCase.description}
                     </p>
                   </motion.div>
                 </Link>
               );
             })}
           </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
