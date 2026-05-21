"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/25 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:-translate-y-0.5"
    >
      <div className="relative h-36 overflow-hidden bg-[#0c0c0e] sm:h-40">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          loading="lazy"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-transparent to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <h3 className="font-display text-base font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-cyan-200 sm:text-lg">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-zinc-500 sm:text-[13px]">
          {project.description}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-400 sm:text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-3 flex gap-2 border-t border-white/[0.06] pt-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-zinc-400 transition-colors hover:border-zinc-500/40 hover:text-zinc-200"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1 rounded-md border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1.5 text-[11px] font-medium text-cyan-400 transition-colors hover:bg-cyan-500/20"
          >
            <ExternalIcon />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-3.795-.735-.405-1.035-1.005-1.305-1.005-1.305-.825-.555.06-.555.06-.555.9.06 1.365.93 1.365.93.81 1.395 2.115.99 2.625.75.09-.585.315-.99.57-1.215-2.4-.27-4.92-1.2-4.92-5.355 0-1.185.42-2.145 1.125-2.91-.12-.27-.495-1.35.105-2.805 0 0 .93-.3 3.045 1.11.885-.24 1.83-.36 2.775-.36.945 0 1.89.12 2.775.36 2.115-1.425 3.045-1.11 3.045-1.11.6 1.455.225 2.535.105 2.805.705.765 1.125 1.725 1.125 2.91 0 4.17-2.52 5.085-4.92 5.355.39.33.735.96.735 1.95 0 1.41-.015 2.55-.015 2.895 0 .315.225.69.84.57A8.205 8.205 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 shrink-0" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
