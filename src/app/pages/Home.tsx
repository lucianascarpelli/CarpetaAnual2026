import { Hero } from "../components/Hero";
import { Philosophy } from "../components/Philosophy";
import { Process } from "../components/Process";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { motion, useScroll, useSpring } from "framer-motion";

export function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="text-neutral-900 min-h-screen selection:bg-neutral-900 selection:text-neutral-50 font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neutral-900 origin-left z-50"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        {/*
          Hero + Philosophy son transparentes: los orbs fijos se ven a través.
          Hero renderiza el fondo fijo (#hero-orbs, z:0) + el contenido (z:1).
          Philosophy es el card glass (z:2).
        */}
        <Hero />
        <Philosophy />

        {/*
          Process, Projects y Footer tienen fondos sólidos y z-index alto,
          así tapan los orbs fijos y no se filtra el fondo de colores.
        */}
        <div style={{ position: "relative", zIndex: 3 }}>
          <Process />
          <About />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}
