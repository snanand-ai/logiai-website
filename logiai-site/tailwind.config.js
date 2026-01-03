/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#001035", navy: "#013B5F", teal: "#076380", gold: "#FFC520", mist: "#82AABA" }
    }
  },
  plugins: []
};
