/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
        light: ['light', 'sans-serif'],
      },
      colors: {
        primary: {
          100: 'hsla(224, 67%, 52%,0.2)',
          200: 'hsla(224, 67%, 52%,0.3)',
          300: 'hsla(224, 67%, 52%,0.4)',
          400: 'hsla(224, 67%, 52%,0.5)',
          500: 'hsla(224, 67%, 52%,0.6)',
          600: 'hsla(224, 67%, 52%,0.7)',
          700: 'hsla(224, 67%, 52%,0.8)',
          800: 'hsla(224, 67%, 52%,0.9)',
          900: 'hsla(224, 67%, 52%,1)',
        },
      },
    },
  },
  plugins: [],
}
