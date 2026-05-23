import { motion, useMotionValue, useSpring, type Variant } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type ShapeType = "blob" | "square" | "rectangle" | "circle";

// Define variantes separadas para cada shape
const shapeVariants: Record<ShapeType, Variant> = {
  blob: {
    width: 80,
    height: 80,
    borderRadius: [
      "30% 70% 70% 30% / 30% 30% 70% 70%",
      "60% 40% 30% 70% / 60% 30% 70% 40%",
    ],
    rotate: [0, 180, 360],
    transition: {
      borderRadius: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror" as const,
      },
      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
      width: { duration: 0.3 },
      height: { duration: 0.3 },
    },
  },
  square: {
    width: 150,
    height: 150,
    borderRadius: "0%",
    rotate: 0,
    transition: {
      duration: 0.35,
      type: "spring" as const,
      stiffness: 140,
      damping: 18,
    },
  },
  rectangle: {
    width: 220,
    height: 110,
    borderRadius: "0%",
    rotate: 0,
    transition: {
      duration: 0.35,
      type: "spring" as const,
      stiffness: 140,
      damping: 18,
    },
  },
  circle: {
    width: 170,
    height: 170,
    borderRadius: "50%",
    rotate: 0,
    transition: {
      duration: 0.35,
      type: "spring" as const,
      stiffness: 140,
      damping: 18,
    },
  },
};

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredShape, setHoveredShape] = useState<ShapeType>("blob");
  const [isInside, setIsInside] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsInside(inside);

      if (inside) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="mt-36 pb-25 pt-20  px-6 md:px-12 text-neutral-50 overflow-hidden relative flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-16 cursor-none"
      style={{
        background: "rgba(10,10,10,0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Custom cursor con variantes */}
      {isInside && (
        <motion.div
          className="absolute top-0 left-0 bg-gradient-to-b bg-rose-400 mix-blend-screen pointer-events-none z-50"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            boxShadow: "0 0 30px rgba(52,211,153,0.3)",
          }}
          variants={shapeVariants}
          animate={hoveredShape}
        />
      )}

      <div className="lg:w-1/2 relative z-10 max-w-2xl pointer-events-auto cursor-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight text-white">
            Que cada idea
            <span className="text-rose-400 font-extrabold italic">
              <br />
              encuentre su forma.
            </span>
          </h2>
          <div className="text-lg md:text-xl text-neutral-400 font-light space-y-6">
            <p>
              Trabajo entre diseño gráfico, motion y desarrollo web, combinando
              herramientas y recursos según lo que cada proyecto necesita.
            </p>
            <p>
              Más que aplicar una fórmula fija, me interesa construir soluciones
              claras, sensibles y funcionales que respondan al contexto de cada
              idea.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Shapes Container */}
      <div className="lg:w-1/2 relative flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-[600px] h-[500px] z-10 pointer-events-auto">
        <div className="flex flex-col gap-8 items-center">
          <div
            className="w-[170px] h-[170px] rounded-full border-neutral-600 border bg-neutral-400/10 flex items-center justify-center transition-colors duration-300 hover:border-rose-400/50"
            onMouseEnter={() => setHoveredShape("circle")}
            onMouseLeave={() => setHoveredShape("blob")}
          />
          <div
            className="w-[220px] h-[110px] rounded-none border-neutral-600 border bg-neutral-400/10 flex items-center justify-center transition-colors duration-300 hover:border-rose-400/50"
            onMouseEnter={() => setHoveredShape("rectangle")}
            onMouseLeave={() => setHoveredShape("blob")}
          />
        </div>

        <div className="flex flex-col gap-8 items-center mt-12 md:mt-24">
          <div
            className="w-[150px] h-[150px] rounded-none border-neutral-600 border bg-neutral-400/10 flex items-center justify-center transition-colors duration-300 hover:border-rose-400/50"
            onMouseEnter={() => setHoveredShape("square")}
            onMouseLeave={() => setHoveredShape("blob")}
          />
        </div>
      </div>
    </section>
  );
}
