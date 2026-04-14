import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience from "@/components/sections/Experience";

describe("Experience section", () => {
  it("renders the section heading", () => {
    render(<Experience />);
    expect(
      screen.getByRole("heading", { name: /Work Experience/i })
    ).toBeInTheDocument();
  });

  it("renders the Infosys role", () => {
    render(<Experience />);
    expect(screen.getByText("Senior Associate Consultant")).toBeInTheDocument();
    expect(screen.getByText("Infosys Ltd")).toBeInTheDocument();
  });

  it("shows 'Current' badge on Infosys role", () => {
    render(<Experience />);
    expect(screen.getByText("Current")).toBeInTheDocument();
  });

  it("renders the Barclays CPR project tag", () => {
    render(<Experience />);
    expect(
      screen.getByText(/Central PEP Repository/i)
    ).toBeInTheDocument();
  });

  it("renders the Insta Award callout", () => {
    render(<Experience />);
    expect(screen.getByText(/Insta Award/i)).toBeInTheDocument();
  });

  it("renders Mediwave Digital role", () => {
    render(<Experience />);
    expect(screen.getByText("Front-End Developer")).toBeInTheDocument();
    expect(screen.getByText("Mediwave Digital Pvt. Ltd")).toBeInTheDocument();
  });

  it("renders Ocean Academy internship", () => {
    render(<Experience />);
    expect(screen.getByText("Front-End Developer Intern")).toBeInTheDocument();
    expect(screen.getByText("Ocean Academy")).toBeInTheDocument();
  });

  it("renders the section with id='experience'", () => {
    const { container } = render(<Experience />);
    expect(container.querySelector("#experience")).toBeInTheDocument();
  });

  it("renders all period labels", () => {
    render(<Experience />);
    expect(screen.getByText("Jun 2024 – Present")).toBeInTheDocument();
    expect(screen.getByText("Jan 2022 – May 2024")).toBeInTheDocument();
    expect(screen.getByText("Mar 2021 – Dec 2021")).toBeInTheDocument();
  });

  it("renders responsibility bullet points", () => {
    const { container } = render(<Experience />);
    const bullets = container.querySelectorAll("li");
    expect(bullets.length).toBeGreaterThan(5);
  });
});
