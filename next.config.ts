import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{ 
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol:"https",
        hostname:'*',
      }
    ],
  },
  experimental:{
    after:true
    // ppr:"incremental",
  },
  // devIndicators: {
  //   appIsrStatus:true,
  //   buildActivity:true,
  //   buildActivityPosition:"bottom-right"
  // }
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
};
  
export default nextConfig;
