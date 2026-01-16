import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',
  outputFileTracingIncludes: {
    "/docs": ["src/content/docs/**/*", "public/docs/sidebar.json"],
    "/docs/[...slug]": ["src/content/docs/**/*", "public/docs/sidebar.json"],
    "/updates": ["src/content/updates/**/*"],
    "/updates/[slug]": ["src/content/updates/**/*"],
    "/sitemap.xml": ["src/content/updates/**/*"],
    "/es": ["src/content/i18n/**/*"],
  },
  async redirects() {
    return [
      {
        source: '/download',
        destination: '/install',
        permanent: true,
      },
      {
        source: '/capabilities',
        destination: '/use-cases',
        permanent: true,
      },
      {
        source: '/product',
        destination: '/free',
        permanent: true,
      },
      {
        source: '/why-gemini',
        destination: '/intelligence',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
