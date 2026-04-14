import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/components/sections/Contact";
import { profile } from "@/data/profile";

describe("Contact section", () => {
  it("renders the section heading", () => {
    render(<Contact />);
    expect(
      screen.getByRole("heading", { name: /Let's Work Together/i })
    ).toBeInTheDocument();
  });

  it("renders the email contact link", () => {
    render(<Contact />);
    const emailLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.startsWith("mailto:"));
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks[0]).toHaveAttribute("href", `mailto:${profile.email}`);
  });

  it("renders the LinkedIn link", () => {
    render(<Contact />);
    const linkedinLink = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href") === profile.linkedin);
    expect(linkedinLink).toBeInTheDocument();
  });

  it("renders the GitHub link", () => {
    render(<Contact />);
    const githubLink = screen
      .getAllByRole("link")
      .find((l) => l.getAttribute("href") === profile.github);
    expect(githubLink).toBeInTheDocument();
  });

  it("renders the phone contact link", () => {
    render(<Contact />);
    const phoneLinks = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.startsWith("tel:"));
    expect(phoneLinks.length).toBeGreaterThan(0);
  });

  it("renders 'What I Bring' section with key points", () => {
    render(<Contact />);
    expect(screen.getByText(/What I Bring/)).toBeInTheDocument();
    expect(screen.getByText(/React \+ TypeScript/)).toBeInTheDocument();
  });

  it("mentions availability status", () => {
    render(<Contact />);
    expect(screen.getByText(/Available from/)).toBeInTheDocument();
  });

  it("mentions Senior Frontend Developer in availability", () => {
    render(<Contact />);
    expect(screen.getByText(/Senior Frontend Developer/)).toBeInTheDocument();
  });

  it("renders the section with id='contact'", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("#contact")).toBeInTheDocument();
  });

  it("renders all 4 contact links", () => {
    render(<Contact />);
    // Email, LinkedIn, GitHub, Phone = 4 contact links
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(4);
  });

  it("mentions 5+ years of experience", () => {
    render(<Contact />);
    expect(screen.getByText(/5\+ years/)).toBeInTheDocument();
  });

  it("mentions open to relocation", () => {
    render(<Contact />);
    expect(screen.getByText(/relocation/i)).toBeInTheDocument();
  });
});
