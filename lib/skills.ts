export type Skill = {
  name: string;
  /** Simple Icons slug — see https://simpleicons.org */
  icon?: string;
  /** Brand color hex without # — defaults from skillColors map */
  color?: string;
  /** Local icon path when no Simple Icons slug */
  customIcon?: string;
  description: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  skills: Skill[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "core-cs",
    title: "Core CS",
    skills: [
      {
        name: "DSA",
        customIcon: "/skills/dsa.svg",
        description:
          "Data Structures & Algorithms — arrays, trees, graphs, DP, and problem-solving for coding interviews.",
      },
      {
        name: "OOP",
        customIcon: "/skills/oop.svg",
        description:
          "Object-Oriented Programming — encapsulation, inheritance, polymorphism, and design principles.",
      },
      {
        name: "OS",
        customIcon: "/skills/os.svg",
        description:
          "Operating Systems — processes, memory, scheduling, synchronization, and system calls.",
      },
      {
        name: "CN",
        customIcon: "/skills/cn.svg",
        description:
          "Computer Networks — TCP/IP, HTTP, DNS, sockets, and network security fundamentals.",
      },
      {
        name: "DBMS",
        customIcon: "/skills/dbms.svg",
        description:
          "Database Management Systems — normalization, SQL, transactions, indexing, and query optimization.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        icon: "html5",
        description: "Semantic markup, accessibility, and modern HTML5 APIs.",
      },
      {
        name: "CSS",
        icon: "css3",
        description: "Layouts, Flexbox, Grid, animations, and responsive design.",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        description: "ES6+, async/await, DOM APIs, and modern JS patterns.",
      },
      {
        name: "React",
        icon: "react",
        description: "Component architecture, hooks, state management, and SPA development.",
      },
      {
        name: "Next.js",
        icon: "nextdotjs",
        description: "App Router, SSR/SSG, API routes, and full-stack React apps.",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwindcss",
        description: "Utility-first styling, design systems, and rapid UI development.",
      },
      {
        name: "Framer Motion",
        icon: "framer",
        description: "Declarative animations, gestures, and scroll-driven motion in React.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "nodedotjs",
        description: "Server-side JavaScript, event-driven architecture, and npm ecosystem.",
      },
      {
        name: "Express",
        icon: "express",
        description: "REST APIs, middleware, routing, and backend service structure.",
      },
      {
        name: "MongoDB",
        icon: "mongodb",
        description: "NoSQL databases, document modeling, and aggregation pipelines.",
      },
      {
        name: "MySQL",
        icon: "mysql",
        description: "Relational databases, schemas, joins, and transactional queries.",
      },
      {
        name: "Supabase",
        icon: "supabase",
        description: "Postgres backend, auth, realtime, and storage as a BaaS.",
      },
      {
        name: "Prisma",
        icon: "prisma",
        color: "FFFFFF",
        description: "Type-safe ORM, migrations, and database access in TypeScript.",
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    skills: [
      {
        name: "Python",
        icon: "python",
        description: "ML scripting, data processing, and backend automation.",
      },
      {
        name: "LangChain",
        icon: "langchain",
        color: "42D392",
        description: "LLM chains, agents, tools, and RAG pipeline orchestration.",
      },
      {
        name: "Hugging Face",
        icon: "huggingface",
        description: "Pre-trained models, transformers, and NLP experimentation.",
      },
      {
        name: "scikit-learn",
        icon: "scikitlearn",
        description: "Classical ML — classification, regression, clustering, and evaluation.",
      },
      {
        name: "TensorFlow",
        icon: "tensorflow",
        description: "Deep learning frameworks, neural networks, and model training.",
      },{
        name: "FastAPI",
        icon: "fastapi",
        description: "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+.",
      },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      {
        name: "C",
        icon: "c",
        description: "Low-level programming, pointers, memory, and systems fundamentals.",
      },
      {
        name: "C++",
        icon: "cplusplus",
        description: "STL, OOP in C++, performance-oriented problem solving.",
      },
      {
        name: "Python",
        icon: "python",
        description: "Versatile language for scripting, ML, and backend services.",
      },
      {
        name: "SQL",
        icon: "postgresql",
        description: "Queries, joins, subqueries, and database design with SQL.",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        description: "Core language for web development on client and server.",
      },
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & Tools",
    skills: [
      {
        name: "Git",
        icon: "git",
        description: "Version control, branching, merging, and collaborative workflows.",
      },
      {
        name: "GitHub",
        icon: "github",
        description: "Repositories, PRs, Actions, and open-source collaboration.",
      },
      {
        name: "Docker",
        icon: "docker",
        description: "Containers, images, compose, and portable deployments.",
      },
      {
        name: "Postman",
        icon: "postman",
        description: "API testing, collections, environments, and documentation.",
      },
      {
        name: "VS Code",
        icon: "visualstudiocode",
        description: "Primary editor — extensions, debugging, and productivity setup.",
      },
      {
        name: "Linux",
        icon: "linux",
        description: "CLI, shell scripting, servers, and deployment environments.",
      },
    ],
  },
];
