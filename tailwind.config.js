const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: 'all',
  purge: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '-20': '-5rem',
      },
      margin: {
        '-2px': '-2px',
      },
    },
  },
  variants: {
    inset: ['responsive', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
