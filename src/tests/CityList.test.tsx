import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CityList from "@/components/CityList";
import { City } from "@/context/AppContext";

describe("CityList", () => {
    const mockHandleClickOnCityList = vi.fn();

    it("should render nothing if given an empty array", () => {
        const cities: City[] = [];
        const { container } = render(
            <CityList cities={cities} handleClickOnCityList={mockHandleClickOnCityList} />
        );
        const list = screen.queryByRole("list");
        //* this two is like each other
        expect(list).not.toBeInTheDocument();
        expect(container).toBeEmptyDOMElement();
    });
    it("should render a list of cities and call handleClickOnCityList when a city is clicked", async () => {
        const cities: City[] = [
            { id: "1", name: "tehran" },
            { id: "2", name: "dorud" },
        ];
        const user = userEvent.setup();

        render(<CityList cities={cities} handleClickOnCityList={mockHandleClickOnCityList} />);

        for (const item of cities) {
            const listItemButton = screen.getByText(item.name);
            //* check is in the document
            expect(listItemButton).toBeInTheDocument();

            //* fire event is not suitable for interactions and is simple simulate user events
            // fireEvent.click(listItemButton);

            //* user event is more suitable for interactions and is simulate user events
            await user.click(listItemButton);
            expect(mockHandleClickOnCityList).toHaveBeenCalledWith(item);
        }
        expect(mockHandleClickOnCityList).toHaveBeenCalledTimes(cities.length);
    });
});
