"use client";
import { safeLocalStorage } from "@/utils/safeLocalStorage";
import { createContext, use, useEffect, useState } from "react";

export interface City {
    id: string;
    name: string;
}

export interface AppContext {
    cities: City[];
    isLoading: boolean;
    handleAddCity: (city: City) => void;
    handleDeleteCity: (id: City["id"]) => void;
}

export const AppContext = createContext<Partial<AppContext>>({});

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [cities, setCities] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleFirstLoad = () => {
        setIsLoading(true);
        const appLocalStorage = safeLocalStorage<City[]>("cities", []);
        setCities(appLocalStorage.get());
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

    useEffect(() => {
        handleFirstLoad();
    }, []);

    return (
        <AppContext value={{ cities, isLoading, handleDeleteCity, handleAddCity }}>
            {children}
        </AppContext>
    );
};

export default AppProvider;

export const useAppContext = () => {
    return use(AppContext) as AppContext;
};
