import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { City, useAppContext } from "@/context/AppContext";
import { getCurrentWeather } from "@/services/weather.services";
import defaultCity from "@/data/default.json";
export const useGetCurrentWeather = (city: City) => {
    const {handleSetCurrentCity, handleDeleteCity} = useAppContext();
    const {
        data: currentWeatherData,
        isLoading: isLoadingCurrentWeather,
        isFetching: isUpdatingCurrentWeather,
        isSuccess,
        isRefetchError,
        refetch: updateCurrentWeather,
    } = useQuery({
        queryKey: ["current-weather", city.name],
        queryFn: async () => {
            try {
                const response = await getCurrentWeather({ city: city.name });
                if (response.cod === 200) {
                    return response;
                }
            } catch (error) {
                toast.error("این شهر توسط سرور پشتیبانی نمی شود !");
                handleDeleteCity(city.id);
                handleSetCurrentCity(defaultCity);
                return getCurrentWeather({ city: defaultCity.name });
            }
        },
    });

    useEffect(() => {
        if (!isUpdatingCurrentWeather && isSuccess) toast.success("با موفقیت بروزرسانی شد !");
    }, [isSuccess, isUpdatingCurrentWeather]);
    useEffect(() => {
        if (isRefetchError) toast.error("امکان بروزرسانی آب و هوا وجود ندارد !");
    }, [isRefetchError]);

    return {
        currentWeatherData,
        isLoadingCurrentWeather,
        isUpdatingCurrentWeather,
        updateCurrentWeather,
    };
};
