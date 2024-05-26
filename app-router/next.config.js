/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
}
module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }
module.exports = nextConfig
