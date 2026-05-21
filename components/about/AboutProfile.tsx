"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

/** Replace with your photo path when ready, e.g. "/profile.jpg" */
// const PROFILE_IMAGE = "/profile-placeholder.svg";
const PROFILE_IMAGE = "/kunj.jpg";

export default function AboutProfile() {
  const frameRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!frameRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(frameRef.current, {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(glowRef.current, {
        opacity: 0.7,
        scale: 1.04,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, frameRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18)_0%,rgba(139,92,246,0.08)_45%,transparent_70%)] opacity-50"
      />

      <motion.div
        ref={frameRef}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0c0c0e] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(34,211,238,0.08)]"
      >
        <div className="relative aspect-[5/6] overflow-hidden rounded-xl bg-zinc-900">
          <Image
            src={PROFILE_IMAGE}
            alt="Kunj Vaghani profile placeholder"
            fill
            className="object-cover"
            priority={false}
            sizes="(max-width: 1024px) 100vw, 420px"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-cyan-500/[0.04]"
          />
        </div>
      </motion.div>
    </div>
  );
}
