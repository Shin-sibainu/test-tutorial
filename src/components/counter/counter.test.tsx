import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElemenet = screen.getByRole("heading");
    expect(countElemenet).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElemenet = screen.getByRole("heading");
    expect(countElemenet).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toHaveTextContent("1");
  });
});
