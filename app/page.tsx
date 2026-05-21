import Navbar from "@/components/navbar/Navbar";
import PortfolioShell from "@/components/loader/PortfolioShell";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <PortfolioShell>
      <Navbar />

      <main className="relative">
        <Hero />

        <About />

        <Projects />
        <Skills />

        <section
          id="contact"
          className="flex min-h-screen items-center justify-center border-t border-white/5 px-6"
        >
          <p className="font-display text-3xl text-zinc-600">Contact</p>
        </section>
      </main>
    </PortfolioShell>
  );
}
