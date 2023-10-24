const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    // },
    // webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
}

module.exports = nextConfig
