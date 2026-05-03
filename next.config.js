/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio-website" : "",
  assetPrefix: isProd ? "/portfolio-website/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/portfolio-website" : "",
  },
};

module.exports = nextConfig;
