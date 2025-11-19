/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: 'var(--navyBlue)',
        skyBlue: 'var(--skyBlue)',
        cyan: 'var(--cyan)',
        deepBlue: 'var(--deepBlue)',
    }
    },
  },
  plugins: [require('tailwindcss-motion')],
}