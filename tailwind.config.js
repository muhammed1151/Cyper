/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust to match your project structure
  ],
  theme: {
    extend: {
      colors:{
        secondary:'#cfcfcf',
        textColor:'#909090'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
