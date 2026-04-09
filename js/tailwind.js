// js/tailwind.js - Local Tailwind with Brand Customization for Loadro

// This is the Tailwind browser script with your custom config embedded
// Note: For full production without any external dependency, you should eventually use the Tailwind CLI to generate a static output.css file.

tailwind.config = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0A2540',
        'brand-orange': '#FF6200',
        'navy': {
          900: '#0A2540',
          800: '#1E3A8A',
        },
        'orange': {
          500: '#FF6200',
          600: '#E55A00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
      }
    }
  }
}
