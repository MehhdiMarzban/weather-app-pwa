import { City } from "@/context/AppContext";
import { getCurrentWeather } from "@/services/weather.services";
import { useQuery } from "@tanstack/react-query";

export const useGetCurrentWeather = (city: City["name"]) => {
    const {
        data: currentWeatherData,
        isLoading: isLoadingCurrentWeather,
        isFetching: isUpdatingCurrentWeather,
        refetch: updateCurrentWeather,
    } = useQuery({
        queryKey: ["current-weather"],
        queryFn: () => getCurrentWeather({ city }),
    });
    return {
        currentWeatherData,
        isLoadingCurrentWeather,
        isUpdatingCurrentWeather,
        updateCurrentWeather,
    };
};
