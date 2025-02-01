import { useEffect } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { City, useAppContext } from "@/context/AppContext";
import { getCurrentWeather, getForecastWeather } from "@/services/weather.services";
import defaultCity from "@/data/default.json";

let isFirstSuccess = false;

const handleError = (
    error: any,
    handleDeleteCity: (id: string) => void,
    handleSetCurrentCity: (city: City) => void,
    city: City
) => {
    toast.dismiss();
    if (error?.response?.status === 404) {
        toast.error("این شهر توسط سرور پشتیبانی نمی شود !");
        handleDeleteCity(city.id);
        handleSetCurrentCity(defaultCity);
        return getForecastWeather({ city: defaultCity.name });
    }
    else if(error?.code === "ERR_NETWORK"){
        toast.error("لطفا دسترسی به اینترنت خود را بررسی کنید !");
        return {};
    }
};

export const useGetCurrentWeather = (city: City) => {
    const { handleSetCurrentCity, handleDeleteCity } = useAppContext();
    const {
        data: currentWeatherData,
        isLoading: isLoadingCurrentWeather,
        refetch: updateCurrentWeather,
    } = useSuspenseQuery({
        queryKey: ["weather", "current-weather", city?.name],
        queryFn: async () => {
            try {
                isFirstSuccess = false;
                const response = await getCurrentWeather({ city: city.name });
                if (response.cod == 200) {
                    isFirstSuccess = true;
                    return response;
                }
            } catch (error) {
                handleError(error, handleDeleteCity, handleSetCurrentCity, city);
            }
        },
    });

    return {
        currentWeatherData,
        isLoadingCurrentWeather,
        updateCurrentWeather,
    };
};

export const useGetForecastWeather = (city: City) => {
    const { handleSetCurrentCity, handleDeleteCity } = useAppContext();
    const {
        data: forecastWeatherData,
        isLoading: isLoadingForecastWeather,
        isFetching: isUpdatingForecastWeather,
        isSuccess,
        isRefetchError,
        refetch: updateForecastWeather,
    } = useSuspenseQuery({
        queryKey: ["weather", "forecast-weather", city?.name],
        queryFn: async () => {
            try {
                const response = await getForecastWeather({ city: city.name });
                if (response.cod == 200) {
                    return response;
                }
            } catch (error) {
                handleError(error, handleDeleteCity, handleSetCurrentCity, city);
            }
        },
    });
    useEffect(() => {
        if (!isUpdatingForecastWeather && isSuccess && isFirstSuccess)
            toast.success("با موفقیت بروزرسانی شد !");
    }, [isSuccess, isUpdatingForecastWeather]);
    useEffect(() => {
        if (isRefetchError) toast.error("امکان بروزرسانی آب و هوا وجود ندارد !");
    }, [isRefetchError]);

    return {
        forecastWeatherData,
        isLoadingForecastWeather,
        updateForecastWeather,
    };
};
