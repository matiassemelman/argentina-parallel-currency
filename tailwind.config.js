/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textBlue: "#6F8484",
        backgroundBlue: "#0F4549",
        inputText: "#A4B9B7",
        values: "#41BEAB",
      },
    },
  },
  plugins: [],
};
