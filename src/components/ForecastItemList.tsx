"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ForecastItem } from "@/components";

const settings = {
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
};
const ForecastItemList: React.FC<{ forecastWeatherData: any }> = ({ forecastWeatherData }) => {
    let forecastList = [];
    for (let i = 0; i < forecastWeatherData?.list.length; i += 8) {
        forecastList.push(
            <SwiperSlide key={i}>
                <ForecastItem forecastData={forecastWeatherData?.list[i]} />
            </SwiperSlide>
        );
    }

    return (
        <div className="w-full">
            <Swiper {...settings}>{forecastList}</Swiper>
        </div>
    );
};

export default ForecastItemList;
