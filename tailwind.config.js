const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./src/**/*.liquid', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '-20': '-5rem',
      },
    },
  },
  variants: {
    inset: ['responsive', 'focus'],
  },
  plugins: [require('@tailwindcss/typography')],
};
