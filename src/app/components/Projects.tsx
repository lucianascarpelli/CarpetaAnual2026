import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
            Proyectos Seleccionados
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl font-light">
            Explorá cómo combine diferentes herramientas para resolver
            necesidades específicas.
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="1.5rem">
            {projects.map((project, index) => (
              <Link
                to={`/proyecto/${project.id}`}
                key={project.id}
                className="block"
              >
                <motion.div
                  layoutId={`card-container-${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl cursor-pointer bg-neutral-100"
                >
                  <div className="absolute inset-0 bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                    <motion.span
                      layoutId={`card-category-${project.id}`}
                      className="text-rose-400 text-sm font-bold tracking-wider uppercase mb-2 block"
                    >
                      {project.category}
                    </motion.span>
                    <motion.h3
                      layoutId={`card-title-${project.id}`}
                      className="text-white text-3xl font-bold mb-4"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Quick tools preview on hover */}
                    <div className="flex flex-wrap gap-2 mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-white/20 text-white text-xs rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-white/80 text-sm font-medium mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      Ver el proyecto <ArrowRight size={16} />
                    </div>
                  </div>
                  <motion.img
                    layoutId={`card-img-${project.id}`}
                    src={project.imgcover}
                    alt={project.title}
                    className={`w-100 ${index % 2 === 0 ? "h-[420px]" : "h-[300px]"} object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                </motion.div>
              </Link>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
