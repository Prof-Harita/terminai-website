import Link from "next/link";
import { BrandText } from "./BrandText";

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 py-20 bg-black/50 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-0 group select-none text-xl no-underline mb-6">
                            <BrandText />
                        </Link>
                        <p className="text-sm opacity-50 leading-relaxed mb-6">
                            The first AI that controls your entire computer. 
                            Built for sovereignty, not surveillance.
                        </p>
                        <div className="flex gap-4 opacity-40">
                             <a href="https://github.com/Prof-Harita/terminaI" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                                <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                             </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-sm">
                        <h4 className="font-bold text-white tracking-widest uppercase text-xs">Product</h4>
                        <Link href="/free" className="opacity-60 hover:opacity-100 transition-opacity">Always Free</Link>
                        <Link href="/intelligence" className="opacity-60 hover:opacity-100 transition-opacity">Intelligence</Link>
                        <Link href="/extensibility" className="opacity-60 hover:opacity-100 transition-opacity">Extensibility</Link>
                        <Link href="/safety" className="opacity-60 hover:opacity-100 transition-opacity">Safety & Trust</Link>
                    </div>

                    <div className="flex flex-col gap-4 text-sm">
                        <h4 className="font-bold text-white tracking-widest uppercase text-xs">Community</h4>
                        <a href="https://github.com/Prof-Harita/terminaI" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">GitHub</a>
                        <Link href="/roadmap" className="opacity-60 hover:opacity-100 transition-opacity">Roadmap</Link>
                        <Link href="/contribute" className="opacity-60 hover:opacity-100 transition-opacity">Contribute</Link>
                        <Link href="/contact" className="opacity-60 hover:opacity-100 transition-opacity">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-4 text-sm">
                        <h4 className="font-bold text-white tracking-widest uppercase text-xs">Resources</h4>
                        <Link href="/start" className="opacity-60 hover:opacity-100 transition-opacity">Start Here</Link>
                        <Link href="/docs" className="opacity-60 hover:opacity-100 transition-opacity">Documentation</Link>
                        <Link href="/recipes" className="opacity-60 hover:opacity-100 transition-opacity">Recipes</Link>
                        <Link href="/architecture" className="opacity-60 hover:opacity-100 transition-opacity">OI Architecture</Link>
                        <Link href="/manifesto" className="opacity-60 hover:opacity-100 transition-opacity">Manifesto</Link>
                    </div>

                    <div className="flex flex-col gap-4 text-sm">
                        <h4 className="font-bold text-white tracking-widest uppercase text-xs">Legal</h4>
                        <Link href="/privacy" className="opacity-60 hover:opacity-100 transition-opacity">Privacy</Link>
                        <Link href="/terms" className="opacity-60 hover:opacity-100 transition-opacity">Terms</Link>
                        <a href="https://github.com/Prof-Harita/terminaI/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">Apache 2.0</a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/30">
                    <p>© 2025 terminaI Contributors.</p>
                    <div className="flex items-center gap-6">
                         <a
                            href="https://github.com/google-gemini/gemini-cli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Origins: Google Gemini CLI
                        </a>
                        <Link href="/architecture" className="hover:text-white transition-colors">OI Architecture</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
