import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
   site: 'https://lexingtonthemes.com',
  integrations: [tailwind(), image(), compress(),  sitemap()]
});