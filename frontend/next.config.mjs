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
  },
};

export default nextConfig;
