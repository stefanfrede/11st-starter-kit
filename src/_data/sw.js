const { nanoid } = require('nanoid');

module.exports = function () {
  return {
    excludedUrls: [],
    ignoredHosts: ['localhost'],
    preCacheUrls: [
      '/',
      '/404.html',
      '/index.html',
      '/about/index.html',
      '/contact/index.html',
      '/favicon.ico',
      '/images/social-share.png',
      '/images/icons/favicon.svg',
      '/images/icons/icon-72x72.png',
      '/images/icons/icon-96x96.png',
      '/images/icons/icon-128x128.png',
      '/images/icons/icon-144x144.png',
      '/images/icons/icon-152x152.png',
      '/images/icons/icon-192x192.png',
      '/images/icons/icon-384x384.png',
      '/images/icons/icon-512x512.png',
      '/images/icons/maskable_icon.png',
      '/styles/index.css',
    ],
    nanoid: nanoid(),
  };
};
