import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox 컴포넌트", () => {
  test("checkbox input 엘리먼트로 렌더링되어야 한다", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute("type", "checkbox");
  });
});
