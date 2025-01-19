"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import MiniLoading from "./MiniLoading";

const CitiesMenu: React.FC = () => {
    const { cities, currentCity, isLoading, handleSetCurrentCity } = useAppContext();

    //* set current city
    useEffect(() => {
        if (!currentCity && !isLoading) {
            if (cities.length > 0) {
                handleSetCurrentCity(cities[0]);
            } else {
                handleSetCurrentCity({ id: "329", name: "تهران" });
            }
        }
    }, [isLoading]);

    if (isLoading) return <MiniLoading />;

    //* list cities without current city
    const cityList = cities.filter((city) => city.id !== currentCity?.id);

    return (
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>{currentCity?.name}</summary>
                        <ul className="p-2 w-32 bg-primary z-50">
                            {cityList.map((city) => (
                                <li key={city.id}>
                                    <button
                                        onClick={() => {
                                            handleSetCurrentCity(city);
                                            // window.location.reload();
                                        }}>
                                        {city.name}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <Link className="text-sm sm:text-base" href="/add-city">
                                    افزودن شهر
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    );
};

export default CitiesMenu;
