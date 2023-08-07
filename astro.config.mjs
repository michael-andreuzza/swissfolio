import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: 'https://lexingtonthemes.com',
  compressHTML: true,
  integrations: [tailwind(), image(), sitemap()]
});