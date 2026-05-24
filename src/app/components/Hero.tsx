// Hero.jsx - SIMPLIFICADO
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const springConfig = { damping: 50, stiffness: 150, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Scroll-driven hero content
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 20]);

  // Mouse parallax - SOLO cuando hero visible
  const x1 = useTransform(smoothX, (v) => (isHeroVisible ? v * 0.04 : 0));
  const y1 = useTransform(smoothY, (v) => (isHeroVisible ? v * -0.04 : 0));
  const x2 = useTransform(smoothX, (v) => (isHeroVisible ? v * 0.12 : 0));
  const y2 = useTransform(smoothY, (v) => (isHeroVisible ? v * -0.12 : 0));
  const x3 = useTransform(smoothX, (v) => (isHeroVisible ? v * 0.25 : 0));
  const y3 = useTransform(smoothY, (v) => (isHeroVisible ? v * -0.25 : 0));
  const x4 = useTransform(smoothX, (v) => (isHeroVisible ? v * 0.35 : 0));
  const y4 = useTransform(smoothY, (v) => (isHeroVisible ? v * -0.35 : 0));

  // Detectar visibilidad del hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.intersectionRatio > 0.1);
      },
      { threshold: [0, 0.1, 0.5, 1] }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking - SOLO cuando hero visible
  useEffect(() => {
    if (!isHeroVisible) {
      // Reset mouse position when hero not visible
      mouseX.set(0);
      mouseY.set(0);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHeroVisible, mouseX, mouseY]);

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
      {/* Fixed atmospheric background */}
      <div
        id="hero-orbs"
        className="fixed inset-0 w-full h-screen pointer-events-none overflow-hidden"
        style={{ zIndex: 0, background: "#f4f3ee" }}
      >
        {/* Blob 1 — rose/pink */}
        <motion.div
          className="absolute"
          style={{
            x: x1,
            y: y1,
            top: "8%",
            left: "10%",
            width: "48vw",
            height: "48vw",
            maxWidth: 550,
            maxHeight: 550,
            background:
              "radial-gradient(ellipse 70% 65% at 45% 45%, #f43f5e 0%, #fb7185 35%, #fda4af 65%, transparent 80%)",
            opacity: 0.65,
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          }}
        />

        {/* Blob 2 — deep blue */}
        <motion.div
          className="absolute"
          style={{
            x: x4,
            y: y4,
            top: "45%",
            left: "5%",
            width: "40vw",
            height: "44vw",
            maxWidth: 460,
            maxHeight: 500,
            background:
              "radial-gradient(ellipse 60% 65% at 50% 40%, #2563eb 0%, #3b82f6 30%, #93c5fd 60%, transparent 80%)",
            opacity: 0.5,
            mixBlendMode: "multiply",
            borderRadius: "40% 60% 45% 55% / 55% 45% 60% 40%",
          }}
        />

        {/* Blob 3 — amber/warm */}
        <motion.div
          className="absolute"
          style={{
            x: x2,
            y: y2,
            bottom: "0%",
            right: "10%",
            width: "52vw",
            height: "50vw",
            maxWidth: 600,
            maxHeight: 580,
            background:
              "radial-gradient(ellipse 65% 60% at 45% 50%, #f59e0b 0%, #fbbf24 25%, #fde68a 55%, transparent 80%)",
            opacity: 0.7,
            mixBlendMode: "multiply",
            borderRadius: "50% 50% 40% 60% / 60% 40% 55% 45%",
          }}
        />

        {/* Blob 4 — emerald */}
        <motion.div
          className="absolute"
          style={{
            x: x3,
            y: y3,
            top: "20%",
            right: "8%",
            width: "34vw",
            height: "38vw",
            maxWidth: 400,
            maxHeight: 440,
            background:
              "radial-gradient(ellipse 60% 70% at 50% 50%, #059669 0%, #10b981 35%, #6ee7b7 65%, transparent 82%)",
            opacity: 0.48,
            mixBlendMode: "multiply",
            borderRadius: "55% 45% 60% 40% / 45% 55% 45% 55%",
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
className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-none mb-12 flex flex-wrap md:flex-nowrap items-center gap-x-6"          >
            <span>Hola, soy</span>
        <motion.span
  key={hoverIndex}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className={`
    text-neutral-900
    inline-flex
    items-center
    w-[340px]
    md:w-[460px]
    py-2
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