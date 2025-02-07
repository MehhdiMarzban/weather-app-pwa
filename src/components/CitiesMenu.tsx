"use client";
import Link from "next/link";
import { useEffect } from "react";

import { useAppContext } from "@/context/AppContext";
import MiniLoading from "./MiniLoading";
import defaultCity from "@/data/default.json";

/**
 * CitiesMenu component displays a dropdown menu with the current city and other cities without the current city.
 * It also contains a link to add a new city.
 *
 * When the component mounts and there is no current city, it sets the first city in the list as the current city.
 *
 * The component uses the useAppContext hook to get the list of cities, the current city, and the isLoading state.
 *
 * The component renders a button with the current city name and a dropdown menu with other cities.
 * When a city is selected from the dropdown menu, it sets the selected city as the current city.
 *
 * The component also renders a link to add a new city.
 *
 * @returns A JSX element representing the CitiesMenu component.
 */
const CitiesMenu: React.FC = () => {
    const { cities, currentCity, isLoading, handleSetCurrentCity } = useAppContext();

    //* set current city
    useEffect(() => {
        if (!currentCity && !isLoading) {
            if (cities?.length > 0) {
                handleSetCurrentCity(cities[0]);
            } else {
                handleSetCurrentCity(defaultCity);
            }
        }
    }, [isLoading]);

    if (isLoading) return <MiniLoading />;

    //* list cities without current city
    const cityList = cities?.filter((city) => city.id !== currentCity?.id);

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 lg:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
                <div className="hidden lg:flex">
                    {currentCity?.name}{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="size-4 mx-1">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box w-40 bg-layer-0 left-2 text-color-dark mt-3 p-2 shadow z-50 text-base">
                <li>
                    <summary>فعلی : {currentCity?.name}</summary>
                    <ul className="p-2">
                        {cityList?.map((city) => (
                            <li key={city.id}>
                                <Link
                                    href="/"
                                    className="font-bold text-base"
                                    onClick={() => {
                                        handleSetCurrentCity(city);
                                    }}>
                                    {city.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link className="text-base font-semibold" href="/add-city">
                        افزودن شهر
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default CitiesMenu;
