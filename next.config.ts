import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // The Industries page was renamed to /our-clients; redirect in case
      // the old path was ever crawled, indexed, or linked externally.
      {
        source: "/industries",
        destination: "/our-clients",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
