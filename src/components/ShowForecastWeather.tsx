"use client";
import { ForecastItemList, MiniLoading } from "@/components";
import { City } from "@/context/AppContext";
import { useGetForecastWeather } from "@/hooks/weatherHooks";

const ShowForecastWeather: React.FC<{ city: City }> = ({ city }) => {
    const { forecastWeatherData, isLoadingForecastWeather } = useGetForecastWeather(city);

    if (isLoadingForecastWeather) {
        return <MiniLoading />;
    }

    return (
        <div className="py-2 mx-8 flex flex-row gap-2 overflow-x-scroll">
            <ForecastItemList forecastWeatherData={forecastWeatherData} />
        </div>
    );
};

export default ShowForecastWeather;
