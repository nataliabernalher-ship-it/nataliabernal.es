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
  layout?: "row" | "stack";
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
  tags: LocalizedString[];
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
    tags: [
      { es: "[marketplace de viajes]", en: "[travel marketplace]" },
      { es: "[sistema de diseño]", en: "[design system]" },
    ],
    cover: {
      src: img("portada.png"),
      width: 768,
      height: 500,
      alt: {
        es: "Portada de Wellness Stay: piscina infinita, wordmark y buscador de destinos",
        en: "Wellness Stay cover: infinity pool, wordmark and destination search",
      },
    },
    role: {
      es: "Product Designer",
      en: "Product Designer",
    },
    tools: ["Figma", "ChatGPT", "Cursor", "Github", "Storybook"],
    title: {
      es: "Wellness Stay",
      en: "Wellness Stay",
    },
    pageTitle: {
      es: "De Figma a Código: construyendo un Design System escalable",
      en: "From Figma to Code: building a scalable Design System",
    },
    excerpt: {
      es: "De Figma a Código: construyendo un Design System escalable",
      en: "From Figma to Code: building a scalable Design System",
    },
    heroImage: {
      src: img("portada.png"),
      width: 768,
      height: 500,
      alt: {
        es: "Portada de Wellness Stay: piscina infinita, wordmark y buscador de destinos",
        en: "Wellness Stay cover: infinity pool, wordmark and destination search",
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
          es: "Proyecto de experimentación",
          en: "Experimental project",
        },
        body: {
          es: "Wellness Stay es un marketplace de reservas de retiros de bienestar que desarrollé como proyecto experimental para explorar cómo construir un producto digital escalable desde Figma hasta código.\n\nDiseñé desde cero sus foundations, arquitectura de tokens y componentes, y definí un flujo de trabajo Design-to-Code apoyado en IA para mantener la consistencia entre diseño, documentación e implementación.",
          en: "Wellness Stay is a wellness retreat booking marketplace that I developed as an experimental project to explore how to build a scalable digital product from Figma to code.\n\nI designed its foundations, token architecture, and components from scratch, and defined an AI-supported Design-to-Code workflow to keep design, documentation, and implementation consistent.",
        },
      },
      {
        type: "section",
        navId: "objetivo",
        emphasis: { es: "Objetivo", en: "Objective" },
        heading: {
          es: "Preparar un Design System IA-ready desde cero",
          en: "Prepare an AI-ready Design System from scratch",
        },
        body: {
          es: "El propósito de este caso de estudio es la creación de un sistema de diseño desde cero — bases de diseño, tokens y componentes — para la construcción automatizada de la interfaz mediante herramientas de IA, así como la creación de la documentación para proporcionar el contexto y los requerimientos necesarios.\n\nSe busca reducir la distancia entre Figma y el código y facilitar la evolución — en rapidez y consistencia — del producto a medida que surjan nuevas necesidades.",
          en: "The purpose of this case study is to create a design system from scratch — foundations, tokens and components — so the interface can be built automatically with AI tools, along with the documentation needed to provide context and requirements.\n\nThe aim is to shorten the gap between Figma and code and make it easier for the product to evolve — in speed and consistency — as new needs arise.",
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
          es: "Al tratarse de un proyecto experimental sin acceso a usuarios reales, no realicé entrevistas en esta fase. A partir del análisis del mercado y de las hipótesis iniciales sobre los potenciales usuarios, definí dos proto-personas con diferentes necesidades y motivaciones para orientar las primeras decisiones de diseño.\n\nEstas proto-personas funcionan como hipótesis de partida que deberían validarse posteriormente mediante investigación con usuarios reales.",
          en: "Because this was an experimental project without access to real users, I did not run interviews at this stage. From market analysis and initial hypotheses about potential users, I defined two proto-personas with different needs and motivations to guide the first design decisions.\n\nThese proto-personas are starting hypotheses that should later be validated through research with real users.",
        },
        spacing: "compact",
      },
      {
        type: "image-pair",
        navId: "research",
        layout: "stack",
        images: [
          {
            src: img("persona-buscadora-de-equilibrio.png"),
            width: 1536,
            height: 1024,
            alt: {
              es: "Proto-persona Buscadora de equilibrio",
              en: "Proto-persona Balance seeker",
            },
          },
          {
            src: img("persona-ejecutivo-en-pausa.png"),
            width: 1536,
            height: 1024,
            alt: {
              es: "Proto-persona Ejecutivo en pausa",
              en: "Proto-persona Executive on pause",
            },
          },
        ],
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
          es: "Creación de las Bases de diseño",
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
          es: "La importancia de proporcionar contexto y reglas",
          en: "The importance of providing context and rules",
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
          es: "Además de esto, generé el storybook como fuente de la verdad, donde almacenar todos los elementos de la interfaz. En un futuro, podrá ir siendo actualizado según requerimientos nuevos del producto.",
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
          es: "Este proyecto me permitió abordar el Design System no como una colección de componentes, sino como una infraestructura de producto que conecta diseño, desarrollo y escalabilidad.\n\nLa IA actuó como acelerador del proceso Design-to-Code, pero también reforzó un aprendizaje clave: la velocidad solo aporta valor cuando existe una arquitectura definida, reglas claras y criterio de diseño detrás. En un contexto real, el siguiente paso sería validar las hipótesis planteadas con usuarios y evolucionar el sistema a partir de las necesidades reales del producto.",
          en: "This project let me approach the Design System not as a collection of components, but as product infrastructure that connects design, development and scalability.\n\nAI sped up the Design-to-Code process, but it also reinforced a key lesson: speed only adds value when there is a defined architecture, clear rules and design judgment behind it. In a real context, the next step would be to validate the hypotheses with users and evolve the system from the product’s actual needs.",
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
