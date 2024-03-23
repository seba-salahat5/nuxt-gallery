/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
        '2xl': '1720px',
      },
      colors: {
        text: '#000000',
        brand: '#72A8CA',
        line: '#9C9C9C',
      },
      spacing: {
        '2': '7px',
        '20': '88px',
        '28': '120px',
        '72': '291px',
        '96': '520px',
      }
    },
  },
  plugins: [],
}

