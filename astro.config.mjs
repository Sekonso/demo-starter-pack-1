// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), icon()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Molle",
      cssVariable: "--font-display"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-normal"
    }
  ],
});