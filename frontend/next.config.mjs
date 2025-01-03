const config = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3-gymnasium.kg',
        port: '',
        pathname: '/**'
      }
    ],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    path: '/_next/image',
    dangerouslyAllowSVG: true
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src'  // Изменили на относительный путь
    };
    return config;
  },

  experimental: {
    workerThreads: true,
    scrollRestoration: true
  }
};

export default config;