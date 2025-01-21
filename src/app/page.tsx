"use client";

import { InstallPWA, MiniLoading, ShowCurrentWeather } from "@/components";
import { City, useAppContext } from "@/context/AppContext";
import { useRegisterPWA } from "@/hooks/pwa";

export default function Home() {
    const { currentCity, isLoading } = useAppContext();
    useRegisterPWA();
    if (isLoading) return <MiniLoading />;
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <InstallPWA />
            <ShowCurrentWeather city={currentCity as City} />
        </div>
    );
}