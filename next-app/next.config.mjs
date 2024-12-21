/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            }
        ],
        domains: ['plaravelapi.test'],
    }
};

export default nextConfig;
