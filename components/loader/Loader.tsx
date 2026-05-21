"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type LoaderProps = {
  onComplete: () => void;
};

const V_PATH = "M 24 16 L 68 124 L 112 16";
const K_PATH =
  "M 132 16 L 132 124 M 132 72 L 208 16 M 132 72 L 208 124";

export default function Loader({ onComplete }: LoaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const vStrokeRef = useRef<SVGPathElement>(null);
  const kStrokeRef = useRef<SVGPathElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const vLen = vStrokeRef.current?.getTotalLength() ?? 200;
      const kLen = kStrokeRef.current?.getTotalLength() ?? 260;

      gsap.set([vStrokeRef.current, kStrokeRef.current], {
        strokeDasharray: (i, el) =>
          el === vStrokeRef.current ? vLen : kLen,
        strokeDashoffset: (i, el) =>
          el === vStrokeRef.current ? vLen : kLen,
        opacity: 1,
      });
      gsap.set(underlineRef.current, { scaleX: 0, opacity: 0 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.88 });
      gsap.set(svgRef.current, { scale: 0.9, opacity: 0.6 });

      const tl = gsap.timeline();

      tl.to(svgRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
        // V stroke draw
        .to(vStrokeRef.current, {
          strokeDashoffset: 0,
          duration: 0.7,
          ease: "power3.inOut",
        })
        // K stroke draw (slight overlap)
        .to(
          kStrokeRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.68,
            ease: "power3.inOut",
          },
          "-=0.22",
        )
        // Ambient glow pulse (cyan/violet only — no white halo)
        .to(
          glowRef.current,
          { opacity: 0.75, scale: 1.06, duration: 0.55, ease: "power2.out" },
          "-=0.35",
        )
        // Underline left → right
        .to(
          underlineRef.current,
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
          },
          "-=0.18",
        )
        .to(
          glowRef.current,
          { opacity: 0.4, scale: 1, duration: 0.35, ease: "power1.inOut" },
          "-=0.08",
        )
        // Hold before fade (~2.4s animation + ~0.55s exit ≈ 2.9s)
        .to({}, { duration: 0.45 })
        // Fade out
        .to(rootRef.current, {
          opacity: 0,
          duration: 0.55,
          ease: "power2.inOut",
          onComplete: () => {
            document.body.style.overflow = "";
            onComplete();
          },
        });
    }, rootRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  const strokeProps = {
    fill: "none",
    strokeWidth: 3.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050508]"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[min(80vw,520px)] w-[min(80vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[100px]" />
        <div className="absolute right-[22%] top-[32%] h-40 w-40 rounded-full bg-violet-600/[0.06] blur-[72px]" />
      </div>

      <div className="relative flex flex-col items-center px-6">
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[42%] h-28 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[48px]"
        />

        <div className="relative">
          <svg
            ref={svgRef}
            viewBox="0 0 232 140"
            className="relative z-10 h-[clamp(7rem,28vw,11rem)] w-auto will-change-transform"
            aria-hidden
          >
            <defs>
              <linearGradient id="vStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#67e8f9" />
              </linearGradient>
              <linearGradient id="kStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>

            <path
              ref={vStrokeRef}
              d={V_PATH}
              stroke="url(#vStroke)"
              {...strokeProps}
            />
            <path
              ref={kStrokeRef}
              d={K_PATH}
              stroke="url(#kStroke)"
              {...strokeProps}
            />
          </svg>
        </div>

        <div
          ref={underlineRef}
          className="loader-underline mt-6 h-[2px] w-[min(72vw,14rem)] origin-left opacity-0 will-change-transform sm:w-[15rem]"
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-violet-500 shadow-[0_0_14px_rgba(34,211,238,0.45)]" />
        </div>
      </div>
    </div>
  );
}
