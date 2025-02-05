"use client";
import { useQueryClient } from "@tanstack/react-query";
import { createContext, use, useEffect, useState } from "react";
import { safeLocalStorage } from "@/utils/safeLocalStorage";
import defaultCity from "@/data/default.json";

export interface City {
    id: string;
    name: string;
}

export interface AppContext {
    cities: City[];
    currentCity: City | null;
    isLoading: boolean;
    handleAddCity: (city: City) => void;
    handleDeleteCity: (id: City["id"]) => void;
    handleSetCurrentCity: (city: City) => void;
}

export const AppContext = createContext<Partial<AppContext>>({});

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [cities, setCities] = useState<City[]>([]);
    const [currentCity, setCurrentCity] = useState<AppContext["currentCity"]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const queryClient = useQueryClient();

    const handleFirstLoad = () => {
        setIsLoading(true);
        const citiesLocalStorage = safeLocalStorage<City[]>("cities", []);
        setCities(citiesLocalStorage.get());
        const currentCityLocalStorage = safeLocalStorage<AppContext["currentCity"]>(
            "currnetCity",
            defaultCity
        );
        setCurrentCity(currentCityLocalStorage.get());
        setIsLoading(false);
    };

    const handleAddCity = (newCity: City) => {
        const appLocalStorage = safeLocalStorage<City[]>("cities", []);
        setCities((prevCities) => {
            if (!prevCities.find((item) => item.id === newCity.id)) {
                const newValue = [...prevCities, newCity];
                appLocalStorage.set(newValue);
                return newValue;
            } else {
                return prevCities;
            }
        });
    };

    const handleDeleteCity = (id: City["id"]) => {
        const appLocalStorage = safeLocalStorage<City[]>("cities", []);
        const newCities = cities.filter((city) => city.id !== id);
        setCities(newCities);
        appLocalStorage.set(newCities);
    };

    const handleSetCurrentCity = (city: City) => {
        const appLocalStorage = safeLocalStorage<AppContext["currentCity"]>("currnetCity", defaultCity);
        appLocalStorage.set(city);
        setCurrentCity(city);
    };

    useEffect(() => {
        handleFirstLoad();
    }, []);

    useEffect(() => {
        queryClient.invalidateQueries({
            queryKey: [currentCity?.name],
        });
    }, [currentCity]);

    return (
        <AppContext
            value={{
                cities,
                isLoading,
                handleDeleteCity,
                handleAddCity,
                currentCity,
                handleSetCurrentCity,
            }}>
            {children}
        </AppContext>
    );
};

export default AppProvider;

export const useAppContext = () => {
    return use(AppContext) as AppContext;
};
