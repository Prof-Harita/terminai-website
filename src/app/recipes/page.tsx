import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Scroll, Plus, ShieldCheck, Tag, Users } from "lucide-react";
import Link from "next/link";
import recipes from "@/content/recipes/recipes.json";

export const metadata: Metadata = {
  title: "Recipes Library | TerminaI",
  description: "Community-contributed prompt patterns and policy bundles for system automation. OSS best-effort.",
};

const riskStyles: Record<string, string> = {
  Low: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Medium: "bg-amber-500/10 text-amber-300 border-amber-500/20",
  High: "bg-red-500/10 text-red-300 border-red-500/20",
};

export default function RecipesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-24">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Recipes Library</h1>
            <p className="text-xl opacity-70 mb-4">
              Proven prompt patterns and policy bundles. Pick a recipe, run it safely, and adapt it to your workflow.
            </p>
            <p className="text-sm opacity-50">
              Recipes are community contributions. Best-effort OSS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40">
                    <Users size={14} />
                    {recipe.persona}
                  </div>
                  <span
                    className={`text-xs border rounded-full px-3 py-1 ${riskStyles[recipe.risk] || "border-white/10 text-white/60"}`}
                  >
                    {recipe.risk} Risk
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                <p className="text-sm opacity-70 mb-4">{recipe.summary}</p>
                <div className="text-xs opacity-60 mb-4">
                  <ShieldCheck size={14} className="inline-block mr-2 text-[var(--color-brand-red)]" />
                  Example: {recipe.example}
                </div>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border border-white/10 text-white/60"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-12 bg-white/5 rounded-2xl border border-dashed border-white/20">
            <Scroll className="mx-auto mb-6 text-brand-red" size={48} />
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Plus size={20} /> Contribute a Recipe
            </h2>
            <p className="opacity-70 mb-6 max-w-lg mx-auto">
              Recipes are structured prompts plus policy notes. Submit a PR and include persona, risk level, and tags.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contribute" className="btn btn-primary">
                View Contributing Guide
              </Link>
              <a
                href="https://github.com/Prof-Harita/terminaI/tree/main/docs/recipes"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Recipe Spec
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
