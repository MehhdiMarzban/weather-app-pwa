"use client";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ForecastItem, SwiperButtons } from "@/components";

const settings = {
    modules: [Navigation],
    scrollbar: {
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
    grabCursor: true,
    slidesPerView: 1,
    breakpoints: {
        460: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
} satisfies SwiperProps;


interface ForecastItemListProps {
    forecastWeatherData: { list: Array<any> };
}


/**
 * A component that renders a list of forecast weather data as a swiper.
 *
 * @prop {Object} forecastWeatherData - The forecast weather data returned from the API.
 * @prop {Array} forecastWeatherData.list - The list of forecast weather data.
 *
 * @returns {JSX.Element} A JSX element representing a swiper of forecast weather data.
 */

const ForecastItemList: React.FC<ForecastItemListProps> = ({ forecastWeatherData }) => {
    let forecastList = forecastWeatherData?.list.reduce<React.JSX.Element[]>((acc, item, index) => {
        if (index % 8 === 0) {
            acc.push(
                <SwiperSlide key={item?.dt_txt}>
                    <ForecastItem forecastData={item} />
                </SwiperSlide>
            );
        }
        return acc;
    }, []);

    return (
        <div className="relative">
            <Swiper {...settings}>{forecastList}</Swiper>
            <SwiperButtons />
        </div>
    );
};

export default ForecastItemList;
