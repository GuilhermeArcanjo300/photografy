/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jomolhari', 'sans-serif'],
      },
      textColor: {
        'primary': '#F88F87',
        'primary-light': '#FABBB7',
      },
      backgroundColor: {
        'primary': '#F88F87',
      },
      borderColor: {
        'primary': '#F88F87',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

