import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      violet200: "#ddd6fe",
      pink200: "#fbcfe8",
      // slate900: "#0f172a",
      slate500: "#64748b",
      terminalGreen: "#66FF66",
      darkGreen: "#00ff66",
      otherDarkGreen: "#16a34a",
      darkMode: "#181825",
    },
    screens: {
      xs: "350px",
      md: "768px",

      lg: "1024px",

      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [],
  darkMode: "class",
};
export default config;
