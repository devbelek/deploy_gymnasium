/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "gimnasium.onrender.com",
      "vermojctkdkrdsxvauwc.supabase.co",
      "3-gymnasium.kg",
      "api.dicebear.com",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/6.x/initials/svg/**',
      },
    ],
  },
};

export default nextConfig;