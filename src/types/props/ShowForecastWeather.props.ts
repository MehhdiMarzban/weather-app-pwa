import { ForecastWeather } from "..";

export default interface ShowForecastWeatherProps {
    data: { list: ForecastWeather[] };
}
