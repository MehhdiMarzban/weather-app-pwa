"use client";

import { InstallPWA, MiniLoading, ShowCurrentWeather } from "@/components";
import { City, useAppContext } from "@/context/AppContext";
import { useEffect } from "react";

async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
    });
}
export default function Home() {
    const { currentCity, isLoading } = useAppContext();
    useEffect(() => {
        registerServiceWorker();
    }, []);
    if (isLoading) return <MiniLoading />;
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <InstallPWA />
            <ShowCurrentWeather city={currentCity as City} />
        </div>
    );
}
