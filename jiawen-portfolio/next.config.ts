import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/profile',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
