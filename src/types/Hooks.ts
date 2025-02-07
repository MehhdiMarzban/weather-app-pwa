import { CurrentWeatherResponse, ForecastWeatherResponse } from "./ApiResponse";
import City from "./City";

export type QueryFunction = (params: {
    city: City["name"];
}) => Promise<CurrentWeatherResponse | ForecastWeatherResponse>;

export interface HandleWeatherQueryParams {
    city: City;
    fetchFunction: QueryFunction;
    onDelete: (id: string) => void;
    onSetCurrent: (city: City) => void;
}
