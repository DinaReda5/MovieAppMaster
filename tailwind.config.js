/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html',   // Include all HTML files in the src directory and its subdirectories
    './src/**/*.js',     // Include all JavaScript files in the src directory and its subdirectories
    './src/css/*.css' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 4px rgba(14, 55, 54, 0.15)', // Custom shadow
      },
      colors: {
        'custom-red': '#ff2c1f',
        'main-color': '#ff2c1f',
        'text-color':'#020307',
        'bg-color':'#fff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


