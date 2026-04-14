import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "infosys",
    role: "Senior Associate Consultant",
    company: "Infosys Ltd",
    location: "Chennai, India",
    period: "Jun 2024 – Present",
    current: true,
    project: "Central PEP Repository (CPR) – Barclays [Ongoing]",
    responsibilities: [
      "Led end-to-end frontend development of an enterprise application (via Infosys) replacing legacy GPR for Barclays, improving data quality, workflows, and compliance",
      "Built data-driven forms, validation flows, dashboards and PEP lifecycle management UIs using React + TypeScript",
      "Developed advanced search with match-scoring to minimize duplicate record creation",
      "Implemented role-based access control and approval workflows for secure, compliant operations",
      "Managed efficient data fetching and caching with TanStack Query; collaborated with Java Spring Boot / Oracle DB teams",
      "Contributed to Bitbucket → GitLab migration and leveraged GitLab Duo AI to accelerate development",
      "Conducted code reviews and enforced clean code, component reusability, and modular architecture standards, reducing post-deployment defects",
      "Mentored junior developers, providing guidance on React best practices, GitLab workflows, and debugging methodologies",
    ],
    award: "Received Insta Award (Certificate of Appreciation) from Infosys for contributions to the RFT team at Barclays",
  },
  {
    id: "mediwave",
    role: "Front-End Developer",
    company: "Mediwave Digital Pvt. Ltd",
    location: "Puducherry, India",
    period: "Jan 2022 – May 2024",
    responsibilities: [
      "Built responsive, accessible UI components for digital healthcare platforms; reduced development turnaround by 40% via a reusable component library",
      "Revamped corporate website using Next.js (Tailwind CSS, Formik) — improved performance, SEO, light/dark themes, and micro-interactions",
      "Developed Brook, a healthcare analytics dashboard with real-time Highcharts visualisation, CRUD forms via Formik, and WCAG-compliant accessibility",
      "Built Safe2Share (React + TypeScript + Redux Toolkit) with protected routing, PWA support, and region-wise map-based Highcharts analytics",
      "Partnered with UX/UI designers to convert wireframes into responsive interfaces using CSS and Bootstrap, ensuring pixel-perfect design fidelity",
      "Coordinated with cross-functional teams across backend, QA, and DevOps to ensure seamless integration and smooth CI/CD deployment cycles",
    ],
  },
  {
    id: "ocean",
    role: "Front-End Developer Intern",
    company: "Ocean Academy",
    location: "Puducherry, India",
    period: "Mar 2021 – Dec 2021",
    responsibilities: [
      "Developed interactive UI components using React.js for client projects",
      "Assisted senior developers in debugging complex UI issues",
      "Improved responsiveness and component reusability across applications",
      "Converted Figma wireframes into modular, cross-browser compatible interfaces",
      "Optimized UI workflows and REST API integrations for performance and reliability",
    ],
  },
];
