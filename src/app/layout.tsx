import type { Metadata } from "next";
import AppFont from "@/constants/localFonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "برنامه هواشناسی",
    description: "برنامه ای برای دیدن آب و هوای هرشهر",
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body
                className={`${AppFont.variable} font-sans min-h-screen bg-main-image bg-cover bg-center bg-fixed bg-no-repeat`}>
                <div className="bg-black bg-opacity-15 min-h-screen">
                    <div className="container xl:max-w-screen-xl">{children}</div>
                </div>
            </body>
        </html>
    );
}
