import { ForecastItem } from "@/components";

const ForecastItemList: React.FC<{ forecastWeatherData: any }> = ({ forecastWeatherData }) => {
    let forecastList = [];
    for (let i = 0; i < forecastWeatherData?.list.length; i += 8) {
        forecastList.push(<ForecastItem key={i} forecastData={forecastWeatherData?.list[i]} />);
    }
    
    return forecastList;
};

export default ForecastItemList;
