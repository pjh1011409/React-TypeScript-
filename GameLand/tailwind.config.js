module.exports = {
  content: [
    'src/components/**/*.{html,js,jsx,ts,tsx}',
    'src/layout/**/*.{html,js,jsx,ts,tsx}',
    'src/pages/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        default: '0 2px 0 #000',
        md: '0 2px 2px #000',
        h2: '5px 5px 8px #422b52, 5px 5px 8px #0000Fc',
        h1: '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
