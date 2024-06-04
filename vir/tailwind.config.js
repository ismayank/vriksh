module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-green1': 'rgba(73, 119, 53, 0.51)',
        'custom-green2': 'rgba(126, 217, 87, 1)',
        'custom-green3': 'rgba(73, 119, 53, 0.8)',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        inter: ['Inter'],
      },
      keyframes: {    
        dissolve: {
          '0%': {
            opacity: '0.2',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        dissolve: 'dissolve 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
