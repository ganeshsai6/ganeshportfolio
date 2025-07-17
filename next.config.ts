import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // This is not recommended for production, but can be useful during development
  },
};

export default nextConfig;
