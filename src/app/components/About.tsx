import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function About() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const imageX = useTransform(smoothX, (v) => v * 0.012);
  const imageY = useTransform(smoothY, (v) => v * -0.012);

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ zIndex: 3 }}
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(244,63,94,0.08), transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.10), transparent 35%)
          `,
          filter: "blur(80px)",
        }}
      />

      {/* Glass layer */}
      <div
        className="relative border-y border-white/20"
        style={{
          background: `
            linear-gradient(
              140deg,
              rgba(255,255,255,0.16) 0%,
              rgba(255,255,255,0.08) 40%,
              rgba(255,255,255,0.06) 100%
            )
          `,
          backdropFilter: "blur(42px) saturate(140%)",
          WebkitBackdropFilter: "blur(42px) saturate(140%)",
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.4),
            0 20px 60px rgba(0,0,0,0.06)
          `,
        }}
      >
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-20">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-20 items-start">
            {/* LEFT */}
            <div className="space-y-10">
              {/* IMAGE */}
              <motion.div
                style={{
                  x: imageX,
                  y: imageY,
                }}
                className="relative flex justify-center lg:justify-start"
              >
                <motion.div
                  animate={{
                    borderRadius: [
                      "58% 42% 50% 50% / 42% 58% 42% 58%",
                      "42% 58% 60% 40% / 55% 40% 60% 45%",
                      "60% 40% 45% 55% / 40% 60% 45% 55%",
                      "58% 42% 50% 50% / 42% 58% 42% 58%",
                    ],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    w-[320px]
                    md:w-[380px]
                    lg:w-[430px]
                    aspect-[1/1]
                    overflow-hidden
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 50% 30%,
                        rgba(244,63,94,0.16),
                        rgba(255,255,255,0.04)
                      )
                    `,
                    filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.12))",
                  }}
                >
                  {/* soft blob */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      rotate: [0, 4, -4, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 blur-3xl opacity-70"
                    style={{
                      background: `
                        radial-gradient(
                          circle at 50% 50%,
                          rgba(244,63,94,0.20),
                          rgba(251,191,36,0.08),
                          transparent 70%
                        )
                      `,
                    }}
                  />

                  {/* IMAGE */}
                  <motion.img
                    src="img/yo sola.png"
                    alt="Luciana Scarpelli"
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.015],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      relative
                      z-10
                      w-full
                      h-full
                      object-cover
                      select-none
                      pointer-events-none
                    "
                    style={{
                      filter: `
                        contrast(1.02)
                        saturate(1.02)
                      `,
                      maskImage:
                        "radial-gradient(circle at center, black 62%, transparent 88%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at center, black 62%, transparent 88%)",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* META UNDER PHOTO */}
              <div
                className="
                  grid
                  sm:grid-cols-3
                  gap-6
                  pt-2
                "
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3">
                    Formación
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-neutral-800 leading-snug">
                        Licenciatura en Diseño Multimedia
                      </p>

                      <p className="text-neutral-500 font-light text-sm mt-1">
                        Universidad ORT Uruguay · 2022 — 2026
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3">
                    Idiomas
                  </p>

                  <div className="space-y-2 text-neutral-700">
                    <p>Español — Nativo</p>
                    <p>Inglés — C2 Proficiency</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3">
                    Certificaciones
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-neutral-800 leading-snug">
                        Google UX Design Foundations
                      </p>

                      <p className="text-neutral-500 font-light text-sm mt-1">
                        Google · 2026
                      </p>
                    </div>

                    <div>
                      <p className="text-neutral-800 leading-snug">
                        UX Research & Ideation
                      </p>

                      <p className="text-neutral-500 font-light text-sm mt-1">
                        Google · 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="max-w-2xl lg:pt-10"
            >
              <p className="uppercase tracking-[0.22em] text-sm text-neutral-500 mb-7">
                Sobre mí
              </p>

              <h2 className="text-4xl md:text-6xl leading-[0.95] tracking-tight text-neutral-900 max-w-3xl">
                Me interesa construir ideas desde la{" "}
                <span className="italic text-rose-400">exploración visual</span>{" "}
                y el cruce entre disciplinas.
              </h2>

              {/* EXPERIENCE */}
              <div className="mt-14 relative pl-10 border-l border-neutral-300/70 space-y-10">
                {/* ITEM */}
                <div className="relative">
                  <div className="absolute -left-[45px] top-2 w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_18px_rgba(244,63,94,0.45)]" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-2xl text-neutral-900 tracking-tight">
                        Publicis Impetu
                      </h3>

                      <p className="text-neutral-500 font-light">
                        Diseñadora Multimedia
                      </p>
                    </div>

                    <span className="text-sm uppercase tracking-[0.18em] text-neutral-400 whitespace-nowrap">
                      2026 — Actualidad
                    </span>
                  </div>
                </div>

                {/* ITEM */}
                <div className="relative">
                  <div className="absolute -left-[45px] top-2 w-3 h-3 rounded-full bg-rose-400/70" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-2xl text-neutral-900 tracking-tight">
                        Freelance
                      </h3>

                      <p className="text-neutral-500 font-light">
                        Diseño visual, motion y desarrollo web
                      </p>
                    </div>

                    <span className="text-sm uppercase tracking-[0.18em] text-neutral-400 whitespace-nowrap">
                      2023 — Actualidad
                    </span>
                  </div>
                </div>

                {/* ITEM */}
                <div className="relative">
                  <div className="absolute -left-[45px] top-2 w-3 h-3 rounded-full bg-rose-300/70" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-2xl text-neutral-900 tracking-tight">
                        Improfit
                      </h3>

                      <p className="text-neutral-500 font-light">
                        Diseñadora Multimedia Asistente
                      </p>
                    </div>

                    <span className="text-sm uppercase tracking-[0.18em] text-neutral-400 whitespace-nowrap">
                      2025
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
