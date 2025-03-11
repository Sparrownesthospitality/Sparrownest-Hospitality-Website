/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      height: {
        screen: '100vh',
      },
    },
  },
  plugins: [],
};