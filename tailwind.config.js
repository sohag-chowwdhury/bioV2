/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: { 

        'fira_code': ["Fira Code", "monospace"],
        'oswald': ["Oswald", "sans-serif"],
        'danc': ["Dancing Script", "sans-scursive"],
        'mono': ["Roboto Mono", "monospace"],
        'sans': ["Open Sans", "sans-serif"]



      }
    },
  },
  plugins: [],
}
