import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CityBadge from "@/components/CityBadge";
import { City } from "@/context/AppContext";

describe("CityBadge", () => {
    const city : City = {id: "1", name: "dorud"};
    const mockHandleDeleteCity = vi.fn();
    const user = userEvent.setup();

    it("should render CityBadge", () => {
        render(<CityBadge city={city} handleDeleteCity={mockHandleDeleteCity} />);
        const badge = screen.getByText(city.name);
        expect(badge).toBeInTheDocument();
    });

    it("should call handleDeleteCity when clicked on button", async () => {
        render(<CityBadge city={city} handleDeleteCity={mockHandleDeleteCity} />);

        //* check is in the document
        const deleteButton = screen.getByRole("button");
        expect(deleteButton).toBeInTheDocument();
        
        //* check if clicked function be work correctly
        await user.click(deleteButton);
        expect(mockHandleDeleteCity).toHaveBeenCalledWith(city.id);
    });
});