import { isLocale, type Locale } from "@/i18n/config";
import { neetySaas } from "@/data/studies/neety-saas";
import { noruegaPorTuCuenta } from "@/data/studies/noruega-por-tu-cuenta";

export type LocalizedString = Record<Locale, string>;

export type RichSpan = {
  text: string;
  italic?: boolean;
  bold?: boolean;
};

export type LocalizedRichText = Record<Locale, string | RichSpan[]>;

export type CaseStudyNavItem = {
  id: string;
  label: LocalizedString;
};

export type CaseStudySectionBlock = {
  type: "section";
  navId: string;
  level?: 2 | 3;
  emphasis?: LocalizedString;
  heading: LocalizedString;
  body?: LocalizedRichText;
  list?: Record<Locale, string[]>;
  after?: LocalizedRichText;
  spacing?: "default" | "compact" | "loose" | "tight";
  surface?: "callout";
};

export type CaseStudyImageBlock = {
  type: "image";
  navId: string;
  src: string;
  width: number;
  height: number;
  alt: LocalizedString;
  radius?: number;
};

export type CaseStudyProseBlock = {
  type: "prose";
  navId: string;
  body: LocalizedRichText;
  list?: Record<Locale, string[]>;
  after?: LocalizedRichText;
};

export type CaseStudyQuoteBlock = {
  type: "quote";
  navId: string;
  text: LocalizedString;
};

export type CaseStudyCardItem = {
  stat?: string;
  body: LocalizedString;
};

export type CaseStudyCardsBlock = {
  type: "cards";
  navId: string;
  variant: "cyan" | "orange" | "stat" | "kpi";
  items: CaseStudyCardItem[];
};

export type CaseStudyFeatureBlock = {
  type: "feature";
  navId: string;
  number: string;
  title?: LocalizedString;
  body: LocalizedString;
  layout?: "default" | "phone";
  image?: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedString;
  };
  video?: {
    src: string;
    poster?: string;
    width: number;
    height: number;
  };
};

export type CaseStudyImagePairBlock = {
  type: "image-pair";
  navId: string;
  images: Array<{
    src: string;
    width: number;
    height: number;
    alt: LocalizedString;
  }>;
};

export type CaseStudyBlock =
  | CaseStudySectionBlock
  | CaseStudyImageBlock
  | CaseStudyProseBlock
  | CaseStudyQuoteBlock
  | CaseStudyCardsBlock
  | CaseStudyFeatureBlock
  | CaseStudyImagePairBlock;

export type CaseStudyMetaItem = {
  label: LocalizedString;
  values: string[];
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
  tools: string[];
  meta?: CaseStudyMetaItem[];
  title: LocalizedString;
  pageTitle: LocalizedString;
  excerpt: LocalizedString;
  heroImage?: {
    src: string;
    width: number;
    height: number;
    alt: LocalizedString;
  };
  nav: CaseStudyNavItem[];
  blocks: CaseStudyBlock[];
  showOnHome?: boolean;
};

