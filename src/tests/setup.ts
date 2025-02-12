import "@testing-library/jest-dom/vitest";

beforeAll(() => {
    process.env.NEXT_PUBLIC_IMAGE_URL = "https://openweathermap.org/img/wn";
});
