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

module.exports = nextConfig;