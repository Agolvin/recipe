import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */

  /*
  experimental: {
    serverActions: true, // Activation de serverActions
  },
  */

  experimental: {
    serverActions: {}, // Activation de serverActions
  },

};

export default nextConfig;
