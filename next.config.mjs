/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforce React strict mode for development
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pisces.bbystatic.com', // Add other domains as needed
      },
    ],
  },
};

export default nextConfig;