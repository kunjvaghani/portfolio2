import Navbar from "@/components/navbar/Navbar";
import PortfolioShell from "@/components/loader/PortfolioShell";

export default function Home() {
  return (
    <PortfolioShell>
      <Navbar />

      <main className="relative">
        {/* Placeholder sections — hero, about, etc. will be built next */}
        <section
          id="home"
          className="flex min-h-screen items-center justify-center px-6 pt-28"
        >
          <p className="font-display text-4xl text-zinc-500 sm:text-6xl">
            Hero — coming next
          </p>
        </section>

        <section
          id="about"
          className="flex min-h-screen items-center justify-center border-t border-white/5 px-6"
        >
          <p className="font-display text-3xl text-zinc-600">About</p>
        </section>

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
