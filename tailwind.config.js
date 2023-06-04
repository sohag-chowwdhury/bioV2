/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: { 
      fontFamily: { 

        'fira_code': ["Fira Code", "monospace"],
        'oswald': ["Oswald", "sans-serif"],
        'danc': ["Dancing Script", "sans-scursive"],
        'mono': ["Roboto Mono", "monospace"],
        'sans': ["Open Sans", "sans-serif"]



      },
      backgroundImage: {
        'hero': "url('https://firebasestorage.googleapis.com/v0/b/student-blog-80add.appspot.com/o/personal%2Ftamalsen-home-cover%20(1).jpg?alt=media&token=2de03026-5d8d-4771-8f56-96d1c29ca307')",
      },
    },
  },
  plugins: [],
}
