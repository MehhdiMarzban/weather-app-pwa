"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import MiniLoading from "./MiniLoading";
import defaultCity from "@/data/default.json";

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
        <>
            <div className="hidden lg:flex dropdown">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>{currentCity?.name}</summary>
                            <ul className="p-2 w-32 bg-slate-900 bg-opacity-70 z-50 -left-1/4">
                                {cityList?.map((city) => (
                                    <li key={city.id}>
                                        <button
                                            onClick={() => {
                                                handleSetCurrentCity(city);
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
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content rounded-box w-40 bg-base-300 left-2 text-slate-600 mt-3 p-2 shadow z-50 text-base">
                    <li>
                        <summary>فعلی : {currentCity?.name}</summary>
                        <ul className="p-2">
                            {cityList?.map((city) => (
                                <li key={city.id}>
                                    <button
                                        className="text-base"
                                        onClick={() => {
                                            handleSetCurrentCity(city);
                                        }}>
                                        {city.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <Link className="text-base" href="/add-city">
                            افزودن شهر
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default CitiesMenu;
