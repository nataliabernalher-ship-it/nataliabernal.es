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
  intro?: LocalizedRichText;
  heading?: LocalizedRichText;
  body?: LocalizedRichText;
  list?: Record<Locale, string[]>;
  after?: LocalizedRichText;
  quote?: LocalizedString;
  spacing?: "default" | "compact" | "loose" | "tight" | "start" | "lead";
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
  caption?: LocalizedString;
  layout?: "full" | "inset";
};

export type CaseStudyHeroDevice = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  width: number;
  height: number;
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
  spacing?: "default" | "compact" | "even";
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
    src?: string;
    width: number;
    height: number;
    alt: LocalizedString;
    devices?: {
      background: string;
      left: CaseStudyHeroDevice;
      right: CaseStudyHeroDevice;
    };
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
      { id: "implementacion", label: { es: "Implementación", en: "Implementation" } },
      { id: "desarrollo", label: { es: "Desarrollo", en: "Development" } },
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
          es: "En este proyecto he llevado a cabo la creación de un sistema de diseño desde cero en Figma para posteriormente, por medio del MCP y con el agente asistido de Cursor, realizar la implementación en código.\n\nAdemás de la generación de la interfaz del producto, también he creado el Storybook del proyecto, donde se recoge de forma visible a modo de librería y fuente de la verdad para el equipo, la documentación técnica de componentes y tokens.",
          en: "In this project I built a design system from scratch in Figma and then implemented it in code with MCP and Cursor’s assisted agent.\n\nBesides generating the product interface, I also created the project Storybook: a visible library and source of truth for the team, with technical documentation for components and tokens.",
        },
        quote: {
          es: "Se busca reducir la distancia entre Figma y el código y facilitar la evolución - en rapidez y consistencia - del producto a medida que surjan nuevas necesidades.",
          en: "The aim is to shorten the gap between Figma and code and make it easier for the product to evolve - in speed and consistency - as new needs arise.",
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
          es: "El objetivo es crear un sistema automatizado que permita la generación de nuevas interfaces y funcionalidades del producto, creando así un producto rápidamente escalable.\n\nEl desafío de este proyecto es la creación de la documentación necesaria para que el código generado siempre siga las instrucciones y mismos procesos y así obtener resultados consistentes.",
          en: "The goal is to create an automated system that can generate new product interfaces and features, making the product quickly scalable.\n\nThe challenge is to write the documentation needed so generated code always follows the same instructions and processes, and the results stay consistent.",
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
        emphasis: { es: "Investigación", en: "Research" },
        heading: {
          es: "Entendiendo el producto",
          en: "Understanding the product",
        },
        body: {
          es: "Wellness Stay es un marketplace de reservas de retiros de bienestar ficticio. Para comenzar, analicé plataformas del sector travel y wellness que existen actualmente en el mercado. Analicé los flujos de la reserva de retiros y los patrones UI comunes. Al mismo tiempo, recogí los distintos estilos visuales de los competidores para escoger un estilo diferenciador.",
          en: "Wellness Stay is a fictional wellness retreat booking marketplace. I started by analyzing travel and wellness platforms currently on the market: retreat booking flows and common UI patterns. At the same time, I gathered competitors’ visual styles in order to choose a distinctive direction.",
        },
        spacing: "lead",
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
        heading: {
          es: "Task flow del usuario",
          en: "User task flow",
        },
        body: {
          es: "Realicé un task flow para conocer el flujo que realiza el usuario, es decir, las pantallas necesarias por las que pasa el usuario desde que llega a la plataforma, interactúa por medio del buscador, obtiene resultados, accede a una ficha y realiza una reserva.",
          en: "I mapped a task flow to understand the user’s journey: the screens they go through from arriving on the platform, using search, seeing results, opening a listing, and completing a booking.",
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
        heading: { es: "Referencias visuales", en: "Visual references" },
        body: {
          es: "Antes de comenzar a establecer las bases del diseño, tomé referencias visuales para entender los patrones UI habituales de los marketplaces y marcar un estilo visual.",
          en: "Before setting the design foundations, I gathered visual references to understand typical marketplace UI patterns and define a visual style.",
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
            { text: " de diseño en Figma" },
          ],
          en: [
            { text: "Creating the design " },
            { text: "foundations", italic: true },
            { text: " in Figma" },
          ],
        },
        body: {
          es: "Comencé estableciendo las foundations, los elementos visuales fundamentales de la interfaz: el color, la tipografía, los iconos, las grillas, los espaciados (márgenes y paddings), radios de esquina y grosor de los bordes.",
          en: "I started by establishing the foundations, the fundamental visual elements of the interface: color, typography, icons, grids, spacing (margins and paddings), corner radii and border widths.",
        },
        spacing: "lead",
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
          es: "Con el objetivo de construir una interfaz única y a medida, diseñé los componentes que contienen todos los marketplace de alojamientos: buscador, cards, filtros, botones, navegación, etc. Mi intención es que el sistema no invente arbitrariamente los componentes cuando se generen nuevas de interfaces y que abarquen todas las posibilidades.\n\nPara nuevos componentes que no hayan sido contemplados, se deben incluir nuevos siguiendo el mismo flujo: Figma -> MCP -> Storybook -> Interfaz",
          en: "To build a unique, tailored interface, I designed the components every accommodation marketplace needs: search, cards, filters, buttons, navigation, and so on. The intent is that the system does not invent components arbitrarily when new interfaces are generated, and that they cover every case.\n\nFor new components that were not anticipated, they should be added following the same flow: Figma -> MCP -> Storybook -> Interface",
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
          es: "Creación de variables - tokens- de estilo en Figma",
          en: "Creating style variables - tokens - in Figma",
        },
        body: {
          es: "Desarrolle una arquitectura básica de tokens para que diseño y desarrollo utilizaran el mismo idioma. Los tokens primarios fueron la base para construir el resto de tokens: los tokens semánticos para elementos comunes de la interfaz - bordes, surfaces, fondos, etc - y los tokens de componentes, para componentes específicos.",
          en: "I developed a basic token architecture so design and development would speak the same language. Primitive tokens were the base for the rest: semantic tokens for shared interface elements - borders, surfaces, backgrounds, etc. - and component tokens for specific components.",
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
        navId: "implementacion",
        emphasis: { es: "Implementación en IDE", en: "IDE implementation" },
        intro: {
          es: "En este punto creé la carpeta del proyecto en local para comenzar a integrar la documentación, generar el código y así validar el sistema de diseño en un entorno real. Para implementarlo no utilicé frameworks, sino que opté por una implementación en HTML, CSS y JavaScript con los elementos previamente creados.",
          en: "At this point I created the local project folder to start integrating the documentation, generating the code, and validating the design system in a real environment. I did not use frameworks; instead I implemented it in HTML, CSS and JavaScript with the elements created beforehand.",
        },
        heading: {
          es: "Documentación técnica para la IA y para el equipo",
          en: "Technical documentation for AI and the team",
        },
        body: {
          es: "Para que una IA pueda generar interfaces coherentes, no basta con proporcionarle acceso a los componentes de Figma. También necesita comprender el contexto del sistema, sus reglas de uso y sus limitaciones. Estas indicaciones las realicé en documentos markdowns con la ayuda de Chatgpt - AGENTS.md y SKILLS.md - y que posteriormente añadí a la carpeta del proyecto.\n\nEl siguiente pasó fue generar la documentación formato README.md para incluir en el proyecto. En este documento se explica en qué consiste el proyecto.",
          en: "For an AI to generate coherent interfaces, access to Figma components is not enough. It also needs to understand the system context, usage rules and constraints. I wrote those instructions as markdown documents with ChatGPT - AGENTS.md and SKILLS.md - and later added them to the project folder.\n\nThe next step was to generate README.md documentation for the project, explaining what it consists of.",
        },
        spacing: "lead",
      },
      {
        type: "image",
        navId: "implementacion",
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
          es: "Una vez creado el contexto para el IDE, las instrucciones y el proceso de generación de código, implementé en el código los tokens y componentes de Figma a través dee MPC.\n\nParalelamente a la generación del código de los componentes, generé el storybook donde almacenar todos los elementos de la interfaz. En un futuro, se irá actualizando según requerimientos nuevos del producto.",
          en: "Once the IDE context, instructions and code-generation process were in place, I implemented Figma tokens and components in code through MCP.\n\nIn parallel with generating component code, I created Storybook to store every interface element. It will be updated later as new product requirements appear.",
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
        navId: "desarrollo",
        emphasis: { es: "Desarrollo", en: "Development" },
        heading: {
          es: "Generación automatizada de las pantallas del marketplace",
          en: "Automated generation of the marketplace screens",
        },
        body: {
          es: "Por último, generé los prompts específicos para generar las secciones de la home:",
          en: "Finally, I wrote the specific prompts to generate the homepage sections:",
        },
        list: {
          es: [
            "Navegación",
            "hero section (buscador y h1)",
            "destacados",
            "categorías principales",
            "Newsletter",
            "footer",
          ],
          en: [
            "Navigation",
            "hero section (search and h1)",
            "featured",
            "main categories",
            "Newsletter",
            "footer",
          ],
        },
        spacing: "loose",
      },
      {
        type: "image",
        navId: "desarrollo",
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
        navId: "desarrollo",
        href: "https://wellness-stay-web.vercel.app/index.html",
        label: {
          es: "Enlace a la web",
          en: "Link to the website",
        },
        spacing: "even",
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
