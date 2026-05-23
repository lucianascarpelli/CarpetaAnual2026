// Hero.jsx - VERSIÓN SIMPLIFICADA RADICAL
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Scroll-driven hero content
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 20]);

  // Detectar visibilidad del hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.intersectionRatio > 0.1);
      },
      { threshold: [0, 0.1] }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setHoverIndex((prev) => (prev >= styles.length - 1 ? 0 : prev + 1));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const styles = [
    "font-sans font-semibold tracking-tight",
    "font-serif italic tracking-tight",
    "font-sans font-light tracking-wide",
    "font-serif font-light italic tracking-tight",
  ];

  return (
    <>
      {/* Background simplificado - SIN animaciones cuando no visible */}
      <div
        id="hero-orbs"
        className="fixed inset-0 w-full h-screen pointer-events-none overflow-hidden"
        style={{ 
          zIndex: 0, 
          background: "#f4f3ee",
          // Ocultar completamente cuando no visible
          opacity: isHeroVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        {/* Solo 2 blobs estáticos con gradientes simples */}
        
        {/* Blob 1 — rose/pink - SIN ANIMACIÓN DE BORDER */}
        <div
          className="absolute"
          style={{
            top: "5%",
            left: "8%",
            width: "45vw",
            height: "45vw",
            maxWidth: 520,
            maxHeight: 520,
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, #f43f5e88 0%, #fb718555 40%, transparent 70%)",
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
            filter: "blur(40px)",
          }}
        />

        {/* Blob 2 — amber/warm - SIN ANIMACIÓN DE BORDER */}
        <div
          className="absolute"
          style={{
            bottom: "5%",
            right: "8%",
            width: "50vw",
            height: "48vw",
            maxWidth: 580,
            maxHeight: 560,
            background:
              "radial-gradient(ellipse 65% 65% at 50% 50%, #f59e0b99 0%, #fbbf2466 35%, transparent 65%)",
            borderRadius: "50% 50% 40% 60% / 60% 40% 55% 45%",
            filter: "blur(50px)",
            mixBlendMode: "multiply",
          }}
        />

        {/* Blob 3 — emerald (pequeño acento) */}
        <div
          className="absolute"
          style={{
            top: "25%",
            right: "12%",
            width: "30vw",
            height: "32vw",
            maxWidth: 350,
            maxHeight: 380,
            background:
              "radial-gradient(ellipse 60% 65% at 50% 50%, #05966966 0%, #10b98144 40%, transparent 70%)",
            borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%",
            filter: "blur(45px)",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Hero content */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 py-24"
        style={{ zIndex: 1 }}
      >
        <motion.div
          className="max-w-5xl relative"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-medium mb-6 text-neutral-500 tracking-wide uppercase"
          >
            Diseñadora Multimedia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-none mb-12 whitespace-nowrap flex flex-wrap md:flex-nowrap items-center gap-x-6"
          >
            <span>Hola, soy</span>
            <motion.span
              key={hoverIndex}
              initial={{ opacity: 0.4, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className={`
                text-neutral-900
                inline-block
                min-w-[280px]
                md:min-w-[400px]
                cursor-default
                ${styles[hoverIndex]}
              `}
            >
              Luciana
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl border-l-2 border-neutral-300 pl-6"
          >
            <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed">
              Diseño experiencias visuales explorando distintas disciplinas,
              herramientas y formas de pensar.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}