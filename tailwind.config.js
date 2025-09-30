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
        'brand-bg': '#F0F9FF',          // A clearer, light sky blue
        'brand-card': '#FFFFFF',          // Clean and simple
        'brand-text-main': '#4A4036',   // REPLACES 'brand-body' - dark brown from tree trunk
        'brand-text-sub': '#6D5D4D',    // Your old 'brand-text', good for subheadings
        'brand-primary': '#4C8562',       // Leaf green, great choice
        'brand-primary-hover': '#3E6B50',
        'brand-accent': '#c5ad98ff',      // Sunlit bark/earth
        'brand-accent-light': '#F0F3F5', // Neutral borders/dividers
        'brand-cta': '#F59E0B',          // NEW: Sunlight yellow for call to action
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
      // ADD THIS TYPOGRAPHY CONFIGURATION
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.brand-text-sub'),
            '--tw-prose-body': theme('colors.brand-text-main'),
            '--tw-prose-links': theme('colors.brand-primary'),
            // You can also customize other elements like links, body text etc.
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}