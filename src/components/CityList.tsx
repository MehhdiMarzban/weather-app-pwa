import { City } from "@/context/AppContext";

/**
 * CityList component renders a list of cities and calls the given handleClickOnCityList function when a city is clicked.
 *
 * @param {{ cities: City[]; handleClickOnCityList: (city: City) => void }} props - The props for the CityList component.
 * @param {City[]} props.cities - The list of cities to be rendered.
 * @param {(city: City) => void} props.handleClickOnCityList - The function to be called when a city is clicked.
 * @returns {JSX.Element} A JSX element representing a list of cities.
 */
const CityList: React.FC<{ cities: City[]; handleClickOnCityList: (city: City) => void }> = ({
    cities,
    handleClickOnCityList,
}) => {
    if (cities.length === 0) return null;
    return (
        <ul className="menu bg-layer-0 glass rounded-box max-h-64 overflow-y-scroll overflow-x-hidden">
            <li>
                <h2 className="menu-title">شهر مورد نظر خود را انتخاب کنید :</h2>
                <ul>
                    {cities.map((city) => (
                        <li key={city.id}>
                            <button onClick={() => handleClickOnCityList(city)}>{city.name}</button>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
};

export default CityList;
