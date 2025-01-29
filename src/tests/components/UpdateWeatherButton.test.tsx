import { render, screen } from "@testing-library/react";
import { UpdateWeatherButton } from "@/components";

describe("UpdateWeatherButton", () => {
    it("should render the button", () => {
        render(<UpdateWeatherButton isUpdatingWeather={false} updateFN={() => {}} />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })
    it("should not spining when is not updating", () => {
        render(<UpdateWeatherButton isUpdatingWeather={false} updateFN={() => {}} />);
        const svgElement = screen.getByRole("icon");
        expect(svgElement).not.toHaveClass("animate-spin");
    });
    it("should spining when is updating", () => {
        render(<UpdateWeatherButton isUpdatingWeather={true} updateFN={() => {}} />);
        const svgElement = screen.getByRole("icon");
        expect(svgElement).toHaveClass("animate-spin");
    });
});
