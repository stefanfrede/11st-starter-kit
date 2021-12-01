export default {
  mount: {
    'src/_site': { url: '/', static: true },
    'src/scripts': { url: '/scripts' },
    'src/styles': { url: '/styles' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@jadex/snowpack-plugin-tailwindcss-jit',
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
