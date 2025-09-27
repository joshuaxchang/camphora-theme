/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F7FBFF',
        'brand-card': '#FFFFFF',
        'brand-text': '#6D5D4D',
        'brand-primary': '#4C8562',
        'brand-primary-hover': '#3E6B50',
        'brand-accent': '#c5ad98ff',
        'brand-accent-light': '#F0F3F5',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['EB Garamond', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        'card': '0 6px 16px 0 rgba(74, 74, 74, 0.08)',
        'card-hover': '0 10px 30px 0 rgba(74, 74, 74, 0.2)',
      },
      backdropBlur: {
        'custom': '1.5px',
      },
      // Typography plugin settings can be added here if needed,
      // but the plugin itself is now active.
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}