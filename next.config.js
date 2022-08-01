const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
  experimental: {
    concurrentFeatures: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
