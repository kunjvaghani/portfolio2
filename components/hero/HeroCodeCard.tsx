"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useLoaderComplete } from "@/context/LoaderContext";

const CODE_LINES: { num: string; parts: { text: string; type: "plain" | "keyword" | "property" | "string" | "punct" }[] }[] = [
  {
    num: "01",
    parts: [
      { text: "const ", type: "keyword" },
      { text: "developer", type: "plain" },
      { text: " = {", type: "punct" },
    ],
  },
  {
    num: "02",
    parts: [
      { text: "  name: ", type: "property" },
      { text: '"Kunj Vaghani"', type: "string" },
      { text: ",", type: "punct" },
    ],
  },
  {
    num: "03",
    parts: [
      { text: "  role: ", type: "property" },
      { text: '"Full Stack Developer" , "AI & ML Engineer"', type: "string" },
      { text: ",", type: "punct" },
    ],
  },
  {
    num: "04",
    parts: [
      { text: "  focus: ", type: "property" },
      { text: '["AI", "Backend", "RAG & Vector Databases"]', type: "string" },
      { text: ",", type: "punct" },
    ],
  },
  {
    num: "05",
    parts: [
      { text: "  stack: ", type: "property" },
      { text: '["Next.js", "Node.js", "MongoDB/MySQL", "Python"]', type: "string" },
      { text: ",", type: "punct" },
    ],
  },
  {
    num: "06",
    parts: [
      { text: "  passion: ", type: "property" },
      { text: "true", type: "keyword" },
      { text: ",", type: "punct" },
    ],
  },
  {
    num: "07",
    parts: [{ text: "};", type: "punct" }],
  },
  {
    num: "08",
    parts: [
      { text: "developer", type: "plain" },
      { text: ".showcase();", type: "punct" },
    ],
  },
];

const tokenClass: Record<string, string> = {
  keyword: "text-[#e06c5c]",
  property: "text-zinc-100",
  string: "text-[#e8b4a0]",
  punct: "text-zinc-300",
  plain: "text-zinc-200",
};

const TILT_MAX_X = 10;
const TILT_MAX_Y = 12;

export default function HeroCodeCard() {
  const floatRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isLoaderComplete = useLoaderComplete();

  useEffect(() => {
    if (!floatRef.current || !isLoaderComplete) return;

    const ctx = gsap.context(() => {
      gsap.to(floatRef.current, {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(glowRef.current, {
        opacity: 0.65,
        scale: 1.05,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, floatRef);

    return () => ctx.revert();
  }, [isLoaderComplete]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Hovered region recedes; opposite edge lifts toward the viewer
    const rotateY = (x - 0.5) * -TILT_MAX_Y;
    const rotateX = (y - 0.5) * TILT_MAX_X;

    gsap.to(el, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = tiltRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.65,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, []);

  return (
    <div className="relative w-full max-w-xl lg:max-w-none lg:justify-self-end [perspective:1200px]">
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(224,108,92,0.12)_0%,transparent_70%)] opacity-40"
      />

      <div ref={floatRef} className="will-change-transform">
        <motion.div
          ref={tiltRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaderComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="hero-code-card relative cursor-default overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] shadow-[0_24px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset] will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#111113] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#2a2a2e]" />
              <span className="h-3 w-3 rounded-full bg-[#2a2a2e]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e06c5c]/80" />
              Portfolio.ts
            </div>
          </div>

          <div className="px-4 py-5 sm:px-5 sm:py-6">
            <pre className="font-mono text-[11px] leading-[1.75] sm:text-[13px]">
              <code>
                {CODE_LINES.map((line, i) => (
                  <motion.div
                    key={line.num}
                    initial={{ opacity: 0, x: -12 }}
                    animate={
                      isLoaderComplete ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{
                      duration: 0.45,
                      delay: 0.5 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex gap-4"
                  >
                    <span className="w-5 shrink-0 select-none text-right text-zinc-600">
                      {line.num}
                    </span>
                    <span>
                      {line.parts.map((part, j) => (
                        <span key={j} className={tokenClass[part.type]}>
                          {part.text}
                        </span>
                      ))}
                    </span>
                  </motion.div>
                ))}
              </code>
            </pre>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
