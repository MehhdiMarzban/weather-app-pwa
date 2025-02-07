import WeatherView from "../WeatherView";
import ShowCurrentWeatherSkeleton from "./ShowCurrentWeatherSkeleton";
import ShowForecastWeatherSkeleton from "./ShowForecastWeatherSkeleton";

const WeatherManagerSkeleton: React.FC = () => {
    return (
        <WeatherView>
            <ShowCurrentWeatherSkeleton />
            <div className="divider divider-vertical col-span-1 md:col-span-1 w-full px-8 my-0 py-0" />
            <ShowForecastWeatherSkeleton />
        </WeatherView>
    );
};

export default WeatherManagerSkeleton;