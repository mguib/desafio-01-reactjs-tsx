/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
      colors:{
        gray:{
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        danger:{
          500: '#E25858'
        },
        purple:{
          400: '#8284FA',
          500: '#5E60CE'
        },
        blue:{
          400: '#4EA8DE',
          500: '#1E6F9F'
        },
        black:{
          500: '#454545'
        }
      }
    },
  },
  plugins: [],
}
