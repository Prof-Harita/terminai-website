"use client";

import { motion } from "framer-motion";
import {
  Server,
  FileText,
  Users,
  Shield,
  Lock,
  Database,
  Cloud,
  CheckCircle,
  Building,
  Zap
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const features = [
    {
        icon: Server,
        title: "Bring Your Own Model (BYOM)",
        description:
            "Connect to your internal Vertex AI, OpenAI, or custom model endpoints. Keep all data within your private infrastructure.",
    },
    {
        icon: Shield,
        title: "Enterprise Audit Logs",
        description:
            "SIEM-ready audit trails for every command, approval, and AI decision. Meet compliance requirements for SOX, HIPAA, GDPR.",
    },
    {
        icon: Users,
        title: "Role-Based Access Control",
        description:
            "Granular permissions for tools, commands, and system access. Different policies for developers, ops, and security teams.",
    },
    {
        icon: Lock,
        title: "Zero-Trust Architecture",
        description:
            "Every operation requires explicit approval. No implicit trust. PIN-protected critical actions with full provenance tracking.",
    },
    {
        icon: Database,
        title: "Centralized Management",
        description:
            "Fleet-wide configuration management, policy deployment, and monitoring dashboards for enterprise deployments.",
    },
    {
        icon: Cloud,
        title: "Private Trust Boundaries",
        description:
            "Deploy within your VPC with private model endpoints. No data leaves your infrastructure without explicit permission.",
    },
];

const useCases = [
    {
        icon: Building,
        title: "DevOps & Platform Engineering",
        description: "Automate infrastructure provisioning, incident response, and system maintenance with AI assistance and human oversight.",
        benefits: ["Faster incident resolution", "Consistent deployments", "Reduced human error"]
    },
    {
        icon: Shield,
        title: "Security Operations",
        description: "AI-powered security analysis with mandatory human approval for all security-related actions and comprehensive audit trails.",
        benefits: ["Enhanced threat detection", "Compliant automation", "Reduced alert fatigue"]
    },
    {
        icon: Zap,
        title: "Development Teams",
        description: "Accelerate development workflows with AI assistance for code analysis, testing, and deployment while maintaining security controls.",
        benefits: ["Faster development cycles", "Consistent code quality", "Secure deployments"]
    }
];

const pricingTiers = [
    {
        name: "Pilot",
        price: "Free",
        description: "Get started with enterprise features",
        features: [
            "Up to 5 users",
            "BYOM support",
            "Basic audit logs",
            "Community support",
            "60-day pilot period"
        ],
        cta: "Start Pilot",
        popular: false
    },
    {
        name: "Professional",
        price: "$49/user/month",
        description: "Full enterprise deployment",
        features: [
            "Unlimited users",
            "Advanced audit & SIEM integration",
            "Role-based access control",
            "Priority support",
            "Custom integrations",
            "SLA guarantee"
        ],
        cta: "Contact Sales",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Large-scale deployments",
        features: [
            "Everything in Professional",
            "Dedicated support team",
            "Custom security policies",
            "On-premise deployment",
            "Advanced compliance features",
            "Custom SLAs"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

export default function EnterprisePage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-16">
                {/* Hero */}
                <section className="section min-h-screen flex items-center">
                    <div className="container">
                        <motion.div
                            className="max-w-4xl mx-auto text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="mb-6">
                                Scale Intelligence,
                                <br />
                                <span style={{ color: "var(--color-brand-red)" }}>Not Risk.</span>
                            </h1>
                            <p className="text-xl opacity-70 mb-8">
                                Deploy terminaI enterprise-wide with Vertex AI governance, centralized audit logs,
                                and private trust boundaries. AI assistance that scales safely.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="mailto:enterprise@terminai.org"
                                    className="btn btn-primary text-lg px-8 py-4"
                                >
                                    Schedule Demo
                                </a>
                                <a
                                    href="/docs"
                                    className="btn btn-outline text-lg px-8 py-4"
                                >
                                    View Enterprise Docs
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Enterprise Features */}
                <section className="section border-t border-white/5">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="mb-4">Enterprise-Grade Security & Governance</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                Built for organizations that need AI automation without compromising on security,
                                compliance, or control.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="card">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                            style={{
                                                background: "rgba(226, 35, 26, 0.1)",
                                                color: "var(--color-brand-red)",
                                            }}
                                        >
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
                                        <p className="opacity-70 text-sm">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="section border-t border-white/5">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="mb-4">Trusted by Enterprise Teams</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                See how leading organizations are using terminaI to enhance productivity
                                while maintaining security and compliance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {useCases.map((useCase, index) => {
                                const Icon = useCase.icon;
                                return (
                                    <div key={index} className="p-6 rounded-xl border border-white/10 bg-white/5">
                                        <Icon size={32} className="text-brand-red mb-4" />
                                        <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                                        <p className="opacity-70 mb-4">{useCase.description}</p>
                                        <ul className="space-y-1">
                                            {useCase.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm opacity-60">
                                                    <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section className="section border-t border-white/5">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="mb-4">Choose Your Enterprise Plan</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                Start with a pilot program, then scale to enterprise deployment.
                                All plans include core enterprise features.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {pricingTiers.map((tier, index) => (
                                <div key={index} className={`p-8 rounded-xl border ${tier.popular ? 'border-brand-red bg-brand-red/5' : 'border-white/10 bg-white/5'}`}>
                                    {tier.popular && (
                                        <div className="text-xs font-bold text-brand-red bg-brand-red/10 px-3 py-1 rounded-full inline-block mb-4">
                                            MOST POPULAR
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                    <div className="text-3xl font-bold mb-4">{tier.price}</div>
                                    <p className="opacity-70 mb-6">{tier.description}</p>

                                    <ul className="space-y-3 mb-8">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm">
                                                <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                                        tier.popular
                                            ? 'bg-brand-red text-white hover:bg-brand-red/90'
                                            : 'border border-white/20 hover:bg-white/10'
                                    }`}>
                                        {tier.cta}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section border-t border-white/5">
                    <div className="container text-center">
                        <h2 className="mb-6">Ready to scale AI safely?</h2>
                        <p className="text-lg opacity-70 mb-8 max-w-2xl mx-auto">
                            Join leading organizations using terminaI for secure, governed AI automation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:enterprise@terminai.org"
                                className="btn btn-primary text-lg px-8 py-4"
                            >
                                Contact Enterprise Sales
                            </a>
                            <a
                                href="/docs"
                                className="btn btn-outline text-lg px-8 py-4"
                            >
                                View Documentation
                            </a>
                        </div>
                        <p className="text-sm opacity-50 mt-4">enterprise@terminai.org</p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
