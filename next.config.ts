import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
