import Skeleton from "react-loading-skeleton";
import { WeatherView } from "@/components";

const ShowCurrentWeatherSkeleton: React.FC = () => {
    return (
        <WeatherView.Body className="pb-2">
            <WeatherView.Column className="md:col-span-4 block space-y-4">
                <Skeleton height={50} />
                <div className="flex flex-row justify-around items-center">
                    <Skeleton height={35} width={90} />
                    <Skeleton height={70} width={70} circle />
                </div>
                <Skeleton count={4} height={35} />
            </WeatherView.Column>
            <WeatherView.Divider />
            <WeatherView.Column className="md:col-span-3 block">
                <Skeleton height={50} />
                <Skeleton count={4} height={35} className="mt-5" />
            </WeatherView.Column>
            <WeatherView.Divider />
            <WeatherView.Column className="md:col-span-3 block">
                <Skeleton height={50} />
                <Skeleton height={35} count={4} className="mt-5" />
            </WeatherView.Column>
        </WeatherView.Body>
    );
};

export default ShowCurrentWeatherSkeleton;
