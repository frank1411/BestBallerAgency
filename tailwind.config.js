/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2B5B',
          light: '#1C3F7C',
          dark: '#091D3E'
        },
        orange: {
          DEFAULT: '#e75e00',
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c1',
          300: '#f6be96',
          400: '#f19969',
          500: '#e75e00',
          600: '#d64d00',
          700: '#b33d00',
          800: '#903100',
          900: '#762900'
        },
        blue: {
          DEFAULT: '#3D9BE9',
          50: '#EAF5FD',
          100: '#D5EBFB',
          200: '#ABD6F7',
          300: '#82C2F3',
          400: '#59ADEF',
          500: '#3D9BE9',
          600: '#177CCE',
          700: '#125D9A',
          800: '#0C3E65',
          900: '#061F33'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)'
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg')"
      }
    }
  },
  plugins: []
};