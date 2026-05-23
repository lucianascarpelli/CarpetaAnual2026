import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const springConfig = { damping: 50, stiffness: 150, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Scroll-driven hero content
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 20]);

  // Simplified blob parallax (only scroll, no autonomous drift)
  const blobScroll1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blobScroll2Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const blobScroll3Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const blobScroll4Y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Mouse parallax layers (reduced intensity)
  const x1 = useTransform(smoothX, (v) => v * 0.04);
  const y1 = useTransform(smoothY, (v) => v * -0.04);
  const x2 = useTransform(smoothX, (v) => v * 0.12);
  const y2 = useTransform(smoothY, (v) => v * -0.12);
  const x3 = useTransform(smoothX, (v) => v * 0.25);
  const y3 = useTransform(smoothY, (v) => v * -0.25);
  const x4 = useTransform(smoothX, (v) => v * 0.35);
  const y4 = useTransform(smoothY, (v) => v * -0.35);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
          className="absolute will-change-transform"
          style={{
            x: x1,
            y: y1,
            translateY: blobScroll1Y,
            top: "8%",
            left: "10%",
            width: "48vw",
            height: "48vw",
            maxWidth: 550,
            maxHeight: 550,
            background:
              "radial-gradient(ellipse 70% 65% at 45% 45%, #f43f5e 0%, #fb7185 35%, #fda4af 65%, transparent 80%)",
            opacity: 0.65,
          }}
          animate={{
            borderRadius: [
              "60% 40% 55% 45% / 50% 60% 40% 50%",
              "45% 55% 40% 60% / 60% 40% 55% 45%",
              "55% 45% 60% 40% / 45% 55% 50% 50%",
              "60% 40% 55% 45% / 50% 60% 40% 50%",
            ],
          }}
          transition={{
            borderRadius: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Blob 2 — deep blue */}
        <motion.div
          className="absolute will-change-transform"
          style={{
            x: x4,
            y: y4,
            translateY: blobScroll2Y,
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
          }}
          animate={{
            borderRadius: [
              "40% 60% 45% 55% / 55% 45% 60% 40%",
              "55% 45% 60% 40% / 40% 60% 45% 55%",
              "48% 52% 55% 45% / 52% 48% 52% 48%",
              "40% 60% 45% 55% / 55% 45% 60% 40%",
            ],
          }}
          transition={{
            borderRadius: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Blob 3 — amber/warm */}
        <motion.div
          className="absolute will-change-transform"
          style={{
            x: x2,
            y: y2,
            translateY: blobScroll3Y,
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
          }}
          animate={{
            borderRadius: [
              "50% 50% 40% 60% / 60% 40% 55% 45%",
              "42% 58% 52% 48% / 48% 52% 45% 55%",
              "58% 42% 46% 54% / 55% 45% 60% 40%",
              "50% 50% 40% 60% / 60% 40% 55% 45%",
            ],
          }}
          transition={{
            borderRadius: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Blob 4 — emerald */}
        <motion.div
          className="absolute will-change-transform"
          style={{
            x: x3,
            y: y3,
            translateY: blobScroll4Y,
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
          }}
          animate={{
            borderRadius: [
              "55% 45% 60% 40% / 45% 55% 45% 55%",
              "40% 60% 50% 50% / 60% 40% 55% 45%",
              "52% 48% 44% 56% / 48% 52% 60% 40%",
              "55% 45% 60% 40% / 45% 55% 45% 55%",
            ],
          }}
          transition={{
            borderRadius: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* Hero content */}
      <section
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
              herramientas y formas de pensar.{" "}
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
