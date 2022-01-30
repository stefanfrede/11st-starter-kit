const { resolve } = require('path');

export default {
  root: '_site',
  server: {
    hmr: {
      timeout: 300,
    },
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        404: resolve(__dirname, '_site', '404.html'),
        main: resolve(__dirname, '_site', 'index.html'),
        about: resolve(__dirname, '_site', 'about', 'index.html'),
      },
    },
    emptyOutDir: true,
  },
};
