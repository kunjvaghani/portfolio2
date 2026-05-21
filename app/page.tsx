import Navbar from "@/components/navbar/Navbar";
import PortfolioShell from "@/components/loader/PortfolioShell";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <PortfolioShell>
      <Navbar />

      <main className="relative">
        <Hero />

        <About />

        <Projects />
        <Skills />

        <Contact />
      </main>
      <Footer />
    </PortfolioShell>
  );
}
