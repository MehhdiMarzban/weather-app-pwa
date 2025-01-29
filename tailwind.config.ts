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
                sans: ["var(--font-vazir)", ...fontFamily.sans],
            },
            backgroundImage: {
                "main-image": "url(/images/bg.jpeg)",
            },
            container: {
                center: true,
                padding: "0.5rem",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    // نام تم شما
                    primary: "#570df8",
                    secondary: "#f000b8",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff", // رنگ پس‌زمینه تم لایت
                    info: "#3ABFF8",
                    success: "#36D399",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
            "light", // تم لایت
        ],
    },
} satisfies Config;
