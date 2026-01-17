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
  title: "Install TerminaI — 2-Minute Setup on Linux, macOS, Windows",
  description:
    "Global npm install or build from source. Model-agnostic CLI with approval ladder. Self-hosted, no telemetry.",
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
            <p className="text-2xl opacity-70 max-w-2xl mx-auto mb-4">
              Get started in under 2 minutes.
            </p>
            <p className="text-sm opacity-50 bg-white/5 inline-block px-4 py-2 rounded-full">
              TerminaI is self-hosted. We don&apos;t operate cloud servers or telemetry.
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
                      Windows
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
              {/* Method 1: NPM Install (Recommended) */}
              <div className="rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-red)] flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H2.667v4h-1.33V8.667h5.329v5.331zm4 0H9.334v-4H6.667v4H5.334v-5.33h5.332v5.33zm4 0H13.334v-4H10.667v4H9.334v-5.33h5.332v5.33zM2.667 18.666h18.666v-1.332H2.667v1.332z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      NPM Install (Recommended)
                    </h2>
                    <p className="text-sm opacity-60">
                      Install globally via npm.
                    </p>
                  </div>
                </div>
                <div className="code-block text-sm">
                  <div className="text-gray-500 mb-2">
                    # Install globally
                  </div>
                  <div>npm install -g @terminai/cli</div>
                  <div className="mt-3 text-gray-500"># Run</div>
                  <div>terminai</div>
                </div>
              </div>

              {/* Method 2: Build from Source */}
              <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <GitBranch size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      Build from Source
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

        {/* Quick start (providers) */}
        <section className="section border-t border-white/5">
          <div className="container max-w-4xl">
            <h2 className="mb-4 text-center">Quick start (providers)</h2>
            <p className="text-center text-lg opacity-70 mb-12">
              Run <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm mx-1">terminai</code> and the wizard guides you through setup.
            </p>

            <div className="space-y-6">
              {/* Google Gemini */}
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Google Gemini
                    <span className="text-xs bg-[var(--color-brand-red)] text-white px-2 py-0.5 rounded-full">Default</span>
                  </h3>
                </div>
                <p className="opacity-70 mb-4">Fastest path for many users.</p>
                <div className="code-block text-sm">
                  <div>terminai</div>
                  <div className="text-gray-500 mt-2"># Select &quot;Google Gemini&quot; → browser opens → sign in</div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-sm opacity-60 mb-2">Or use an API key:</p>
                  <div className="code-block text-sm">
                    <div>export TERMINAI_API_KEY=&quot;your-gemini-key&quot;</div>
                    <div>terminai</div>
                  </div>
                </div>
              </div>

              {/* ChatGPT sign-in (OAuth) */}
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                 <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    ChatGPT sign-in (OAuth)
                    <span className="text-xs border border-yellow-500 text-yellow-500 px-2 py-0.5 rounded-full">Preview</span>
                  </h3>
                </div>
                <p className="opacity-70 mb-4">
                  Use an OpenAI browser sign-in flow (similar to how Codex tooling supports &quot;Sign in with ChatGPT&quot;).
                </p>
                <div className="code-block text-sm mb-4">
                  <div>terminai</div>
                  <div className="text-gray-500 mt-2"># Select &quot;ChatGPT Sign-in (OAuth)&quot; → sign in with OpenAI</div>
                </div>
                <div className="flex items-start gap-2 text-sm text-yellow-400 bg-yellow-500/10 p-3 rounded-lg">
                  <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                  <p>Note: this is still being hardened. If anything fails, attach logs (see below) and open an issue.</p>
                </div>
              </div>

              {/* OpenAI-Compatible */}
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-4">OpenAI-Compatible</h3>
                <p className="opacity-70 mb-4">
                  Connect to OpenAI Platform, OpenRouter, Ollama gateways, or any <code className="bg-white/5 px-1 rounded text-xs">/chat/completions</code> endpoint.
                </p>
                 <div className="code-block text-sm mb-4">
                  <div>export OPENAI_API_KEY=&quot;sk-...&quot;</div>
                  <div>terminai</div>
                  <div className="text-gray-500 mt-2"># Select &quot;OpenAI Compatible&quot; → enter base URL and model</div>
                </div>
                <div className="text-sm bg-black/20 p-4 rounded-lg">
                    <p className="opacity-60 mb-2 font-semibold">Popular configurations:</p>
                    <ul className="space-y-1 opacity-70 font-mono text-xs">
                        <li><span className="opacity-50 inline-block w-24">OpenAI:</span> https://api.openai.com/v1</li>
                        <li><span className="opacity-50 inline-block w-24">OpenRouter:</span> https://openrouter.ai/api/v1</li>
                        <li><span className="opacity-50 inline-block w-24">Local LLM:</span> http://localhost:11434/v1</li>
                    </ul>
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
