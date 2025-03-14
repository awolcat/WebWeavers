/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        shrink: {
          from: { width: '100%' },
          to: { width: '0%' }
        }
      },
    },
  },
  plugins: [],
}

