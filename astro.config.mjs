// astro.config.mjs
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";



import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'xx1h21w9',
      dataset: 'production',
      useCdn: false, // See note on using the CDN
      apiVersion: "2026-02-12", // insert the current date to access the latest version of the API
      studioBasePath: "/studio", // optional, defaults to "/studio"
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});