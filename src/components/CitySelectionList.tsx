"use client";
import CityBadge from "@/components/CityBadge";
import { useAppContext } from "@/context/AppContext";
import MiniLoading from "./MiniLoading";

const CitySelectionList: React.FC = () => {
    const { cities: selectedCities, isLoading, handleDeleteCity } = useAppContext();
    if (isLoading) return <MiniLoading />;
    return (
        <>
            <h6 className="text-sm text-base-content mt-3 font-bold">شهر های انتخاب شده :</h6>
            <div className="flex flex-row gap-2 flex-wrap">
                {selectedCities.length > 0 ? (
                    selectedCities.map((city) => (
                        <CityBadge handleDeleteCity={handleDeleteCity} key={city.id} city={city} />
                    ))
                ) : (
                    <span className="badge badge-primary text-sm text-center py-3 mx-auto">
                        هنوز شهری انتخاب نکردید !
                    </span>
                )}
            </div>
        </>
    );
};

export default CitySelectionList;
