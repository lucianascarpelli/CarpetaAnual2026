import { motion, type Variant } from "framer-motion";
import { useState } from "react";

type ShapeType = "blob" | "square" | "rectangle" | "circle";

const shapeVariants: Record<ShapeType, Variant> = {
  blob: {
    width: 80,
    height: 80,
    borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
    transition: { duration: 0.6 },
  },
  square: {
    width: 150,
    height: 150,
    borderRadius: "0%",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  rectangle: {
    width: 220,
    height: 110,
    borderRadius: "0%",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  circle: {
    width: 170,
    height: 170,
    borderRadius: "50%",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

export function Process() {
  const [hoveredShape, setHoveredShape] = useState<ShapeType>("blob");

  return (
    <section className="mt-36 pb-25 pt-20 px-6 md:px-12 text-neutral-50 overflow-hidden relative flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-16">

      {/* CURSOR / BLOB FIJO */}
      <motion.div
        className="absolute left-1/2 top-1/2 bg-rose-400 rounded-full pointer-events-none mix-blend-screen"
        style={{
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 25px rgba(63, 244, 105, 0.35)",
        }}
        animate={hoveredShape}
        variants={shapeVariants}
      />

      {/* TEXTO */}
      <div className="lg:w-1/2 max-w-2xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Que cada idea
          <span className="text-rose-400 italic">
            <br /> encuentre su forma.
          </span>
        </h2>

        <p className="text-neutral-400 text-lg space-y-4">
          Trabajo entre diseño gráfico, motion y desarrollo web, combinando
          herramientas según el proyecto.
        </p>
      </div>

      {/* SHAPES */}
      <div className="lg:w-1/2 flex gap-10 justify-center relative z-10">

        <div
          onMouseEnter={() => setHoveredShape("circle")}
          onMouseLeave={() => setHoveredShape("blob")}
          className="w-[170px] h-[170px] rounded-full border border-neutral-600 bg-neutral-400/10"
        />

        <div className="flex flex-col gap-8">
          <div
            onMouseEnter={() => setHoveredShape("rectangle")}
            onMouseLeave={() => setHoveredShape("blob")}
            className="w-[220px] h-[110px] border border-neutral-600 bg-neutral-400/10"
          />

          <div
            onMouseEnter={() => setHoveredShape("square")}
            onMouseLeave={() => setHoveredShape("blob")}
            className="w-[150px] h-[150px] border border-neutral-600 bg-neutral-400/10"
          />
        </div>

      </div>
    </section>
  );
}