const img = (name: string) => `/images/case-studies/wellness-stay/${name}`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "wellness-stay",
    year: "2026",
    tag: {
      es: "[proyecto paralelo de experimentación]",
      en: "[side project for experimentation]",
    },
    cover: {
      src: img("hero.png"),
      width: 768,
      height: 427,
      alt: {
        es: "Captura de Wellness Stay, marketplace de retiros de salud y bienestar",
        en: "Screenshot of Wellness Stay, a health and wellness retreat marketplace",
      },
    },
    role: {
      es: "Diseñadora UX/UI",
      en: "UX/UI designer",
    },
    tools: ["Figma", "ChatGPT", "Cursor", "Github", "Storybook"],
    title: {
      es: "Wellness Stay",
      en: "Wellness Stay",
    },
    pageTitle: {
      es: "Sistema de diseño para Wellness Stay",
      en: "Design system for Wellness Stay",
    },
    excerpt: {
      es: "De Figma A Código: Construyendo Un Design System Escalable Para Un Marketplace De Retiros De Bienestar",
      en: "From Figma to Code: Building a Scalable Design System for a Wellness Retreat Marketplace",
    },
    heroImage: {
      src: img("hero.png"),
      width: 768,
      height: 427,
      alt: {
        es: "Home de Wellness Stay con buscador de retiros de bienestar",
        en: "Wellness Stay homepage with a wellness retreat search",
      },
    },
    nav: [
      { id: "contexto", label: { es: "Contexto", en: "Context" } },
      { id: "objetivo", label: { es: "Objetivo", en: "Objective" } },
      { id: "research", label: { es: "Research", en: "Research" } },
      {
        id: "sistema-de-diseno",
        label: { es: "Sistema de diseño", en: "Design system" },
      },
      { id: "documentacion", label: { es: "Documentación", en: "Documentation" } },
      { id: "implementacion", label: { es: "Implementación", en: "Implementation" } },
      { id: "conclusion", label: { es: "Conclusión", en: "Conclusion" } },
    ],
    blocks: [
      {
        type: "section",
        navId: "contexto",
        emphasis: { es: "Contexto", en: "Context" },
        heading: {
          es: "¿Qué es Wellness Stay?",
          en: "What is Wellness Stay?",
        },
        body: {
          es: "Wellness Stay es un proyecto experimental para poner en práctica nuevas herramientas de IA dentro del proceso de creación y diseño de un producto digital. Wellness Stay es un proyecto ficticio que simula una plataforma digital o marketplace de reservas de retiros de bienestar: yoga, mindfulness, detox, etc.",
          en: "Wellness Stay is an experimental project to put new AI tools into practice within the process of creating and designing a digital product. It is a fictional marketplace for booking wellness retreats: yoga, mindfulness, detox, and more.",
        },
      },
      {
        type: "section",
        navId: "objetivo",
        emphasis: { es: "Objetivo", en: "Objective" },
        heading: {
          es: "Nuevas herramientas de IA en los procesos de diseño",
          en: "New AI tools in design processes",
        },
        body: {
          es: "El propósito de este caso de estudio es la creación de un sistema de diseño desde cero — bases de diseño, tokens y componentes — para la construcción automatizada de la interfaz mediante herramientas de IA, así como la creación de la documentación para proporcionar el contexto y los requerimientos necesarios.",
          en: "The purpose of this case study is to create a design system from scratch — foundations, tokens and components — so the interface can be built automatically with AI tools, along with the documentation needed to provide context and requirements.",
        },
        list: {
          es: [
            "Comprender el mercado y analizar los principales flujos y patrones UI",
            "Definir el usuario objetivo",
            "Construir una base visual (foundations) y sistema de diseño escalable (tokens + componentes)",
            "Implementar los assets y documentación para desarrollo",
            "Creación en entorno real con IDE",
            "Subida al repositorio",
            "Creación de Storybook como fuente de la verdad",
          ],
          en: [
            "Understand the market and analyze the main flows and UI patterns",
            "Define the target user",
            "Build a visual foundation and a scalable design system (tokens + components)",
            "Implement the assets and documentation for development",
            "Build in a real environment with an IDE",
            "Push to the repository",
            "Create Storybook as the source of truth",
          ],
        },
        spacing: "default",
      },
      {
        type: "image",
        navId: "objetivo",
        src: img("img-1.png"),
        width: 1024,
        height: 438,
        alt: {
          es: "Captura del proceso y la interfaz de Wellness Stay",
          en: "Screenshot of the Wellness Stay process and interface",
        },
      },
      {
        type: "section",
        navId: "research",
        emphasis: { es: "Benchmark", en: "Benchmark" },
        heading: {
          es: "Investigación del mercado de las plataformas de retiros holísticos",
          en: "Market research on holistic retreat platforms",
        },
        body: {
          es: "Para comenzar, analicé plataformas del sector travel + wellness que existen actualmente en el mercado. Analicé los flujos de la reserva de retiros y los elementos UI comunes. Al mismo tiempo, recogí los distintos estilos visuales de los competidores para escoger un estilo diferenciador.",
          en: "I started by analyzing travel + wellness platforms currently on the market. I studied retreat booking flows and common UI patterns, and gathered competitors’ visual styles in order to choose a distinctive direction.",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "research",
        src: img("img-2.png"),
        width: 768,
        height: 427,
        alt: {
          es: "Análisis visual de competidores en travel y wellness",
          en: "Visual analysis of travel and wellness competitors",
        },
      },
      {
        type: "section",
        navId: "research",
        emphasis: { es: "User persona", en: "User persona" },
        heading: {
          es: "¿Qué perfil tiene el usuario que reserva estos servicios?",
          en: "What is the profile of the person who books these services?",
        },
        body: {
          es: "Pude identificar dos grupos de segmentos de user persona principales que resumí en estos dos perfiles:",
          en: "I identified two main user-persona segments, which I summarized in these two profiles:",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "research",
        src: img("img-3.png"),
        width: 767,
        height: 442,
        alt: {
          es: "Dos user personas del marketplace de retiros",
          en: "Two user personas for the retreat marketplace",
        },
      },
      {
        type: "section",
        navId: "research",
        emphasis: { es: "Dirección visual", en: "Visual direction" },
        heading: { es: "Moodboard", en: "Moodboard" },
        body: {
          es: "Teniendo en cuenta el perfil de usuario, el estilo de los competidores y el tipo de producto, desarrollé un moodboard para definir la dirección visual:",
          en: "Taking the user profile, competitor styles and product type into account, I developed a moodboard to define the visual direction:",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "research",
        src: img("img-4.png"),
        width: 768,
        height: 427,
        alt: {
          es: "Moodboard de la dirección visual de Wellness Stay",
          en: "Moodboard for the Wellness Stay visual direction",
        },
      },
      {
        type: "section",
        navId: "sistema-de-diseno",
        emphasis: { es: "Sistema de diseño", en: "Design system" },
        heading: {
          es: "Creación de las bases de diseño",
          en: "Creating the design foundations",
        },
        body: {
          es: [
            { text: "Comencé estableciendo las " },
            { text: "foundations", italic: true },
            {
              text: ", los elementos visuales fundamentales de la interfaz: el color, la tipografía, los iconos, las grillas, los espaciados (márgenes y paddings), radios de esquina y grosor de los bordes.",
            },
          ],
          en: [
            { text: "I started by establishing the " },
            { text: "foundations", italic: true },
            {
              text: " — the fundamental visual elements of the interface: color, typography, icons, grids, spacing (margins and paddings), corner radii and border widths.",
            },
          ],
        },
        spacing: "loose",
      },
      {
        type: "image",
        navId: "sistema-de-diseno",
        src: img("img-5.png"),
        width: 910,
        height: 555,
        alt: {
          es: "Foundations del sistema de diseño: color, tipografía y espaciado",
          en: "Design-system foundations: color, typography and spacing",
        },
      },
      {
        type: "section",
        navId: "sistema-de-diseno",
        heading: {
          es: "Arquitectura de tokens",
          en: "Token architecture",
        },
        body: {
          es: "Traduje las foundations a una arquitectura de tokens: color, tipografía, espaciado, radios de esquina y grosor de bordes. Nombrar cada decisión visual permite reutilizarla de forma consistente en Figma y en código.",
          en: "I translated the foundations into a token architecture: color, typography, spacing, corner radii and border widths. Naming every visual decision makes it reusable and consistent in both Figma and code.",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "sistema-de-diseno",
        src: img("img-6.png"),
        width: 871,
        height: 544,
        alt: {
          es: "Arquitectura de tokens del sistema de diseño",
          en: "Design-system token architecture",
        },
      },
      {
        type: "section",
        navId: "sistema-de-diseno",
        heading: {
          es: "Arquitectura de componentes",
          en: "Component architecture",
        },
        body: {
          es: "Con el objetivo de construir una interfaz única y a medida, diseñé los componentes básicos que contiene todo marketplace de alojamientos — buscador, cards, botones y navegación — y los integré en el editor de código mediante el MCP de Figma. Previamente creé los specs de los elementos para proporcionar la máxima información al IDE.",
          en: "To build a unique, tailored interface, I designed the core components of an accommodation marketplace — search, cards, buttons and navigation — and brought them into the code editor through the Figma MCP. I first wrote specs for each element so the IDE had as much context as possible.",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "sistema-de-diseno",
        src: img("img-7.png"),
        width: 1024,
        height: 686,
        alt: {
          es: "Arquitectura de componentes del marketplace",
          en: "Marketplace component architecture",
        },
      },
      {
        type: "section",
        navId: "documentacion",
        emphasis: { es: "Documentación", en: "Documentation" },
        heading: {
          es: "Documentación técnica",
          en: "Technical documentation",
        },
        body: {
          es: "El siguiente paso fue generar la documentación en formato README.md para incluir en el proyecto. En este documento se explica en qué consiste el proyecto.",
          en: "The next step was to generate README.md documentation for the project, explaining what it consists of.",
        },
        spacing: "loose",
      },
      {
        type: "image",
        navId: "documentacion",
        src: img("img-8.png"),
        width: 868,
        height: 647,
        alt: {
          es: "Documentación README del proyecto Wellness Stay",
          en: "README documentation for the Wellness Stay project",
        },
        radius: 20,
      },
      {
        type: "section",
        navId: "implementacion",
        emphasis: { es: "Implementación", en: "Implementation" },
        heading: {
          es: "De diseño a código",
          en: "From design to code",
        },
        body: {
          es: [
            {
              text: "Una vez creado el archivo del proyecto, integré lo anterior para validar el sistema de diseño en un entorno real. Decidí implementarlo utilizando ",
            },
            { text: "Cursor", bold: true },
            {
              text: " como IDE. No utilicé frameworks, sino que opté por una ",
            },
            {
              text: "implementación en HTML, CSS y JavaScript con los elementos previamente creados.",
              bold: true,
            },
          ],
          en: [
            {
              text: "Once the project file was set up, I integrated the work above to validate the design system in a real environment. I implemented it using ",
            },
            { text: "Cursor", bold: true },
            {
              text: " as the IDE. I did not use frameworks; instead I chose an ",
            },
            {
              text: "HTML, CSS and JavaScript implementation with the elements created beforehand.",
              bold: true,
            },
          ],
        },
        spacing: "loose",
      },
      {
        type: "image",
        navId: "implementacion",
        src: img("img-9.png"),
        width: 809,
        height: 512,
        alt: {
          es: "Implementación del sistema de diseño en Cursor",
          en: "Design-system implementation in Cursor",
        },
        radius: 20,
      },
      {
        type: "prose",
        navId: "implementacion",
        body: {
          es: "Una vez generado el contexto para el IDE: bases del estilo y documentación, generé los prompts específicos para generar las secciones de la home:",
          en: "Once the IDE had context — style foundations and documentation — I wrote specific prompts to generate the homepage sections:",
        },
        list: {
          es: [
            "hero section (buscador y propuesta de valor)",
            "destacados",
            "categorías principales",
            "footer",
          ],
          en: [
            "hero section (search and value proposition)",
            "featured",
            "main categories",
            "footer",
          ],
        },
        after: {
          es: "Además de esto, generé el Storybook como fuente de la verdad, donde almacenar todos los elementos de la interfaz. En un futuro, podrá ir siendo actualizado según requerimientos nuevos del producto.",
          en: "I also generated Storybook as the source of truth for every interface element. It can be updated later as new product requirements appear.",
        },
      },
      {
        type: "image",
        navId: "implementacion",
        src: img("img-10.png"),
        width: 768,
        height: 374,
        alt: {
          es: "Storybook con los elementos de la interfaz de Wellness Stay",
          en: "Storybook with Wellness Stay interface elements",
        },
      },
      {
        type: "section",
        navId: "conclusion",
        emphasis: { es: "Conclusión", en: "Conclusion" },
        heading: {
          es: "Aprendizajes extraídos del proyecto.",
          en: "Learnings from the project.",
        },
        body: {
          es: "Este proyecto me permitió practicar la creación de sistemas de diseño y su implementación en IA que permitan generar la interfaz y todos sus elementos de manera sistemática, consistente y eficaz.\n\nDesde esta perspectiva estratégica y estructurada, utilizando este flujo de trabajo, es posible escalar un producto de forma sistemática y consistente.",
          en: "This project let me practice creating design systems and implementing them with AI so the interface and all of its elements can be generated in a systematic, consistent and effective way.\n\nFrom this strategic, structured perspective, this workflow makes it possible to scale a product systematically and consistently.",
        },
        spacing: "loose",
      },
    ],
  },
  neetySaas,
  noruegaPorTuCuenta,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getHomeCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.showOnHome !== false);
}

export function getLocalizedValue<T>(
  value: Record<Locale, T>,
  locale: Locale,
): T {
  if (isLocale(locale)) {
    return value[locale];
  }

  return value.es;
}

export function groupCaseStudyBlocks(blocks: CaseStudyBlock[]) {
  const groups: { id: string; blocks: CaseStudyBlock[] }[] = [];

  for (const block of blocks) {
    const current = groups.at(-1);

    if (current?.id === block.navId) {
      current.blocks.push(block);
    } else {
      groups.push({ id: block.navId, blocks: [block] });
    }
  }

  return groups;
}
