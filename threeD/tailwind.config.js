/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        animation: {
          loadingBar: 'loadingBar 4s linear forwards',
          rowUp: 'rowUp 1s ease-in-out forwards',
          rowDown: 'rowDown 1s ease-in-out forwards',
        },
        keyframes: {
          loadingBar: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
          rowUp: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
          },
          rowDown: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(100%)' },
          },
        },
      },
    },
    plugins: [],
  };