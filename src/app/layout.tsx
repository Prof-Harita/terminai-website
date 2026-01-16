import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "terminaI",
      url: "https://terminai.org",
      logo: "https://terminai.org/banner.svg",
      sameAs: ["https://github.com/Prof-Harita/terminaI"],
    },
    {
      "@type": "SoftwareApplication",
      "name": "TerminaI",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Linux, macOS, Windows",
      "license": "https://opensource.org/licenses/Apache-2.0",
      "isAccessibleForFree": true,
      "description":
        "Local-first computer operator with governed execution, approvals, and local audit logs. Model-agnostic.",
      "url": "https://terminai.org",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://terminai.org"),
  title: "TerminaI — Local-first computer operator with approvals + audit logs",
  description: "Windows/Linux/macOS. Model-agnostic (OpenAI-compatible + local gateways). Governed execution, local audit logs.",
  keywords: ["terminal", "AI", "agent", "system operator", "open source", "audit logs", "governed autonomy"],
  authors: [{ name: "terminaI Contributors" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terminai.org",
    siteName: "terminaI",
    title: "TerminaI — Local-first computer operator with approvals + audit logs",
    description: "Windows/Linux/macOS. Model-agnostic. Governed execution, local audit logs.",
    images: ["/banner.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TerminaI — Local-first computer operator with approvals + audit logs",
    description: "Windows/Linux/macOS. Model-agnostic. Governed execution, local audit logs.",
    images: ["/banner.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div id="main">{children}</div>
      </body>
    </html>
  );
}
