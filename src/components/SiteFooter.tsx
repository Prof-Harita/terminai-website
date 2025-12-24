import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 py-12 bg-black/50">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
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
                        <h4 className="font-bold opacity-100">Product</h4>
                        <Link href="/install" className="opacity-80 hover:opacity-100">Install</Link>
                        <Link href="/docs" className="opacity-80 hover:opacity-100">Docs</Link>
                        <Link href="/safety" className="opacity-80 hover:opacity-100">Security</Link>
                        <Link href="/enterprise" className="opacity-80 hover:opacity-100">Enterprise</Link>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <h4 className="font-bold opacity-100">Community</h4>
                        <a href="https://github.com/Prof-Harita/terminaI" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">GitHub</a>
                        <Link href="/contribute" className="opacity-80 hover:opacity-100">Contribute</Link>
                        <Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link>
                        <span className="opacity-40">Discord (soon)</span>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <h4 className="font-bold opacity-100">Resources</h4>
                        <span className="opacity-40">Changelog (soon)</span>
                        <span className="opacity-40">Roadmap (soon)</span>
                        <span className="opacity-40">Blog (soon)</span>
                        <a href="https://github.com/Prof-Harita/terminaI/releases" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">Releases</a>
                    </div>

                    <div className="flex flex-col gap-3 text-sm">
                        <h4 className="font-bold opacity-100">Legal</h4>
                        <Link href="/privacy" className="opacity-80 hover:opacity-100">Privacy</Link>
                        <span className="opacity-40">Terms (soon)</span>
                        <a href="https://github.com/Prof-Harita/terminaI/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">Apache 2.0</a>
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
