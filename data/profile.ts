import type {
  Achievement,
  Blog,
  Certification,
  ContactLink,
  Education,
  Experience,
  NavItem,
  Profile,
  Project,
  Service,
  Skill,
  SkillGroup,
  Testimonial,
} from "@/types/profile";

// Central content file: pages and components read from here instead of hardcoding portfolio text everywhere.
export const profile: Profile = {
  name: "Shaheer Saikhani",
  title: "Full Stack Developer",
  email: "shaheersaikhani1010@gmail.com",
  phone: "+92 319 5051938",
  location: "Lahore, Pakistan",
  resumeHref: "/shaheer-saikhani-cv.pdf",
  summary:
    "Computer Science student at FAST NUCES Lahore building full-stack web apps, AI-powered tools, and clean responsive interfaces with strong fundamentals in data structures, databases, and software design.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// Raw skills are kept for simple lists, while skillGroups below power the grouped Skills page.
export const skills: Skill[] = [
  { name: "C++", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "MSSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "Tools" },
  { name: "Git and GitHub", category: "Tools" },
  { name: "OpenAI API", category: "AI / ML" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core programming and scripting foundations.",
    items: ["C++", "C", "Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    description: "Interfaces, routing, responsive layouts, and UI polish.",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend & Data",
    description: "APIs, databases, services, and full-stack integration.",
    items: ["Node.js", "Express", "FastAPI", "MSSQL", "Docker"],
  },
  {
    title: "AI / ML",
    description: "Applied AI tooling used in practical projects.",
    items: ["XGBoost", "scikit-learn", "SHAP", "OpenAI API", "Agentic AI"],
  },
  {
    title: "Concepts",
    description: "Computer science and software design foundations.",
    items: [
      "OOP",
      "Data Structures",
      "Database Design",
      "DIP",
      "Observer Pattern",
    ],
  },
  {
    title: "Tools",
    description: "Daily development and collaboration workflow.",
    items: ["Git", "GitHub", "VS Code", "Visual Studio"],
  },
];

// Only projects with real GitHub repositories are included, so project buttons never lead to fake links.
export const projects: Project[] = [
  {
    slug: "maternasafe",
    title: "MaternaSafe",
    description:
      "AI-powered maternal health risk assessment system with XGBoost risk scoring, FastAPI services, OpenAI-powered recommendations, Urdu summaries, and a React + Tailwind assessment flow.",
    technologies: ["Python", "FastAPI", "React", "XGBoost"],
    type: "AI Health Copilot",
    category: "AI",
    actionHref: "https://github.com/Laiba-Atiq/materna-safe-python.git",
    actionLabel: "View GitHub",
  },
  {
    slug: "gdp-analysis-pipeline",
    title: "GDP Analysis Pipeline",
    description:
      "Three-phase software design project with CSV dashboards, Dependency Inversion Principle refactor, real-time packet pipeline, hash authentication, and Observer Pattern monitoring.",
    technologies: ["Software Design", "DIP", "Observer Pattern"],
    type: "Data Pipeline",
    category: "Data",
    actionHref: "https://github.com/saoodktareen/SDA-Project-Phase-3.git",
    actionLabel: "View GitHub",
  },
  {
    slug: "flight-reservation-system",
    title: "Flight Reservation System",
    description:
      "Console-based reservation app using core data structures for adding flights, reserving seats, cancelling seats, and managing bookings.",
    technologies: ["C++", "Data Structures"],
    type: "DSA Project",
    category: "DSA",
    actionHref: "https://github.com/Shaheer-Saikhani/flight-reservation-system.git",
    actionLabel: "View GitHub",
  },
  {
    slug: "tetris-game",
    title: "Tetris Game",
    description:
      "Playable console-based Tetris game using OOP concepts including classes, encapsulation, scoring, falling blocks, and next-block preview.",
    technologies: ["C++", "OOP", "Game Logic"],
    type: "OOP Game",
    category: "Game",
    actionHref: "https://github.com/Shaheer-Saikhani/tetris-game.git",
    actionLabel: "View GitHub",
  },
  {
    slug: "balloon-popping-game",
    title: "Balloon Popping Game",
    description:
      "Interactive typing game in x86 Assembly where letters appear inside balloons and correct key presses pop them with score and life tracking.",
    technologies: ["Assembly", "MASM", "Game Screens"],
    type: "Assembly Game",
    category: "Game",
    actionHref: "https://github.com/Shaheer-Saikhani/balloon-popping-game.git",
    actionLabel: "View GitHub",
  },
];

// Home page service cards summarize how the portfolio work is approached.
export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces with reusable React components and clean Tailwind styling.",
  },
  {
    title: "Full Stack Foundations",
    description:
      "Page structure, typed data, routing, and maintainable project organization.",
  },
  {
    title: "Version Control",
    description:
      "Feature branches, small commits, and pull requests that are easy to review.",
  },
];

// Experience here is intentionally a learning/project timeline, not employment history.
export const experiences: Experience[] = [
  {
    organization: "FAST NUCES Lahore",
    role: "BS Computer Science - 4th Semester",
    period: "2024 - Present",
  },
  {
    organization: "National AI Hackathon 2026",
    role: "MaternaSafe AI Health Copilot",
    period: "May 2026",
  },
  {
    organization: "Internship Portfolio",
    role: "Next.js, TypeScript, Tailwind CSS, and Git workflow",
    period: "In Progress",
  },
];

export const education: Education[] = [
  {
    institution: "FAST NUCES, Lahore",
    program: "BS Computer Science",
    period: "2024 - Present",
    details: "Currently in 4th semester with GPA 3.38 / 4.00.",
  },
  {
    institution: "Punjab Group of Colleges, Lahore",
    program: "Intermediate - ICS",
    period: "Completed",
  },
  {
    institution: "The Punjab School, Lahore",
    program: "Matriculation (SSC)",
    period: "Completed",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Dean's List of Honors",
    description: "FAST NUCES Lahore, Fall 2025.",
  },
  {
    title: "National AI Hackathon 2026",
    description:
      "Participated in a two-day Agentic AI workshop and national-level hackathon in Lahore.",
  },
  {
    title: "Competitive Programming",
    description: "Solved 32 LeetCode problems in C++.",
  },
];

// The certificate PDF is stored in public/ so it can be opened from the deployed site.
export const certifications: Certification[] = [
  {
    title: "Certificate of Participation - National AI Hackathon 2026",
    issuer: "atomcamp, PSDF, and NUCES Fintech Society",
    date: "6-7 May 2026",
    description:
      "Participated in the Two-Day Agentic AI Workshop at the National AI Hackathon 2026 in Lahore.",
    href: "/national-ai-hackathon-certificate.pdf",
  },
];

// These are marked as planned because no published blog URLs exist yet.
export const blogs: Blog[] = [
  {
    title: "Building MaternaSafe under hackathon pressure",
    description:
      "A planned write-up about designing an AI health copilot with FastAPI, React, XGBoost, and OpenAI API.",
    status: "Planned",
  },
  {
    title: "What I learned from software design patterns",
    description:
      "A planned note on applying Dependency Inversion and Observer Pattern in a data pipeline project.",
    status: "Planned",
  },
];

// Placeholder is honest: real testimonials should replace this after feedback is available.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Testimonials will be added after internship reviews and project feedback are available.",
    source: "Pending review feedback",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replaceAll(" ", "")}`,
  },
  {
    label: "GitHub",
    value: "github.com/Shaheer-Saikhani",
    href: "https://github.com/Shaheer-Saikhani",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shaheer-saikhani",
    href: "https://www.linkedin.com/in/shaheer-saikhani/",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/shaheer-saikhani",
    href: "https://leetcode.com/u/shaheer-saikhani",
  },
  {
    label: "Location",
    value: profile.location,
    href: "/contact",
  },
];
