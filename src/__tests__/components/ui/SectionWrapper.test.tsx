import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionWrapper from "@/components/ui/SectionWrapper";

describe("SectionWrapper component", () => {
  it("renders children", () => {
    render(<SectionWrapper id="test">Section Content</SectionWrapper>);
    expect(screen.getByText("Section Content")).toBeInTheDocument();
  });

  it("renders as a section element", () => {
    const { container } = render(
      <SectionWrapper id="about">Content</SectionWrapper>
    );
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  it("applies the provided id", () => {
    const { container } = render(
      <SectionWrapper id="my-section">Content</SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("id", "my-section");
  });

  it("uses dark bg when darker=false (default)", () => {
    const { container } = render(
      <SectionWrapper id="light">Content</SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-dark-bg");
  });

  it("uses darker surface bg when darker=true", () => {
    const { container } = render(
      <SectionWrapper id="darker" darker>
        Content
      </SectionWrapper>
    );
    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-dark-surface");
  });

  it("applies custom className", () => {
    const { container } = render(
      <SectionWrapper id="custom" className="custom-class">
        Content
      </SectionWrapper>
    );
    expect(container.querySelector("section")).toHaveClass("custom-class");
  });

  it("wraps children in a max-width container", () => {
    const { container } = render(
      <SectionWrapper id="wrap">Child</SectionWrapper>
    );
    const inner = container.querySelector("div");
    expect(inner).toHaveClass("max-w-6xl");
    expect(inner).toHaveClass("mx-auto");
  });
});
