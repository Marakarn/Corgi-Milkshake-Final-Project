/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      poppins: ['"Poppins"']
    }},
    container: {
      screens: {
        sm: '380px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }},
  },
  plugins: [require("daisyui")],
  daisyui: {  themes: ["light", "dark", "cupcake"], },
}


