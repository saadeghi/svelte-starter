module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts,svx,md}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Avenir"',"sans-serif"],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}