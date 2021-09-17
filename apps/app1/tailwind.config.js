const { join } = require('path');
module.exports = {
  mode: 'jit',
  purge: [join(__dirname, './src/**/*.{js,jsx,ts,tsx}')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
