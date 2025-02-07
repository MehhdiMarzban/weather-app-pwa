import ForecastWeather from "../ForecastWeather";

export default interface ForecastItemListProps {
    forecastWeatherData: { list: Array<ForecastWeather> };
}
