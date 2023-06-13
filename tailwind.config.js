/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors
      colors: {
        backgroundColor: '#1C1A1A',
        accent: '#3A3434',
        darkGold: '#DCAB53',
        mediumGold: '#E8C484',
        lightGold: '#FFEAC1',
        modalColor: '#2C2727',
        textGrey: '#9A9A9A',
        divide: 'rgba(255, 255, 255, 0.29)'
      },
      // Primary Gradient Color
      backgroundImage: {
        gradient: 'linear-gradient(95.63deg, #DCAB53 0%, #FFE1AB 99.99%)'
      },
      // Font Weight
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800
      },
      // Screens
      screens: {
        'sm': '480px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1900px'
      },
    },
  },
  plugins: [],
}