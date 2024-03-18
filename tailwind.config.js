/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'vsm': '300px',
        'tablet': {
          'min': '750px',
          'max': '1048px'
        },
      },
    },
    fontFamily: {
      carattere: ["Carattere"]
    },
  },
  plugins: [],
}
