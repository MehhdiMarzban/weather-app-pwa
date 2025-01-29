import Image from "next/image";
import {format} from "date-fns-jalali";
import WeatherView from "./WeatherView";

const ForecastItem: React.FC<{ forecastData: any }> = ({ forecastData }) => {
    return (
        <WeatherView.ForecastItem>
            <div className="flex flex-row items-center justify-around text-lg font-bold stat-desc">
                <span>{format(new Date(forecastData?.dt_txt), "EEEE")}</span>
                <span className="align-middle text-sm">{format(new Date(forecastData?.dt_txt), "dd MMMMMMMM")}</span>
            </div>
            <WeatherView.HeadItem
                className="flex-col-reverse"
                title={forecastData?.weather[0]?.description}>
                <Image
                    priority
                    alt={forecastData?.weather[0]?.description}
                    width={100}
                    height={100}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${forecastData?.weather[0]?.icon}@2x.png`}
                />
            </WeatherView.HeadItem>
            <div className="flex flex-row justify-around items-center">
                <WeatherView.SubItem
                    className="text-[1rem] w-fit"
                    signLeft="حداقل"
                    value={Math.floor(forecastData?.main.temp_min) + "°"}
                />
                <WeatherView.SubItem
                    className="text-[1rem] w-fit"
                    signLeft="حداکثر"
                    value={Math.floor(forecastData?.main.temp_max) + "°"}
                />
            </div>
        </WeatherView.ForecastItem>
    );
};

export default ForecastItem;
