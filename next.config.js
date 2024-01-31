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

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// })
// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx'],
//   target: 'serverless',
// })
