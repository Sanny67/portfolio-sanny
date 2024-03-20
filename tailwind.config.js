module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#ffca18',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpeg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.flex-grow-25': {
          flexGrow: '0.25',
        },
        '.flex-grow-50': {
          flexGrow: '0.5',
        },
        '.flex-grow-75': {
          flexGrow: '0.75',
        },
      };
      
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
