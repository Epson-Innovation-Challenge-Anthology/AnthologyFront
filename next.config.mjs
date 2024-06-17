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
};

export default nextConfig;
