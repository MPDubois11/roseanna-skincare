import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBeige: "var(--lightBeige)",
        beige: "var(--beige)",
        lightGreen: "var(--lightGreen)",
        darkGreen: "var(--darkGreen)",
        veryDarkGreen: "var(--veryDarkGreen)",
        redPink: "var(--redPink)",
      },
    },
  },
  plugins: [],
};
export default config;
