import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed: "#e71818",
        blackBG: "#000000",
      },
      backgroundImage: {
        parallax: "url('/JacksonColt3.jpeg')",
      },
      borderStyle: {
        double: "double",
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
