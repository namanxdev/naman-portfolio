import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Add this section to ignore ESLint errors during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;