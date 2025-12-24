import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  HardDrive,
  BarChart3,
  FileText,
  Calendar,
  Shield,
  Server,
  GraduationCap,
  Workflow,
  Mic,
  Settings,
  Palette,
  Gamepad2,
  Microscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Capabilities | terminaI",
  description: "See what you can do with terminaI - from file management to scientific research.",
};

const useCaseBuckets = [
  {
    icon: HardDrive,
    title: "File & System Operations",
    color: "from-blue-500 to-cyan-500",
    useCases: [
      "Bulk rename photos by date and location",
      "Organize files by content and type automatically",
      "Clean up old downloads intelligently",
      "Find files by natural language descriptions",
      "Batch convert image formats",
      "Smart duplicate file detection and removal",
      "Context-aware directory restructuring",
      "Automated backup with semantic tagging"
    ]
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    color: "from-green-500 to-emerald-500",
    useCases: [
      "Analyze CSV files and generate insights",
      "Create automated financial reports",
      "Convert natural language to SQL queries",
      "Visualize data from spreadsheets",
      "Generate PDF reports from data folders",
      "Statistical analysis of datasets",
      "Automated chart and graph creation",
      "Real-time data monitoring dashboards"
    ]
  },
  {
    icon: FileText,
    title: "Content Creation & Writing",
    color: "from-purple-500 to-indigo-500",
    useCases: [
      "Generate technical documentation automatically",
      "Create release notes from git commits",
      "Write engineering blog posts from code",
      "Draft professional emails with context",
      "Generate API documentation",
      "Create tutorial content from features",
      "Automate changelog updates",
      "Write creative content with style guides"
    ]
  },
  {
    icon: Calendar,
    title: "Personal Productivity",
    color: "from-orange-500 to-red-500",
    useCases: [
      "Plan travel itineraries with maps",
      "Generate weekly meal plans and recipes",
      "Organize and prioritize todo lists",
      "Track expenses and budgets automatically",
      "Manage personal project timelines",
      "Create shopping lists from recipes",
      "Automate routine task reminders",
      "Plan events with integrated calendars"
    ]
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    color: "from-red-500 to-pink-500",
    useCases: [
      "Scan code for security vulnerabilities",
      "Audit dependencies for CVEs automatically",
      "Detect hardcoded secrets in code",
      "Monitor system health proactively",
      "Automate security policy enforcement",
      "Generate security incident reports",
      "Check compliance against standards",
      "Monitor and alert on system changes"
    ]
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    color: "from-teal-500 to-blue-500",
    useCases: [
      "Monitor server metrics and alerts",
      "Automate incident response and triage",
      "Generate Kubernetes manifests from descriptions",
      "Control cloud infrastructure via CLI",
      "Monitor CI/CD pipeline health",
      "Automate deployment workflows",
      "Manage container orchestration",
      "Scale infrastructure automatically"
    ]
  },
  {
    icon: GraduationCap,
    title: "Education & Learning",
    color: "from-yellow-500 to-orange-500",
    useCases: [
      "Interactive coding tutorials and quizzes",
      "Explain complex concepts simply",
      "Generate flashcards from documentation",
      "Create hands-on learning exercises",
      "Debug code with guided explanations",
      "Learn new programming languages interactively",
      "Practice algorithms with AI feedback",
      "Understand technical documentation better"
    ]
  },
  {
    icon: Workflow,
    title: "Workflow Integration",
    color: "from-indigo-500 to-purple-500",
    useCases: [
      "Manage Slack channels and messages",
      "Read and edit Google Docs via CLI",
      "Query BigQuery databases naturally",
      "Automate GitHub issue management",
      "Integrate with project management tools",
      "Connect to APIs without coding",
      "Chain multiple tools in workflows",
      "Sync data across different services"
    ]
  },
  {
    icon: Mic,
    title: "Accessibility & Voice",
    color: "from-pink-500 to-rose-500",
    useCases: [
      "Voice-controlled terminal operations",
      "Text-to-speech for command outputs",
      "Hands-free coding with voice commands",
      "Accessibility audits for applications",
      "Voice-guided debugging sessions",
      "Screen reader compatible code generation",
      "Voice-activated workflow triggers",
      "Auditory feedback for system status"
    ]
  },
  {
    icon: Settings,
    title: "Environment Management",
    color: "from-gray-500 to-slate-500",
    useCases: [
      "Scaffold new projects automatically",
      "Configure development environments",
      "Manage dotfiles across machines",
      "Set up CI/CD pipelines quickly",
      "Automate dependency management",
      "Configure IDEs and editors",
      "Sync workspace settings",
      "Bootstrap development containers"
    ]
  },
  {
    icon: Palette,
    title: "Creative & Artistic",
    color: "from-violet-500 to-purple-500",
    useCases: [
      "Generate ASCII art and banners",
      "Create procedural graphics code",
      "Design terminal themes and colors",
      "Generate creative writing prompts",
      "Create visual data representations",
      "Design command-line interfaces",
      "Generate artistic code comments",
      "Create interactive terminal art"
    ]
  },
  {
    icon: Gamepad2,
    title: "Gaming & Simulation",
    color: "from-cyan-500 to-blue-500",
    useCases: [
      "Play games via natural language",
      "Control game characters intelligently",
      "Generate game strategies and tactics",
      "Create interactive game narratives",
      "Simulate complex game scenarios",
      "Automate repetitive game tasks",
      "Generate game content dynamically",
      "Test game mechanics and balance"
    ]
  },
  {
    icon: Microscope,
    title: "Scientific Research",
    color: "from-emerald-500 to-teal-500",
    useCases: [
      "Analyze research papers automatically",
      "Generate literature review summaries",
      "Design experimental protocols",
      "Process scientific data sets",
      "Create research visualization charts",
      "Automate data collection workflows",
      "Generate hypothesis and test plans",
      "Synthesize findings from multiple sources"
    ]
  }
];

export default function CapabilitiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center">
            <h1 className="mb-6">
              What You Can{" "}
              <span className="text-[var(--color-brand-red)]">Build</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-3xl mx-auto mb-4">
              From organizing your files to running scientific experiments
            </p>
            <p className="text-lg opacity-50 max-w-2xl mx-auto">
              terminaI transforms how you interact with your computer. See real examples
              of what developers are building every day.
            </p>
          </div>
        </section>

        {/* Use Case Buckets */}
        <section className="section pt-0">
          <div className="container">
            <div className="space-y-16">
              {useCaseBuckets.map((bucket, bucketIndex) => {
                const Icon = bucket.icon;
                return (
                  <div key={bucketIndex} className="relative">
                    {/* Bucket Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${bucket.color} text-white`}>
                        <Icon size={24} />
                      </div>
                      <h2 className="text-3xl font-bold">{bucket.title}</h2>
                    </div>

                    {/* Floating Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {bucket.useCases.map((useCase, useCaseIndex) => (
                        <div
                          key={useCaseIndex}
                          className="bg-white/[0.02] border border-white/10 rounded-lg p-4 hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer group"
                        >
                          <div className="text-sm opacity-80 leading-relaxed group-hover:opacity-100 transition-opacity">
                            {useCase}
                          </div>
                          <div className="mt-3 flex justify-end">
                            <div className="text-xs opacity-40 group-hover:opacity-60 transition-opacity">
                              Try it →
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <h2 className="mb-6">Ready to build something amazing?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/install" className="btn btn-primary">
                Start Building
              </a>
              <a href="/docs" className="btn btn-outline">
                Read the Docs
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}