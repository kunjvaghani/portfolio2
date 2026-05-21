"use client";

import { motion } from "framer-motion";
import HeroCodeCard from "@/components/hero/HeroCodeCard";
import { useLoaderComplete } from "@/context/LoaderContext";

const SKILLS = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Data Science",
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/kunjvaghani/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.795-.735-.405-1.035-1.005-1.305-1.005-1.305-.825-.555.06-.555.06-.555.9.06 1.365.93 1.365.93.81 1.395 2.115.99 2.625.75.09-.585.315-.99.57-1.215-2.4-.27-4.92-1.2-4.92-5.355 0-1.185.42-2.145 1.125-2.91-.12-.27-.495-1.35.105-2.805 0 0 .93-.3 3.045 1.11.885-.24 1.83-.36 2.775-.36.945 0 1.89.12 2.775.36 2.115-1.425 3.045-1.11 3.045-1.11.6 1.455.225 2.535.105 2.805.705.765 1.125 1.725 1.125 2.91 0 4.17-2.52 5.085-4.92 5.355.39.33.735.96.735 1.95 0 1.41-.015 2.55-.015 2.895 0 .315.225.69.84.57A8.205 8.205 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kunj-vaghani-6194b0292/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const isLoaderComplete = useLoaderComplete();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-10 lg:pt-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-[#e06c5c]/[0.05] blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Left — content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaderComplete ? "visible" : "hidden"}
          className="flex flex-col"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 font-mono text tracking-wide text-zinc-500"
          >
            <span className="text-cyan-400/90">Hi, I&apos;m </span>
            <span className="text-zinc-300">Kunj Vaghani</span>
            <span className="mx-2 text-zinc-700">—</span>
            <span className="text-zinc-500">welcome to my portfolio</span>
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-[clamp(2.75rem,10vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tighter"
          >
            <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Kunj
            </span>
            <br />
            <span className="bg-gradient-to-br from-cyan-300 via-cyan-400/90 to-violet-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-2"
          >
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur-sm sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Full Stack Developer specializing in AI integrations, scalable
            backend systems, and modern interactive frontend experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-3 text-sm font-semibold text-[#050508] shadow-[0_0_28px_rgba(34,211,238,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-colors hover:border-cyan-400/40 hover:bg-white/[0.08]"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-4"
          >
            <span className="mt-1.5 font-mono text-xs uppercase tracking-widest text-zinc-350">
              Connect
            </span>
            <div className="mt-1.5 h-px flex-1 max-w-[80px] bg-gradient-to-r from-zinc-500 to-transparent" />
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:border-cyan-400/30 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — code editor card */}
        <HeroCodeCard />
      </div>
    </section>
  );
}
