module.exports = {
  mount: {
    build: { url: '/', static: true },
    'src/scripts': { url: '/scripts' },
    'src/styles': { url: '/styles' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
    [
      '@snowpack/plugin-optimize',
      {
        preloadModules: true,
        target: 'es2020',
      },
    ],
  ],
  installOptions: {
    NODE_ENV: true,
  },
  buildOptions: {
    clean: true,
    out: 'dist',
  },
  devOptions: {
    hmrDelay: 300,
    open: 'none',
  },
};
