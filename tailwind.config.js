const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    colors: {
      black: colors.black,
      gray: colors.coolGray,
      red: colors.red,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  variants: {
    inset: ['responsive', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
