export type Project = {
  id: string;
  title: string;
  category: string;
  img: string;
  imgcover: string;
  need: string;
  tools: string[];
  solution: string;
  year: string;
  client: string;
  pieces: string;
  description: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "fundacion-usl",
    title: "Fundación Uruguay Sin Limites",
    category:
      "DISEÑO Y DESARROLLO WEB | MOTION GRAPHICS | EDICIÓN DE VIDEO | DISEÑO GRÁFICO",
    img: "/img/fusl/IMAGEN_2.png",
    imgcover: "/img/fusl/IMAGEN_2.png",
    need: "Resolver integralmente las necsidades comunicacionales y de diseño de una fundación joven",
    tools: [
      "HTML, CSS, JAVASCRIPT, REACT JS",
      "Figma",
      "Wordpress",
      "Adobe After Effects",
      "Adobe Premiere",
      "Adobe Illustrator",
      "Adobe PHotoshop",
    ],
    solution:
      "A partir de la identidad visual, diseñé y desarrollé el sitio web, creé personajes para acompañar la comunicación, produje piezas audiovisuales (desde videos educativos animados hasta un video institucional) y generé contenidos reutilizables para redes sociales.",
    year: "2026",
    client: "Fundación Uruguay Sin Limites",
    pieces: "Sitio Web, Video Institucional, Videos Animados, Redes sociales",
    description:
      "Este proyecto fue desarrollado en el marco de la materia Recreación 26 de la Licenciatura en Diseño Multimedia de la Universidad ORT Uruguay. La propuesta consistió en trabajar con una contraparte real para abordar de forma integral sus necesidades de comunicación y diseño. En este caso trabajé junto a una fundación joven enfocada en la educación y la niñez uruguaya, desarrollando desde cero las bases de su sistema comunicacional.",
    gallery: [
      "/img/fusl/VIDEO PRESENTACION .mp4",
      "/img/fusl/sitio web fusl.mp4",

      "/img/fusl/IMAGEN_1.jpg",

      "/img/fusl/IMAGEN_2.png",
      "/img/fusl/IMAGEN_4.jpg",
      "/img/fusl/IMAGEN_3.jpg",
    ],
  },
  {
  id: "amora",
  title: "Amora – Skincare Brand",
  category: "DISEÑO GRÁFICO | BRANDING | DISEÑO WEB",
  img: "/img/amora/AMORA4.webp",
  imgcover: "/img/amora/AMORA7.webp",
  
  need: "Desarrollar una identidad visual y una landing page para una marca ficticia de skincare enfocada en ingredientes naturales, limpios y libres de químicos agresivos.",
  tools: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Figma"
  ],
  solution: "Creé una identidad de marca completa partiendo del concepto de pureza y naturalidad, desarrollando el sistema visual, el logotipo, recursos gráficos y packaging. Luego diseñé una landing page coherente con la estética de la marca, priorizando una experiencia visual limpia, minimalista y enfocada en el producto.",
  year: "2023",
  client: "Amora – marca ficticia",
  pieces: "Logo, Sistema de marca, Packaging, Elementos gráficos, Landing page",
  description: "Amora es un proyecto de branding y diseño digital desarrollado como exploración de una marca de cuidado de la piel basada en ingredientes naturales y una estética limpia. El objetivo fue construir una identidad visual coherente desde cero, traduciendo valores como pureza, suavidad y confianza en un sistema gráfico aplicable tanto a packaging como a una experiencia web.",
  gallery: [
    "/img/amora/AMORA4.webp",
    "/img/amora/AMORA1.webp",
    "/img/amora/AMORA2.webp",
    "/img/amora/AMORA3.webp",
    "/img/amora/AMORA5.webp",
    "/img/amora/AMORA6.webp"
  ]
},
  {
  id: "quien-para",
  title: "¿Quién Para?",
  category: "DISEÑO UX/UI | DISEÑO GRÁFICO | RESEARCH",
  img: "/img/quienpara/Quienpara5.webp",
  imgcover: "/img/quienpara/Quienpara3.webp",
  need:
    "Diseñar una experiencia digital que facilite la conexión entre personas con gustos similares para asistir a eventos de entretenimiento local.",
  tools: [
    "Figma",
    "Adobe Illustrator",
    "Maze"
  ],
  solution:
    "Desarrollé la identidad visual y el prototipo de alta fidelidad de la aplicación, combinando research con diseño de experiencia para construir una propuesta enfocada en lo social, la exploración y la conexión entre usuarios. A partir de tests y validaciones en Maze, trabajé una interfaz intuitiva, dinámica y adaptable a distintos perfiles de usuario.",
  year: "2024",
  client: "Proyecto académico",
  pieces:
    "Identidad visual, Sistema gráfico, Prototipo de alta fidelidad",
  description:
    "¿Quién Para? es un proyecto de diseño UX/UI centrado en la creación de una aplicación que permite a sus usuarios descubrir eventos de entretenimiento local y encontrar personas con intereses similares para asistir juntos. El proyecto surgió desde la necesidad de explorar cómo el diseño digital puede facilitar conexiones sociales reales, integrando investigación, estrategia visual y prototipado interactivo en una experiencia pensada para sentirse cercana, flexible y contemporánea.",
  gallery: [
    "/img/quienpara/Quienpara1.webp",
    "/img/quienpara/Quienpara2.webp",
    "/img/quienpara/Quienpara3.webp",
    "/img/quienpara/Quienpara4.webp"
  ]
},
{
  id: "camino-de-la-cosecha",
  title: "Camino de la Cosecha",
  category:
    "PROGRAMACIÓN | ELECTRÓNICA | DISEÑO GRÁFICO | EDICIÓN DE VIDEO",
  img:  "/img/caminodelacosecha/camino6.webp",
  imgcover: "/img/caminodelacosecha/camino5.webp",
  need:
    "Desarrollar una experiencia educativa e interactiva para el cierre del recorrido de una fábrica de arroz, integrando juego, tecnología y comunicación visual.",
  tools: [
    "Arduino",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe After Effects",
    "Adobe Premiere"
  ],
  solution:
    "En colaboración con estudiantes de Diseño Industrial, desarrollamos un juego educativo en versiones móvil y de mesa. Desde el área de Diseño Multimedia estuve a cargo de la electrónica, el cableado y la programación del sistema mediante Arduino, además del desarrollo de la identidad visual del proyecto y la edición del video promocional. El enfoque estuvo en integrar distintas disciplinas para construir una experiencia interactiva coherente tanto a nivel funcional como visual.",
  year: "2025",
  client: "Proyecto interdisciplinario",
  pieces:
    "Juego interactivo, Identidad visual, Video promocional",
  description:
    "Camino de la Cosecha es un proyecto interdisciplinario desarrollado junto a estudiantes de Diseño Industrial, centrado en la creación de un juego educativo pensado para el cierre del recorrido de una fábrica de arroz. El proyecto combinó electrónica, programación, diseño visual y audiovisual para generar una experiencia interactiva accesible y dinámica. Además del desarrollo técnico del sistema con Arduino, trabajé en la construcción de la identidad visual del juego y en la producción del material audiovisual de presentación.",
  gallery: [
     "/img/caminodelacosecha/camino2.webp",
    "/img/caminodelacosecha/camino1.webp",
   
    "/img/caminodelacosecha/camino3.webp",
    "/img/caminodelacosecha/camino4.webp",

  ]
},
{
  id: "read-your-mind",
  title: "Read Your Mind",
  category: "MOTION GRAPHICS | DISEÑO AUDIOVISUAL",
  img: "/img/Readyourmind/Readyourmind5.webp",
  imgcover: "/img/Readyourmind/Readyourmind4.webp",
  need:
    "Desarrollar una pieza audiovisual de motion graphics con fuerte énfasis en ritmo, composición visual y exploración estética a partir de la música.",
  tools: [
    "Adobe After Effects",
    "Adobe Illustrator",
    "Adobe Photoshop"
  ],
  solution:
    "A partir de una base musical como eje narrativo, construí una pieza de motion graphics explorando una estética inspirada en los 2000, combinando tipografías, texturas y recursos visuales. El foco estuvo en la composición dinámica, el ritmo visual y la integración de elementos gráficos para generar una experiencia audiovisual coherente y envolvente.",
  year: "2023",
  client: "Proyecto académico",
  pieces: "Video animado",
  description:
    "Read Your Mind es un proyecto de motion graphics donde la exploración visual se construye a partir del ritmo musical y una estética inspirada en los 2000. El trabajo se centra en la experimentación con composición, tipografía y texturas, buscando generar una pieza audiovisual dinámica donde el sonido y la imagen funcionan de manera integrada.",
  gallery: [
    "/img/Readyourmind/Readyourmind1.webp",
    "/img/Readyourmind/Readyourmind2.webp",
    "/img/Readyourmind/Readyourmind3.mp4"
  ]
},

  {
  id: "decia-hnos",
  title: "Decia Hnos Inmobiliaria",
  category: "DISEÑO WEB | UI DESIGN | FRONT-END DEVELOPMENT",
  img: "/img/decia/decia3.webp",
  imgcover: "/img/decia/decia1.webp",
  need:
    "Diseñar y desarrollar una plataforma web para una inmobiliaria con el objetivo de presentar propiedades de forma clara, accesible y con una navegación intuitiva.",
  tools: [
    "Figma",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  solution:
    "Diseñé la interfaz completa en Figma y posteriormente desarrollé el front-end utilizando HTML, CSS y JavaScript. El enfoque estuvo en la claridad visual, la jerarquía de información y la facilidad de navegación para la búsqueda de propiedades. El proyecto fue entregado listo para su posterior integración con base de datos por parte del equipo de desarrollo.",
  year: "2026",
  client: "Inmobiliaria Decia Hnos",
  pieces:
    "UI Design en Figma, Front-end development",
  description:
    "Diseño y desarrollo del sitio web para la inmobiliaria Decia Hnos, con el objetivo de mejorar la presentación de propiedades y optimizar la experiencia de navegación. El trabajo incluyó el diseño de la interfaz en Figma y la implementación del front-end, dejando la estructura preparada para su integración con base de datos por un equipo de desarrollo externo.",
  gallery: [
   
    "/img/decia/decia2.webp",
      "/img/decia/decia6.webp",
    "/img/decia/decia4.webp",
  
  
      "/img/decia/decia5.webp"
  ]
}, 


];
