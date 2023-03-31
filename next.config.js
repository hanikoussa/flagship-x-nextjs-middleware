/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    unoptimized:true
  },
  env: {
    envId: process.env.envId,
  },
}

module.exports = nextConfig
