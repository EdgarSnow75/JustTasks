/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        lightMode: {
          primary: "#FF7E2E",

          secondary: "#29DBFF",

          accent: "#380038",

          neutral: "#f5f5f5",

          "base-100": "#fdfffc",

          "base-200": "#ffffff",

          "base-300": "#ffeedd",

          info: "#4361ee",

          success: "#06d6a0",

          warning: "#ae2012",

          error: "#9e2a2b",

          bg: "#fdfffc",

          text: "#333333",

          "--bg-header": "#ffffff",

          "--bg-input": "#e9ecef",

          "--text-color": "#333333",
        },
        darkMode: {
          primary: "#FF7E2E",

          secondary: "#29DBFF",

          accent: "#380038",

          neutral: "#ffffff",

          "base-100": "#121212",

          "base-200": "#262626",

          "base-300": "#353535",

          info: "#4361ee",

          success: "#06d6a0",

          warning: "#ae2012",

          error: "#9e2a2b",

          bg: "#121212",

          text: "#ffffff",

          "--bg-header": "#1F1F1F",

          "--bg-input": "#262626",

          "--text-color": "#ffffff",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
