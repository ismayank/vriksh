module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      spacing: {
        '28rem': '28rem',
      },
      fontSize: {
        '1.2rem': '1.2rem',
      },
      colors: {
        'custom-green': 'rgba(73, 119, 53, 0.51)',
        'custom-green2': 'rgba(126, 217, 87, 1)',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        inter:['Inter'],
      },
    },
  },
  plugins: [],
}
