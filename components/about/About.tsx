"use client";

import { motion } from "framer-motion";
import AboutProfile from "@/components/about/AboutProfile";
import HighlightedAboutText from "@/components/about/HighlightedAboutText";

const CURRENT_FOCUS = [
  "Building scalable backends, REST APIs & ML integrations",
  "RAG pipelines, embeddings & vector databases",
  "LangChain, & AI agents",
  "AWS & cloud deployment",
];

const SKILLS_TAGS = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Python",
  "AI/ML",
  "TypeScript",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function SectionBlock({
  title,
  children,
  index,
}: {
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm sm:p-6"
    >
      <h3 className="mb-4 font-display text-lg font-semibold tracking-tight text-cyan-400/90 sm:text-xl">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}

function EducationCard({ index }: { index: number }) {
  return (
    <SectionBlock title="Education" index={index}>
      <div className="rounded-xl border border-white/[0.06] bg-[#0c0c0e]/80 p-4">
        <p className="font-display text-lg font-semibold text-zinc-100">
          NIT SURAT
        </p>
        <p className="mt-1 text-sm text-cyan-300/90">
          B.Tech — Computer Science & Engineering
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
          <span className="rounded-md bg-white/[0.04] px-2.5 py-1">
            Completed 3rd Year
          </span>
          <span className="rounded-md bg-white/[0.04] px-2.5 py-1">
            Expected Graduation: 2027
          </span>
        </div>
      </div>
    </SectionBlock>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="section-wrap relative border-t border-white/5 px-4 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-violet-600/[0.05] blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/[0.04] blur-[80px]" />
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
            03 — About
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left — profile + education */}
          <div className="flex flex-col gap-5">
            <AboutProfile />
            <EducationCard index={2} />
          </div>

          {/* Right — who am I + current focus */}
          <div className="flex flex-col gap-5">
            <SectionBlock title="Who am I?" index={0}>
              <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm">
                <span>
                  <span className="text-zinc-600">Name:</span>{" "}
                  <span className="text-[#88C0D0]">Kunj Vaghani</span>
                </span>
                <span className="hidden text-zinc-700 sm:inline">|</span>
                <span>
                  <span className="text-zinc-600">College:</span>{" "}
                  <span className="text-[#88C0D0]">NIT SURAT</span>
                </span>
                <span className="hidden text-zinc-700 sm:inline">|</span>
                <span>
                  <span className="text-zinc-600">Year:</span>{" "}
                  <span className="text-zinc-400">Completed 3rd Year</span>
                </span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  B.Tech CSE
                </span>
                <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
                  Undergraduate
                </span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {SKILLS_TAGS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mb-5 font-mono text-sm leading-[1.85]">
                <span className="text-zinc-600">Experience:</span>{" "}
                <span className="text-[#88C0D0]">Full Stack Developer</span>
                <span className="text-zinc-400">
                  {" "}
                  — building end-to-end web apps,{" "}
                </span>
                <span className="text-[#88C0D0]">APIs</span>
                <span className="text-zinc-400">, and </span>
                <span className="text-[#8FBCBB]">AI-powered features</span>
                <span className="text-zinc-400">
                  {" "}
                  across personal & academic projects.
                </span>
              </p>
              <HighlightedAboutText />
            </SectionBlock>

            <SectionBlock title="Current Focus" index={1}>
              <ul className="space-y-3">
                {CURRENT_FOCUS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
