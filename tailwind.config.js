/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f2f6ef',
          100: '#e3ecd9',
          200: '#c9dbb8',
          300: '#a8c58e',
          400: '#87ab6a',
          500: '#6b8f52',
          600: '#547342',
          700: '#435936',
          800: '#38472e',
          900: '#2f3b27',
        },
        cream: '#faf9f6',
        ink: '#2d3529',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 12px -4px rgb(107 143 82 / 0.12), 0 4px 16px -6px rgb(0 0 0 / 0.04)',
        'soft-lg': '0 8px 28px -8px rgb(107 143 82 / 0.15), 0 12px 32px -12px rgb(0 0 0 / 0.06)',
        'nav': '0 1px 0 0 rgb(107 143 82 / 0.06)',
      },
      backgroundImage: {
        'dots': 'radial-gradient(circle at 1px 1px, rgb(167 197 142 / 0.25) 1px, transparent 0)',
      },
      backgroundSize: {
        'dots': '24px 24px',
      },
    },
  },
  plugins: [],
}
