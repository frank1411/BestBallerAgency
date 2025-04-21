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
          DEFAULT: '#FF6B00',
          50: '#FFF2E8',
          100: '#FFE0CC',
          200: '#FFC299',
          300: '#FFA366',
          400: '#FF8533',
          500: '#FF6B00',
          600: '#CC5500',
          700: '#994000',
          800: '#662B00',
          900: '#331500'
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