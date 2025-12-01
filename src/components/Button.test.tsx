import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders the button with children", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("renders the button with label prop", () => {
  render(<Button label="Submit" />);
  expect(screen.getByText("Submitdddd")).toBeInTheDocument();
});

test("children takes precedence over label prop", () => {
  render(<Button label="Label Text">Children Text</Button>);
  expect(screen.getByText("Children Text")).toBeInTheDocument();
  expect(screen.queryByText("Label Text")).not.toBeInTheDocument();
});
