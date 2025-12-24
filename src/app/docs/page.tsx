import { DocsLayout } from "@/components/DocsLayout";

export default function DocsPage() {
  return (
    <DocsLayout activeSlug="docs">
      <h1>Documentation</h1>
      <p>
        Welcome to the TerminiAI documentation. Here you'll find comprehensive guides
        for installing, using, and extending the sovereign shell.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-4">Getting Started</h2>
          <p className="mb-4">New to TerminiAI? Start here with installation and basic usage.</p>
          <ul className="space-y-2">
            <li><a href="/docs/termai-quickstart" className="text-brand-red hover:underline">Quickstart Guide</a></li>
            <li><a href="/docs/get-started/installation" className="text-brand-red hover:underline">Installation</a></li>
            <li><a href="/docs/get-started/authentication" className="text-brand-red hover:underline">Authentication</a></li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border border-white/10 bg-white/5">
          <h2 className="text-xl font-bold mb-4">Key Features</h2>
          <p className="mb-4">Explore TerminiAI's unique capabilities and architecture.</p>
          <ul className="space-y-2">
            <li><a href="/docs/architecture" className="text-brand-red hover:underline">Architecture Overview</a></li>
            <li><a href="/docs/governance" className="text-brand-red hover:underline">Security & Governance</a></li>
            <li><a href="/docs/termai-examples" className="text-brand-red hover:underline">Example Use Cases</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 p-8 rounded-lg border border-white/10 bg-gradient-to-r from-brand-red/5 to-purple-500/5">
        <h2 className="text-xl font-bold mb-4">Need Help?</h2>
        <p className="mb-4">
          Can't find what you're looking for? Check out our community resources.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Prof-Harita/terminaI/discussions" className="btn btn-primary">
            Community Discussions
          </a>
          <a href="/contact" className="btn btn-outline">
            Contact Us
          </a>
        </div>
      </div>
    </DocsLayout>
  );
}
