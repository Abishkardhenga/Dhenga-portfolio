import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images : {
    domains : ['pexels.com', 'localhost', 'https://www.pexels.com/','images.pexels.com','media.licdn.com','via.placeholder.com','img.freepik.com'] 
  }
};

export default nextConfig;
