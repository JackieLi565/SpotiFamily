/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#1ed760",
        "secondary-green": "#169c46",
        "sub-gray": "#B3B3B3",
        "elevated-base": "#242424",
      },
    },
    backgroundImage: {
      "green-blob": "url('/backgrounds/greenBlob.svg')",
      "green-waves": "url('/backgrounds/greenWaves.svg')",
      "error-blob": "url('/backgrounds/errorBlob.svg')",
    },
  },
  plugins: [],
};
