/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Tennisclub-Website',
  assetPrefix: '/Tennisclub-Website/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
