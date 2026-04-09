// js/tailwind.js - Local Tailwind Configuration for Loadro
// Version 1.2

tailwind.config = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0A2540',
        'brand-orange': '#FF6200',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
