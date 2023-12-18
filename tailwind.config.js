/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'element-x-background': "url('./src/assets/element-x/parallax.webp')"
      }
    },
  },
  plugins: [],
}

