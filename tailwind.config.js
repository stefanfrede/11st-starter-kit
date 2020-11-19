const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: 'all',
  purge: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    colors: {
      black: colors.black,
      gray: colors.coolGray,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      inset: {
        '-20': '-5rem',
      },
      margin: {
        '-1px': '-1px',
      },
    },
  },
  variants: {
    inset: ['responsive', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
