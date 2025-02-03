"use client";

import { ShowCurrentWeather, ShowForecastWeather, WeatherView } from "@/components";
import { useGetWeather } from "@/hooks/weatherHooks";
import { City } from "@/context/AppContext";

interface WeatherManagerProps {
    city: City;
}

/**
 * A component that displays the current weather data and forecast weather data as a swiper.
 *
 * @prop {Object} city - The city to get the weather data for.
 *
 * @returns {JSX.Element} A JSX element representing a swiper of current and forecast weather data.
 */
const WeatherManager: React.FC<WeatherManagerProps> = ({ city }) => {
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
