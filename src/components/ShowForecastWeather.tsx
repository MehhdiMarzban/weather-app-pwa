"use client";
import { ForecastItemList, ShowForecastWeatherSkeleton } from "@/components";
import { City } from "@/context/AppContext";
import { useGetForecastWeather } from "@/hooks/weatherHooks";

/**
 * ShowForecastWeather component displays the 5-day forecast for a given city.
 *
 * Props:
 * - city: An object representing the city for which the forecast needs to be displayed.
 *
 * Hooks:
 * - Utilizes the useGetForecastWeather hook to fetch forecast weather data for the given city.
 *
 * Returns:
 * - If the weather data is loading, it displays a loading spinner (MiniLoading component).
 * - Otherwise, it displays a list of forecast items (ForecastItemList component) in a horizontally scrollable container.
 *
 * Components:
 * - Utilizes MiniLoading and ForecastItemList components for UI rendering.
 *
 * Note:
 * - The weather data is fetched from an external API and is displayed in a user-friendly format.
 * - The component is styled using Tailwind CSS classes.
 */
const ShowForecastWeather: React.FC<{ city: City }> = ({ city }) => {
    const { forecastWeatherData, isLoadingForecastWeather } = useGetForecastWeather(city);

    if (isLoadingForecastWeather) {
        return <ShowForecastWeatherSkeleton />;
    }

    return (
        <div className="py-2 mx-8">
            <p className="mb-2 font-bold text-gray-600">پیش بینی آب و هوا</p>
            <ForecastItemList forecastWeatherData={forecastWeatherData} />
        </div>
    );
};

export default ShowForecastWeather;
