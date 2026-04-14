import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/ui/Button";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders as a button element by default", () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders as an anchor when as='a' and href is provided", () => {
    render(
      <Button as="a" href="https://example.com">
        Link
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("fires onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("does not fire onClick when disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies primary variant classes by default", () => {
    const { container } = render(<Button>Primary</Button>);
    expect(container.firstChild).toHaveClass("bg-primary-600");
  });

  it("applies outline variant classes", () => {
    const { container } = render(<Button variant="outline">Outline</Button>);
    expect(container.firstChild).toHaveClass("border-primary-500/40");
  });

  it("applies accent variant classes", () => {
    const { container } = render(<Button variant="accent">Accent</Button>);
    expect(container.firstChild).toHaveClass("bg-accent-600");
  });

  it("applies md size classes by default", () => {
    const { container } = render(<Button>Medium</Button>);
    expect(container.firstChild).toHaveClass("px-6");
  });

  it("applies lg size classes when specified", () => {
    const { container } = render(<Button size="lg">Large</Button>);
    expect(container.firstChild).toHaveClass("px-8");
  });

  it("applies sm size classes when specified", () => {
    const { container } = render(<Button size="sm">Small</Button>);
    expect(container.firstChild).toHaveClass("px-4");
  });

  it("sets target and rel on anchor", () => {
    render(
      <Button as="a" href="https://example.com" target="_blank" rel="noopener noreferrer">
        External
      </Button>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("merges custom className", () => {
    const { container } = render(
      <Button className="mt-4">With Class</Button>
    );
    expect(container.firstChild).toHaveClass("mt-4");
  });
});
