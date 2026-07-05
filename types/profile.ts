export type NavItem = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
  category: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  type: string;
  category: "AI" | "Data" | "DSA" | "Game";
  actionHref: string;
  actionLabel: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
};

export type Education = {
  institution: string;
  program: string;
  period: string;
  details?: string;
};

export type Achievement = {
  title: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  href?: string;
};

export type Blog = {
  title: string;
  description: string;
  status: string;
};

export type Testimonial = {
  quote: string;
  source: string;
};

export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  resumeHref: string;
  summary: string;
}
