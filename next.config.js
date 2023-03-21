/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org'],
    unoptimized: true,
  },
  basePath: isProd ? '/PythonLab.github.io' : '',
  assetPrefix: isProd ? '/PythonLab.github.io/' : '',
};

module.exports = nextConfig;
