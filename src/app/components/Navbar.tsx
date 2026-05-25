import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
   <nav
  className={`
    fixed
    w-full
    z-40
    top-0
    left-0
    text-white
    px-6
    py-6
    md:px-12
    flex
    justify-between
    items-center
    pointer-events-none
    ${!isOpen ? "mix-blend-difference" : ""}
  `}
>
      {/* LOGO */}
      <div
        className="pointer-events-auto cursor-pointer font-medium tracking-tight"
        onClick={() => scrollTo("hero")}
      >
        Luciana Scarpelli
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 pointer-events-auto text-sm font-medium">
        <button
          onClick={() => scrollTo("about")}
          className="hover:opacity-70 transition-opacity"
        >
          Sobre mí
        </button>

        <button
          onClick={() => scrollTo("process")}
          className="hover:opacity-70 transition-opacity"
        >
          Proceso
        </button>

        <button
          onClick={() => scrollTo("projects")}
          className="hover:opacity-70 transition-opacity"
        >
          Proyectos
        </button>

        <button
          onClick={() =>
            (window.location.href =
              "mailto:lucianascarpelli2004@gmail.com")
          }
          className="hover:opacity-70 transition-opacity"
        >
          Contacto
        </button>
      </div>

      {/* MOBILE TOGGLE */}
     <button
  className={`
    md:hidden
    pointer-events-auto
    z-50
    ${isOpen ? "text-black" : "text-white"}
  `}
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={24} /> : <Menu size={24} />}
</button>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="
            fixed
            pointer-events-auto
            inset-0
            bg-white/15
            backdrop-blur-xl
            flex
            flex-col
            items-center
            justify-center
            gap-8
            z-40
            md:hidden
          "
        >
       

          <button
            onClick={() => scrollTo("about")}
            className="text-3xl text-black hover:opacity-70 transition-opacity"
          >
            Sobre mí
          </button>

          <button
            onClick={() => scrollTo("process")}
            className="text-3xl text-black hover:opacity-70 transition-opacity"
          >
            Proceso
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="text-3xl text-black hover:opacity-70 transition-opacity"
          >
            Proyectos
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "mailto:lucianascarpelli2004@gmail.com")
            }
            className="text-3xl text-black hover:opacity-70 transition-opacity"
          >
            Contacto
          </button>
        </motion.div>
      )}
    </nav>
  );
}