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
      width: 900,
      height: 600,
      alt: {
        es: "Casa rural con wordmark de TusCasasRurales.com",
        en: "Rural house with TusCasasRurales.com wordmark",
      },
      brand: {
        background: "#073801",
        imageSrc: "/images/lab/tuscasasrurales-cover.jpg",
        logoSrc: "/images/lab/tuscasasrurales-logo.svg",
        logoWidth: 460,
        logoHeight: 37,
        effect: "green-gradient",
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
      src: "/images/case-studies/wellness-stay/portada.png",
      width: 900,
      height: 600,
      alt: {
        es: "Portada de Wellness Stay: piscina infinita, wordmark y buscador",
        en: "Wellness Stay cover: infinity pool, wordmark and destination search",
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
      src: "/images/home/noruega-cover.jpg",
      width: 900,
      height: 570,
      alt: {
        es: "Mockup de noruegaportucuenta.com sobre paisaje nórdico",
        en: "noruegaportucuenta.com mockup over a Nordic landscape",
      },
    },
  },
  {
    slug: "ux-research-2026",
    href: null,
    tags: [
      {
        es: "[case study in progress]",
        en: "[case study in progress]",
      },
    ],
    title: { es: "UX RESEARCH", en: "UX RESEARCH" },
    excerpt: {
      es: "How Travelers Discover, Plan and Book Trips in 2026",
      en: "How Travelers Discover, Plan and Book Trips in 2026",
    },
    cover: {
      width: 900,
      height: 571,
      alt: {
        es: "Case study en progreso sobre investigación UX en viajes 2026",
        en: "Case study in progress on travel UX research 2026",
      },
      brand: {
        background: "#012d3f",
        overlay: {
          title: {
            es: "How Travelers Discover, Plan and Book Trips in 2026",
            en: "How Travelers Discover, Plan and Book Trips in 2026",
          },
          subtitle: {
            es: "case study in progress",
            en: "case study in progress",
          },
        },
      },
    },
  },
];
