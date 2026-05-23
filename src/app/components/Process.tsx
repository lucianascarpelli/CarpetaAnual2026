import { motion } from "framer-motion";
import { useState } from "react";

type ShapeType = "blob" | "square" | "rectangle" | "circle";

export function Process() {
  const [hoveredShape, setHoveredShape] = useState<ShapeType | null>(null);

  return (
    <section  className="mt-36 pb-25 pt-20 px-6 md:px-12 text-neutral-50 overflow-hidden relative flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-16 bg-neutral-900"  style={{
        backgroundColor: "#111111",
        position: "relative",
        zIndex: 3,
        background: "rgba(10,10,10,0.82)",
           backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
     

        /* Fondo sólido + z-index alto para tapar el hero-orbs fijo */
      }}>

      {/* TEXT */}
      <div className="lg:w-1/2 max-w-2xl z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight text-white"> Que cada idea <span className="text-rose-400 font-extrabold italic"> <br /> encuentre su forma. </span> </h2> <div className="text-lg md:text-xl text-neutral-400 font-light space-y-6"> <p> Trabajo entre diseño gráfico, motion y desarrollo web, combinando herramientas y recursos según lo que cada proyecto necesita. </p> <p> Más que aplicar una fórmula fija, me interesa construir soluciones claras, sensibles y funcionales que respondan al contexto de cada idea. </p>
        </div>
      </div>

      {/* SHAPES */}
     {/* SHAPES */}
<div className="lg:w-1/2 flex gap-10 justify-center z-10 relative">

  {/* CURSOR BLOB LOCAL */}
  {hoveredShape && (
    <motion.div
      layout
      className="absolute pointer-events-none z-20 bg-rose-400/20 border border-rose-400/40"
      style={{
        width: hoveredShape === "rectangle"
          ? 220
          : hoveredShape === "square"
          ? 150
          : 170,
        height: hoveredShape === "rectangle"
          ? 110
          : hoveredShape === "square"
          ? 150
          : 170,
        borderRadius:
          hoveredShape === "circle"
            ? "50%"
            : hoveredShape === "square"
            ? "0%"
            : "30%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
    />
  )}

  {/* CIRCLE */}
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
    className="w-[170px] h-[170px] rounded-full border relative z-10"
  />

  <div className="flex flex-col gap-8 relative z-10">

    {/* RECTANGLE */}
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

    {/* SQUARE */}
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