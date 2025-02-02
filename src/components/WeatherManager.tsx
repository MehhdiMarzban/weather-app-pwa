"use client";

import {
    ShowCurrentWeather,
    ShowForecastWeather,
    WeatherView,
} from "@/components";
import { useGetWeather } from "@/hooks/weatherHooks";
import { City } from "@/context/AppContext";

const WeatherManager: React.FC<{ city: City }> = ({ city }) => {
    const { currentWeatherData, forecastWeatherData } = useGetWeather(city);

    return (
        <WeatherView>
            <ShowCurrentWeather data={currentWeatherData} />
            <div className="divider divider-vertical col-span-1 md:col-span-1 w-full px-8 my-0 py-0" />
            <ShowForecastWeather data={forecastWeatherData} />
        </WeatherView>
    );
};

export default WeatherManager;
