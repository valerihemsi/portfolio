export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: number;
  link?: string;
  github?: string;
};

export type Drawing = {
  slug: string;
  title: string;
  description: string;
  year: number;
  src: string;        // /drawings/filename.jpg
  medium?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;       // "2025-11-04"
  readTime: number;   // minutes
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "philosophy-research",
    title: "Philosophical Research System",
    description: "A multi-agent AI system where three crewAI agents collaboratively research philosophical questions using selectable frameworks — Analytic, Phenomenology, AQAL and more.",
    tags: ["Python", "crewAI", "Flask", "Claude API"],
    year: 2025,
    github: "https://github.com",
  },
  {
    slug: "placeholder-2",
    title: "Coming Soon",
    description: "Another project will be listed here.",
    tags: [],
    year: 2025,
  },
];

export const drawings: Drawing[] = [
  {
    slug: "placeholder-1",
    title: "Coming Soon",
    description: "Drawings will appear here.",
    year: 2025,
    src: "",
    medium: "—",
  },
];

export const posts: Post[] = [
  {
    slug: "placeholder-1",
    title: "Coming Soon",
    excerpt: "Writing will appear here.",
    date: "2025-01-01",
    readTime: 5,
    tags: [],
  },
];
