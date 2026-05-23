import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative px-6 py-24 md:px-16"
      style={{ zIndex: 3 }}
    >
      {/* Simplified ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(225,29,72,0.12), transparent 35%),
            radial-gradient(circle at 80% 65%, rgba(255,255,255,0.08), transparent 40%)
          `,
          filter: "blur(60px)",
          opacity: 0.8,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-5xl mx-auto"
      >
        <div
          className="relative overflow-hidden rounded-[40px]"
          style={{
            background: `
              linear-gradient(
                140deg,
                rgba(255,255,255,0.22) 0%,
                rgba(255,255,255,0.12) 30%,
                rgba(255,255,255,0.08) 70%,
                rgba(255,255,255,0.14) 100%
              )
            `,
            backdropFilter: "blur(40px) saturate(140%)",
            WebkitBackdropFilter: "blur(40px) saturate(140%)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: `
              0 20px 60px rgba(0,0,0,0.12),
              inset 0 1px 0 rgba(255,255,255,0.6),
              inset 0 0 80px rgba(255,255,255,0.04)
            `,
          }}
        >
          {/* Top glass edge */}
          <div
            className="absolute top-0 left-[6%] right-[6%] h-[1.5px] pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to right,
                  transparent,
                  rgba(255,255,255,0.9),
                  rgba(255,255,255,0.7),
                  transparent
                )
              `,
            }}
          />

          {/* Simplified top light */}
          <div
            className="absolute top-0 left-0 right-0 h-[180px] pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  rgba(255,255,255,0.18),
                  transparent
                )
              `,
            }}
          />

          {/* Single clean reflection */}
          <div
            className="absolute -left-20 top-[-10%] h-[140%] w-[35%] rotate-[12deg] pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.25),
                  rgba(255,255,255,0.08),
                  transparent
                )
              `,
              filter: "blur(50px)",
              opacity: 0.7,
            }}
          />

          {/* Subtle pink accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: `inset 0 0 100px rgba(225,29,72,0.04)`,
            }}
          />

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mb-10 text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                Nunca me sentí cómoda trabajando desde{" "}
                <span className="italic text-rose-400">un único lugar</span>.
              </h2>

              <p
                className="max-w-3xl text-xl leading-relaxed md:text-2xl"
                style={{
                  color: "rgba(15,15,15,0.8)",
                }}
              >
                Con el tiempo descubrí que lo que más disfruto es{" "}
                <span className="font-extrabold text-rose-400">
                  moverme entre disciplinas
                </span>
                ,aprender herramientas nuevas y entender qué necesita realmente
                cada idea antes de decidir cómo abordarla.
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 1.4,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="origin-left h-px mt-16"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    transparent,
                    rgba(225,29,72,0.5),
                    transparent
                  )
                `,
                boxShadow: `0 0 24px rgba(225,29,72,0.18)`,
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
