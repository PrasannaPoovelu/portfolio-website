import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/sections/Projects";

describe("Projects section", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /Key Projects/i })
    ).toBeInTheDocument();
  });

  it("renders the CPR Barclays project title", () => {
    render(<Projects />);
    expect(
      screen.getByText(/Central PEP Repository/i)
    ).toBeInTheDocument();
  });

  it("renders the Brook Healthcare Dashboard project", () => {
    render(<Projects />);
    expect(screen.getByText(/Brook/i)).toBeInTheDocument();
  });

  it("renders the Safe2Share project", () => {
    render(<Projects />);
    expect(screen.getByText(/Safe2Share/i)).toBeInTheDocument();
  });

  it("renders the Mediwave website project", () => {
    render(<Projects />);
    expect(screen.getByText(/Mediwave Digital/i)).toBeInTheDocument();
  });

  it("renders Enterprise category badge on CPR project", () => {
    render(<Projects />);
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
  });

  it("renders tech stack labels", () => {
    render(<Projects />);
    expect(screen.getAllByText("React.js").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
  });

  it("renders 'Tech Stack' labels", () => {
    render(<Projects />);
    const labels = screen.getAllByText(/Tech Stack/i);
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the section with id='projects'", () => {
    const { container } = render(<Projects />);
    expect(container.querySelector("#projects")).toBeInTheDocument();
  });

  it("renders project highlight bullet points", () => {
    const { container } = render(<Projects />);
    const bullets = container.querySelectorAll("li");
    expect(bullets.length).toBeGreaterThan(4);
  });
});
