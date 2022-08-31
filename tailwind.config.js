/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout":"minmax(0,auto) minmax(10px,1fr)"
      },
      gridTemplateRows:{
        "main":"min-content 1fr min-content"
      },
      transitionProperty: {
        "width":"width"
      }
    },
  },
  plugins: [({addVariant}) => {
    addVariant('child','& > *')
  },],
}
