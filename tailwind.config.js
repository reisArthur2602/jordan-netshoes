/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          10: "#121214",
          20: "#F3F7FF",
          30: "#FFFFFF",
        },
        "brand-color": {
          10: "#7CA2F4",
        },
      },
      backgroundImage: {
        "hero-section": "url('/banner-hero.png')",
      },
    },
  },
  plugins: [],
};
