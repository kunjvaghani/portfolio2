import Navbar from "@/components/navbar/Navbar";
import PortfolioShell from "@/components/loader/PortfolioShell";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";

export default function Home() {
  return (
    <PortfolioShell>
      <Navbar />

      <main className="relative">
        <Hero />

        <About />

        <section
          id="projects"
          className="flex min-h-screen items-center justify-center border-t border-white/5 px-6"
        >
          <p className="font-display text-3xl text-zinc-600">Projects</p>
        </section>

        <section
          id="skills"
          className="flex min-h-screen items-center justify-center border-t border-white/5 px-6"
        >
          <p className="font-display text-3xl text-zinc-600">Skills</p>
        </section>

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
