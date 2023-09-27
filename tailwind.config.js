/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container horizontally
        padding: '0px', // Add padding to the container
      },
    },
  },
  plugins: [],
}

