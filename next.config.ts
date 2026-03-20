import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensures Next/Turbopack uses the correct workspace root in monorepo-like setups.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
