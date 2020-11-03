const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
})
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  }
};