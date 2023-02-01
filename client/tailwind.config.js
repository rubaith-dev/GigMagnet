/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_image: "url('/Assets/hero_1.jpg.webp')",
      },

      colors:{
        primary:{
          50:"#ecfdf5",
          100:"#d1fae5",
          200:"#a7f3d0",
          300:"#6ee7b7",
          400:"#34d399",
          500:"#10b981",
          600:"#059669",
          700:"#047857",
          800:"#065f46",
          900:"#064e3b",
          950:"#022c22"
        }
      }
    },
  },
  plugins: [],
};
