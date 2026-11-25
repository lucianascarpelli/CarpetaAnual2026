import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Proyecto no encontrado
      </div>
    );
  }
  

  const isVideo = (file: string) =>
    file.endsWith(".mp4") ||
    file.endsWith(".webm") ||
    file.endsWith(".mov");


  // Composiciones según las proporciones de las piezas existentes.
  const layouts: Record<string, number[][]> = {
    "fundacion-usl": [[0], [1], [2, 5], [3], [4]],
    "amora": [[0], [1, 3], [2], [4, 5]],
    "quien-para": [[0, 1], [2, 3]],
    "camino-de-la-cosecha": [[0, 1], [2, 3], [4]],
    "read-your-mind": [[2], [0, 1]],
    "decia-hnos": [[0, 1], [2, 3]],
  };
  const selectedRows = layouts[project.id] ?? [];
  // Si se agregan o quitan piezas, no se pierde contenido.
  const validRows = selectedRows.map(row => row.filter(index => index < project.gallery.length)).filter(row => row.length > 0);
  const used = new Set(validRows.flat());
  const galleryRows = [...validRows, ...project.gallery.map((_, index) => index).filter(index => !used.has(index)).map(index => [index])];

  const [tintA, tintB] = project.palette ?? ["#e8a4b3", "#b8c9db"];

  return (
    <motion.div className="bg-[#faf9f6] min-h-screen text-neutral-900">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/85 backdrop-blur-xl border-b border-neutral-900/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <Link to="/#projects" className="group inline-flex items-center gap-3 rounded-full border border-neutral-900/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-neutral-800 transition-colors duration-200 hover:border-rose-400 hover:text-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-400">
            <ArrowLeft size={18} className="transition-transform duration-200 group-hover:-translate-x-1" />
            Volver a proyectos
          </Link>
        </div>
      </nav>

      <main className="relative isolate overflow-hidden pt-28 pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundImage: `radial-gradient(ellipse 75% 24rem at 0% 6rem, ${tintA}55, transparent 90%), radial-gradient(ellipse 65% 30rem at 100% 42rem, ${tintB}55, transparent 90%)` }} />

        {/* HEADER */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <span className="text-rose-400 text-xs uppercase tracking-widest">
            {project.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            {project.title}
          </h1>
        </div>

        {/* HERO */}
        <div className="w-full max-w-7xl mx-auto px-6 mb-16">
          <img
            src={project.img}
            alt={project.title}
            className="block w-full max-h-[80vh] object-cover rounded-2xl"
          />
        </div>

        {/* INFO GRID */}
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 mb-20">

          <div className="space-y-6">

            <div>
              <p className="text-xs text-neutral-600 uppercase">Año</p>
              <p>{project.year}</p>
            </div>

            <div>
              <p className="text-xs text-neutral-600 uppercase">Cliente</p>
              <p>{project.client}</p>
            </div>

            <div>
              <p className="text-xs text-neutral-600 uppercase">Piezas</p>
              <p>{project.pieces}</p>
            </div>

            {/* ✅ tools ahora como dato normal */}
            <div>
              <p className="text-xs text-neutral-600 uppercase">Herramientas</p>
              <p className="text-sm leading-relaxed text-neutral-700">
                {project.tools.join(" · ")}
              </p>
            </div>

          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              Sobre el proyecto
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-10 border-t pt-6">
              <p className="text-sm text-neutral-700">
                <span className="font-semibold block mb-2">
                 Proceso
                </span>
                {project.process}
              </p>
            </div>
          </div>
        </div>

        {/* GALERÍA EDITORIAL */}
        <section aria-label="Galería del proyecto" className="relative max-w-7xl mx-auto px-6">
          <div className="space-y-8 md:space-y-14">
            {galleryRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{ backgroundImage: `radial-gradient(ellipse at ${rowIndex % 2 === 0 ? "12%" : "88%"} 50%, ${rowIndex % 2 === 0 ? tintA : tintB}40, transparent 72%)` }}
                className={`grid grid-cols-1 items-start gap-6 md:gap-10 rounded-3xl py-3 md:py-6 ${
                  row.length === 2 ? "md:grid-cols-12" : ""
                }`}
              >
                {row.map((index, column) => {
                  const item = project.gallery[index];
                  if (!item) return null;
                  const video = isVideo(item);
                  const wide = rowIndex % 2 === 0 ? column === 0 : column === 1;
                  return (
                    <figure
                      key={index}
                      className={`min-w-0 m-0 ${
                        row.length === 2
                          ? wide ? "md:col-span-7" : "md:col-span-5 md:mt-12"
                          : ""
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.28)]">
                        {video ? (
                          <video src={`${item}#t=0.001`} controls playsInline preload="metadata"
                            aria-label={`${project.title} — video ${index + 1}`}
                            className="block w-full h-auto" />
                        ) : (
                          <img src={item} alt={`${project.title} — pieza ${index + 1}`}
                            loading="lazy" decoding="async"
                            className="block w-full h-auto" />
                        )}
                      </div>
                    </figure>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </motion.div>
  );
}