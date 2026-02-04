import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
