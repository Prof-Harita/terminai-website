"use client";

export function BrandText({ className = "" }: { className?: string }) {
    return (
        <span className={`font-mono font-medium tracking-tight inline-flex items-baseline ${className}`} style={{ fontFamily: 'var(--font-code)' }}>
            termina
            <span className="text-[var(--color-brand-red)] animate-cursor-blink font-extrabold">I</span>
        </span>
    );
}
