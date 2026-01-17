import { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | terminaI",
  description: "Terms of service and usage policies for terminaI.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32">
        {/* Hero */}
        <section className="section pb-16">
          <div className="container text-center max-w-4xl">
            <h1 className="mb-6">
              Terms of{" "}
              <span className="text-[var(--color-brand-red)]">Service</span>
            </h1>
            <p className="text-xl opacity-70">
              How we operate and what you can expect from terminaI
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="section pt-0">
          <div className="container max-w-4xl">
            <div className="prose prose-invert prose-headings:text-white prose-headings:font-bold prose-p:text-white/80 prose-li:text-white/80 max-w-none">

              <p className="text-lg leading-relaxed mb-8">
                Welcome to terminaI. These terms govern your use of our open-source terminal operator AI.
                By using terminaI, you agree to these terms.
              </p>

              <h2>1. What is terminaI?</h2>
              <p>
                terminaI is an open-source, sovereign terminal operator AI that provides governed autonomy
                for system operations. It combines AI capabilities with strict safety controls to help users
                operate their systems more effectively.
              </p>

              <h2>2. Open Source License</h2>
              <p>
                terminaI is released under the Apache License 2.0. This means you are free to use, modify,
                and distribute the software subject to the terms of that license. The source code is
                available on GitHub at <a href="https://github.com/Prof-Harita/terminaI" className="text-brand-red">github.com/Prof-Harita/terminaI</a>.
              </p>

              <h2>3. Your Responsibilities</h2>
              <p>As a user of terminaI, you agree to:</p>
              <ul>
                <li>Use the software in compliance with applicable laws and regulations</li>
                <li>Respect the safety mechanisms and approval systems built into terminaI</li>
                <li>Not attempt to bypass or circumvent safety controls</li>
                <li>Use terminaI only on systems you have legitimate access to operate</li>
                <li>Respect the privacy and data of others when using shared systems</li>
              </ul>

              <h2>4. Community Maintenance</h2>
              <p>This is a best-effort community project. We strive to:</p>
              <ul>
                <li>Maintain the open-source nature of terminaI</li>
                <li>Provide reasonable safety mechanisms to prevent misuse</li>
                <li>Review contributions and security reports</li>
                <li>Respect your privacy and data sovereignty</li>
              </ul>
              <p>
                  There is no implied Service Level Agreement (SLA) or guarantee of support.
              </p>

              <h2>5. Safety and Security</h2>
              <p>
                terminaI implements multiple layers of safety controls including approval ladders,
                audit logging, and fail-safe mechanisms. However, as with any software that can
                execute system commands, there are inherent risks. You acknowledge that:
              </p>
              <ul>
                <li>AI systems can make mistakes or be exploited</li>
                <li>You are ultimately responsible for the commands executed on your system</li>
                <li>You should review and understand what terminaI is doing before approving actions</li>
                <li>You should not use terminaI on critical systems without proper testing</li>
              </ul>

              <h2>6. Data and Privacy</h2>
              <p>
                terminaI is designed with privacy in mind. When using Google&apos;s Gemini API:
              </p>
              <ul>
                <li>Your queries may be processed by Google&apos;s servers</li>
                <li>You should review Google&apos;s privacy policy for their AI services</li>
                <li>We recommend using API keys you control and understand the data flows</li>
                <li>Local operations (like voice processing) stay on your device</li>
              </ul>

              <p>
                terminaI includes audit logging features. These logs stay local to your system
                unless you explicitly configure remote logging. You control what gets logged and where.
              </p>

              <h2>7. No Warranties</h2>
              <p>
                terminaI is provided &quot;as is&quot; without warranty of any kind. We make no guarantees
                about its suitability for any particular purpose. You use it at your own risk.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall the creators or contributors of terminaI be liable for any
                damages arising from your use of the software, including but not limited to
                data loss, system damage, or operational disruptions.
              </p>

              <h2>9. Contributing</h2>
              <p>
                We welcome contributions to terminaI. By contributing code, documentation, or
                other materials, you agree to license your contributions under the same Apache
                License 2.0 terms as the rest of the project.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                These terms may be updated as terminaI evolves. We will make reasonable efforts
                to notify users of significant changes, but you should review these terms periodically.
              </p>

              <h2>11. Contact</h2>
              <p>
                Questions about these terms? Reach out through our GitHub repository or community channels.
              </p>

              <div className="mt-12 p-6 rounded-lg border border-white/10 bg-white/5">
                <p className="text-sm opacity-60 text-center">
                  These terms were last updated: December 2024<br/>
                  terminaI is an open-source project maintained by its community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
