/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'white-pattern': "url('images/fondogris.png')",
        presentation: "url('images/presentation.jpg')",
        presentationMobile: "url('images/presentationMobile.jpeg')",
      },
      colors: {
        "cnlda-orange": "#F36F10"
      }
    },
  },
  plugins: [],
}