import type { SkillCategory, Certification } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "State & Data",
    icon: "⚙️",
    skills: [
      "Redux Toolkit",
      "Context API",
      "TanStack Query",
      "React Query",
      "Axios",
    ],
  },
  {
    category: "UI & Styling",
    icon: "🎨",
    skills: [
      "Tailwind CSS",
      "Bootstrap",
      "Sass/SCSS",
      "Responsive Design",
      "Figma",
      "WCAG Accessibility",
    ],
  },
  {
    category: "Performance",
    icon: "⚡",
    skills: [
      "Lazy Loading",
      "Memoization",
      "UI Profiling",
      "Code Splitting",
      "Micro-Frontends",
    ],
  },
  {
    category: "Testing",
    icon: "🧪",
    skills: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Cypress (E2E)",
      "Unit Testing",
      "Integration Testing",
    ],
  },
  {
    category: "AI & Emerging",
    icon: "🤖",
    skills: [
      "Anthropic Claude",
      "Claude Code",
      "GitLab Duo AI",
      "AI-Assisted Development",
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      "Git",
      "GitLab",
      "Bitbucket",
      "Jira",
      "Vite",
      "VS Code",
      "CI/CD",
    ],
  },
  {
    category: "Practices",
    icon: "📋",
    skills: [
      "Agile/Scrum",
      "Code Reviews",
      "Clean Code",
      "REST API Integration",
      "Reusable Components",
      "Mentoring",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Infosys Certified React Web Developer",
    issuer: "Infosys Ltd",
    date: "Dec 2025",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Feb 27, 2026",
    certNo: "wknud4pv4feo",
  },
  {
    title: "Angular Certification",
    issuer: "LinkedIn / Online",
    date: "2024",
  },
  {
    title: "Diploma in Python Programming",
    issuer: "Ocean Academy",
    date: "Feb 28, 2021",
  },
];
