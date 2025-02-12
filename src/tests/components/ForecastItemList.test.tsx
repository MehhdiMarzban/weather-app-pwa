import { ForecastItemList } from "@/components";
import Forecast from "@/types/ForecastWeather";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//* mocked components
// vi.mock("swiper/react", () => ({
//     Swiper: vi.fn(({ children }) => <div data-testid="swiper">{children}</div>),
//     SwiperSlide: vi.fn(({ children }) => <div data-testid="swiper-slide">{children}</div>),
// }));

// vi.mock("@/components/ForecastItem", () => ({
//     default: vi.fn(({ children }) => <div data-testid="forecast-item">{children}</div>),
// }));

describe("ForecastItemList", () => {
    const mockForecastData = {
        list: Array.from({ length: 40 }, () => ({
            main: {
                temp_min: 100,
                temp_max: 100,
            },
            dt_txt: "2025-02-12 00:00:00",
            weather: [{ description: "sunny", icon: "01d" }],
        })),
    };
    const forecastItemListRender = () => {
        const { container } = render(
            <ForecastItemList forecastWeatherData={mockForecastData as { list: Forecast[] }} />
        );
        return {
            container,
            buttons: screen.getAllByRole("button"),
            user: userEvent.setup(),
            slides: screen.getAllByTestId("swiper-slide"),
        };
    };
    it("should render 5 slide items", () => {
        const { slides } = forecastItemListRender();

        expect(slides).toHaveLength(mockForecastData.list.length / 8);
    });
    it("should render 2 navigation buttons", () => {
        const { buttons } = forecastItemListRender();

        buttons.forEach((button) => expect(button).toBeInTheDocument());
        expect(buttons).toHaveLength(2);
    });
});
