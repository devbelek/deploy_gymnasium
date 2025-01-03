const config = {
  output: 'standalone',
  poweredByHeader: false,
  compress: true,

  images: {
    domains: ['3-gymnasium.kg'],
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    loader: 'default',
    unoptimized: false
  },

  webpack: (config, { dev }) => {
    config.optimization = {
      ...config.optimization,
      minimize: !dev,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000
      }
    };
    return config;
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    workerThreads: true
  }
};

export default config;