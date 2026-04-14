import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "@/components/ui/Card";

describe("Card component", () => {
  it("renders children correctly", () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("has base card classes", () => {
    const { container } = render(<Card>Base</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("rounded-xl");
    expect(card).toHaveClass("border");
    expect(card).toHaveClass("bg-dark-card");
  });

  it("applies hover classes when hover=true", () => {
    const { container } = render(<Card hover>Hoverable</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain("hover:");
  });

  it("does not apply hover classes by default", () => {
    const { container } = render(<Card>No hover</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card.className).not.toContain("hover:-translate-y-1");
  });

  it("applies glow ring class when glow=true", () => {
    const { container } = render(<Card glow>Glow</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("ring-1");
  });

  it("merges custom className", () => {
    const { container } = render(<Card className="my-8">Custom</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass("my-8");
  });

  it("renders multiple children", () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Paragraph</p>
      </Card>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
  });
});
