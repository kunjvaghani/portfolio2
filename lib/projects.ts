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
    title: "MockMate Mock Interview Platform",
    description:
      "AI-powered interview simulator that uses Google Gemini to generate context-aware follow-up questions, capture voice responses, and deliver detailed feedback and analytics in a secure, user-based Next.js app.",
    technologies: ["Next.js"
      , "React"
      , "TypeScript"
      , "Prisma"
      , "Mongodb"],
    image: "/projects/mockmate.png",
    github: "https://github.com/kunjvaghani/Mockmate",
    live: "https://example.com",
  },
  {
    id: "2",
    title: "Real time Fraud Detection in Online E-KYC",
    description:
      "AI-powered e-KYC fraud detection system with 3-layer security pipeline: document verification, facial biometrics, and behavioral analytics — combat synthetic identity fraud with state-of-the-art ML models.",
    technologies: ["Python", "Streamlit" , "OpenCV", "TensorFlow", "FastApi" , "Tesseract"],
    image: "/projects/fruad_detection_kyc.png",
    github: "https://github.com/kunjvaghani/Fraud-detection-Kyc",
    live: "https://fraud-detection-kyc-5evcvqyy725ecsdtjdrw9s.streamlit.app/",
  },
  {
    id: "3",
    title: "Scholarship Management System",
    description:
      "Comprehensive Scholarship Platform | Search, apply, and track scholarships with intelligent filtering, secure document storage & seamless admin management.",
    technologies: ["React.js", "MongoDb", "Express.js", "Node.js", "TailwindCSS"],
    image: "/projects/scholarship.png",
    github: "https://github.com/kunjvaghani/Scholarship",
    live: "https://scholarship-hub-apply.vercel.app/",
  },
  {
    id: "4",
    title: "Food Discovery App",
    description:
      "Full-Stack Food Discovery Platform | Instagram-style video reels, restaurant partnerships, social interactions (like, save, follow) & partner management — reimagining food delivery",
    technologies: ["React.js", "Node.js", "MongoDB Atlas", "ImageKit" , "TailwindCSS"],
    image: "/projects/Eatverse.png",
    github: "https://github.com/kunjvaghani/EatVerse",
    live: "https://zomato-clone-87w6.vercel.app/",
  },
  {
    id: "5",
    title: "Bulk File Downloader Chrome Extension",
    description:
      "Classroom Bulk Downloader | Automated page scanning for PDFs, docs & cloud storage links with assignment crawling, bulk downloads, filename sanitization & CSV export — streamline course material management.",
    technologies: ["Html" , "Css" , "Javascript" , "Manifest.json"],
    image: "/projects/extension.png",
    github: "https://github.com/kunjvaghani/chrome_ext.",
    live: "https://example.com",
  },

];
