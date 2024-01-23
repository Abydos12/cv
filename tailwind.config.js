/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
      }
    },
  },
  plugins: [],
};

export default config;
