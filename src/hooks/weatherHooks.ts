import { City } from "@/context/AppContext";
import { getCurrentWeather } from "@/services/weather.services";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useGetCurrentWeather = (city: City["name"]) => {
    const {
        data: currentWeatherData,
        isLoading: isLoadingCurrentWeather,
        isFetching: isUpdatingCurrentWeather,
        isFetched,
        isRefetchError,
        refetch: updateCurrentWeather,
    } = useQuery({
        queryKey: ["current-weather", city],
        queryFn: () => getCurrentWeather({ city }),
    });

    useEffect(() => {
        if (isFetched) toast.success("با موفقیت بروزرسانی شد !");
    }, [isFetched]);
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
