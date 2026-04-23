import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["gsap", "@gsap/react"],
  },
};

export default nextConfig;
