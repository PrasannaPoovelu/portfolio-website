import { describe, it, expect } from "vitest";
import { experiences } from "@/data/experience";

describe("experience data", () => {
  it("has exactly 3 experience entries", () => {
    expect(experiences).toHaveLength(3);
  });

  it("first entry is the current Infosys role", () => {
    const current = experiences[0];
    expect(current.company).toBe("Infosys Ltd");
    expect(current.current).toBe(true);
    expect(current.period).toContain("Present");
  });

  it("Infosys role mentions the Barclays CPR project", () => {
    const infosys = experiences.find((e) => e.id === "infosys");
    expect(infosys?.project).toContain("Barclays");
    expect(infosys?.award).toBeDefined();
    expect(infosys?.award).toContain("Insta Award");
  });

  it("Mediwave Digital entry has the correct period", () => {
    const mediwave = experiences.find((e) => e.id === "mediwave");
    expect(mediwave?.period).toBe("Jan 2022 – May 2024");
    expect(mediwave?.current).toBeUndefined();
  });

  it("Ocean Academy entry is the internship", () => {
    const ocean = experiences.find((e) => e.id === "ocean");
    expect(ocean?.role).toContain("Intern");
    expect(ocean?.company).toBe("Ocean Academy");
  });

  it("all entries have at least one responsibility", () => {
    experiences.forEach((exp) => {
      expect(exp.responsibilities.length).toBeGreaterThan(0);
    });
  });

  it("all entries have required fields", () => {
    experiences.forEach((exp) => {
      expect(exp.id).toBeDefined();
      expect(exp.role).toBeDefined();
      expect(exp.company).toBeDefined();
      expect(exp.location).toBeDefined();
      expect(exp.period).toBeDefined();
    });
  });

  it("only one entry is marked as current", () => {
    const currentRoles = experiences.filter((e) => e.current === true);
    expect(currentRoles).toHaveLength(1);
  });

  it("responsibilities are non-empty strings", () => {
    experiences.forEach((exp) => {
      exp.responsibilities.forEach((r) => {
        expect(typeof r).toBe("string");
        expect(r.length).toBeGreaterThan(10);
      });
    });
  });
});
