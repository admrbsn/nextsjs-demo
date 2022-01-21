module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#fe6f6c",
      },
      boxShadow: {
        DEFAULT: '0 3px 6px -1px rgba(10, 20, 40, 0.075)',
        md: '0 6px 8px -2px rgba(10, 20, 40, 0.025)',
      },
      fontFamily: {
        sans: ["Avenir Next", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
