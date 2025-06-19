// front/next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Tus otras opciones de configuración de Next.js irían aquí */
  // ...

  images: {
    remotePatterns: [
      {
        protocol: 'https',          // El protocolo (http o https)
        hostname: 'ik.imagekit.io', // El dominio base del que vienen las imágenes
        pathname: '/fefgntjox/**', // El path específico y luego '**' para cualquier subruta
      },
    ],
  },
};

export default nextConfig;
