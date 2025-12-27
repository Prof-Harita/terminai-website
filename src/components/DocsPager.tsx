import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface DocNavItem {
  slug: string;
  label: string;
}

interface DocsPagerProps {
  prev?: DocNavItem | null;
  next?: DocNavItem | null;
}

export function DocsPager({ prev, next }: DocsPagerProps) {
  if (!prev && !next) return null;

  return (
    <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 justify-between">
      {prev ? (
        <Link
          href={`/${prev.slug}`}
          className="group flex items-center gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors"
        >
          <ArrowLeft size={16} className="text-[var(--color-brand-red)]" />
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40">Previous</div>
            <div className="font-semibold">{prev.label}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/${next.slug}`}
          className="group flex items-center justify-end gap-3 rounded-lg border border-white/10 px-4 py-3 text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors"
        >
          <div className="text-right">
            <div className="text-xs uppercase tracking-widest text-white/40">Next</div>
            <div className="font-semibold">{next.label}</div>
          </div>
          <ArrowRight size={16} className="text-[var(--color-brand-red)]" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
