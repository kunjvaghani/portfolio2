"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-wrap section-wrap-lg-gap relative border-t border-white/5 px-4 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-violet-600/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center lg:text-left"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
            04 — Projects
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-zinc-500 sm:text-base">
            Dummy projects for now — swap in your real work via{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-cyan-400/90">
              lib/projects.ts
            </code>
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 sm:gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
