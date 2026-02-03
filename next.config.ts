import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Sitio 100% estático: cero funciones serverless en Vercel, solo archivos estáticos
  output: "export",
  // Con output: 'export' no hay API de optimización; imágenes se sirven tal cual (siguen siendo estáticas)
  images: {
    unoptimized: true,
  },
  // Reducir ruido en build
  poweredByHeader: false,
};

export default nextConfig;
