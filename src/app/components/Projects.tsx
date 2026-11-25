import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 px-6 md:px-12 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Proyectos <span className="text-rose-400 italic">seleccionados</span>
          </h2>
          <p className="text-xl text-neutral-700 max-w-2xl font-light">
            Una selección de trabajos académicos y profesionales en diseño visual, experiencias digitales y desarrollo web.
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {projects.map((project, index) => (
              <Link
                to={`/proyecto/${project.id}`}
                key={project.id}
                className="group block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
              >
                <motion.div
                  layoutId={`card-container-${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-xl cursor-pointer bg-neutral-100"
                >
                  <div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6 backdrop-blur-[1px]">
                    {/* Quick tools preview on hover */}
                    <div className="flex flex-wrap gap-2 mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-500 ">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-black/50 text-white text-xs rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-500 delay-200">
                      Ver el proyecto <ArrowRight size={16} />
                    </div>
                  </div>
                  <motion.img
                    layoutId={`card-img-${project.id}`}
                    src={project.imgcover}
                    alt={project.title}
                    loading="lazy"
                    className={`w-full ${index % 2 === 0 ? "h-[420px]" : "h-[300px]"} object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                </motion.div>
                <div className="pt-3 pb-2 flex justify-between items-start gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-1 text-xs font-medium tracking-wide leading-relaxed text-neutral-600">{project.category.replace(/\s*\|\s*/g, " · ")}</p>
                  </div>
                  <ArrowRight size={20} className="shrink-0 mt-1 text-rose-400 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}