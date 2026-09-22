import type { ProjectCardStudy } from "@/components/ProjectCard/ProjectCard";

export type HomeFeaturedProject = ProjectCardStudy & {
  href?: string | null;
};

export const homeFeaturedProjects: HomeFeaturedProject[] = [
  {
    slug: "tuscasasrurales",
    href: null,
    tags: [
      { es: "[proyectos bajo NDA]", en: "[projects under NDA]" },
    ],
    title: {
      es: "TUSCASASRURALES.COM",
      en: "TUSCASASRURALES.COM",
    },
    excerpt: {
      es: "Lideré el rediseño de la interfaz y construí su Design System y nuevas funcionalidades como la reserva online.",
      en: "Led the interface redesign and built its Design System and new features as online reservation",
    },
    cover: {
      src: "/images/home/tuscasasrurales-cover.png",
      width: 900,
      height: 570,
      alt: {
        es: "Portada de TusCasasRurales.com: casa rural y buscador de alojamientos",
        en: "TusCasasRurales.com cover: rural house and accommodation search",
      },
    },
  },
  {
    slug: "wellness-stay",
    tags: [
      {
        es: "[design system IA ready]",
        en: "[design system IA ready]",
      },
    ],
    title: { es: "WELLNESS STAY", en: "WELLNESS STAY" },
    excerpt: {
      es: "De Figma a Código: construyendo un Design System escalable",
      en: "From Figma to Code: building a scalable Design System",
    },
    cover: {
      src: "/images/home/wellness-stay-cover.png",
      width: 900,
      height: 570,
      alt: {
        es: "Portada de Wellness Stay: piscina infinita, wordmark y buscador",
        en: "Wellness Stay cover: infinity pool, wordmark and destination search",
      },
    },
  },
  {
    slug: "ux-research-2026",
    href: "https://viajes-2026-natalia.nataliabernalher.chatgpt.site/",
    tags: [
      {
        es: "[case study in progress]",
        en: "[case study in progress]",
      },
    ],
    title: { es: "UX RESEARCH", en: "UX RESEARCH" },
    excerpt: {
      es: "Caso de investigación: cómo descubren, planifican y reservan viajes los viajeros en 2026",
      en: "Case research: How Travelers Discover, Plan and Book Trips in 2026",
    },
    cover: {
      src: "/images/home/como-viajamos-poster.png",
      width: 900,
      height: 571,
      alt: {
        es: "Estudio Cómo viajamos: cómo organizamos y reservamos nuestros viajes en 2026",
        en: "Cómo viajamos study: how we plan and book trips in 2026",
      },
      video: {
        src: "/videos/home/como-viajamos.mp4",
        poster: "/images/home/como-viajamos-frame.png",
        overlay: "panel",
      },
    },
  },
  {
    slug: "noruega-por-tu-cuenta",
    tags: [{ es: "[UX design]", en: "[UX design]" }],
    title: {
      es: "noruegaportucuenta.com",
      en: "noruegaportucuenta.com",
    },
    excerpt: {
      es: "Uso de métricas UX para mejorar la interacción en una plataforma de contenidos de viajes",
      en: "Using UX Metrics to Improve Engagement on a Travel Content Platform",
    },
    cover: {
      width: 900,
      height: 571,
      alt: {
        es: "Mockups móviles de noruegaportucuenta.com sobre fondo verde",
        en: "Mobile mockups of noruegaportucuenta.com on a green background",
      },
      devices: {
        background: "#357171",
        left: {
          kind: "image",
          src: "/images/home/noruega-phone-left.png",
          width: 238,
          height: 471,
        },
        right: {
          kind: "video",
          src: "/videos/home/noruega-routes.mp4",
          poster: "/images/home/noruega-routes-poster.png",
          width: 222,
          height: 471,
        },
      },
    },
  },
];
