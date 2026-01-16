import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | TerminaI",
  description: "Now, Next, and Exploring priorities for TerminaI development. Community-driven, best-effort OSS.",
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
