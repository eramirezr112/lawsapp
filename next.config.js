/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_PUBLIC_API: process.env.APP_PUBLIC_API,
  },
};

module.exports = nextConfig;
