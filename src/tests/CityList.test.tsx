import { fireEvent, render, screen } from "@testing-library/react";
import CityList from "@/components/CityList";
import { City } from "@/context/AppContext";

describe("CityList", () => {
    const mockHandleClickOnCityList = vi.fn();

    it("should render nothing if given an empty array", () => {
        const cities: City[] = [];
        const {container} = render(<CityList cities={cities} handleClickOnCityList={mockHandleClickOnCityList} />);
        const list = screen.queryByRole("list");
        //* this two is like each other
        expect(list).not.toBeInTheDocument();
        expect(container).toBeEmptyDOMElement();
    });
    it("should render a list of cities and call handleClickOnCityList when a city is clicked", () => {
        const cities: City[] = [
            { id: "1", name: "tehran" },
            { id: "2", name: "dorud" },
        ];
        render(<CityList cities={cities} handleClickOnCityList={mockHandleClickOnCityList} />);
        cities.forEach((item) => {
            const listItemButton = screen.getByText(item.name);
            //* check is in the document
            expect(listItemButton).toBeInTheDocument();

            fireEvent.click(listItemButton);
            expect(mockHandleClickOnCityList).toHaveBeenCalledWith(item);
        });
        expect(mockHandleClickOnCityList).toHaveBeenCalledTimes(cities.length);
    });
});
