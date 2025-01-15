"use client";

import { getCurrentWeather } from "@/services/weather.services";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [cityState, setCityState] = useState<string>("");
    const [weather, setWeather] = useState<any>(null);
    const handleSubmitCity = async () => {
        const data = await getCurrentWeather(cityState);
        setWeather(data);
    };
    return (
        <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
            <div className="bg-primary p-2 rounded-md w-fit">
                <p className="text-lg text-white">به برنامه هواشناسی خوش آمدید !</p>
            </div>
            <div className="card glass w-fit">
                <div className="card-body">
                    <h2 className="card-title">شهر خودت رو انتخاب کن :</h2>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="انتخاب شهر ..."
                            value={cityState}
                            onChange={(e) => setCityState(e.target.value)}
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
                    <button className="btn btn-primary" onClick={handleSubmitCity}>
                        جست وجو
                    </button>
                    {weather?.coord && (
                        <div className="card-normal">
                            <h2>{`آب و هوای شهر ${cityState}`}</h2>
                            <p>{`دما : ${weather?.main?.temp}°C`}</p>
                            <p>{`حرارت : ${weather?.main?.feels_like}°C`}</p>
                            <Image
                                alt={weather?.weather[0]?.description}
                                width={100}
                                height={100}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${weather?.weather[0]?.icon}@2x.png`}
                            />
                            <p>{`توصیف آب و هوا : ${weather?.weather[0]?.description}`}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
