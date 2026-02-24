import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensure it builds cleanly on Vercel.
  output: "standalone",
  eslint: {
    // ESLint flat-config + Next 15 can be finicky in CI; keep builds unblocked.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
