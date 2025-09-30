const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'ext.same-assets.com',
      'ugc.same-assets.com'
    ],
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

module.exports = withNextIntl(nextConfig);