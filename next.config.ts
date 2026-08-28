import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  devIndicators: false,
};

export default nextConfig;
