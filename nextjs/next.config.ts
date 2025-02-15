import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  experimental: {

    serverActions: {}, // Activation de serverActions
    

    turbo: {
      rules: {
        resolveAlias: {
          "src/utils": false, // Empêche Turbopack d'inclure ce dossier
        },
      }
    }




  },

  webpack(config) {
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto', // Permet de charger le fichier JSON sans qu'il soit traité comme un module dynamique
      exclude: /node_modules|src\/utils/, // Exclure src/utils pour éviter que Turbopack le traite
    });
    return config;
  }


  

};

export default nextConfig;






/*

  webpack(config) {
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto', // Permet de charger le fichier JSON sans qu'il soit traité comme un module dynamique
      exclude: /node_modules|src\/utils/, // Exclure src/utils pour éviter que Turbopack le traite
    });
    return config;
  }

*/
