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
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'palm-dev.d3fau1t.net',
          },
        ],
      },
};

export default nextConfig;
