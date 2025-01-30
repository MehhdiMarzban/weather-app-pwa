"use client";
import Slider from "react-slick";
import { ForecastItem } from "@/components";

const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    initialSlide: 1,
    speed: 500,
    slidesToShow: 4, // تعداد کارت‌هایی که در یک اسلاید نمایش داده می‌شوند
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const ForecastItemList: React.FC<{ forecastWeatherData: any }> = ({ forecastWeatherData }) => {
    let forecastList = [];
    for (let i = 0; i < forecastWeatherData?.list.length; i += 8) {
        forecastList.push(<ForecastItem key={i} forecastData={forecastWeatherData?.list[i]} />);
    }

    return (
        <div className="w-full" dir="rtl">
            <Slider {...settings} >{forecastList}</Slider>
        </div>
    );
};

export default ForecastItemList;
