/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "3-gymnasium.kg",
                port: "",
                pathname: "/media/**", // Changed to cover both /media/images/ and /media/avatars/
            },
            {
                protocol: "https",
                hostname: "gimnasium.onrender.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "vermojctkdkrdsxvauwc.supabase.co",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "api.dicebear.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
