/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

const constants = {
  purple: '#6160DC',
  blue: '#03DAF2',
  orange: '#FFB74A',
  green: '#47B17C',
  black: '#222',
  white: '#ffffff',
  red: '#FF4A55',
  gray: '#B9B9B9',
  'light-gray': '#FCFCFC',
  'light-green': '#ebfff7',
  'light-purple': '#f1e6ff',
  grey2: '#f2f2f2',
  grey3: '#585858',
  ivory: '#D3D3D3',
  'dark-blue': '#180808',
};
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants,
    },
    extend: {
      fontSize: {
        s: '0.59rem',
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '0.82rem',
        '1.5x1': '1.5rem',
        '2x1': '1.725rem',
        '3x1': '2.155rem',
        '4x1': '2.58rem',
        '5x1': '3.45rem',
        '6x1': '4.3rem',
        '7x1': '5.17rem',
        '8x1': '6.9rem',
        '9x1': '9.2rem',
      },
    },
  },
  plugins: [],
};
