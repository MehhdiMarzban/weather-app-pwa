"use client";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Scrollbar, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { ForecastItem, SwiperButtons } from "@/components";

const settings = {
    modules: [Scrollbar, Navigation],
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
