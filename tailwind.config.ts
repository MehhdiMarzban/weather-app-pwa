import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazir)", ...fontFamily.sans]
      },
      backgroundImage: {
        "main-image" : "url(/images/bg.jpeg)"
      },
      container: {
        center: true,
        padding: "2rem"
      }
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
