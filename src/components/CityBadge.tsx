import { AppContext, City } from "@/context/AppContext";

interface CityBadgeProps {
    city: City;
    handleDeleteCity: AppContext["handleDeleteCity"];
}
const CityBadge: React.FC<CityBadgeProps> = ({ city, handleDeleteCity }) => {
    return (
        <div className="badge badge-primary gap-2">
            <button  onClick={() => handleDeleteCity(city.id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-4 w-4 stroke-current cursor-pointer">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            {city.name}
        </div>
    );
};

export default CityBadge;
