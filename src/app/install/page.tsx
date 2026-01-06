import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  GitBranch,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Install | terminaI",
  description:
    "Install terminaI in under 2 minutes. NPM, source, or quick script.",
};

export default function InstallPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-8">
          <div className="container text-center">
            <h1 className="mb-6">
              Install{" "}
              <span className="text-[var(--color-brand-red)]">terminaI</span>
            </h1>
            <p className="text-2xl opacity-70 max-w-2xl mx-auto">
              Get started in under 2 minutes.
            </p>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="pb-8">
          <div className="container max-w-4xl">
            <div className="rounded-xl bg-yellow-500/5 border border-yellow-500/20 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle
                  size={20}
                  className="text-yellow-400 mt-1 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-yellow-400 mb-2">
                    Prerequisites
                  </h3>
                  <ul className="text-sm opacity-70 space-y-1">
                    <li>
                      • <strong>Node.js 18+</strong> (check:{" "}
                      <code className="bg-white/5 px-1 rounded">
                        node --version
                      </code>
                      )
                    </li>
                    <li>
                      • <strong>Git</strong> (for source install only)
                    </li>
                    <li>
                      • <strong>Supported platforms:</strong> Linux, macOS,
                      Windows (via WSL)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Methods */}
        <section className="section pt-8">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              {/* Method 1: Build from Source */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <GitBranch size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      Build from Source (Recommended)
                    </h2>
                    <p className="text-sm opacity-60">
                      Independent open-source fork; not affiliated with Google.
                    </p>
                  </div>
                </div>
                <div className="code-block text-sm">
                  <div className="text-gray-500 mb-2">
                    # Clone the repository
                  </div>
                  <div>
                    git clone https://github.com/Prof-Harita/terminaI.git
                  </div>
                  <div className="mt-3 text-gray-500"># Build</div>
                  <div>cd terminaI && npm ci && npm run build</div>
                  <div className="mt-3 text-gray-500"># Link globally</div>
                  <div>npm link --workspace packages/termai</div>
                  <div className="mt-3 text-gray-500"># Run</div>
                  <div>terminai</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Run */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="mb-8 text-center">First Run</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Start terminaI</h3>
                  <div className="code-block text-sm">
                    <code>terminai</code>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Authenticate</h3>
                  <p className="text-sm opacity-70 mb-2">Choose one:</p>
                  <ul className="text-sm opacity-60 space-y-1">
                    <li>
                      • <strong>OAuth:</strong> Follow the browser prompt
                      (recommended for personal use)
                    </li>
                    <li>
                      • <strong>API Key:</strong>{" "}
                      <code className="bg-white/5 px-1 rounded">
                        export GEMINI_API_KEY=your_key
                      </code>
                    </li>
                    <li>
                      • <strong>Vertex AI:</strong> Configure Google Cloud
                      project (enterprise)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-red)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-2">Ask anything</h3>
                  <div className="code-block text-sm">
                    <div>
                      <span className="text-gray-500">$</span> terminai
                    </div>
                    <div className="mt-2">
                      <span className="text-[var(--color-brand-red)]">
                        &gt;
                      </span>{" "}
                      What&apos;s using my disk space?
                    </div>
                    <div className="text-green-400 mt-2">
                      Scanning file system...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Setup (Optional) */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="mb-4">Optional: Voice Mode</h2>
            <p className="text-lg opacity-70 mb-6">
              Install offline voice (downloads ~200MB, runs forever offline).
            </p>
            <div className="code-block">
              <code>terminai voice install</code>
            </div>
            <p className="text-sm opacity-50 mt-3">
              Then use{" "}
              <code className="bg-white/5 px-1 rounded">terminai --voice</code>{" "}
              or hold{" "}
              <kbd className="bg-white/10 px-2 py-0.5 rounded text-xs">
                Space
              </kbd>{" "}
              to talk in Desktop app.
            </p>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="mb-6">Troubleshooting</h2>
            <div className="space-y-4">
              <details className="group rounded-xl bg-white/[0.02] border border-white/10">
                <summary className="cursor-pointer p-4 font-medium">
                  API error: 429 - Resource exhausted
                </summary>
                <div className="px-4 pb-4 text-sm opacity-70">
                  You&apos;ve exceeded rate limits. Check usage in Google AI Studio,
                  optimize prompts, or upgrade to Google AI Pro/Ultra.
                </div>
              </details>
              <details className="group rounded-xl bg-white/[0.02] border border-white/10">
                <summary className="cursor-pointer p-4 font-medium">
                  ERR_REQUIRE_ESM error
                </summary>
                <div className="px-4 pb-4 text-sm opacity-70">
                  Ensure package.json has{" "}
                  <code className="bg-white/5 px-1 rounded">
                    &quot;type&quot;: &quot;module&quot;
                  </code>
                  . Delete node_modules and package-lock.json, then npm install
                  again.
                </div>
              </details>
              <details className="group rounded-xl bg-white/[0.02] border border-white/10">
                <summary className="cursor-pointer p-4 font-medium">
                  Windows: chmod command not found
                </summary>
                <div className="px-4 pb-4 text-sm opacity-70">
                  Use Windows Subsystem for Linux (WSL) or Git Bash for full
                  compatibility.
                </div>
              </details>
            </div>
            <p className="text-sm opacity-50 mt-6">
              More help:{" "}
              <Link href="/docs/troubleshooting" className="text-[var(--color-brand-red)]">
                Full Troubleshooting Guide
              </Link>{" "}
              •
              <a
                href="https://github.com/Prof-Harita/terminaI/issues"
                className="text-[var(--color-brand-red)] ml-2"
              >
                GitHub Issues
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/5">
          <div className="container text-center">
            <div className="flex items-center justify-center gap-2 text-green-400 mb-4">
              <CheckCircle size={24} />
              <span className="text-lg">You&apos;re ready to go!</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/docs" className="btn btn-primary">
                Read the Docs
              </Link>
              <Link href="/free" className="btn btn-outline">
                Learn about Free Tier →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
