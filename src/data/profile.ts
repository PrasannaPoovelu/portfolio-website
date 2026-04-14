import type { Profile, Language, Achievement } from "@/types";

export const profile: Profile = {
  name: "Prasanna Poovelu",
  title: "Front-End Developer",
  tagline: "React.js & TypeScript Specialist",
  summary:
    "Front-End Developer with 5+ years of experience building scalable and high-performing web applications using React and TypeScript. My focus is creating interfaces that not only look great but deliver measurable performance and user satisfaction. Skilled in React, Redux, and REST API integration, I've contributed to enterprise-scale systems at Infosys (Barclays) and mentored developers in maintaining clean, maintainable code. I thrive in Agile environments where design thinking meets engineering precision. Currently based in Puducherry, India — open to relocation or remote opportunities across Europe.",
  email: "prasanna.poovelu23@gmail.com",
  phone: "+91 8015411102",
  location: "Puducherry, India",
  linkedin: "https://linkedin.com/in/prasanna-poovelu",
  github: "https://github.com/PrasannaPoovelu",
  passportValidity: "AE250275 – Valid till 2035",
};

export const languages: Language[] = [
  { name: "English", level: "Fluent", proficiency: 5 },
  { name: "Tamil", level: "Native", proficiency: 5 },
  { name: "Telugu", level: "Working", proficiency: 3 },
  { name: "German", level: "Basic", proficiency: 2 },
  { name: "French", level: "Basic", proficiency: 2 },
];

export const achievements: Achievement[] = [
  {
    title: "Insta Award – Certificate of Appreciation",
    description:
      "Received from Infosys for outstanding contributions to the RFT team at Barclays, recognising excellence in frontend delivery on the Central PEP Repository project.",
    icon: "🏆",
  },
  {
    title: "Captain – College Football Team",
    description:
      "Led the college football team at Regency Institute of Technology, demonstrating leadership, teamwork, and the ability to perform under pressure — traits that carry directly into engineering teams.",
    icon: "⚽",
  },
  {
    title: "Blood Donation Volunteer",
    description:
      "Volunteered for JIPMER and PIMS Hospitals, donating blood every year since 2014 — a decade of life-saving commitment to the community.",
    icon: "🩸",
  },
];
