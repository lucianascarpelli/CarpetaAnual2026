import { motion } from "framer-motion";
import { useState } from "react";

type ShapeType = "blob" | "square" | "rectangle" | "circle";

export function Process() {
  const [hoveredShape, setHoveredShape] = useState<ShapeType | null>(null);

  return (
    <section className="mt-36 pb-25 pt-20 px-6 md:px-12 text-neutral-50 overflow-hidden relative flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-16 bg-neutral-900">

      {/* TEXT */}
      <div className="lg:w-1/2 max-w-2xl z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Que cada idea
          <span className="text-rose-400 italic">
            <br /> encuentre su forma.
          </span>
        </h2>

        <div className="text-lg text-neutral-400 space-y-6">
          <p>
            Trabajo entre diseño gráfico, motion y desarrollo web.
          </p>
          <p>
            Construyo soluciones claras y sensibles según cada contexto.
          </p>
        </div>
      </div>

      {/* SHAPES */}
      <div className="lg:w-1/2 flex gap-10 justify-center z-10">

        <motion.div
          onMouseEnter={() => setHoveredShape("circle")}
          onMouseLeave={() => setHoveredShape(null)}
          animate={{
            scale: hoveredShape === "circle" ? 1.05 : 1,
            borderColor: hoveredShape === "circle" ? "#fb7185" : "#525252",
            backgroundColor: hoveredShape === "circle"
              ? "rgba(244,63,94,0.15)"
              : "rgba(255,255,255,0.04)",
          }}
          className="w-[170px] h-[170px] rounded-full border"
        />

        <div className="flex flex-col gap-8">
          <motion.div
            onMouseEnter={() => setHoveredShape("rectangle")}
            onMouseLeave={() => setHoveredShape(null)}
            animate={{
              scale: hoveredShape === "rectangle" ? 1.05 : 1,
              borderColor: hoveredShape === "rectangle" ? "#fb7185" : "#525252",
              backgroundColor: hoveredShape === "rectangle"
                ? "rgba(244,63,94,0.15)"
                : "rgba(255,255,255,0.04)",
            }}
            className="w-[220px] h-[110px] border"
          />

          <motion.div
            onMouseEnter={() => setHoveredShape("square")}
            onMouseLeave={() => setHoveredShape(null)}
            animate={{
              scale: hoveredShape === "square" ? 1.05 : 1,
              borderColor: hoveredShape === "square" ? "#fb7185" : "#525252",
              backgroundColor: hoveredShape === "square"
                ? "rgba(244,63,94,0.15)"
                : "rgba(255,255,255,0.04)",
            }}
            className="w-[150px] h-[150px] border"
          />
        </div>
      </div>
    </section>
  );
}