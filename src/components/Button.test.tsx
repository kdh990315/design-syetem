import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders the button", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeDefined();
});
