import { motion, useMotionValue, useSpring, type Variant } from "framer-motion";
import { useState, useRef } from "react";

type ShapeType = "blob" | "square" | "rectangle" | "circle";

const shapeVariants: Record<ShapeType, Variant> = {
  blob: {
    width: 80,
    height: 80,
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    rotate: 0,
    transition: {
      duration: 0.8,
    },
  },
  square: {
    width: 150,
    height: 150,
    borderRadius: "0%",
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
    },
  },
  rectangle: {
    width: 220,
    height: 110,
    borderRadius: "0%",
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
    },
  },
  circle: {
    width: 170,
    height: 170,
    borderRadius: "50%",
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
    },
  },
};

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredShape, setHoveredShape] = useState<ShapeType>("blob");
  const [isInside, setIsInside] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 30 });


  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
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

  return (
<section
  ref={containerRef}
  onMouseMove={handleMouseMove}
  className="
    mt-36
    py-16 md:py-25
    px-6 md:px-12
    text-neutral-50
    relative
    flex flex-col lg:flex-row
    items-center justify-center
    gap-5
    cursor-none
    min-h-auto lg:min-h-[70vh]
  "
  style={{
    background: "rgba(10,10,10,0.82)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
  }}


>
      {/* Cursor custom (más liviano) */}
      {isInside && (
        <motion.div id="process"
          className="absolute top-0 left-0 w-4 h-4 bg-rose-400 rounded-full pointer-events-none z-50 mix-blend-screen"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
            boxShadow: "0 0 20px rgba(244,63,94,0.4)",
          }}
          animate={hoveredShape}
          variants={shapeVariants}
        />
      )}

      {/* TEXTO */}
      <div className="lg:w-1/2 relative z-10 max-w-2xl pointer-events-auto cursor-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              No parto desde una herramienta o disciplina, sino desde el problema. Más que aplicar una fórmula fija, me interesa construir soluciones
              claras, sensibles y funcionales que respondan al contexto de cada
              idea.
            </p>
          </div>
        </motion.div>
      </div>

      {/* SHAPES */}
<div className="lg:w-1/2 relative flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-[600px] h-auto z-10 pointer-events-auto">  
  <div className="flex flex-col gap-8 items-center">
    <div
      className="w-[170px] h-[170px] rounded-full border border-neutral-600 bg-neutral-400/10 transition-colors hover:border-rose-400/50"
      onMouseEnter={() => setHoveredShape("circle")}
      onMouseLeave={() => setHoveredShape("blob")}
    />

    <div
      className="w-[220px] h-[110px] border border-neutral-600 bg-neutral-400/10 transition-colors hover:border-rose-400/50"
      onMouseEnter={() => setHoveredShape("rectangle")}
      onMouseLeave={() => setHoveredShape("blob")}
    />
  </div>

  <div className="flex flex-col gap-8 items-center mt-6 md:mt-24">
    <div
      className="w-[150px] h-[150px] border border-neutral-600 bg-neutral-400/10 transition-colors hover:border-rose-400/50"
      onMouseEnter={() => setHoveredShape("square")}
      onMouseLeave={() => setHoveredShape("blob")}
    />
  </div>

</div>
      
    </section>
  );
}