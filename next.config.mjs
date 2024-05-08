/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        remotePatterns: [
          {
            // protocol: "https",
            hostname: "previews.123rf.com",
            // port: "",
            // pathname: "/account123/**",
          },
         
        ],
      },
};

export default nextConfig;
