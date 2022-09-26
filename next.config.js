/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'carvuk.com', 'carvuk.com/images'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  // ...
});

module.exports = withPWA({
  nextConfig,
});
