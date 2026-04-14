import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";

describe("projects data", () => {
  it("contains exactly 4 projects", () => {
    expect(projects).toHaveLength(4);
  });

  it("all projects have unique IDs", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(projects.length);
  });

  it("includes the Barclays CPR project", () => {
    const cpr = projects.find((p) => p.id === "cpr-barclays");
    expect(cpr).toBeDefined();
    expect(cpr?.category).toBe("Enterprise");
    expect(cpr?.techStack).toContain("React.js");
    expect(cpr?.techStack).toContain("TypeScript");
  });

  it("includes the Brook healthcare dashboard", () => {
    const brook = projects.find((p) => p.id === "brook-dashboard");
    expect(brook).toBeDefined();
    expect(brook?.category).toBe("Healthcare");
    expect(brook?.techStack).toContain("Highcharts");
  });

  it("includes the Safe2Share platform", () => {
    const safe = projects.find((p) => p.id === "safe2share");
    expect(safe).toBeDefined();
    expect(safe?.techStack).toContain("Redux Toolkit");
    expect(safe?.techStack).toContain("PWA");
  });

  it("includes the Mediwave website revamp", () => {
    const mediwave = projects.find((p) => p.id === "mediwave-website");
    expect(mediwave).toBeDefined();
    expect(mediwave?.techStack).toContain("Next.js");
    expect(mediwave?.techStack).toContain("Tailwind CSS");
  });

  it("all projects have required fields", () => {
    projects.forEach((project) => {
      expect(project.id.length).toBeGreaterThan(0);
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.description.length).toBeGreaterThan(0);
      expect(project.category.length).toBeGreaterThan(0);
    });
  });

  it("all projects have a non-empty tech stack", () => {
    projects.forEach((project) => {
      expect(project.techStack.length).toBeGreaterThan(0);
    });
  });

  it("all projects have at least 3 highlights", () => {
    projects.forEach((project) => {
      expect(project.highlights.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("project categories are valid", () => {
    const validCategories = ["Enterprise", "Healthcare", "Web"];
    projects.forEach((project) => {
      expect(validCategories).toContain(project.category);
    });
  });
});
