import { Layers } from "lucide-react";

export function DocsVersionNotice() {
  return (
    <div className="mb-6 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Layers size={14} className="text-[var(--color-brand-red)]" />
        <span>Docs track: Current (v0.1). Versioned docs planned.</span>
      </div>
      <select
        className="bg-black/40 border border-white/10 rounded-md px-2 py-1 text-xs text-white/60"
        disabled
        aria-label="Docs version"
      >
        <option>Current</option>
        <option>Preview</option>
      </select>
    </div>
  );
}
