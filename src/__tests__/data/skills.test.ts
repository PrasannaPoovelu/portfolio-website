import { describe, it, expect } from "vitest";
import { skillCategories, certifications } from "@/data/skills";

describe("skills data", () => {
  describe("skillCategories", () => {
    it("has at least 7 skill categories", () => {
      expect(skillCategories.length).toBeGreaterThanOrEqual(7);
    });

    it("includes a Frontend category with React and TypeScript", () => {
      const frontend = skillCategories.find((c) => c.category === "Frontend");
      expect(frontend).toBeDefined();
      expect(frontend?.skills).toContain("React.js");
      expect(frontend?.skills).toContain("TypeScript");
    });

    it("includes a Testing category with Vitest and Jest", () => {
      const testing = skillCategories.find((c) => c.category === "Testing");
      expect(testing).toBeDefined();
      expect(testing?.skills).toContain("Vitest");
      expect(testing?.skills).toContain("Jest");
    });

    it("includes an AI & Emerging category", () => {
      const ai = skillCategories.find((c) => c.category === "AI & Emerging");
      expect(ai).toBeDefined();
      expect(ai?.skills).toContain("Anthropic Claude");
    });

    it("all categories have an icon and non-empty skills", () => {
      skillCategories.forEach((cat) => {
        expect(cat.icon.length).toBeGreaterThan(0);
        expect(cat.skills.length).toBeGreaterThan(0);
      });
    });

    it("all skill names are non-empty strings", () => {
      skillCategories.forEach((cat) => {
        cat.skills.forEach((skill) => {
          expect(typeof skill).toBe("string");
          expect(skill.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe("certifications", () => {
    it("has exactly 4 certifications", () => {
      expect(certifications).toHaveLength(4);
    });

    it("includes the Infosys React certification", () => {
      const cert = certifications.find((c) =>
        c.title.includes("Infosys Certified React")
      );
      expect(cert).toBeDefined();
      expect(cert?.issuer).toBe("Infosys Ltd");
    });

    it("includes the Claude Code in Action certification", () => {
      const cert = certifications.find((c) =>
        c.title.includes("Claude Code")
      );
      expect(cert).toBeDefined();
      expect(cert?.issuer).toBe("Anthropic");
      expect(cert?.certNo).toBe("wknud4pv4feo");
    });

    it("includes the Angular certification", () => {
      const cert = certifications.find((c) =>
        c.title.toLowerCase().includes("angular")
      );
      expect(cert).toBeDefined();
    });

    it("includes the Python diploma", () => {
      const cert = certifications.find((c) =>
        c.title.includes("Python")
      );
      expect(cert).toBeDefined();
      expect(cert?.issuer).toBe("Ocean Academy");
    });

    it("all certifications have title, issuer, and date", () => {
      certifications.forEach((cert) => {
        expect(cert.title.length).toBeGreaterThan(0);
        expect(cert.issuer.length).toBeGreaterThan(0);
        expect(cert.date.length).toBeGreaterThan(0);
      });
    });
  });
});
