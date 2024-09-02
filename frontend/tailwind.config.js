/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar': '#686D76',
        'main': '#EEEEEE',
        
      },
      
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia' ],
      'amatic':['Amatic SC','ui-sans-serif', 'system-ui']
      
    },
  },
  plugins: [],
}