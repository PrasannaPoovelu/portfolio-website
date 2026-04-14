import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "cpr-barclays",
    title: "Central PEP Repository (CPR) – Barclays",
    description:
      "Enterprise-grade application replacing the legacy GPR system for Barclays. Handles PEP lifecycle management, compliance workflows, and advanced data operations at scale.",
    techStack: [
      "React.js",
      "TypeScript",
      "TanStack Query",
      "Redux Toolkit",
      "Java Spring Boot",
      "Oracle DB",
      "GitLab",
    ],
    highlights: [
      "Led end-to-end frontend development replacing a legacy enterprise system",
      "Developed advanced search with match-scoring to reduce duplicate records",
      "Implemented role-based access control and approval workflows",
      "Improved data quality, compliance workflows, and operational efficiency",
    ],
    category: "Enterprise",
  },
  {
    id: "brook-dashboard",
    title: "Brook – Healthcare Analytics Dashboard",
    description:
      "An interactive analytics dashboard for healthcare platforms, featuring real-time chart visualisation, CRUD-based forms, and full WCAG-compliant accessibility support.",
    techStack: [
      "React.js",
      "JavaScript",
      "Highcharts",
      "Formik",
      "CSS3",
      "WCAG Accessibility",
    ],
    highlights: [
      "Developed real-time chart visualisation for complex healthcare metrics",
      "Implemented CRUD-based forms using Formik for structured data handling",
      "Delivered WCAG-compliant accessibility features to improve usability",
      "Collaborated with stakeholders for rapid dashboard prototyping",
    ],
    category: "Healthcare",
  },
  {
    id: "safe2share",
    title: "Safe2Share – Anonymous Healthcare Feedback Platform",
    description:
      "A full-featured anonymous feedback platform built from scratch with protected routing, PWA capabilities, and region-wise analytics using interactive map-based charts.",
    techStack: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "PWA",
      "Highcharts",
      "Figma",
    ],
    highlights: [
      "Built the application from scratch using React, TypeScript, and Redux Toolkit",
      "Implemented protected routing, authentication flow, and PWA support",
      "Visualized region-wise analytics using map-based Highcharts",
      "Implemented multi-theme support for accessibility and personalization",
    ],
    category: "Healthcare",
  },
  {
    id: "mediwave-website",
    title: "Company Website Revamp – Mediwave Digital",
    description:
      "Full revamp of Mediwave Digital's corporate website focused on performance, SEO, and modern UX with micro-interactions, responsive layouts, and theme support.",
    techStack: ["Next.js", "Tailwind CSS", "Formik", "Figma"],
    highlights: [
      "Revamped the corporate website using Next.js, improving performance and SEO",
      "Implemented micro-interactions, timelines, and responsive layouts",
      "Developed a contact module with Formik integration",
      "Added light and dark themes for accessibility",
    ],
    category: "Web",
  },
];
