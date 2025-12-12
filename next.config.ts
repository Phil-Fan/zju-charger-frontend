import type { NextConfig } from "next";

const fetchInterval = process.env.FETCH_INTERVAL;

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    ...(fetchInterval ? { NEXT_PUBLIC_FETCH_INTERVAL: fetchInterval } : {}),
  },
};

export default nextConfig;
