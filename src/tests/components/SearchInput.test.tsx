import { render, screen } from "@testing-library/react";
import { SearchInput } from "@/components";
import userEvent from "@testing-library/user-event";

describe("SeachInput", () => {
    const renderSearchInput = () => {
        const mockHandleChangeInput = vi.fn();
        const placeholderText = "search everything";
        render(
            <SearchInput
                inputState=""
                handleChangeInput={mockHandleChangeInput}
                placeholder={placeholderText}
            />
        );
        return {
            searchInput: screen.getByRole("textbox"),
            mockHandleChangeInput,
            user: userEvent.setup(),
            placeholderText,
        };
    };
    it("should render the component", () => {
        const { searchInput } = renderSearchInput();

        expect(searchInput).toBeInTheDocument();
    });

    it("should have the correct placeholder", () => {
        const { searchInput, placeholderText } = renderSearchInput();
        
        expect(searchInput).toHaveAttribute("placeholder", placeholderText);
    });

    it("should call handleChangeInput when the input changes", async () => {
        const { searchInput, user, mockHandleChangeInput } = renderSearchInput();
        const typedText = "Tehran";

        expect(mockHandleChangeInput).not.toHaveBeenCalled();

        await user.type(searchInput, typedText);

        expect(mockHandleChangeInput).toHaveBeenCalledTimes(typedText.length);
    });
});
