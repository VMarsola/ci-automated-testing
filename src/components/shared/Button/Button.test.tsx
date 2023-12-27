import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import Button from "./index";

describe("Button", () => {
  test("renders a button", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("renders a button with the correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toHaveTextContent("Click me");
  });

  test("should be able to click on the button", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClick).toHaveBeenCalled();
  });
});
