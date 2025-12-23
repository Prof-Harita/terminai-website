import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 py-12 bg-black/50">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                     <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div
                                className="w-3 h-3 rounded-sm"
                                style={{ background: "var(--color-brand-red)" }}
                            />
                            <span className="font-bold text-lg">terminaI</span>
                        </div>
                        <p className="text-sm opacity-50 mb-4">
                            The Sovereign Shell.
                            <br />
                            Governed autonomy for your systems.
                        </p>
                    </div>
                    
                    <div className="flex flex-col gap-3 text-sm">
                        <h4 className="font-bold opacity-100">Project</h4>
                        <Link href="/download" className="opacity-80 hover:opacity-100">Download</Link>
                        <Link href="/contribute" className="opacity-80 hover:opacity-100">Contribute</Link>
                        <Link href="/architecture" className="opacity-80 hover:opacity-100">Architecture</Link>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <h4 className="font-bold opacity-100">Resources</h4>
                        <Link href="/docs" className="opacity-80 hover:opacity-100">Documentation</Link>
                        <Link href="/protocols/a2a" className="opacity-80 hover:opacity-100">A2A Protocol</Link>
                        <Link href="/protocols/mcp" className="opacity-80 hover:opacity-100">MCP Protocol</Link>
                        <Link href="/safety" className="opacity-80 hover:opacity-100">Safety & Policy</Link>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <h4 className="font-bold opacity-100">Community</h4>
                        <a href="https://github.com/Prof-Harita/terminaI" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">GitHub</a>
                        <Link href="https://discord.gg/terminai" className="opacity-80 hover:opacity-100">Discord</Link>
                        <Link href="/docs/governance" className="opacity-80 hover:opacity-100">Governance</Link>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-40">
                    <p>© 2025 terminaI Contributors.</p>
                    <div className="flex gap-4">
                         <a
                            href="https://github.com/google-gemini/gemini-cli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-100 transition-opacity"
                        >
                            Origins: Google Gemini CLI
                        </a>
                        <Link href="/privacy" className="hover:opacity-100">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
