/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '3-gymnasium.kg',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'vermojctkdkrdsxvauwc.supabase.co',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '3-gymnasium.kg',
                pathname: '/**',
             },
        ],
    },
};

export default nextConfig;
