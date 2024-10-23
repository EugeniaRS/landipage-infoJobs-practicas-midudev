/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#167DB7",
        accent: "#FE5230",
        "ij-black": "#212121",
        "ij-red": "#FF421C",
        "ij-green": "",
        "ij-blue": "",
        "ij-yellow": "",
        dark: "",
      },
      backgroundImage: {
        "hero-pattern": "url(/hero-pattern.webp)",
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      letterSpacing: {
        separated: "0.35px",
      },
    },
  },
  plugins: [],
};
