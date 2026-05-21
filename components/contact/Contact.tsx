"use client";

import { motion } from "framer-motion";
import { SITE, SOCIAL_LINKS, CODING_PROFILES } from "@/lib/site";
import ContactForm from "@/components/contact/ContactForm";

const PROFILE_COLORS: Record<string, string> = {
  leetcode: "FFA116",
  codeforces: "1F8ACB",
  geeksforgeeks: "2F8D46",
  codechef: "5B4638",
  github: "FFFFFF",
};

function ProfileIcon({ slug }: { slug: string }) {
  const color = PROFILE_COLORS[slug] ?? "88C0D0";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      width={20}
      height={20}
      className="object-contain"
      loading="lazy"
    />
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/5 px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-cyan-500/[0.05] blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center lg:mb-14 lg:text-left"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400/80">
            06 — Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm sm:p-6">
              <h3 className="font-display text-lg font-semibold text-zinc-100">
                Let&apos;s connect
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                Open to internships, freelance, and full-time opportunities.
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <span className="font-mono text-xs text-zinc-600">Email</span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-sm text-[#88C0D0] transition-colors hover:text-cyan-300"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <span className="font-mono text-xs text-zinc-600">Location</span>
                  <p className="mt-1 text-sm text-zinc-300">{SITE.location}</p>
                </li>
                <li>
                  <span className="font-mono text-xs text-zinc-600">LinkedIn</span>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-[#88C0D0] transition-colors hover:text-cyan-300"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm sm:p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Coding Profiles
              </h3>
              <ul className="mt-4 space-y-2">
                {CODING_PROFILES.map((profile) => (
                  <li key={profile.label}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-transparent px-2 py-2 text-sm text-zinc-400 transition-colors hover:border-white/10 hover:bg-white/[0.04] hover:text-zinc-200"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                        <ProfileIcon slug={profile.icon} />
                      </span>
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
