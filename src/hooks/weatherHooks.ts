import { City } from "@/context/AppContext";
import { getCurrentWeather } from "@/services/weather.services";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export const useGetCurrentWeather = (city: City["name"]) => {
    const {
        data: currentWeatherData,
        isLoading: isLoadingCurrentWeather,
        isFetching: isUpdatingCurrentWeather,
        isFetched,
        error,
        refetch: updateCurrentWeather,
    } = useQuery({
        queryKey: ["current-weather"],
        queryFn: () => getCurrentWeather({ city }),
    });

    useEffect(() => {
        if (isUpdatingCurrentWeather) toast.loading("در حال بروزرسانی آب و هوا ...");
    }, [isUpdatingCurrentWeather]);
    useEffect(() => {
        if (isFetched) toast.success("با موفقیت بروزرسانی شد !");
    }, [isFetched]);
    useEffect(() => {
        if (error) toast.error("امکان بروزرسانی آب و هوا وجود ندارد !");
    }, [error]);

    return {
        currentWeatherData,
        isLoadingCurrentWeather,
        isUpdatingCurrentWeather,
        updateCurrentWeather,
    };
};
