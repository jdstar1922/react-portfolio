/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

const palette = {
  chestnut: {
    DEFAULT: "#AA3F2B",
    100: "#220c09",
    200: "#451911",
    300: "#67251a",
    400: "#893222",
    500: "#aa3f2b",
    600: "#d05742",
    700: "#dc8171",
    800: "#e7aba0",
    900: "#f3d5d0",
  },
  cordovan: {
    DEFAULT: "#864953",
    100: "#1b0f11",
    200: "#361e22",
    300: "#512d33",
    400: "#6c3b43",
    500: "#864953",
    600: "#aa646f",
    700: "#bf8b93",
    800: "#d4b1b7",
    900: "#ead8db",
  },
  eggplant: {
    DEFAULT: "#614356",
    100: "#130d11",
    200: "#271b22",
    300: "#3a2833",
    400: "#4d3644",
    500: "#614356",
    600: "#895f7a",
    700: "#aa849c",
    800: "#c6adbd",
    900: "#e3d6de",
  },
  burnt_sienna: {
    DEFAULT: "#D27C65",
    100: "#30150e",
    200: "#602b1c",
    300: "#91402a",
    400: "#c15638",
    500: "#d27c65",
    600: "#db9784",
    700: "#e4b1a3",
    800: "#edcbc1",
    900: "#f6e5e0",
  },
  periwinkle: {
    DEFAULT: "#B7BFDE",
    100: "#191f37",
    200: "#333f6e",
    300: "#4c5ea6",
    400: "#7e8cc4",
    500: "#b7bfde",
    600: "#c4cbe4",
    700: "#d3d8eb",
    800: "#e2e5f2",
    900: "#f0f2f8",
  },
  "anti-flash_white": {
    DEFAULT: "#E8E9EB",
    100: "#2c2e32",
    200: "#575c64",
    300: "#858a95",
    400: "#b7bac0",
    500: "#e8e9eb",
    600: "#eeeef0",
    700: "#f2f2f4",
    800: "#f6f7f7",
    900: "#fbfbfb",
  },
  white: {
    DEFAULT: "#FBFBFB",
    100: "#323232",
    200: "#646464",
    300: "#969696",
    400: "#c8c8c8",
    500: "#fbfbfb",
    600: "#fbfbfb",
    700: "#fcfcfc",
    800: "#fdfdfd",
    900: "#fefefe",
  },
};

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      ...palette,
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
