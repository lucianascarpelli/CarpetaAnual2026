import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { projects } from "../data/projects";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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


  return (
    <motion.div className="bg-white min-h-screen text-neutral-900">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-neutral-500">
            <ArrowLeftCircle size={18} />
            Volver a proyectos
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-24">

        {/* HEADER */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <span className="text-pink-500 text-xs uppercase tracking-widest">
            {project.category}
          </span>

          <h1 className="text-5xl font-bold mt-2">
            {project.title}
          </h1>
        </div>

        {/* HERO */}
        <div className="w-full h-[60vh] mb-16">
          <img
            src={project.img}
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFO GRID */}
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 mb-20">

          <div className="space-y-6">

            <div>
              <p className="text-xs text-neutral-400 uppercase">Año</p>
              <p>{project.year}</p>
            </div>

            <div>
              <p className="text-xs text-neutral-400 uppercase">Cliente</p>
              <p>{project.client}</p>
            </div>

            <div>
              <p className="text-xs text-neutral-400 uppercase">Piezas</p>
              <p>{project.pieces}</p>
            </div>

            {/* ✅ tools ahora como dato normal */}
            <div>
              <p className="text-xs text-neutral-400 uppercase">Herramientas</p>
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
                  Solución
                </span>
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* GALLERY (UNIFORME / FULL WIDTH GRID) */}
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

              {project.gallery.map((item, i) => (
                <motion.div
                  key={i}
                  className="overflow-hidden rounded-xl bg-neutral-100"
                  whileHover={{ scale: 1.02}}
                >
                  {isVideo(item) ? (
                    <video
                      src={item}
                      controls
                      className="w-full h-full object-cover aspect-video"
                    />
                  ) : (
                    <img
                      src={item}
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  )}
                </motion.div>
              ))}

            </div>

          </div>
        </div>

      </main>

      <Footer />
    </motion.div>
  );
}