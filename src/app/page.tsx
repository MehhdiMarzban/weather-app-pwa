"use client";

import { InstallPWA, MiniLoading, ShowCurrentWeather, ShowForecastWeather, WeatherView } from "@/components";
import { City, useAppContext } from "@/context/AppContext";
import { useRegisterPWA } from "@/hooks/pwa";

export default function Home() {
    const { currentCity, isLoading } = useAppContext();
    
    useRegisterPWA();

    if (isLoading) return <MiniLoading />;
    
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <InstallPWA />
            <section className="w-full sm:w-4/5 md:w-11/12 xl:w-3/5">
                <WeatherView>
                    <ShowCurrentWeather city={currentCity as City} />
                    <div className="divider divider-vertical col-span-1 md:col-span-1 w-full px-8 my-0 py-0" />
                    <ShowForecastWeather city={currentCity as City} />
                </WeatherView>
            </section>
        </div>
    );
}
