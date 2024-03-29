import { logRoles, render, screen } from "@testing-library/react";
import Skills from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButotn = screen.getByRole("button", {
      name: "ログイン",
    });
    expect(loginButotn).toBeInTheDocument();
  });

  test("Start lerarning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "はじめる",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start lerarning button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "はじめる",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
