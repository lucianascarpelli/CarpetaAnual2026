export type Project = {
  id: string;
  title: string;
  category: string;
  img: string;
  imgcover: string;
  need: string;
  tools: string[];
  process: string;
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

    need:
      "Desarrollar un sistema de comunicación visual y digital para una fundación enfocada en educación y niñez uruguaya.",

    tools: [
      "HTML, CSS, JavaScript, React JS",
      "Figma",
      "WordPress",
      "Adobe After Effects",
      "Adobe Premiere",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],

    process:
      "A partir de una identidad visual desarrollada desde cero, diseñé y desarrollé el sitio web de la fundación, produje piezas audiovisuales y generé recursos gráficos reutilizables para redes sociales y comunicación institucional. El proyecto integró desarrollo web, motion graphics, diseño gráfico y edición de video dentro de un sistema visual flexible y adaptable a distintos formatos.",

    year: "2026",

    client: "Fundación Uruguay Sin Limites",

    pieces:
      "Sitio web, Video institucional, Videos animados, Contenido para redes sociales",

    description:
      "Proyecto desarrollado en el marco de la materia Recreación 26 de la Licenciatura en Diseño Multimedia de la Universidad ORT Uruguay. La propuesta consistió en trabajar junto a una contraparte real para abordar integralmente sus necesidades de comunicación visual y digital, construyendo desde cero las bases de su identidad y presencia online.",

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

    title: "Amora",

    category: "DISEÑO GRÁFICO | BRANDING | DISEÑO WEB",

    img: "/img/amora/AMORA4.webp",

    imgcover: "/img/amora/AMORA7.webp",

    need:
      "Construir una identidad visual y experiencia digital para una marca ficticia de skincare basada en ingredientes naturales.",

    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
    ],

    process:
      "Desarrollé el sistema visual completo de la marca, incluyendo logotipo, recursos gráficos, packaging y lineamientos estéticos. Posteriormente diseñé una landing page alineada con la identidad visual, priorizando una experiencia limpia, minimalista y centrada en el producto. El proyecto combinó branding y diseño digital.",

    year: "2023",

    client: "Amora - Marca ficticia",

    pieces:
      "Branding, Packaging, Recursos gráficos, Landing page",

    description:
      "Amora es un proyecto conceptual de branding y diseño digital centrado en la creación de una marca de skincare enfocada en ingredientes naturales y una estética limpia. El objetivo fue explorar cómo traducir valores como pureza, suavidad y confianza en una identidad visual coherente y adaptable tanto a packaging como a entornos digitales.",

    gallery: [
      "/img/amora/AMORA4.webp",
      "/img/amora/AMORA1.webp",
      "/img/amora/AMORA2.webp",
      "/img/amora/AMORA3.webp",
      "/img/amora/AMORA5.webp",
      "/img/amora/AMORA6.webp",
    ],
  },

  {
    id: "quien-para",

    title: "¿Quién Para?",

    category: "DISEÑO UX/UI | DISEÑO GRÁFICO | RESEARCH",

    img: "/img/quienpara/Quienpara5.webp",

    imgcover: "/img/quienpara/Quienpara3.webp",

    need:
      "Diseñar una experiencia digital orientada a conectar personas con intereses similares para asistir a eventos juntos.",

    tools: [
      "Figma",
      "Adobe Illustrator",
      "Maze",
    ],

    process:
      "Combiné investigación de usuarios, exploración visual y diseño UX/UI para diseñar una aplicación enfocada en la interacción social y el descubrimiento de eventos. A partir de validaciones y tests realizados en Maze, trabajé una interfaz flexible, intuitiva y dinámica, desarrollando tanto el sistema visual como el prototipo interactivo de alta fidelidad.",

    year: "2024",

    client: "Proyecto académico",

    pieces:
      "Research, Sistema visual, Prototipo UX/UI de alta fidelidad",

    description:
      "¿Quién Para? es una propuesta UX/UI centrada en facilitar conexiones sociales reales a través del entretenimiento local. El proyecto explora cómo el diseño digital puede generar experiencias más cercanas y humanas, integrando investigación, estrategia visual y prototipado interactivo en una plataforma pensada para sentirse contemporánea, accesible y social.",

    gallery: [
      "/img/quienpara/Quienpara1.webp",
      "/img/quienpara/Quienpara2.webp",
      "/img/quienpara/Quienpara3.webp",
      "/img/quienpara/Quienpara4.webp",
    ],
  },

  {
    id: "camino-de-la-cosecha",

    title: "Camino de la Cosecha",

    category:
      "PROGRAMACIÓN | ELECTRÓNICA | DISEÑO GRÁFICO | EDICIÓN DE VIDEO",

    img: "/img/caminodelacosecha/camino6.webp",

    imgcover: "/img/caminodelacosecha/camino5.webp",

    need:
      "Crear una experiencia educativa interactiva para el cierre del recorrido de una fábrica de arroz.",

    tools: [
      "Arduino",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe After Effects",
      "Adobe Premiere",
    ],

    process:
      "Trabajé en el desarrollo técnico y visual del proyecto, integrando electrónica, programación y comunicación gráfica dentro de una misma experiencia interactiva. Me encargué del cableado y programación del sistema mediante Arduino, además de desarrollar la identidad visual del juego y producir el video promocional. El enfoque estuvo en conectar funcionalidad, interacción y narrativa visual de manera coherente.",

    year: "2025",

    client: "Proyecto interdisciplinario",

    pieces:
      "Juego interactivo, Identidad visual, Video promocional",

    description:
      "Proyecto interdisciplinario desarrollado junto a estudiantes de Diseño Industrial, centrado en la creación de un juego educativo pensado para el cierre del recorrido de una fábrica de arroz. La propuesta combinó interacción física, tecnología y comunicación visual para construir una experiencia dinámica y accesible orientada al aprendizaje.",

    gallery: [
      "/img/caminodelacosecha/camino2.webp",
      "/img/caminodelacosecha/camino1.webp",
      "/img/caminodelacosecha/camino3.webp",
      "/img/caminodelacosecha/camino4.webp",
      "/img/caminodelacosecha/camino7.mp4",
    ],
  },

  {
    id: "read-your-mind",

    title: "Read Your Mind",

    category: "MOTION GRAPHICS | DISEÑO AUDIOVISUAL",

    img: "/img/Readyourmind/Readyourmind5.webp",

    imgcover: "/img/Readyourmind/readyourmind4.webp",

    need:
      "Explorar la relación entre música, ritmo visual y composición a través de una pieza de motion graphics.",

    tools: [
      "Adobe After Effects",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],

    process:
      "Construí la pieza audiovisual tomando la música como eje narrativo y de timing. A partir de una estética inspirada en los 2000, desarrollé composiciones dinámicas utilizando tipografía, texturas y recursos gráficos animados. El proyecto combinó dirección visual, motion graphics y exploración estética para generar una experiencia audiovisual integrada.",

    year: "2023",

    client: "Proyecto académico",

    pieces:
      "Video animado",

    description:
      "Read Your Mind es un proyecto de motion graphics centrado en la experimentación visual a partir del ritmo musical y una estética inspirada en los 2000. La propuesta explora composición, tipografía y textura como herramientas para construir una pieza audiovisual dinámica donde sonido e imagen funcionan de manera integrada.",

    gallery: [
      "/img/Readyourmind/Readyourmind1.webp",
      "/img/Readyourmind/Readyourmind2.webp",
      "/img/Readyourmind/Readyourmind3.mp4",
    ],
  },

  {
    id: "decia-hnos",

    title: "Decia Hnos Inmobiliaria",

    category:
      "DISEÑO WEB | UI DESIGN | FRONT-END DEVELOPMENT",

    img: "/img/decia/decia3.webp",

    imgcover: "/img/decia/decia1.webp",

    need:
      "Diseñar y desarrollar una experiencia web clara y funcional para la visualización de propiedades inmobiliarias.",

    tools: [
      "Figma",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    process:
      "Diseñé la interfaz completa del sitio en Figma y posteriormente desarrollé el front-end utilizando HTML, CSS y JavaScript. El trabajo se enfocó en mejorar la jerarquía visual, la claridad de navegación y la organización de la información, construyendo una experiencia simple y adaptable para la búsqueda de propiedades.",

    year: "2026",

    client: "Inmobiliaria Decia Hnos",

    pieces:
      "UI Design, Front-end development",

    description:
      "Diseño y desarrollo del sitio web para la inmobiliaria Decia Hnos, orientado a optimizar la presentación de propiedades y mejorar la experiencia de navegación. El proyecto abordó tanto la construcción visual de la interfaz como la implementación del front-end, dejando la estructura preparada para futuras integraciones.",

    gallery: [
      "/img/decia/decia2.webp",
      "/img/decia/decia6.webp",
      "/img/decia/decia4.webp",
      "/img/decia/decia5.webp",
    ],
  },
];