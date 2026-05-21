export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
};

/** Replace with your real projects when ready */
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Portfolio Assistant",
    description:
      "An intelligent portfolio assistant with RAG-powered chat, vector search, and contextual responses about projects and skills.",
    technologies: ["Next.js", "Python", "LangChain", "OpenAI"],
    image: "/projects/project-1.svg",
    github: "https://github.com/kunjvaghani/",
    live: "https://example.com",
  },
  {
    id: "2",
    title: "Scalable REST API Platform",
    description:
      "Production-style REST API with authentication, rate limiting, and MongoDB integration — built for performance and clean architecture.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    image: "/projects/project-2.svg",
    github: "https://github.com/kunjvaghani/",
    live: "https://example.com",
  },
  {
    id: "3",
    title: "Real-Time Analytics Dashboard",
    description:
      "Interactive dashboard with live data visualization, responsive charts, and dark-mode UI for monitoring app metrics.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/project-3.svg",
    github: "https://github.com/kunjvaghani/",
    live: "https://example.com",
  },
  {
    id: "4",
    title: "E-Commerce Full Stack App",
    description:
      "Full stack e-commerce experience with product catalog, cart, checkout flow, and admin panel — placeholder for your next build.",
    technologies: ["Next.js", "Prisma", "MySQL", "Stripe"],
    image: "/projects/project-4.svg",
    github: "https://github.com/kunjvaghani/",
    live: "https://example.com",
  },
];
