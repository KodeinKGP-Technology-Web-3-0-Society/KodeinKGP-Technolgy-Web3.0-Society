/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: 'shine 1.5s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(-35deg)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '100%': { transform: 'translateX(100%) rotate(-35deg)', opacity: '0' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
} 