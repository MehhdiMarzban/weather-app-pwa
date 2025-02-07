import AppContext from "../AppContext";
import City from "../City";

export default interface CityBadgeProps {
    city: City;
    handleDeleteCity: AppContext["handleDeleteCity"];
}