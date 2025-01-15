import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns : [
      {
        protocol: "https",
        hostname: "openweathermap.org",
        pathname: "/img/wn/**"
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
