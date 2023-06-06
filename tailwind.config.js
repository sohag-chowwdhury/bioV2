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
        'wall': "url('https://cdn.pixabay.com/photo/2012/04/26/14/37/building-42668_1280.png')",
        'class_room': "url('https://cdn.pixabay.com/photo/2014/04/02/10/13/whiteboard-303145_1280.png')",
      },
    },
  },
  plugins: [],
}
