import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

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
        className={`${GeistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
