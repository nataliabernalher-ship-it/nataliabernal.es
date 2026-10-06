import type { CaseStudy } from "@/data/case-studies";

export const tusCasasRurales: CaseStudy = {
  slug: "tuscasasrurales",
  year: "",
  showOnHome: false,
  tags: [
    {
      es: "Marketplace de alojamientos rurales",
      en: "Rural accommodation marketplace",
    },
  ],
  cover: {
    src: "/images/home/tuscasasrurales-cover.png",
    width: 900,
    height: 570,
    alt: {
      es: "Portada de TusCasasRurales.com: casa rural y buscador de alojamientos",
      en: "TusCasasRurales.com cover: rural house and accommodation search",
    },
  },
  role: {
    es: "UX/UI Designer",
    en: "UX/UI Designer",
  },
  tools: [],
  meta: [
    {
      label: { es: "Rol", en: "Role" },
      values: ["UX/UI Designer"],
    },
    {
      label: { es: "Ámbitos", en: "Scope" },
      values: ["Marketplace", "Booking", "Design System", "CRO"],
    },
    {
      label: { es: "Plataformas", en: "Platforms" },
      values: ["Web responsive", "Áreas privadas", "Herramientas internas"],
    },
  ],
  title: {
    es: "TusCasasRurales.com",
    en: "TusCasasRurales.com",
  },
  pageTitle: {
    es: "Evolución de la experiencia digital de TusCasasRurales.com",
    en: "Evolving the digital experience of TusCasasRurales.com",
  },
  excerpt: {
    es: "Lideré el rediseño de la interfaz y construí su Design System y nuevas funcionalidades como la reserva online.",
    en: "Led the interface redesign and built its Design System and new features as online reservation",
  },
  nav: [],
  blocks: [
    {
      type: "section",
      navId: "introduccion",
      body: {
        es: "Diseño de producto para un marketplace turístico con experiencias diferenciadas para viajeros, propietarios y equipo interno. Mi trabajo abarca la evolución de los principales recorridos, la incorporación de nuevas funcionalidades y la creación de un sistema de diseño escalable.",
        en: "Product design for a tourism marketplace with differentiated experiences for travelers, owners, and the internal team. My work covers the evolution of the main journeys, the addition of new features, and the creation of a scalable design system.",
      },
      spacing: "start",
    },
    {
      type: "section",
      navId: "confidencialidad",
      body: {
        es: "Por motivos de confidencialidad, no puedo mostrar las interfaces ni determinados datos del producto. Este caso resume las principales áreas en las que he trabajado, los flujos diseñados y mi contribución a la evolución del marketplace.",
        en: "For confidentiality reasons, I cannot show the product interfaces or certain product data. This case summarizes the main areas I worked on, the flows designed, and my contribution to the evolution of the marketplace.",
      },
      surface: "callout",
      spacing: "tight",
    },
    {
      type: "section",
      navId: "marketplace-publico",
      heading: {
        es: "Marketplace público para viajeros",
        en: "Public marketplace for travelers",
      },
      list: {
        es: [
          "Rediseño end-to-end de la experiencia pública del marketplace, incluyendo buscador, resultados, filtros, visualización en mapa, ficha de alojamiento y proceso de pre-reserva.",
          "Revisión de la arquitectura de información y de la jerarquía de contenidos para simplificar la búsqueda, comparación y selección de alojamientos.",
          "Diseño del flujo de reserva online: selección de fechas, consulta de disponibilidad, desglose de precios, pago anticipado, confirmación y estados alternativos.",
          "Creación de landings promocionales para destinos de España, combinando objetivos de descubrimiento, posicionamiento orgánico y conversión.",
        ],
        en: [
          "End-to-end redesign of the public marketplace experience, including search, results, filters, map view, accommodation detail page, and pre-booking flow.",
          "Review of the information architecture and content hierarchy to simplify searching, comparing, and selecting accommodations.",
          "Design of the online booking flow: date selection, availability check, price breakdown, advance payment, confirmation, and alternative states.",
          "Creation of promotional landings for destinations across Spain, combining discovery, organic positioning, and conversion goals.",
        ],
      },
      spacing: "lead",
    },
    {
      type: "section",
      navId: "sistema-de-diseno",
      heading: {
        es: "Sistema de diseño",
        en: "Design system",
      },
      list: {
        es: [
          "Creación y evolución de un sistema de diseño desde cero para unificar la experiencia del marketplace y sus áreas privadas.",
          "Definición de foundations: color, tipografía, espaciado, grid, bordes, radios, sombras y jerarquías visuales.",
          "Diseño de componentes reutilizables y sus variantes, estados y comportamientos responsive.",
          "Creación de patrones para fichas de alojamiento, tarjetas, filtros, formularios, tablas, alertas, acordeones, chips y procesos por pasos.",
          "Organización de librerías en Figma para mejorar la consistencia, acelerar el diseño de nuevas funcionalidades y facilitar la colaboración con desarrollo.",
        ],
        en: [
          "Creation and evolution of a design system from scratch to unify the marketplace experience and its private areas.",
          "Definition of foundations: color, typography, spacing, grid, borders, radii, shadows, and visual hierarchies.",
          "Design of reusable components and their variants, states, and responsive behaviors.",
          "Creation of patterns for accommodation detail pages, cards, filters, forms, tables, alerts, accordions, chips, and step-by-step processes.",
          "Organization of Figma libraries to improve consistency, speed up the design of new features, and support collaboration with engineering.",
        ],
      },
      spacing: "default",
    },
    {
      type: "section",
      navId: "area-viajeros",
      heading: {
        es: "Área privada de viajeros",
        en: "Traveler private area",
      },
      list: {
        es: [
          "Diseño del sistema de guardado de alojamientos y gestión de favoritos.",
          "Mejora de los flujos de acceso e identificación del usuario.",
          "Definición de estados vacíos, errores, confirmaciones y mensajes de sistema para acompañar al usuario durante sus gestiones.",
        ],
        en: [
          "Design of the accommodation save system and favorites management.",
          "Improvement of access and user identification flows.",
          "Definition of empty states, errors, confirmations, and system messages to guide users through their tasks.",
        ],
      },
      spacing: "lead",
    },
    {
      type: "section",
      navId: "area-propietarios",
      heading: {
        es: "Área privada de propietarios",
        en: "Owner private area",
      },
      list: {
        es: [
          "Diseño de nuevas funcionalidades para la gestión de alojamientos, reservas y contenido publicado.",
          "Creación del flujo de gestión de premios y distintivos asociados a cada alojamiento.",
          "Mejora del sistema de calendarios para facilitar la consulta y actualización de disponibilidad, temporadas y reservas.",
          "Análisis de la arquitectura existente y propuesta de simplificación de la navegación del área privada.",
          "Propuesta de un nuevo dashboard orientado a priorizar información relevante, acciones pendientes y accesos frecuentes.",
        ],
        en: [
          "Design of new features for managing accommodations, bookings, and published content.",
          "Creation of the awards and badges management flow associated with each accommodation.",
          "Improvement of the calendar system to make it easier to check and update availability, seasons, and bookings.",
          "Analysis of the existing architecture and a proposal to simplify private-area navigation.",
          "Proposal for a new dashboard focused on prioritizing relevant information, pending actions, and frequent shortcuts.",
        ],
      },
      spacing: "default",
    },
    {
      type: "section",
      navId: "herramientas-internas",
      heading: {
        es: "Herramientas para el equipo interno",
        en: "Internal team tools",
      },
      list: {
        es: [
          "Creación de una nueva pantalla para la carga, organización y actualización de imágenes de las galerías de las guías de viaje.",
          "Definición de estados de carga, éxito, error y contenido vacío para mejorar la fiabilidad de los procesos internos.",
        ],
        en: [
          "Creation of a new screen for uploading, organizing, and updating images in travel guide galleries.",
          "Definition of loading, success, error, and empty states to improve the reliability of internal processes.",
        ],
      },
      spacing: "lead",
    },
    {
      type: "section",
      navId: "trabajo-transversal",
      heading: {
        es: "Trabajo transversal",
        en: "Cross-cutting work",
      },
      list: {
        es: [
          "Traducción de necesidades de negocio y requisitos técnicos en flujos, wireframes y prototipos de alta fidelidad.",
          "Análisis de recorridos, puntos de fricción y oportunidades de mejora en procesos de búsqueda y reserva.",
          "Aplicación de criterios de CRO para reforzar la claridad, la confianza y la conversión.",
          "Colaboración continua con negocio y desarrollo durante la definición, implementación y revisión de las funcionalidades.",
          "Uso de datos de analítica y comportamiento para identificar problemas y apoyar decisiones de diseño.",
          "Validación de propuestas mediante revisiones internas y pruebas de usabilidad.",
        ],
        en: [
          "Translation of business needs and technical requirements into flows, wireframes, and high-fidelity prototypes.",
          "Analysis of journeys, friction points, and improvement opportunities in search and booking processes.",
          "Application of CRO criteria to reinforce clarity, trust, and conversion.",
          "Ongoing collaboration with business and engineering during the definition, implementation, and review of features.",
          "Use of analytics and behavioral data to identify problems and support design decisions.",
          "Validation of proposals through internal reviews and usability testing.",
        ],
      },
      spacing: "loose",
    },
  ],
};
