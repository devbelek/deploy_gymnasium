// next.config.mjs
import withBundleAnalyzer from '@next/bundle-analyzer';

const config = {
  poweredByHeader: false,
  compress: true,

  images: {
    domains: ['3-gymnasium.kg'],
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  webpack: (config, { dev, isServer }) => {
    config.optimization = {
      ...config.optimization,
      minimize: !dev,
      minimizer: [
        ...config.optimization.minimizer || [],
      ],
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
    workerThreads: true,
    legacyBrowsers: false
  }
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})(config);