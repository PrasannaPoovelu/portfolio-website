import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeading from "@/components/ui/SectionHeading";

describe("SectionHeading component", () => {
  it("renders the label text", () => {
    render(<SectionHeading label="About Me" title="Who I Am" />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the title text", () => {
    render(<SectionHeading label="Section" title="My Title" />);
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(
      <SectionHeading
        label="Section"
        title="Title"
        subtitle="This is a subtitle"
      />
    );
    expect(screen.getByText("This is a subtitle")).toBeInTheDocument();
  });

  it("does not render subtitle element when not provided", () => {
    const { container } = render(
      <SectionHeading label="Section" title="Title" />
    );
    const paragraphs = container.querySelectorAll("p");
    // no subtitle paragraph should exist
    paragraphs.forEach((p) => {
      expect(p.textContent).not.toContain("subtitle");
    });
  });

  it("title is rendered as an h2", () => {
    render(<SectionHeading label="Label" title="Section Title" />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Section Title" })
    ).toBeInTheDocument();
  });

  it("label has uppercase tracking style", () => {
    const { container } = render(
      <SectionHeading label="CAREER" title="Experience" />
    );
    const label = container.querySelector("span");
    expect(label).toHaveClass("tracking-widest");
    expect(label).toHaveClass("uppercase");
  });

  it("renders the decorative divider dots", () => {
    const { container } = render(
      <SectionHeading label="Label" title="Title" />
    );
    // There should be decorative spans for the divider lines
    const spans = container.querySelectorAll("span");
    expect(spans.length).toBeGreaterThan(1);
  });
});
