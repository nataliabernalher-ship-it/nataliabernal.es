import { isLocale, type Locale } from "@/i18n/config";

export type LocalizedString = Record<Locale, string>;

export type CaseStudySection = {
  id: string;
  emphasis: LocalizedString;
  body: LocalizedString;
};

export type CaseStudy = {
  slug: string;
  year: string;
  tag: LocalizedString;
  cover: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedString;
  };
  role: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  sections: CaseStudySection[];
};

const sharedSections: CaseStudySection[] = [
  {
    id: "overview",
    emphasis: { es: "Contexto", en: "Overview" },
    body: {
      es: "Describe el producto, el problema y el alcance del trabajo.",
      en: "Describe the product, the problem, and the scope of the work.",
    },
  },
  {
    id: "challenge",
    emphasis: { es: "Reto", en: "Challenge" },
    body: {
      es: "Explica las restricciones, las tensiones de negocio y lo que había que resolver.",
      en: "Explain the constraints, business tensions, and what needed to be solved.",
    },
  },
  {
    id: "approach",
    emphasis: { es: "Enfoque", en: "Approach" },
    body: {
      es: "Cuenta cómo se tomaron las decisiones de diseño y qué se exploró por el camino.",
      en: "Share how design decisions were made and what was explored along the way.",
    },
  },
  {
    id: "outcome",
    emphasis: { es: "Resultado", en: "Outcome" },
    body: {
      es: "Cierra con el impacto, los aprendizajes y el estado actual del producto.",
      en: "Close with the impact, learnings, and the current state of the product.",
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "wellness-stay",
    year: "2025",
    tag: {
      es: "[proyecto paralelo de experimentación]",
      en: "[side project for experimentation]",
    },
    cover: {
      src: "/images/case-studies/wellness-stay.png",
      width: 768,
      height: 427,
      alt: {
        es: "Captura de Wellness Stay, marketplace de retiros de salud y bienestar",
        en: "Screenshot of Wellness Stay, a health and wellness retreat marketplace",
      },
    },
    role: {
      es: "Product design",
      en: "Product design",
    },
    title: {
      es: "Wellness Stay",
      en: "Wellness Stay",
    },
    excerpt: {
      es: "Creación del design system e implementación en un IDE para desarrollo automatizado.",
      en: "Creation of the design system and implementation within an IDE for automated development.",
    },
    sections: sharedSections,
  },
  {
    slug: "neety-saas",
    year: "2024",
    tag: {
      es: "[colaboración]",
      en: "[collaboration]",
    },
    cover: {
      src: "/images/case-studies/neety-saas.jpg",
      width: 1500,
      height: 900,
      alt: {
        es: "Captura del dashboard de Neety SaaS",
        en: "Screenshot of the Neety SaaS dashboard",
      },
    },
    role: {
      es: "Product design",
      en: "Product design",
    },
    title: {
      es: "Neety SaaS",
      en: "Neety SaaS",
    },
    excerpt: {
      es: "Rediseño para mejorar la usabilidad y la UX de una herramienta de mensajería comercial automatizada.",
      en: "Redesign to improve the usability and UX of an automated sales messaging tool.",
    },
    sections: sharedSections,
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getLocalizedValue(
  value: LocalizedString,
  locale: Locale,
): string {
  if (isLocale(locale)) {
    return value[locale];
  }

  return value.es;
}
