import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-40 top-0 left-0 mix-blend-difference text-white px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
      <div
        className="pointer-events-auto cursor-pointer font-medium tracking-tight"
        onClick={() => scrollTo("hero")}
      >
        Luciana Scarpelli
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 pointer-events-auto text-sm font-medium">
        <button
          onClick={() => scrollTo("filosofia")}
          className="hover:opacity-70 transition-opacity"
        >
          Filosofía
        </button>
        <button
          onClick={() => scrollTo("proyectos")}
          className="hover:opacity-70 transition-opacity"
        >
          Proyectos
        </button>
        <button
          onClick={() => scrollTo("contacto")}
          className="hover:opacity-70 transition-opacity"
        >
          Contacto
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 w-full h-screen bg-neutral-900 flex flex-col items-center justify-center gap-8 pointer-events-auto z-50 md:hidden"
        >
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <button
            onClick={() => scrollTo("filosofia")}
            className="text-2xl hover:opacity-70 transition-opacity"
          >
            Filosofía
          </button>
          <button
            onClick={() => scrollTo("proyectos")}
            className="text-2xl hover:opacity-70 transition-opacity"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="text-2xl hover:opacity-70 transition-opacity"
          >
            Contacto
          </button>
        </motion.div>
      )}
    </nav>
  );
}
