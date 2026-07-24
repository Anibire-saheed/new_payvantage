import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    scrollRestoration: true,
  },
  devIndicators: false,
};

export default nextConfig;
