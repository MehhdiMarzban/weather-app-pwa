"use client";

import { MiniLoading, ShowCurrentWeather } from "@/components";
import { City, useAppContext } from "@/context/AppContext";

export default function Home() {
    const { currentCity, isLoading } = useAppContext();
    if (isLoading) return <MiniLoading />;
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <ShowCurrentWeather city={currentCity as City} />
        </div>
    );
}
