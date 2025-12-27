import Link from "next/link";
import { DemoScriptPlayer } from "@/components/DemoScriptPlayer";
import { CheckCircle2, ShieldCheck, Video } from "lucide-react";

const highlights = [
  "Voice-first requests with offline speech models",
  "Approval ladder gates every risky command",
  "Remote view for long-running jobs",
];

export function DemoShowcase() {
  return (
    <section id="demo" className="section border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-4">
              <Video size={14} />
              Demo
            </div>
            <h2 className="mb-4">See Governed Autonomy in Motion</h2>
            <p className="text-lg opacity-70 mb-6">
              Watch the ask -> approve -> execute flow end to end, then replay the scripted session to
              understand how TerminaI keeps you in control.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/start" className="btn btn-primary text-sm px-6 py-3">
                Start Here
              </Link>
              <Link href="/safety" className="btn btn-outline text-sm px-6 py-3">
                Safety Ladder
              </Link>
            </div>
            <div className="space-y-3 text-sm">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/80 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-3">
                <ShieldCheck size={14} />
                Recorded Walkthrough
              </div>
              <video
                className="w-full rounded-xl border border-white/10 bg-black"
                controls
                preload="metadata"
                poster="/media/terminai-demo-poster.jpg"
                playsInline
              >
                <source src="/media/terminai-demo.mp4" type="video/mp4" />
                <track
                  kind="captions"
                  src="/media/terminai-demo.vtt"
                  srcLang="en"
                  label="English"
                  default
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <DemoScriptPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}
