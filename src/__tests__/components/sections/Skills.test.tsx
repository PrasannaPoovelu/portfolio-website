import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/sections/Skills";

describe("Skills section", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(
      screen.getByRole("heading", { name: /Skills & Certifications/i })
    ).toBeInTheDocument();
  });

  it("renders React.js skill", () => {
    render(<Skills />);
    expect(screen.getByText("React.js")).toBeInTheDocument();
  });

  it("renders TypeScript skill", () => {
    render(<Skills />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders Vitest in Testing category", () => {
    render(<Skills />);
    expect(screen.getByText("Vitest")).toBeInTheDocument();
  });

  it("renders Jest in Testing category", () => {
    render(<Skills />);
    expect(screen.getByText("Jest")).toBeInTheDocument();
  });

  it("renders Anthropic Claude in AI & Emerging category", () => {
    render(<Skills />);
    expect(screen.getByText("Anthropic Claude")).toBeInTheDocument();
  });

  it("renders the Certifications section", () => {
    render(<Skills />);
    expect(screen.getAllByText("🎓 Certifications")[0]).toBeInTheDocument();
  });

  it("renders the Infosys React certification", () => {
    render(<Skills />);
    expect(
      screen.getByText("Infosys Certified React Web Developer")
    ).toBeInTheDocument();
  });

  it("renders the Claude Code in Action certification", () => {
    render(<Skills />);
    expect(screen.getByText("Claude Code in Action")).toBeInTheDocument();
  });

  it("renders the Angular certification", () => {
    render(<Skills />);
    expect(screen.getByText("Angular Certification")).toBeInTheDocument();
  });

  it("renders the Education section", () => {
    render(<Skills />);
    expect(
      screen.getByText("Bachelor of Mechanical Engineering (B.E.)")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Regency Institute of Technology/i)
    ).toBeInTheDocument();
  });

  it("renders the section with id='skills'", () => {
    const { container } = render(<Skills />);
    expect(container.querySelector("#skills")).toBeInTheDocument();
  });
});
