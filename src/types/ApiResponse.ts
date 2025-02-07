import { CurrentWeather, ForecastWeather } from ".";

export interface ForecastWeatherResponse {
    cod: string | number;
    message: number;
    cnt: number;
    list: ForecastWeather[];
}

export interface CurrentWeatherResponse extends CurrentWeather {}
