import { motion } from "framer-motion";
import { ArrowRight, Mail} from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="text-neutral-50 px-6 md:px-12 py-24"
      style={{
        backgroundColor: "#111111",
        position: "relative",
        zIndex: 3,
        background: "rgba(10,10,10,0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

        {/* LEFT */}
        <div className="max-w-2xl">
           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95] mb-8"
          >
            ¿Tenés un proyecto
            <span className="text-rose-400 italic font-extrabold">
              <br />
              en mente?
            </span>
          </motion.h2>

          <motion.a
            href="mailto:lucianascarpelli2004@gmail.com"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xl md:text-2xl font-light hover:text-rose-400 transition-colors group"
          >
            lucianascarpelli2004@gmail.com

            <ArrowRight
              size={22}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p className="text-neutral-400 font-medium uppercase tracking-widest text-sm">
            Conectar
          </p>

          <div className="flex">
             <a
              href="mailto:lucianascarpelli2004@gmail.com"
              className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://uy.linkedin.com/in/luciana-scarpelli-29a989277"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold tracking-tight"
            >
              In
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
        <p>
          © {new Date().getFullYear()} Luciana Scarpelli. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}