/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Cần thiết cho Cloudflare Pages
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      }
    ]
  },
  // Tắt source maps trong production để giảm kích thước
  productionBrowserSourceMaps: false
};

module.exports = nextConfig; 