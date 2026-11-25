import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "process", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav aria-label="Navegación principal" className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-5 flex justify-between items-center bg-[#f4f3ee]/95 backdrop-blur-md text-neutral-900">
      <a href="#hero" onClick={() => setIsOpen(false)} className="font-medium tracking-tight relative z-50">Luciana Scarpelli</a>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {links.map(({id,label}) => <a key={id} href={`#${id}`} className="hover:opacity-70 transition-opacity">{label}</a>)}
      </div>
      <button type="button" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-50 p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && <motion.div initial={{opacity:0}} animate={{opacity:1}} className="fixed inset-0 h-screen bg-[#f4f3ee] flex flex-col items-center justify-center gap-8 md:hidden">
        {links.map(({id,label}) => <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className="text-3xl hover:opacity-70">{label}</a>)}
      </motion.div>}
    </nav>
  );
}