import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false, // set to true if this is a permanent redirect
      },
    ];
  },
};

export default nextConfig;
