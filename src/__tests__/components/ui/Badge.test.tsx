import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badge from "@/components/ui/Badge";

describe("Badge component", () => {
  it("renders children text correctly", () => {
    render(<Badge>React.js</Badge>);
    expect(screen.getByText("React.js")).toBeInTheDocument();
  });

  it("applies default variant classes", () => {
    const { container } = render(<Badge>Default</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("bg-dark-card");
    expect(badge).toHaveClass("text-slate-300");
  });

  it("applies primary variant classes", () => {
    const { container } = render(<Badge variant="primary">Primary</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("text-primary-400");
  });

  it("applies accent variant classes", () => {
    const { container } = render(<Badge variant="accent">Accent</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("text-accent-400");
  });

  it("applies success variant classes", () => {
    const { container } = render(<Badge variant="success">Current</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("text-emerald-400");
  });

  it("applies outline variant classes", () => {
    const { container } = render(<Badge variant="outline">Outline</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("border-dark-border");
  });

  it("applies sm size classes by default", () => {
    const { container } = render(<Badge>Small</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("text-xs");
  });

  it("applies md size classes when specified", () => {
    const { container } = render(<Badge size="md">Medium</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("text-sm");
  });

  it("merges custom className", () => {
    const { container } = render(
      <Badge className="custom-class">Custom</Badge>
    );
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass("custom-class");
  });

  it("renders as a span element", () => {
    const { container } = render(<Badge>Span</Badge>);
    expect(container.querySelector("span")).toBeInTheDocument();
  });
});
