import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { InstallPWA } from "@/components";

describe("Page", () => {
   
    beforeEach(() => {
        // Mock the beforeinstallprompt event
        // Set up the event listener
        window.addEventListener = jest.fn((event: string, callback: (event: Event) => void) => {
            if (event === "beforeinstallprompt") {
                // Simulate the event being triggered
                const eventMock = { preventDefault: jest.fn() } as unknown as Event; // Type assertion
                callback(eventMock);
            }
        }) as any;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should show install button when beforeinstallprompt event is triggered", () => {
        render(<InstallPWA />);

        // Check if the install button is rendered
        const installButton = screen.getByRole("button", { name: /نصب اپلیکیشن/i });
        expect(installButton).toBeInTheDocument();
    });

    it("should not show the install button if beforeinstallprompt is not triggered", () => {
        // Remove the event listener to simulate the absence of beforeinstallprompt
        window.addEventListener = jest.fn();

        render(<InstallPWA />);

        // Check that the install button is not rendered
        const installButton = screen.queryByRole("button", { name: /نصب اپلیکیشن/i });
        expect(installButton).not.toBeInTheDocument();
    });
});
