module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Avenir"',"sans-serif"],
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
}