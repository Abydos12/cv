/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
