import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phet.colorado.edu',
        pathname: '/sims/html/**',
      },
    ],
  },
};

export default nextConfig;
