"use client";
import { ForecastItemList } from "@/components";

interface ShowForecastWeatherProps {
    data: any;
}

/**
 * ShowForecastWeather component displays the forecast weather data for the given city.
 *
 * Props:
 * - data: The forecast weather data for the given city.
 *
 * Returns:
 * - A JSX element representing the forecast weather data.
 *
 * Components:
 * - Utilizes the ForecastItemList component to display the forecast weather data.
 *
 * Note:
 * - The weather data is fetched from an external API and is displayed in a user-friendly format.
 * - The component is styled using Tailwind CSS classes.
 */
const ShowForecastWeather: React.FC<ShowForecastWeatherProps> = ({ data }) => {

    return (
        <div className="py-2 mx-8">
            <p className="mb-2 font-bold text-gray-600">پیش بینی آب و هوا</p>
            <ForecastItemList forecastWeatherData={data} />
        </div>
    );
};

export default ShowForecastWeather;
