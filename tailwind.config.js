/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inknut: ['"Inknut Antiqua"', 'serif'],
        rubikDoodle: ['"Rubik Doodle Shadow"', 'cursive'],
        chonburi: ['Chonburi', 'serif'],
        inria: ['Inria Serif', 'serif'],
      },
    },
  },
  plugins: [],
}