export interface Profile {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  passportValidity: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  project?: string;
  responsibilities: string[];
  award?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  category: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  certNo?: string;
}

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  company: string;
  relation: string;
  avatar: string;
  text: string;
  date: string;
  linkedin?: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: number; // 1-5
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}
