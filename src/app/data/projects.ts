export type Project = {
  id: string;
  title: string;
  category: string;
  img: string;
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
  img: "/img/amora/amora4.webp",
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
    "/img/amora/amora4.webp",
    "/img/amora/amora1.webp",
    "/img/amora/amora2.webp",
    "/img/amora/amora3.webp",
    "/img/amora/amora5.webp",
    "/img/amora/amora6.webp"
  ]
},
  {
    id: "campana-audiovisual",
    title: "Campaña Audiovisual",
    category: "Diseño Audiovisual",
    img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Nzc5NTI4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    need: "Transmitir los valores de una marca emergente a través de una pieza de video de formato corto y alto impacto.",
    tools: ["Adobe Premiere", "CapCut", "Adobe After Effects"],
    solution:
      "Mediante un montaje rítmico en Premiere y retoques rápidos en CapCut, combinados con placas animadas.",
    year: "2023",
    client: "Senda Indumentaria",
    pieces: "Reels, Spot Promocional, Motion Graphics",
    description:
      "Se requería conectar con una audiencia joven a través de plataformas como Instagram y TikTok. Trabajamos un montaje dinámico con tipografías impactantes y diseño de sonido inmersivo.",
    gallery: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    id: "app-gestion",
    title: "App Móvil de Gestión",
    category: "Diseño UX/UI",
    img: "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kaW5nJTIwc2NyZWVufGVufDF8fHx8MTc3Nzk1Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    need: "Simplificar el registro de gastos diarios mediante una interfaz amigable que invite a la constancia del usuario.",
    tools: ["Figma", "Adobe Illustrator"],
    solution:
      "Diseñé una interfaz clara apoyada en ilustraciones amables creadas en Illustrator, validando todo con prototipos en Figma.",
    year: "2024",
    client: "FinTech Startup",
    pieces: "UI Kits, Wireframes, Prototipos",
    description:
      "A través de investigación con usuarios, descubrimos que el principal obstáculo para el registro de gastos era la fricción visual y cognitiva. Optamos por un diseño limpio y recompensas visuales sutiles.",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    id: "sitio-institucional",
    title: "Sitio Institucional",
    category: "Diseño y Desarrollo Web",
    img: "https://images.unsplash.com/photo-1748525938712-a065b4396ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzc3OTUyODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    need: "Dar presencia digital moderna y confiable a una firma de consultoría con información técnica compleja.",
    tools: ["Figma", "HTML, CSS y JavaScript"],
    solution:
      "Estructuré la arquitectura de la información y la diseñé en Figma, para luego construir un frontend ligero y responsivo.",
    year: "2022",
    client: "Consultora Nexus",
    pieces: "Diseño Web, Maquetación, Responsive",
    description:
      "Transformar documentos densos en una experiencia navegable. Se hizo hincapié en la jerarquía tipográfica, el uso de micro-interacciones para aligerar la lectura y la accesibilidad de la web.",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    id: "contenido-redes",
    title: "Contenido Estratégico RRSS",
    category: "Diseño Audiovisual / Gráfico",
    img: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wfGVufDF8fHx8MTc3Nzk1Mjg0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    need: "Generar plantillas y recursos en movimiento que la marca pueda iterar rápidamente para sus canales sociales.",
    tools: ["Canva", "CapCut", "Adobe Photoshop"],
    solution:
      "Sistematicé la identidad visual de la marca estructurando plantillas accesibles en Canva, apoyadas por recortes hechos en Photoshop.",
    year: "2023",
    client: "Agencia de Marketing Luma",
    pieces: "Plantillas Editables, Guidelines, Motion Templates",
    description:
      'El cliente necesitaba autonomía. En lugar de entregarles piezas finales, se diseñó un "toolkit" con componentes reutilizables, paletas, y guías de animación rápida en herramientas accesibles.',
    gallery: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
];
