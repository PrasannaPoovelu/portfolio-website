import { describe, it, expect } from "vitest";
import { profile, languages, achievements } from "@/data/profile";

describe("profile data", () => {
  describe("profile object", () => {
    it("has the correct name", () => {
      expect(profile.name).toBe("Prasanna Poovelu");
    });

    it("has a valid email address", () => {
      expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      expect(profile.email).toBe("prasanna.poovelu23@gmail.com");
    });

    it("has a valid LinkedIn URL", () => {
      expect(profile.linkedin).toContain("linkedin.com/in/prasanna-poovelu");
    });

    it("has a valid GitHub URL", () => {
      expect(profile.github).toContain("github.com/PrasannaPoovelu");
    });

    it("has a non-empty title and tagline", () => {
      expect(profile.title.length).toBeGreaterThan(0);
      expect(profile.tagline.length).toBeGreaterThan(0);
    });

    it("summary mentions React and TypeScript", () => {
      expect(profile.summary).toContain("React");
      expect(profile.summary).toContain("TypeScript");
    });

    it("has all required fields defined", () => {
      const requiredFields = [
        "name", "title", "tagline", "summary",
        "email", "phone", "location", "linkedin", "github",
      ] as const;
      requiredFields.forEach((field) => {
        expect(profile[field]).toBeDefined();
        expect(profile[field].length).toBeGreaterThan(0);
      });
    });
  });

  describe("languages array", () => {
    it("contains exactly 5 languages", () => {
      expect(languages).toHaveLength(5);
    });

    it("includes English and Tamil", () => {
      const names = languages.map((l) => l.name);
      expect(names).toContain("English");
      expect(names).toContain("Tamil");
    });

    it("all languages have proficiency between 1 and 5", () => {
      languages.forEach((lang) => {
        expect(lang.proficiency).toBeGreaterThanOrEqual(1);
        expect(lang.proficiency).toBeLessThanOrEqual(5);
      });
    });

    it("English is marked as Fluent with proficiency 5", () => {
      const english = languages.find((l) => l.name === "English");
      expect(english?.level).toBe("Fluent");
      expect(english?.proficiency).toBe(5);
    });

    it("Tamil is marked as Native with proficiency 5", () => {
      const tamil = languages.find((l) => l.name === "Tamil");
      expect(tamil?.level).toBe("Native");
      expect(tamil?.proficiency).toBe(5);
    });

    it("all languages have required fields", () => {
      languages.forEach((lang) => {
        expect(lang.name).toBeDefined();
        expect(lang.level).toBeDefined();
        expect(typeof lang.proficiency).toBe("number");
      });
    });
  });

  describe("achievements array", () => {
    it("has at least 3 achievements", () => {
      expect(achievements.length).toBeGreaterThanOrEqual(3);
    });

    it("includes the Insta Award achievement", () => {
      const award = achievements.find((a) =>
        a.title.toLowerCase().includes("insta award")
      );
      expect(award).toBeDefined();
      expect(award?.description).toContain("Infosys");
    });

    it("includes the football captain achievement", () => {
      const football = achievements.find((a) =>
        a.title.toLowerCase().includes("football")
      );
      expect(football).toBeDefined();
    });

    it("all achievements have title, description, and icon", () => {
      achievements.forEach((ach) => {
        expect(ach.title).toBeDefined();
        expect(ach.description).toBeDefined();
        expect(ach.icon).toBeDefined();
      });
    });
  });
});
