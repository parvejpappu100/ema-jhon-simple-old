/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#46db61",
        
"secondary": "#3888a5",
        
"accent": "#e2739a",
        
"neutral": "#311F33",
        
"base-100": "#EEE3F3",
        
"info": "#6885DF",
        
"success": "#2DC868",
        
"warning": "#FBB946",
        
"error": "#F17495",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
