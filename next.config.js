const { Footer } = require("antd/lib/layout/layout");

module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            ./Footer: false
        }
    }

    return config;
  }
  }