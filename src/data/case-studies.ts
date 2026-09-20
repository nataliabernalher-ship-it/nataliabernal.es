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
  heading: LocalizedRichText;
  body?: LocalizedRichText;
  list?: Record<Locale, string[]>;
  after?: LocalizedRichText;
  spacing?: "default" | "compact" | "loose" | "tight" | "start";
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

export type CaseStudyLinkBlock = {
  type: "link";
  navId: string;
  href: string;
  label: LocalizedString;
  spacing?: "default" | "compact";
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
  layout?: "row" | "stack" | "carousel";
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
  | CaseStudyLinkBlock
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
      src: img("hero.png"),
      width: 1080,
      height: 674,
      alt: {
        es: "Portada de Wellness Stay: piscina infinita frente al mar, wordmark y buscador de destinos",
        en: "Wellness Stay cover: infinity pool facing the sea, wordmark and destination search",
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
        spacing: "start",
      },
      {
        type: "section",
        navId: "objetivo",
        emphasis: { es: "Objetivo", en: "Objective" },
        heading: {
          es: [
            { text: "Generar un Design System" },
            { text: " IA-ready ", italic: true },
            { text: "desde cero" },
          ],
          en: [
            { text: "Generate an" },
            { text: " AI-ready ", italic: true },
            { text: "Design System from scratch" },
          ],
        },
        body: {
          es: "El propósito de este caso de estudio es la creación de un sistema de diseño desde cero - bases de diseño, tokens y componentes - para la construcción automatizada de la interfaz mediante herramientas de IA, así como la creación de la documentación para proporcionar el contexto y los requerimientos necesarios.\n\nSe busca reducir la distancia entre Figma y el código y facilitar la evolución - en rapidez y consistecia - del producto a medida que surjan nuevas necesidad.",
          en: "The purpose of this case study is to create a design system from scratch - design foundations, tokens and components - so the interface can be built automatically with AI tools, along with the documentation needed to provide context and requirements.\n\nThe aim is to shorten the gap between Figma and code and make it easier for the product to evolve - in speed and consistency - as new needs arise.",
        },
        spacing: "default",
      },
      {
        type: "image",
        navId: "objetivo",
        src: img("ws-1.jpg"),
        width: 768,
        height: 348,
        alt: {
          es: "Flujo de creación de un Design System con IA: investigar, diseñar, implementar, versionar y documentar",
          en: "AI-assisted Design System workflow: research, design, implement, version and document",
        },
        radius: 8,
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
        src: img("ws-2.jpg"),
        width: 763,
        height: 469,
        alt: {
          es: "Benchmark visual de bookretreats.com, wellbeingescapes.com, retreat.guru y vacayouwellnesssolutions.com",
          en: "Visual benchmark of bookretreats.com, wellbeingescapes.com, retreat.guru and vacayouwellnesssolutions.com",
        },
        radius: 8,
      },
      {
        type: "section",
        navId: "research",
        emphasis: { es: "Definición", en: "Definition" },
        heading: {
          es: "Task flow del usuario",
          en: "User task flow",
        },
        body: {
          es: "Tras la investigación de marketplaces del mismo nicho, realicé un task flow para conocer las pantallas principales por las que pasa el usuario desde que llega a la plataforma hasta que hace la reserva.",
          en: "After researching marketplaces in the same niche, I mapped a task flow to identify the main screens a user goes through from arriving on the platform to completing a booking.",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "research",
        src: img("ws-3.jpg"),
        width: 768,
        height: 204,
        alt: {
          es: "Task flow del usuario: Home, Búsqueda, Resultados, Ficha del retiro y Reservar",
          en: "User task flow: Home, Search, Results, Retreat detail and Book",
        },
        radius: 8,
      },
      {
        type: "section",
        navId: "research",
        emphasis: { es: "Dirección visual", en: "Visual direction" },
        heading: { es: "Referencias visuales", en: "Visual references" },
        body: {
          es: "Teniendo en cuenta el perfil de usuario, el estilo de los competidores y el tipo de producto, desarrolló un moodboard para definir la dirección visual:",
          en: "Taking the user profile, competitor styles and product type into account, I developed a moodboard to define the visual direction:",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "research",
        src: img("ws-4.jpg"),
        width: 768,
        height: 427,
        alt: {
          es: "Moodboard con referencias visuales de viajes, wellness, calendario y cards",
          en: "Moodboard with visual references for travel, wellness, calendar and cards",
        },
        radius: 8,
      },
      {
        type: "section",
        navId: "sistema-de-diseno",
        emphasis: { es: "Sistema de diseño", en: "Design system" },
        heading: {
          es: [
            { text: "Creación de las " },
            { text: "foundations", italic: true },
            { text: " diseño en Figma" },
          ],
          en: [
            { text: "Creating the design " },
            { text: "foundations", italic: true },
            { text: " in Figma" },
          ],
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
              text: ", the fundamental visual elements of the interface: color, typography, icons, grids, spacing (margins and paddings), corner radii and border widths.",
            },
          ],
        },
        spacing: "loose",
      },
      {
        type: "image",
        navId: "sistema-de-diseno",
        src: img("ws-5.jpg"),
        width: 768,
        height: 426,
        alt: {
          es: "Foundations de diseño en Figma: color, tipografía, espaciado y sombras",
          en: "Design foundations in Figma: color, typography, spacing and shadows",
        },
        radius: 8,
      },
      {
        type: "section",
        navId: "sistema-de-diseno",
        heading: {
          es: "Diseño a medida de componentes en Figma",
          en: "Custom component design in Figma",
        },
        body: {
          es: "Con el objetivo de construir una interfaz única y a medida, diseñé los componentes básicos que contienen todo marketplace de alojamientos - buscador, cards, botones y navegación - y los integré en el editor de código median el MPC de Figma. Previamente creé los specs de los elementos para proporcionar la máxima información al IDE.",
          en: "To build a unique, tailored interface, I designed the core components of an accommodation marketplace - search, cards, buttons and navigation - and brought them into the code editor through the Figma MCP. I first wrote specs for each element so the IDE had as much context as possible.",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "sistema-de-diseno",
        src: img("ws-6.jpg"),
        width: 768,
        height: 426,
        alt: {
          es: "Collage de componentes a medida: buscador, card, newsletter, calendario y botones",
          en: "Custom component collage: search, card, newsletter, calendar and buttons",
        },
        radius: 8,
      },
      {
        type: "section",
        navId: "sistema-de-diseno",
        heading: {
          es: "Creación de varialbes de estilo en Figma",
          en: "Creating style variables in Figma",
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
              text: ", the fundamental visual elements of the interface: color, typography, icons, grids, spacing (margins and paddings), corner radii and border widths.",
            },
          ],
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "sistema-de-diseno",
        src: img("ws-7.jpg"),
        width: 768,
        height: 333,
        alt: {
          es: "Arquitectura de tokens: primitives, semantic y components",
          en: "Token architecture: primitives, semantic and components",
        },
        radius: 8,
      },
      {
        type: "section",
        navId: "documentacion",
        emphasis: { es: "Implementación en IDE", en: "IDE implementation" },
        heading: {
          es: "Documentación técnica para la IA y para el equipo",
          en: "Technical documentation for AI and the team",
        },
        body: {
          es: "Para que una IA pueda generar interfaces coherentes, no basta con proporcionarle acceso a los componentes de Figma. También necesita comprender el contexto del sistema, sus reglas de uso y sus limitaciones. Esta indicaciones la realicé documentos AGENTS.md y SKILLS.md\n\nEl siguiente pasó fue generar la documentación formato README.md para incluir en el proyecto. En este documento se explica en qué consiste el proyecto.",
          en: "For an AI to generate coherent interfaces, access to Figma components is not enough. It also needs to understand the system context, usage rules and constraints. I captured those instructions in AGENTS.md and SKILLS.md.\n\nThe next step was to generate README.md documentation for the project, explaining what it consists of.",
        },
        spacing: "loose",
      },
      {
        type: "image",
        navId: "documentacion",
        src: img("w-8.jpg"),
        width: 768,
        height: 237,
        alt: {
          es: "Árbol de skills de Cursor: figma-to-storybook, validate-design-system y create-component",
          en: "Cursor skills tree: figma-to-storybook, validate-design-system and create-component",
        },
        radius: 8,
      },
      {
        type: "section",
        navId: "implementacion",
        heading: {
          es: "Creación del código de los componentes con el MCP y generación de Storybook",
          en: "Generating component code with MCP and creating Storybook",
        },
        body: {
          es: "El siguiente pasó fue generar la documentación formato README.md para incluir en el proyecto. En este documento se explica en qué consiste el proyecto.",
          en: "The next step was to generate README.md documentation for the project, explaining what it consists of.",
        },
        spacing: "compact",
      },
      {
        type: "image",
        navId: "implementacion",
        src: img("w-9.jpg"),
        width: 768,
        height: 427,
        alt: {
          es: "Código de tokens y componentes generado en el IDE",
          en: "Token and component code generated in the IDE",
        },
        radius: 20,
      },
      {
        type: "link",
        navId: "implementacion",
        href: "https://wellness-stay.vercel.app/?path=/docs/foundations-color--docs",
        label: {
          es: "Enlace al Storybook",
          en: "Link to Storybook",
        },
      },
      {
        type: "section",
        navId: "implementacion",
        emphasis: { es: "Desarrollo", en: "Development" },
        heading: {
          es: "Generación automatizada de las pantallas del marketplace",
          en: "Automated generation of the marketplace screens",
        },
        body: {
          es: [
            {
              text: "Una vez creados el archivo del proyecto, integré lo anterior para validar el sistema de diseño en un entorno real, decidí implementarlo utilizando ",
            },
            { text: "Cursor", bold: true },
            { text: " como IDE. No utilicé frameworks, sino que opté por una " },
            {
              text: "implementación en HTML, CSS y JavaScript con los elementos previamente creados.",
              bold: true,
            },
          ],
          en: [
            {
              text: "Once the project file was set up, I integrated the work above to validate the design system in a real environment and implemented it using ",
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
        src: img("ws-home.jpg"),
        width: 768,
        height: 536,
        alt: {
          es: "Pantalla home del marketplace Wellness Stay generada a partir del sistema de diseño",
          en: "Wellness Stay marketplace homepage generated from the design system",
        },
        radius: 8,
      },
      {
        type: "link",
        navId: "implementacion",
        href: "https://wellness-stay-web.vercel.app/index.html",
        label: {
          es: "Enlace a la web",
          en: "Link to the website",
        },
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
