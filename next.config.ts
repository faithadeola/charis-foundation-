import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — no server dependency for v1
  output: "export",

  images: {
    // Required for static export with next/image
    unoptimized: true,
  },

  // Silence Turbopack warning — aliases are resolved via tsconfig paths
  turbopack: {},
};

export default nextConfig;
