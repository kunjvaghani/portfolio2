"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/skills";
import SkillCard from "@/components/skills/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-wrap section-wrap-lg-gap relative border-t border-white/5 px-4 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 h-72 w-72 rounded-full bg-violet-600/[0.05] blur-[90px]" />
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
            05 — Skills
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-zinc-500 sm:text-base">
            Hover a skill to see what I work with — organized by domain.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: catIndex * 0.05 }}
            >
              <h3 className="mb-6 flex items-center gap-3 font-display text-xl font-semibold text-zinc-200 sm:text-2xl">
                <span className="h-px flex-1 max-w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {category.skills.map((skill, i) => (
                  <SkillCard
                    key={`${category.id}-${skill.name}`}
                    skill={skill}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
