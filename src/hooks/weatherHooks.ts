import { useEffect, useRef } from "react";
import { useSuspenseQueries } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useAppContext } from "@/context/AppContext";
import { getCurrentWeather, getForecastWeather } from "@/services/weather.services";
import defaultCity from "@/data/default.json";
import {
    City,
    CurrentWeatherResponse,
    ForecastWeatherResponse,
    HandleWeatherQueryParams,
} from "@/types";

//* Enums
enum WeatherStatus {
    HTTP_SUCCESS = 200,
    HTTP_NOT_FOUND = 404,
    NETWORK_ERROR_CODE = "ERR_NETWORK",
}

const handleWeatherQuery = async (
    options: HandleWeatherQueryParams
): Promise<CurrentWeatherResponse | ForecastWeatherResponse | never> => {
    //* get arguments
    const { city, fetchFunction, onDelete, onSetCurrent } = options;

    try {
        const response = await fetchFunction({ city: city.name });
        if (response.cod == WeatherStatus.HTTP_SUCCESS) {
            return response;
        }
        throw new Error("مشکلی در دریافت اطلاعات رخ داده است !");
    } catch (error: any) {
        if (error?.response?.status === WeatherStatus.HTTP_NOT_FOUND) {
            toast.dismiss();
            toast.error("این شهر توسط سرور پشتیبانی نمی شود !");
            onDelete(city.id);
            onSetCurrent(defaultCity);
            return fetchFunction({ city: defaultCity.name });
        } else if (error?.code === WeatherStatus.NETWORK_ERROR_CODE) {
            throw new Error("لطفا دسترسی به اینترنت خود را بررسی کنید !");
        }
        throw new Error(error?.message);
    }
};

export const useGetWeather = (city: City) => {
    //* this ref for prevent unexpected toast show
    const toastShowRef = useRef(false);
    const toastSuccessIdRef = useRef<null | string>(null);

    const { handleSetCurrentCity, handleDeleteCity } = useAppContext();
    const queries = useSuspenseQueries({
        queries: [
            {
                queryKey: ["weather", "current-weather", city.id, city.name],
                queryFn: handleWeatherQuery.bind(null, {
                    city,
                    fetchFunction: getCurrentWeather,
                    onDelete: handleDeleteCity,
                    onSetCurrent: handleSetCurrentCity,
                }),
            },
            {
                queryKey: ["weather", "forecast-weather", city.id, city.name],
                queryFn: handleWeatherQuery.bind(null, {
                    city,
                    fetchFunction: getForecastWeather,
                    onDelete: handleDeleteCity,
                    onSetCurrent: handleSetCurrentCity,
                }),
            },
        ],
        combine: (result) => ({
            currentWeatherData: result[0].data as CurrentWeatherResponse,
            forecastWeatherData: result[1].data as ForecastWeatherResponse,
            isAllSuccess: result.every((query) => query.status === "success"),
            isAllIdle: result.every((query) => {
                toastShowRef.current = false;
                return !query.isFetching;
            }),
        }),
    });
    useEffect(() => {
        if (queries.isAllSuccess && queries.isAllIdle && !toastShowRef.current) {
            //* this line is for prevent unexpected toast show
            if(toastSuccessIdRef.current) toast.dismiss(toastSuccessIdRef.current);
            
            //* show toast message and save the toast id for prevent unexpected toast show
            toastSuccessIdRef.current = toast.success("با موفقیت بروزرسانی شد !");
            toastShowRef.current = true;
        }
    }, [queries.isAllIdle]);

    return queries;
};
