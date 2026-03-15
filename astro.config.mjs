// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ─────────────────────────────────────────────────────────────────
// GitHub Pages deployment config
//
// Option A — Deploying to a custom domain (e.g. www.caracarasoftware.com)
//   Set `site` to your custom domain. Remove or leave `base` as '/'.
//
// Option B — Deploying to a project site (username.github.io/repo-name)
//   Set `site` to 'https://<username>.github.io'
//   Set `base` to '/<repo-name>'
//
// Option C — Deploying to a user/org site (username.github.io)
//   Set `site` to 'https://<username>.github.io'
//   Leave `base` as '/' or remove it.
// ─────────────────────────────────────────────────────────────────

export default defineConfig({
  // TODO: update this to your actual GitHub Pages URL or custom domain
  site: 'https://your-username.github.io',
  // base: '/your-repo-name', // uncomment for project sites

  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});
