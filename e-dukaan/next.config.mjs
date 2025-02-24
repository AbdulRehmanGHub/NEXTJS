/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com"
                // hostname: "encrypted-tbn0.gstatic.com"
            },
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com"
            }

        ]
    }
};

export default nextConfig;
