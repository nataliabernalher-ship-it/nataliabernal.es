import { caseStudies, type LocalizedString } from "@/data/case-studies";
import type { ProjectCardCover } from "@/components/ProjectCard/ProjectCard";

export type LabProject = {
  slug: string;
  tags: LocalizedString[];
  title: LocalizedString;
  excerpt: LocalizedString;
  cover: ProjectCardCover;
  caseStudySlug?: string;
};

function fromCaseStudy(
  slug: string,
  overrides: Partial<Pick<LabProject, "tags" | "excerpt" | "title" | "cover">>,
): LabProject {
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    throw new Error(`Unknown case study slug: ${slug}`);
  }

  return {
    slug: study.slug,
    tags: overrides.tags ?? study.tags,
    title: overrides.title ?? study.title,
    excerpt: overrides.excerpt ?? study.excerpt,
    cover: overrides.cover ?? study.cover,
    caseStudySlug: study.slug,
  };
}

export const labProjects: LabProject[] = [
  fromCaseStudy("wellness-stay", {
    tags: [
      {
        es: "[proyecto experimental]",
        en: "[side project for experimentation]",
      },
    ],
    excerpt: {
      es: "Creación del design system e implementación en un IDE para desarrollo automatizado.",
      en: "Creation of the design system and implementation within an IDE for automated development.",
    },
    cover: {
      src: "/images/case-studies/wellness-stay/portadawellness.jpg",
      width: 1080,
      height: 674,
      alt: {
        es: "Portada de Wellness Stay: interfaz del marketplace con buscador de retiros sobre el mar",
        en: "Wellness Stay cover: marketplace interface with retreat search over the sea",
      },
    },
  }),
  fromCaseStudy("neety-saas", {
    tags: [{ es: "[colaboración]", en: "[collaboration]" }],
    excerpt: {
      es: "Rediseño para mejorar la usabilidad y la UX de una herramienta de mensajería de ventas automatizada.",
      en: "Redesign to improve the usability and UX of an automated sales messaging tool.",
    },
  }),
  fromCaseStudy("noruega-por-tu-cuenta", {
    tags: [{ es: "[diseño UX]", en: "[UX design]" }],
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
  }),
  {
    slug: "pentasys",
    tags: [{ es: "[diseño web]", en: "[web design]" }],
    title: { es: "Pentasys", en: "Pentasys" },
    excerpt: {
      es: "Diseñé más de 30 webs corporativas de distintos sectores, además de soluciones digitales a medida como CRMs y herramientas de gestión.",
      en: "Designed 30+ corporate websites across different industries, as well as custom digital solutions such as CRMs and management tools.",
    },
    cover: {
      width: 604,
      height: 389,
      alt: {
        es: "Logo de Pentaweb sobre fondo azul",
        en: "Pentaweb logo on blue background",
      },
      brand: {
        background: "#011555",
        logoSrc: "/images/lab/pentaweb-logo.png",
        logoWidth: 193,
        logoHeight: 43,
        effect: "blue-gradient",
      },
    },
  },
  {
    slug: "tuscasasrurales",
    tags: [{ es: "[diseño marketplace]", en: "[marketplace design]" }],
    title: { es: "TusCasasRurales.com", en: "TusCasasRurales.com" },
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
];
