import Link from "next/link";
import { BrandText } from "./BrandText";

export function SiteHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10">
            <div className="container h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-0 group select-none text-2xl no-underline">
                    <BrandText />
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <Link href="/contribute" className="opacity-70 hover:opacity-100 transition-opacity">
                        Contribute
                    </Link>
                    <Link href="/architecture" className="opacity-70 hover:opacity-100 transition-opacity">
                        Architecture
                    </Link>
                    <div className="group relative flex items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                        <span>Protocols</span>
                        <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-32">
                            <div className="bg-black border border-white/10 rounded-md p-2 flex flex-col gap-2">
                                <Link href="/protocols/a2a" className="hover:text-brand-red whitespace-nowrap">A2A</Link>
                                <Link href="/protocols/mcp" className="hover:text-brand-red whitespace-nowrap">MCP</Link>
                            </div>
                        </div>
                    </div>
                    <Link href="/safety" className="opacity-70 hover:opacity-100 transition-opacity">
                        Safety
                    </Link>
                    <Link href="/docs" className="opacity-70 hover:opacity-100 transition-opacity">
                        Docs
                    </Link>
                    <Link href="/download" className="opacity-70 hover:opacity-100 transition-opacity">
                        Download
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/manifesto" className="text-xs uppercase font-bold tracking-widest opacity-50 hover:opacity-100 hover:text-brand-red transition-all mr-2">
                        Manifesto
                    </Link>
                    <Link href="/contribute" className="btn btn-primary text-sm py-2 px-4">
                        Contribute
                    </Link>
                </div>
            </div>
        </header>
    );
}
