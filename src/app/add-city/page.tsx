"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import iranCities from "@/data/city.json";
import { CityList, MiniLoading, SearchInput, SelectedCities } from "@/components";
import { City, useAppContext } from "@/context/AppContext";
import Link from "next/link";

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
    const { handleAddCity, handleSetCurrentCity } = useAppContext();
    const router = useRouter();

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

    const handleClickOnCityList = ({ id, name }: City) => {
        setCityInputState("");
        setShowCities([]);
        handleAddCity({ id, name });
        handleSetCurrentCity({ id, name });
        router.push("/");
    };

    return (
        <div className="flex flex-col gap-2 items-center justify-start">
            <div className="card glass w-full sm:w-3/5 xl:w-2/5">
                <div className="card-body flex justify-center">
                    <h2 className="card-title">شهر خودت رو انتخاب کن :</h2>
                    <SearchInput inputState={cityInputState} handleChangeInput={handleChangeInput} />
                    <Link href={"/"} className="btn btn-sm lg:btn-md btn-primary w-1/3 mr-auto">
                        بازگشت
                    </Link>
                    {/* show selected user cities and can add or removed them */}
                    <SelectedCities />
                </div>
            </div>
            <div className="h-44 w-full sm:w-3/5 xl:w-2/5 block">
                {isPendingShowCities ? (
                    <MiniLoading />
                ) : (
                    <CityList cities={showCities} handleClickOnCityList={handleClickOnCityList} />
                )}
            </div>
        </div>
    );
}
