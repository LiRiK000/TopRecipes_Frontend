/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.devtool = false
    return config
  },
}

export default nextConfig
