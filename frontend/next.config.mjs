const config = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3-gymnasium.kg'
      },
      {
        protocol: 'https',
        hostname: '3-gymnasium.kg'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      }
    ],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256]
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src'
    };
    return config;
  },

  experimental: {
    workerThreads: true,
    scrollRestoration: true
  }
};

export default config;