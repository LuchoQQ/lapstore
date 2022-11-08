/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_BASE_URL: process.env.SERVER_BASE_URL,
  },
  images: {
    domains: ['localhost'],
  }
}

module.exports = nextConfig
