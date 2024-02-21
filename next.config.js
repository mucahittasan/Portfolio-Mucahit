/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['user-images.githubusercontent.com', 'github.com'],
  },
}

module.exports = nextConfig
