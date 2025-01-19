"use client";

import { format } from "date-fns-jalali";
import Image from "next/image";
import { useGetCurrentWeather } from "@/hooks/weatherHooks";
import { MiniLoading, UpdateWeatherButton, WeatherView } from "@/components";
import { City } from "@/context/AppContext";

interface ShowCurrentWeatherProps {
    city: City;
}
const ShowCurrentWeather: React.FC<ShowCurrentWeatherProps> = ({ city }) => {
    const {
        currentWeatherData,
        isLoadingCurrentWeather,
        isUpdatingCurrentWeather,
        updateCurrentWeather,
    } = useGetCurrentWeather(city.name);
    
    if (isLoadingCurrentWeather) {
        return <MiniLoading />;
    }

    return (
        <section className="w-full sm:w-4/5 md:w-11/12 xl:w-3/5">
            <WeatherView>
                <WeatherView.Body>
                    <WeatherView.Column className="md:col-span-4 space-y-0">
                        <div className="flex flex-row w-full justify-between items-center">
                            <div className="stat-value text-slate-600">
                                {currentWeatherData?.name}
                            </div>
                            <UpdateWeatherButton
                                isUpdatingWeather={isUpdatingCurrentWeather}
                                updateFN={updateCurrentWeather}
                            />
                        </div>
                        <div className="flex flex-row w-full items-center justify-between">
                            <div className="stat-title">
                                {currentWeatherData?.weather[0]?.description}
                            </div>
                            <Image
                                priority
                                alt={currentWeatherData?.weather[0]?.description}
                                width={100}
                                height={100}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${currentWeatherData?.weather[0]?.icon}@2x.png`}
                            />
                        </div>
                        <div className="stat-value text-time flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">تاریخ</div>
                            <span>{format(new Date(), "d MMMM yyyy")} </span>
                        </div>
                        <div className="stat-value text-time flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">ساعت</div>
                            <span>{format(new Date(), "HH:mm")} </span>
                        </div>
                        <div className="stat-value text-time flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">طلوع خورشید</div>
                            <span>
                                {format(new Date(currentWeatherData?.sys?.sunrise), "HH:mm")}{" "}
                            </span>
                        </div>
                        <div className="stat-value text-time flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">غروب خورشید</div>
                            <span>
                                {format(new Date(currentWeatherData?.sys?.sunset), "HH:mm")}{" "}
                            </span>
                        </div>
                    </WeatherView.Column>

                    <WeatherView.Divider />

                    <WeatherView.Column className="md:col-span-3">
                        <div className="flex flex-row w-full items-center justify-between">
                            <div className="stat-title">باد</div>
                            <svg
                                className="text-slate-600"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                height="30"
                                width="30"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"></path>
                            </svg>
                        </div>

                        <div className="stat-value text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">سرعت باد</div>
                            <span>
                                {currentWeatherData?.wind?.speed}
                                <span className="text-sm">KM/H</span>
                            </span>
                        </div>
                        <div className="stat-value text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">درجه باد</div>
                            <span>{currentWeatherData?.wind?.deg}&deg;</span>
                        </div>
                        <div className="stat-value text-[1.75rem] text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">ارتفاع از دریا</div>
                            <span>
                                {currentWeatherData?.main?.sea_level}
                                <span className="text-sm">M</span>
                            </span>
                        </div>
                        <div className="stat-value text-[1.75rem] text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">عمق دید</div>
                            <span>
                                {currentWeatherData?.visibility}
                                <span className="text-sm">M</span>
                            </span>
                        </div>
                    </WeatherView.Column>

                    <WeatherView.Divider />

                    <WeatherView.Column className="md:col-span-3">
                        <div className="flex flex-row w-full items-center justify-between">
                            <div className="stat-title">آب و هوا</div>
                            <svg
                                className="text-slate-600"
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 16 16"
                                height="30"
                                width="30"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"></path>
                                <path d="M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676 5.5 5.5 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"></path>
                            </svg>
                        </div>

                        <div className="stat-value text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">احتمال بارش</div>
                            <span>
                                <span className="text-sm align-middle"> % </span>
                                {currentWeatherData?.clouds?.all}
                            </span>
                        </div>
                        <div className="stat-value text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">رطوبت</div>
                            <span>
                                <span className="text-sm align-middle"> % </span>
                                {currentWeatherData?.main?.humidity}
                            </span>
                        </div>
                        <div className="stat-value text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">دما</div>
                            <span>
                                {currentWeatherData?.main.temp.toFixed()}&deg;{" "}
                                <span className="text-sm align-middle">سانتیگراد</span>
                            </span>
                        </div>
                        <div className="stat-value text-primary flex flex-row w-full items-center justify-between">
                            <div className="stat-desc">دمای حسی</div>
                            <span>
                                {currentWeatherData?.main.feels_like.toFixed()}&deg;{" "}
                                <span className="text-sm align-middle">سانتیگراد</span>
                            </span>
                        </div>
                    </WeatherView.Column>
                </WeatherView.Body>
            </WeatherView>
        </section>
    );
};

export default ShowCurrentWeather;
