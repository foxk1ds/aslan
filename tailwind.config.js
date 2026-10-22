/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        fraunces: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Geist"', '"Inter Tight"', '-apple-system', 'sans-serif'],
        tight: ['"Inter Tight"', '-apple-system', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#F4F0E8',
          subtle: '#EAE5DB',
          dark: '#141414',
          night: '#0D0E10',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#3A3A38',
          muted: '#7A7873',
          faint: '#A6A49F',
        },
        crimson: {
          DEFAULT: '#B3261E',
          deep: '#8A1C16',
        }
      },
      maxWidth: {
        prose: '65ch',
      }
    },
  },
  plugins: [],
}
