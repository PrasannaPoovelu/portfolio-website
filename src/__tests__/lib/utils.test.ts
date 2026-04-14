import { describe, it, expect } from "vitest";
import { cn, slugify } from "@/lib/utils";

describe("cn utility", () => {
  it("merges class names correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes with objects", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("resolves Tailwind conflicts — last class wins", () => {
    // tailwind-merge: bg-red-500 overrides bg-blue-500
    expect(cn("bg-blue-500", "bg-red-500")).toBe("bg-red-500");
  });

  it("handles undefined and null gracefully", () => {
    expect(cn("base", undefined, null as unknown as string)).toBe("base");
  });

  it("handles empty strings", () => {
    expect(cn("", "foo", "")).toBe("foo");
  });

  it("merges padding conflicts correctly", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("handles arrays of classes", () => {
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("returns empty string when no inputs provided", () => {
    expect(cn()).toBe("");
  });

  it("preserves non-conflicting Tailwind classes", () => {
    const result = cn("text-white", "bg-blue-500", "rounded-lg");
    expect(result).toContain("text-white");
    expect(result).toContain("bg-blue-500");
    expect(result).toContain("rounded-lg");
  });
});

describe("slugify utility", () => {
  it("converts text to lowercase slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(slugify("React.js & TypeScript!")).toBe("reactjs--typescript");
  });

  it("handles multiple spaces", () => {
    expect(slugify("Hello   World")).toBe("hello---world");
  });

  it("handles already lowercase text", () => {
    expect(slugify("already lowercase")).toBe("already-lowercase");
  });

  it("handles empty string", () => {
    expect(slugify("")).toBe("");
  });

  it("converts company names to slugs", () => {
    expect(slugify("Mediwave Digital Pvt Ltd")).toBe(
      "mediwave-digital-pvt-ltd"
    );
  });
});
