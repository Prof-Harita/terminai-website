import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',
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
