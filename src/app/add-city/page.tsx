"use client";

import { useState, useTransition } from "react";
import iranCities from "@/data/city.json";
import { MiniLoading, SelectedCities } from "@/components";
import { useAppContext } from "@/context/AppContext";

/**
 * SelectCity component allows users to input a city name and select from a list of suggested cities.
 * It manages the state of the input, displays a list of matching cities from a predefined list,
 * and allows users to add a city to their selection.
 *
 * State:
 * - cityInputState: The current text input by the user.
 * - showCities: An array of cities that match the user's input.
 * - isPendingShowCities: A boolean indicating if the city suggestions are being processed.
 *
 * Context:
 * - handleAddCity: Function to add a selected city to the user's list of cities.
 *
 * Behavior:
 * - Filters the list of cities based on user input and displays suggestions.
 * - Allows users to add a city to their selected list by clicking on a suggestion.
 * - Displays a loading animation while city suggestions are being processed.
 */

export default function SelectCity() {
    const [cityInputState, setCityInputState] = useState<string>("");
    const [showCities, setShowCities] = useState<Array<any>>([]);
    const [isPendingShowCities, startTransitionShowCities] = useTransition();
    const { handleAddCity } = useAppContext();
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityInputState(e.target.value.trim());
        if (e.target.value === "") {
            startTransitionShowCities(() => {
                setShowCities([]);
            });
            return;
        }
        const guessCities = iranCities.filter((city) => city.name.startsWith(cityInputState));
        startTransitionShowCities(() => {
            setShowCities(guessCities);
        });
    };

    return (
        <div className="flex flex-col gap-2 items-center justify-start pt-10">
            <div className="card glass w-full sm:w-2/5">
                <div className="card-body flex justify-center">
                    <h2 className="card-title">شهر خودت رو انتخاب کن :</h2>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="انتخاب شهر ..."
                            value={cityInputState}
                            onChange={handleChangeInput}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                    <button className="btn btn-primary">جست وجو</button>
                    {/* show selected user cities and can add or removed them */}
                    <SelectedCities />
                </div>
            </div>
            {showCities.length > 0 &&
                (isPendingShowCities ? (
                    <MiniLoading />
                ) : (
                    <ul className="menu bg-base-300 glass rounded-box max-h-44 overflow-y-scroll overflow-x-hidden w-full sm:w-2/5">
                        <li>
                            <h2 className="menu-title">شهر مورد نظر خود را انتخاب کنید :</h2>
                            <ul>
                                {showCities.map((city) => (
                                    <li key={city.id}>
                                        <button
                                            onClick={() => {
                                                setCityInputState("");
                                                setShowCities([]);
                                                handleAddCity({ id: city.id, name: city.name });
                                            }}>
                                            {city.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                ))}
        </div>
    );
}
