import { render, screen } from "@testing-library/react";
import { UpdateWeatherButton } from "@/components";
import userEvent from "@testing-library/user-event";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";

// Mock React Query hooks
vi.mock("@tanstack/react-query", () => ({
    useQueryClient: vi.fn(),
    useIsFetching: vi.fn(),
}));

const mockRefetchQueries = vi.fn();
const mockUseQueryClient = vi.mocked(useQueryClient);
const mockUseIsFetching = vi.mocked(useIsFetching);

describe("UpdateWeatherButton", async () => {
    beforeEach(() => {
        // Reset all mocks before each test
        vi.clearAllMocks();

        // Default mock for useQueryClient
        mockUseQueryClient.mockReturnValue({
            refetchQueries: mockRefetchQueries,
        } as any);
    });
    const renderUpdateWeatherButton = () => {
        render(<UpdateWeatherButton />);
        const user = userEvent.setup();
        const button = screen.getByRole("button");
        const svgElement = screen.getByRole("icon");
        return {
            button,
            svgElement,
            user,
        };
    };
    it("should render the button and icon", () => {
        const { button, svgElement } = renderUpdateWeatherButton();

        expect(button).toBeInTheDocument();
        expect(svgElement).toBeInTheDocument();
    });
    it("trigger data refetch on click", async () => {
        mockUseIsFetching.mockImplementation(() => 0);
        const { button, user } = renderUpdateWeatherButton();

        await user.click(button);
        expect(mockRefetchQueries).toHaveBeenCalledWith({ queryKey: ["weather"] });
    });
    it("should spinning when is updating", () => {
        mockUseIsFetching.mockImplementation(() => 1);
        const { svgElement } = renderUpdateWeatherButton();

        expect(svgElement).toHaveClass("animate-spin");
    });
    it("should not spinning when is not updating", () => {
        mockUseIsFetching.mockImplementation(() => 0);
        const { svgElement } = renderUpdateWeatherButton();

        expect(svgElement).not.toHaveClass("animate-spin");
    });
});
