import { screen, render } from "@testing-library/react";
import { Footer } from "@/components";

describe("Footer", () => {
    it("should render the footer", () => {
        render(<Footer />);
        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
    });
    it("should render the footer text", () => {
        render(<Footer />);
        const footerText = screen.getAllByRole("paragraph")[0].textContent;
        expect(footerText).toContain("ساخته شده توسط مهدی مرزبان");
    });
});
