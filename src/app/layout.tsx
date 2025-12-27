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
      name: "terminaI",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Linux, macOS, Windows (WSL)",
      description:
        "Open source AI terminal operator with voice control, web remote, and governed autonomy.",
      url: "https://terminai.org",
    },
  ],
};

export const metadata: Metadata = {
  title: "terminaI | The Universal System Operator",
  description: "Open source AI terminal agent with voice control, web remote, and system awareness.",
  keywords: ["terminal", "AI", "agent", "voice control", "system operator", "open source"],
  authors: [{ name: "terminaI Contributors" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terminai.org",
    siteName: "terminaI",
    title: "terminaI | The Universal System Operator",
    description: "Open source AI terminal agent with voice control, web remote, and system awareness.",
    images: ["/banner.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "terminaI | The Universal System Operator",
    description: "Open source AI terminal agent with voice control, web remote, and system awareness.",
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
