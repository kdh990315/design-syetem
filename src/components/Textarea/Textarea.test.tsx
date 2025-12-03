import { render, screen } from "@testing-library/react";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  test("기본 textarea가 렌더링되어야 한다", () => {
    render(<Textarea />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeInTheDocument();
  });
});
