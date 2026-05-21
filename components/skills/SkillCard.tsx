"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/lib/skills";
import SkillIcon from "@/components/skills/SkillIcon";

type SkillCardProps = {
  skill: Skill;
  index: number;
};

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative"
    >
      <div
        className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] hover:-translate-y-1"
        aria-label={skill.name}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0c0c0e]/80 transition-transform duration-300 group-hover:scale-110 group-hover:border-white/20">
          <SkillIcon skill={skill} size={26} />
        </div>
        <span className="text-center text-xs font-medium text-zinc-300 transition-colors group-hover:text-cyan-200 sm:text-sm">
          {skill.name}
        </span>
      </div>

      {/* Hover description tooltip */}
      <div
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-[min(100%,14rem)] -translate-x-1/2 scale-95 rounded-lg border border-cyan-500/20 bg-[#0a0b10]/95 px-3 py-2.5 text-center text-xs leading-relaxed text-zinc-400 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
        role="tooltip"
      >
        {skill.description}
        <span
          className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-cyan-500/20"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}
