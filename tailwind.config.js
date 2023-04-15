const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./comp/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#22C954'
        },
        digi: {
          primary: "#00AC4F",
          light: "#A5A5A5"
        }
      }
    },
    screens: {
      ts: "360px",
      xs: '480px',
      ...defaultTheme.screens,
      "2xl": "1920",
    },
    fontSize: {
      'xs': ['12px', '1.4'],
      'sm': ['14px', '1.4'],
      'base': ['16px', '1.4'],
      'lg': ['18px', '1.4'],
      'xl': ['20px', '1.4'],
      '2xl': ['24px', '1.4'],
      '3xl': ['30px', '1.4'],
      '4xl': ['36px', '1.4'],
      '5xl': ['48px', '1.4'],
      '6xl': ['60px', '1.4'],
      '7xl': ['72px', '1.4'],
    },
  },
  plugins: [],
}
