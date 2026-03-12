/** @type {import('next').NextConfig} */

// Static export only: no Node.js server in production. The site is built to static
// HTML/CSS/JS and can be served from any static host (e.g. GitHub Pages).
//
// GitHub Pages: if the site is served at https://<user>.github.io/<repo-name>/,
// set repoSubpath to your repo name (e.g. 'evazu'). Leave empty for user/org root.
const repoSubpath = 'evazu';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(repoSubpath && {
    basePath: `/${repoSubpath}`,
    assetPrefix: `/${repoSubpath}/`,
  }),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
