import City from "./City";

export default interface AppContext {
    cities: City[];
    currentCity: City | null;
    isLoading: boolean;
    handleAddCity: (city: City) => void;
    handleDeleteCity: (id: City["id"]) => void;
    handleSetCurrentCity: (city: City) => void;
}