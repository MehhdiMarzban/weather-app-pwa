import { useId } from "react";
import Skeleton from "react-loading-skeleton";

const ShowForecastWeatherSkeleton = () => {
    const skeletonKey = useId();
    return (
        <div className="py-2 mx-8">
            {/* اسکلتون عنوان */}
            <Skeleton width={150} height={24} className="mb-3" containerClassName="block" />

            {/* اسکلتون اسلایدر */}
            <div className="relative">
                <div className="flex flex-row justify-between gap-4 overflow-hidden flex-nowrap">
                    {Array(4)
                        .fill(null)
                        .map((_, index) => (
                            <div key={`${skeletonKey}-${index}`} className="w-[200px] flex-none">
                                <Skeleton
                                    height={135}
                                    className="rounded-xl"
                                    containerClassName="block"
                                />
                                <Skeleton height={24} className="mt-2" />
                                <Skeleton height={16} className="mt-1" />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ShowForecastWeatherSkeleton;
