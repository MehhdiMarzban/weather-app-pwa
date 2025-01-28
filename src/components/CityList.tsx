import { City } from "@/context/AppContext";

const CityList: React.FC<{ cities: City[]; handleClickOnCityList: (city: City) => void }> = ({
    cities,
    handleClickOnCityList,
}) => {
    return (
        <ul className="menu bg-base-300 glass rounded-box max-h-64 overflow-y-scroll overflow-x-hidden">
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
