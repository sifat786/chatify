/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'sans': ['Open Sans', 'sans-serif'],
        'pops': ['Poppins', 'sans-serif'],
      },
      colors : {
        'primary': '#5F35F5',
        'secondary': '#11175D',
        'third': 'rgba(77, 77, 77, 0.75)',
        'shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}