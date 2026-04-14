import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "@/components/sections/Hero";

// Stub scrollIntoView for jsdom
const scrollIntoViewMock = vi.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe("Hero section", () => {
  beforeEach(() => {
    scrollIntoViewMock.mockClear();
  });

  it("renders Prasanna's name", () => {
    render(<Hero />);
    expect(screen.getByText(/Prasanna/)).toBeInTheDocument();
  });

  it("renders the availability badge", () => {
    render(<Hero />);
    expect(screen.getByText(/Open to Opportunities/)).toBeInTheDocument();
  });

  it("renders 5+ years experience stat", () => {
    render(<Hero />);
    expect(screen.getByText("5+")).toBeInTheDocument();
  });

  it("renders the Insta Award badge", () => {
    render(<Hero />);
    expect(screen.getByText("Insta Award")).toBeInTheDocument();
  });

  it("renders View My Work CTA button", () => {
    render(<Hero />);
    expect(
      screen.getByRole("button", { name: /View My Work/i })
    ).toBeInTheDocument();
  });

  it("renders Get In Touch CTA button", () => {
    render(<Hero />);
    expect(
      screen.getByRole("button", { name: /Get In Touch/i })
    ).toBeInTheDocument();
  });

  it("renders Download CV link", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Download CV/i })).toBeInTheDocument();
  });

  it("renders the core tech stack pills", () => {
    render(<Hero />);
    expect(screen.getByText("React.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });

  it("calls scrollIntoView when View My Work is clicked", () => {
    render(<Hero />);
    // Create dummy sections to scroll to
    const projectsSection = document.createElement("div");
    projectsSection.id = "projects";
    document.body.appendChild(projectsSection);

    fireEvent.click(screen.getByRole("button", { name: /View My Work/i }));
    expect(scrollIntoViewMock).toHaveBeenCalled();

    document.body.removeChild(projectsSection);
  });

  it("mentions Infosys in the tagline", () => {
    render(<Hero />);
    expect(screen.getByText(/Infosys/)).toBeInTheDocument();
  });

  it("mentions Barclays in the description", () => {
    render(<Hero />);
    expect(screen.getByText(/Barclays/)).toBeInTheDocument();
  });

  it("renders the section with id='hero'", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("#hero")).toBeInTheDocument();
  });
});
