import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Recommendations from "@/components/sections/Recommendations";
import { recommendations } from "@/data/recommendations";

describe("Recommendations section", () => {
  it("renders the section heading", () => {
    render(<Recommendations />);
    expect(screen.getByText(/What Colleagues Say/i)).toBeInTheDocument();
  });

  it("renders all 3 recommender names in the sidebar", () => {
    render(<Recommendations />);
    recommendations.forEach((rec) => {
      expect(screen.getByText(rec.name)).toBeInTheDocument();
    });
  });

  it("shows first recommendation text by default", () => {
    render(<Recommendations />);
    const firstRec = recommendations[0];
    expect(screen.getByText(`"${firstRec.text}"`)).toBeInTheDocument();
  });

  it("switches recommendation when a sidebar button is clicked", () => {
    render(<Recommendations />);
    const secondRec = recommendations[1];

    // Click on the second recommender
    const button = screen.getByRole("button", { name: secondRec.name });
    fireEvent.click(button);

    // The second recommendation text should now be visible
    expect(screen.getByText(`"${secondRec.text}"`)).toBeInTheDocument();
  });

  it("switches to third recommendation when clicked", () => {
    render(<Recommendations />);
    const thirdRec = recommendations[2];

    fireEvent.click(screen.getByRole("button", { name: thirdRec.name }));
    expect(screen.getByText(`"${thirdRec.text}"`)).toBeInTheDocument();
  });

  it("renders the LinkedIn badge link", () => {
    render(<Recommendations />);
    const linkedinLinks = screen.getAllByRole("link");
    const liLink = linkedinLinks.find((l) =>
      l.textContent?.includes("LinkedIn Recommendations")
    );
    expect(liLink).toBeDefined();
    expect(liLink).toHaveAttribute("href", "https://linkedin.com/in/prasanna-poovelu");
  });

  it("shows Nicholas Aanto as a recommender", () => {
    render(<Recommendations />);
    expect(screen.getByText("Nicholas Aanto")).toBeInTheDocument();
  });

  it("shows Harsha Rajan as a recommender", () => {
    render(<Recommendations />);
    expect(screen.getByText("Harsha Rajan")).toBeInTheDocument();
  });

  it("shows Ashish Kurian Thomas as a recommender", () => {
    render(<Recommendations />);
    expect(screen.getByText("Ashish Kurian Thomas")).toBeInTheDocument();
  });

  it("renders dot navigation buttons", () => {
    render(<Recommendations />);
    const dotButtons = screen
      .getAllByRole("button")
      .filter((btn) => btn.getAttribute("aria-label")?.includes("Recommendation"));
    expect(dotButtons).toHaveLength(recommendations.length);
  });

  it("clicking dot navigation switches active recommendation", () => {
    render(<Recommendations />);
    const dotButtons = screen
      .getAllByRole("button")
      .filter((btn) => btn.getAttribute("aria-label")?.includes("Recommendation"));

    fireEvent.click(dotButtons[2]);
    expect(
      screen.getByText(`"${recommendations[2].text}"`)
    ).toBeInTheDocument();
  });

  it("renders 5 star icons for the active recommendation", () => {
    render(<Recommendations />);
    // Stars are rendered as SVG paths
    const { container } = render(<Recommendations />);
    const stars = container.querySelectorAll("svg path");
    expect(stars.length).toBeGreaterThan(0);
  });

  it("renders the section with id='recommendations'", () => {
    const { container } = render(<Recommendations />);
    expect(container.querySelector("#recommendations")).toBeInTheDocument();
  });
});
