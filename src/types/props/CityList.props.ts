import City from "../City";

export default interface CityListProps {
    cities: City[];
    handleClickOnCityList: (city: City) => void;
}
