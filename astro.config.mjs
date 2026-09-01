// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: update `site` to your real deployed URL after your first deploy
// (e.g. https://safetydesk.vercel.app or your own domain once you buy one).
// This is required for the sitemap and canonical URLs to be correct.
export default defineConfig({
  site: 'https://safetydesk.netlify.app',
  integrations: [sitemap()],
});
