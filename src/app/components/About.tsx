import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden z-10">

      {/* Background MUY suave */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(244,63,94,0.06), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.04), transparent 45%)
          `,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="w-[320px] md:w-[380px] lg:w-[430px] aspect-square overflow-hidden"
              style={{
                borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
                background: "rgba(255,255,255,0.03)",
              }}
            >

              {/* blob suave de fondo */}
              <div
                className="absolute inset-0 blur-2xl opacity-60"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(244,63,94,0.18), transparent 70%)",
                }}
              />

              <img
                src="img/yo sola.png"
                alt="Luciana Scarpelli"
                className="relative z-10 w-full h-full object-cover"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, black 65%, transparent 90%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 65%, transparent 90%)",
                  filter: "contrast(1.02) saturate(1.02)",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT (igual que tenías) */}
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.2em] text-sm text-neutral-500 mb-6">
              Sobre mí
            </p>

            <h2 className="text-4xl md:text-6xl leading-[0.95] text-neutral-900">
              Me interesa construir ideas desde la{" "}
              <span className="italic text-rose-400">
                exploración visual
              </span>
            </h2>

            <div className="mt-12 space-y-6 text-neutral-600">
              <p>
                Diseño experiencias visuales explorando distintas disciplinas.
              </p>
              <p>
                Busco soluciones claras, sensibles y funcionales según cada contexto.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}