/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/main/register",
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'https://palm.fly.dev/:path*'
            }
        ]
    }
};

export default nextConfig;
