import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/site";

const FOOTER_SOCIAL = [
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Twitter", href: SOCIAL_LINKS.twitter },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050508]/80 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <Link
              href="#home"
              className="font-display text-lg font-bold tracking-tight text-zinc-100"
            >
              {SITE.name}
            </Link>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">
              Full Stack Developer · AI/ML Enthusiast
            </p>

            {/* Availability indicator */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
              {FOOTER_SOCIAL.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-500/20"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-zinc-600">
            © {SITE.year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-zinc-700">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden
    >
      <path
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
