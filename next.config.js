const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // sassOptions: {
  //     includePaths: [path.join(__dirname, 'styles')],
  // },
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // basePath: "/astroclub-niser.github.io",
  // images: {
  //   unoptimized: true,
  // },
}

module.exports = nextConfig
