import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  test("renders correctly", () => {
    render(<Contact />);

    const pageHeading = screen.getByRole("heading", {
      // name: "お問い合わせフォーム",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "ShinCodeへのお仕事の依頼",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "お名前",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("お名前");
    expect(nameElement2).toBeInTheDocument();

    const emailElement = screen.getByRole("textbox", {
      name: "メールアドレス",
    });
    expect(emailElement).toBeInTheDocument();

    const questionsElement = screen.getByRole("combobox");
    expect(questionsElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText("利用規約に同意します。");
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
