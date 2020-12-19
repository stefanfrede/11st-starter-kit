module.exports = {
  cacheId: '11ststarterkit',
  globDirectory: 'dist/',
  globPatterns: ['**/*.{css,js,json}'],
  swDest: 'dist/sw.js',

  runtimeCaching: [
    {
      urlPattern: /(?:\/)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'html',
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
      },
    },
    {
      urlPattern: /^(https:\/\/rsms\.me\/inter\/).+(.css)$/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'inter-font-stylesheet',
      },
    },
    {
      urlPattern: /^(https:\/\/rsms\.me\/inter\/font-files\/)/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'inter-font-webfont',
        cacheableResponse: {
          statuses: [0, 200],
        },
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|gif|webp|svg|ico)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxAgeSeconds: 30 * 24 * 60 * 60,
          maxEntries: 30,
        },
      },
    },
  ],
};
