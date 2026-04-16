/** @type {import('next').NextConfig} */

// Static export only: no Node.js server in production. The site is built to static
// HTML/CSS/JS and can be served from any static host (e.g. GitHub Pages).
//
// GitHub Pages: if the site is served at https://<user>.github.io/<repo-name>/,
// set repoSubpath to your repo name (e.g. 'evazu'). Leave empty for:
// - Pages at https://<user>.github.io/ (user/org site repo), or
// - a custom domain (e.g. evazu.art) where the site is served from the domain root.
const repoSubpath = '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(repoSubpath && {
    basePath: `/${repoSubpath}`,
    assetPrefix: `/${repoSubpath}/`,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: repoSubpath ? `/${repoSubpath}` : '',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
