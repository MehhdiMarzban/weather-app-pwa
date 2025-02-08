import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";

import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import AppFont from "@/constants/localFonts";
import { Footer, Header } from "@/components";
import AppProvider from "@/context/AppContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
    title: "برنامه هواشناسی",
    description: "برنامه ای برای دیدن آب و هوای هرشهر",
    themeColor: "#570DF8",
    manifest: "/manifest.json",
};

export const viewport: Viewport = {
    userScalable: false,
    maximumScale: 1,
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
    return (
        <html lang="fa-IR" dir="rtl">
            <body
                className={`${AppFont.variable} font-sans min-h-screen bg-gray-200 md:bg-main-image md:bg-cover md:bg-center md:bg-fixed md:bg-no-repeat`}>
                <ReactQueryProvider>
                    <AppProvider>
                        <Toaster position="bottom-left" toastOptions={{ duration: 3000 }} />
                        <SkeletonTheme baseColor="#34495e60" highlightColor="#e5e7eb">
                            <div className="min-h-screen flex flex-col justify-between">
                                <Header />
                                <div className="container xl:max-w-screen-xl py-8">{children}</div>
                                <Footer />
                            </div>
                        </SkeletonTheme>
                    </AppProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
