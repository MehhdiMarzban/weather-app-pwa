"use client";

import { ShowCurrentWeather } from "@/components";
import { getCurrentWeather } from "@/services/weather.services";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [cityState, setCityState] = useState<string>("");
    const [weather, setWeather] = useState<any>(null);
    // const handleSubmitCity = async () => {
    //     const data = await getCurrentWeather(cityState);
    //     setWeather(data);
    // };
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <ShowCurrentWeather />
        </div>
    );
}
