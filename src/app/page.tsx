"use client";
import dynamic from "next/dynamic";

import { InstallPWA, MiniLoading, WeatherManagerSkeleton } from "@/components";
import { City, useAppContext } from "@/context/AppContext";
import { useRegisterPWA } from "@/hooks/pwa";

const WeatherManager = dynamic(() => import("@/components").then((mod) => mod.WeatherManager), {
    loading: () => <WeatherManagerSkeleton />,
});

export default function Home() {
    const { currentCity, isLoading } = useAppContext();

    useRegisterPWA();

    if (isLoading) return <MiniLoading />;

    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <InstallPWA />
            <section className="w-full sm:w-4/5 md:w-11/12 xl:w-8/12">
                <WeatherManager city={currentCity as City} />
            </section>
        </div>
    );
}
