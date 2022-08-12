/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@my-company/tailwind-components/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
