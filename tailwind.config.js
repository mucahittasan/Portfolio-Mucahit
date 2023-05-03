/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        darkGradientBg: 'linear-gradient(135deg,#08070b, #161618)',
        whiteGradientBg: 'linear-gradient(135deg,#f1f1f1, #fafafa)',
      },
      colors: {
        darkBackground: "#131313",
        darkText: "#f1f1f1",
        whiteBackground: "#ededed",
        whiteText: "#131313",
        hoverText: "#C687EB",
        blueColor: "#81D6FF",
        pinkColor: "#E781FC",
        gradientLeft: "#81D6FF",
        gradientRight: "#E781FC"
      }
    },
  },
  plugins: [],
}
