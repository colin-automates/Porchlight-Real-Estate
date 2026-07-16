import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/accessibility-statement",
        destination: "/accessibility",
        permanent: true,
      },
      {
        source: "/book-online",
        destination: "/schedule-viewing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
