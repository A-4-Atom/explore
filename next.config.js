/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.geojson$/,
      type: "json", // Use the built-in asset type for JSON files
    });
    // Return the modified config
    return config;
  },
  images: {
    domains: ['flagcdn.com']
  }
};

module.exports = nextConfig;
