"use client";
import { ForecastItemList } from "@/components";
import { ShowForecastWeatherProps } from "@/types";

/**
 * A component that displays the forecast weather data as a swiper.
 *
 * @prop {Object} data - The forecast weather data returned from the API.
 * @prop {Array} data.list - The list of forecast weather data.
 *
 * @returns {JSX.Element} A JSX element representing a swiper of forecast weather data.
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
