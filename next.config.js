/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  eslint: {
    // Disable ESLint during builds (use separate tooling if needed)
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
