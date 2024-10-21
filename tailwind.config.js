/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003459',
        'secondary': '#FCEED5',
        'background': '#FDFDFD',
        'primary-light': '#FFDFA3',
        'primary-dark': '#2B3847',
        'background-light': '#ffecd5',
      },
      fontFamily: {
        'sans': ['SVN-Gilroy', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

