import { describe, it, expect } from "vitest";
import { recommendations } from "@/data/recommendations";

describe("recommendations data", () => {
  it("contains exactly 3 real LinkedIn recommendations", () => {
    expect(recommendations).toHaveLength(3);
  });

  it("includes Nicholas Aanto's recommendation", () => {
    const rec = recommendations.find((r) => r.name === "Nicholas Aanto");
    expect(rec).toBeDefined();
    expect(rec?.company).toBe("vThink");
    expect(rec?.text).toContain("Mediwave Digital");
  });

  it("includes Harsha Rajan's recommendation", () => {
    const rec = recommendations.find((r) => r.name === "Harsha Rajan");
    expect(rec).toBeDefined();
    expect(rec?.text).toContain("Brook");
    expect(rec?.text).toContain("ownership");
  });

  it("includes Ashish Kurian Thomas's recommendation", () => {
    const rec = recommendations.find((r) => r.name === "Ashish Kurian Thomas");
    expect(rec).toBeDefined();
    expect(rec?.role).toBe("Software Engineer");
    expect(rec?.text).toContain("work ethic");
  });

  it("all recommendations have unique IDs", () => {
    const ids = recommendations.map((r) => r.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(recommendations.length);
  });

  it("all recommendations have non-empty required fields", () => {
    recommendations.forEach((rec) => {
      expect(rec.id.length).toBeGreaterThan(0);
      expect(rec.name.length).toBeGreaterThan(0);
      expect(rec.role.length).toBeGreaterThan(0);
      expect(rec.company.length).toBeGreaterThan(0);
      expect(rec.text.length).toBeGreaterThan(0);
      expect(rec.avatar.length).toBeGreaterThan(0);
      expect(rec.date.length).toBeGreaterThan(0);
    });
  });

  it("all recommendation texts are substantial (> 50 chars)", () => {
    recommendations.forEach((rec) => {
      expect(rec.text.length).toBeGreaterThan(50);
    });
  });

  it("all recommendations include a valid LinkedIn URL", () => {
    recommendations.forEach((rec) => {
      expect(rec.linkedin).toContain("linkedin.com");
    });
  });

  it("recommendation dates are from 2025", () => {
    recommendations.forEach((rec) => {
      expect(rec.date).toContain("2025");
    });
  });

  it("avatar initials match the recommender names", () => {
    const nicholas = recommendations.find((r) => r.name === "Nicholas Aanto");
    expect(nicholas?.avatar).toBe("NA");

    const harsha = recommendations.find((r) => r.name === "Harsha Rajan");
    expect(harsha?.avatar).toBe("HR");

    const ashish = recommendations.find((r) => r.name === "Ashish Kurian Thomas");
    expect(ashish?.avatar).toBe("AK");
  });
});
