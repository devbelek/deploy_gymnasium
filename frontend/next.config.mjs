// next.config.mjs
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

 webpack: (config, { dev, isServer }) => {
   if (!dev && !isServer) {
     Object.assign(config.resolve.alias, {
       'react': 'preact/compat',
       'react-dom/test-utils': 'preact/test-utils',
       'react-dom': 'preact/compat',
     });
   }

   config.optimization = {
     ...config.optimization,
     minimize: !dev,
     minimizer: [
       ...config.optimization.minimizer || [],
     ],
     splitChunks: {
       chunks: 'all',
       maxInitialRequests: 25,
       minSize: 20000,
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name(module) {
             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
             return `vendor.${packageName.replace('@', '')}`;
           },
         },
       },
     },
     runtimeChunk: 'single'
   };

   return config;
 },

 experimental: {
   optimizeCss: true,
   scrollRestoration: true,
   workerThreads: true,
   legacyBrowsers: false,
   serverActions: true,
   typedRoutes: true
 }
};

export default config;