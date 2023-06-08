/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tab': '640px',
      // => @media (min-width: 640px) { ... }

      'lap': '1160px',
      // => @media (min-width: 1024px) { ... }

      'desk': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        'Poppins': ['sans-serif'],
        'SourceSansPro': ['sans-serif']
      },
    },
  },
  plugins: [],
}
