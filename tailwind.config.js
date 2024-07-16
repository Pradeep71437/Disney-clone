/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecorationThickness: {
        'thick': '9px',
        'extra-thick': '9px', // You can customize this value
      },
    },
  },
  variants: {
    extend: {
      textDecorationThickness: ['hover', 'focus'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')

  ],
}