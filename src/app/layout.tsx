import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import AppFont from "@/constants/localFonts";
import "./globals.css";
import { Footer, Header } from "@/components";
import AppProvider from "@/context/AppContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = {
    title: "برنامه هواشناسی",
    description: "برنامه ای برای دیدن آب و هوای هرشهر",
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
                className={`${AppFont.variable} font-sans min-h-screen bg-base-100 md:bg-main-image bg-cover bg-center bg-fixed bg-no-repeat`}>
                <ReactQueryProvider>
                    <AppProvider>
                        <Toaster position="bottom-left" toastOptions={{ duration: 3000 }} />
                        <div className="bg-black bg-opacity-15 min-h-screen flex flex-col justify-between">
                            <Header />
                            <div className="container xl:max-w-screen-xl py-8">{children}</div>
                            <Footer />
                        </div>
                    </AppProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
