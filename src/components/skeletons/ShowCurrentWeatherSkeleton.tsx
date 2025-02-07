import Skeleton from "react-loading-skeleton";
import { WeatherView } from "@/components";

/**
 * A skeleton component for the ShowCurrentWeather component.
 *
 * Displays a skeleton of the ShowCurrentWeather component while the data is being loaded.
 *
 * @returns A JSX element representing the skeleton of the ShowCurrentWeather component.
 */
const ShowCurrentWeatherSkeleton: React.FC = () => {
    return (
        <WeatherView.Body className="pb-2">
            <WeatherView.Column className="md:col-span-4 block space-y-4">
                <Skeleton height={51} />
                <div className="flex flex-row justify-around items-center">
                    <Skeleton height={32} width={90} />
                    <Skeleton height={70} width={70} circle />
                </div>
                <Skeleton count={4} height={32} />
            </WeatherView.Column>
            <WeatherView.Divider />
            <WeatherView.Column className="md:col-span-3 block">
                <Skeleton height={50} />
                <Skeleton count={4} height={32} className="mt-5" />
            </WeatherView.Column>
            <WeatherView.Divider />
            <WeatherView.Column className="md:col-span-3 block">
                <Skeleton height={50} />
                <Skeleton height={32} count={4} className="mt-5" />
            </WeatherView.Column>
        </WeatherView.Body>
    );
};

export default ShowCurrentWeatherSkeleton;
