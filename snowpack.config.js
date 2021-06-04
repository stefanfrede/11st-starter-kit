module.exports = {
  mount: {
    'src/_site': { url: '/', static: true },
    'src/scripts': { url: '/scripts' },
    'src/styles': { url: '/styles' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@jadex/snowpack-plugin-tailwindcss-jit',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  packageOptions: {
    NODE_ENV: true,
  },
  buildOptions: {
    clean: true,
    out: 'dist',
  },
  devOptions: {
    open: 'none',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
};
