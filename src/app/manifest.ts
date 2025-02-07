import type {MetadataRoute} from "next";

export default function manifest() : MetadataRoute.Manifest {
    return {
        name: "برنامه هواشناسی",
        short_name: "هواشناسی",
        description: "برنامه ای جهت دیدن و بررسی کردن آب هوای آینده",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#570DF8",
        icons: [
            {
                src: "/images/logo.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
        lang: "fa",
    }
}