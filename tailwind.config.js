const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1' }],
      '7xl': ['5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['DM Sans', ...defaultTheme.fontFamily.sans],
        logo: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        'purple-primary': '#445FEB',
        'purple-primary-light': '#e8e9ff',
        'purple-primary-dark': '#6029A8',
        'purple-secondary': '#413f57',
        'yellow-secondary-light': '#FCE3B1',
        'yellow-secondary': '#F9C784',
        'grey-light': '#B7B7C0',
        'grey-dark': '#6C757D',
        red: '#C9302C',
        green: '#319031',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
