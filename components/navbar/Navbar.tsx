"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.from(".nav-link", {
        y: -12,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power2.out",
        delay: 0.35,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof NAV_ITEMS)[number],
  ) => {
    if (item.sectionId) {
      e.preventDefault();
      scrollToSection(item.sectionId);
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        ref={navRef}
        initial={false}
        animate={{
          paddingTop: isScrolled ? "0.75rem" : "1.25rem",
          paddingBottom: isScrolled ? "0.75rem" : "1.25rem",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10"
      >
        <nav
          aria-label="Main navigation"
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6 ${
            isScrolled
              ? "border-cyan-500/20 bg-[#0a0b10]/75 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl"
              : "border-white/5 bg-[#0a0b10]/40 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              setMobileOpen(false);
            }}
            className="group relative flex items-center gap-2"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 font-display text-sm font-bold tracking-tight text-white shadow-[0_0_24px_rgba(34,211,238,0.25)]">
              VK
              <span className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
            </span>
            <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 sm:block">
              Kunj Vaghani
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = item.sectionId === activeSection;
              const isResume = item.download;

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    download={item.download ? true : undefined}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`nav-link relative rounded-lg px-3.5 py-2 text-sm font-medium tracking-wide transition-colors ${
                      isResume
                        ? "text-cyan-300 hover:text-cyan-200"
                        : isActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {item.label}
                    {!isResume && isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 -z-10 rounded-lg border border-cyan-400/25 bg-cyan-500/10 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {!isResume && (
                      <motion.span
                        className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                        whileHover={{ width: "60%" }}
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-expanded={mobileOpen ? "true" : "false"}
            aria-controls={mobileOpen ? "mobile-nav-menu" : undefined}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 6, width: "100%" }
                    : { rotate: 0, y: 0, width: "100%" }
                }
                className="block h-0.5 origin-center rounded-full bg-zinc-200"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-0.5 rounded-full bg-zinc-200"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -6, width: "100%" }
                    : { rotate: 0, y: 0, width: "100%" }
                }
                className="block h-0.5 origin-center rounded-full bg-zinc-200"
              />
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-cyan-500/20 bg-[#0a0b10]/95 p-6 pt-24 shadow-[-8px_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, index) => {
                  const isActive = item.sectionId === activeSection;

                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        download={item.download ? true : undefined}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`block rounded-xl border px-4 py-3 text-base font-medium transition-colors ${
                          item.download
                            ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                            : isActive
                              ? "border-cyan-400/30 bg-cyan-500/10 text-white"
                              : "border-white/5 text-zinc-400 hover:border-white/10 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
