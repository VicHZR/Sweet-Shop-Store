import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // En Next.js moderno, la raíz de Turbopack se define en el primer nivel de configuración
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
