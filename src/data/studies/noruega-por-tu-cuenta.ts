import type { CaseStudy } from "@/data/case-studies";

const img = (name: string) => `/images/case-studies/noruega-por-tu-cuenta/${name}`;
const video = (name: string) => `/videos/case-studies/noruega-por-tu-cuenta/${name}`;

export const noruegaPorTuCuenta: CaseStudy = {
  slug: "noruega-por-tu-cuenta",
  year: "2024",
  showOnHome: false,
  tag: {
    es: "[diseño UX]",
    en: "[UX design]",
  },
  cover: {
    src: img("hero.png"),
    width: 768,
    height: 478,
    alt: {
      es: "Home de Noruega por tu cuenta, con un paisaje de montañas y el buscador de viajes",
      en: "Homepage of Noruega por tu cuenta, with a mountain landscape and travel search",
    },
  },
  role: {
    es: "Diseñadora UX/UI",
    en: "UX/UI designer",
  },
  tools: ["UX/UI research", "Figma", "After Effects"],
  meta: [
    {
      label: { es: "Rol", en: "Role" },
      values: ["Diseñadora UX/UI"],
    },
    {
      label: { es: "Responsabilidades", en: "Responsibilities" },
      values: ["UX/UI research", "Figma", "After Effects"],
    },
    {
      label: { es: "Año", en: "Year" },
      values: ["2024"],
    },
  ],
  title: {
    es: "Noruega por tu cuenta",
    en: "Noruega por tu cuenta",
  },
  pageTitle: {
    es: "Noruega por tu cuenta",
    en: "Noruega por tu cuenta",
  },
  excerpt: {
    es: "Rediseño para mejorar la usabilidad y la UX de un blog de ayuda para viajar a Noruega por tu cuenta.",
    en: "Redesign to improve the usability and UX of a self-guided Norway travel blog.",
  },
  heroImage: {
    src: img("hero.png"),
    width: 768,
    height: 478,
    alt: {
      es: "Home de Noruega por tu cuenta con el título sobre un fiordo",
      en: "Noruega por tu cuenta homepage with the title over a fjord",
    },
  },
  nav: [
    { id: "contexto", label: { es: "Contexto", en: "Context" } },
    { id: "problema", label: { es: "Problema", en: "Problem" } },
    { id: "objetivo", label: { es: "Objetivo", en: "Objective" } },
    { id: "analisis-ux", label: { es: "Análisis UX", en: "UX analysis" } },
    { id: "research", label: { es: "Research", en: "Research" } },
    { id: "solucion", label: { es: "Soluciones", en: "Solutions" } },
    { id: "validacion", label: { es: "Validación", en: "Validation" } },
  ],
  blocks: [
    {
      type: "section",
      navId: "contexto",
      emphasis: { es: "Contexto", en: "Context" },
      heading: {
        es: "Plataforma de información de viajes en Noruega",
        en: "Travel information platform for Norway",
      },
      body: {
        es: "Noruega Por Tu Cuenta es un blog de viajes enfocado en inspirar y ayudar a planificar viajes a Noruega. El producto se basa en contenido informacional con tráfico orgánico.\n\nMi rol fue analizar el comportamiento del usuario y optimizar la experiencia para aumentar el tiempo de permanencia y la interacción con el contenido.",
        en: "Noruega Por Tu Cuenta is a travel blog focused on inspiring people and helping them plan trips to Norway. The product is based on informational content with organic traffic.\n\nMy role was to analyze user behavior and optimize the experience to increase time on page and interaction with the content.",
      },
    },
    {
      type: "section",
      navId: "problema",
      emphasis: { es: "Problema", en: "Problem" },
      heading: {
        es: "Falta de retención de los usuarios",
        en: "Lack of user retention",
      },
      body: {
        es: "Los usuarios accedían a los artículos por buenas prácticas de SEO pero apenas navegaban por el contenido y abandonaban rápidamente el portal.",
        en: "Users landed on articles thanks to good SEO practices, but they barely browsed the content and left the site quickly.",
      },
      spacing: "compact",
    },
    {
      type: "section",
      navId: "objetivo",
      emphasis: { es: "Objetivo", en: "Objective" },
      heading: {
        es: "Aumentar el tiempo de permanencia",
        en: "Increase time on page",
      },
      body: {
        es: "Aumentar el tiempo de permanencia en la página y mejorar la profundidad de navegación y el tiempo de retención dentro del sitio mediante la mejora de la cantidad del contenido y mediante una nueva arquitectura de página.",
        en: "Increase time on page and improve navigation depth and retention on the site by improving the amount of content and introducing a new page architecture.",
      },
      spacing: "compact",
    },
    {
      type: "section",
      navId: "analisis-ux",
      emphasis: { es: "Análisis UX", en: "UX analysis" },
      heading: {
        es: "Análisis UX",
        en: "UX analysis",
      },
      body: {
        es: "Se identificaron los siguientes patrones:",
        en: "The following patterns were identified:",
      },
      list: {
        es: [
          "Contenido pobre: muchas imágenes sin texto",
          "No existe un copy que se dirija a ningún usuario en concreto y que aborde las necesidades de dicho usuario",
          "Falta de enlazado interno (entre artículos con temáticas similares)",
        ],
        en: [
          "Poor content: many images without text",
          "There is no copy that speaks to a specific user or addresses that user’s needs",
          "Lack of internal linking (between articles with similar topics)",
        ],
      },
      spacing: "compact",
    },
    {
      type: "image",
      navId: "analisis-ux",
      src: img("ux-analysis.png"),
      width: 768,
      height: 389,
      alt: {
        es: "Análisis UX de la web antigua con anotaciones sobre problemas de menú y contenido",
        en: "UX analysis of the old website with notes on menu and content issues",
      },
    },
    {
      type: "section",
      navId: "research",
      emphasis: { es: "Research", en: "Research" },
      heading: {
        es: "Mapas de empatía para conocer al user persona e historias de usuario",
        en: "Empathy maps to understand the user persona and user stories",
      },
      list: {
        es: [
          "El usuario no encuentra puntos claros de continuidad",
          "La estructura del contenido no facilita la lectura",
          "No existe una guía clara dentro del contenido",
        ],
        en: [
          "The user finds no clear points of continuity",
          "The content structure does not make reading easier",
          "There is no clear guide within the content",
        ],
      },
      spacing: "compact",
    },
    {
      type: "image",
      navId: "research",
      src: img("empathy.png"),
      width: 768,
      height: 443,
      alt: {
        es: "Mapa de empatía del user persona de Noruega por tu cuenta",
        en: "Empathy map of the Noruega por tu cuenta user persona",
      },
    },
    {
      type: "section",
      navId: "research",
      emphasis: { es: "Historia de usuario", en: "User story" },
      heading: {
        es: "Hipótesis",
        en: "Hypothesis",
      },
      body: {
        es: "Si se mejora la estructura del contenido y se añaden elementos que faciliten la navegación, los usuarios permanecerán más tiempo en la página e interactuarán más con el contenido.",
        en: "If we improve the content structure and add elements that make navigation easier, users will stay longer on the page and interact more with the content.",
      },
      surface: "callout",
      spacing: "loose",
    },
    {
      type: "section",
      navId: "solucion",
      emphasis: { es: "Solución", en: "Solution" },
      heading: {
        es: "Implementación de mejoras de la interfaz de usuario",
        en: "Implementing user-interface improvements",
      },
      body: {
        es: "Rediseño de la página de inicio:",
        en: "Homepage redesign:",
      },
      list: {
        es: [
          "Rediseño de la estructura del contenido en la home",
          "Contenido que aborda directamente las necesidades del usuario",
          "Nuevo copy que “habla” directamente al usuario",
          "Uso de bloques escaneables",
          "Secciones que invitan a seguir explorando",
        ],
        en: [
          "Redesign of the homepage content structure",
          "Content that speaks directly to user needs",
          "New copy that “talks” directly to the user",
          "Use of scannable blocks",
          "Sections that invite further exploration",
        ],
      },
      spacing: "compact",
    },
    {
      type: "feature",
      navId: "solucion",
      number: "01.",
      layout: "phone",
      body: {
        es: "Optimización del copy para conectar con los pain points del usuario y mejorar la comprensión de la propuesta de valor.",
        en: "Copy optimization to connect with user pain points and improve understanding of the value proposition.",
      },
      video: {
        src: video("feature-1.mp4"),
        poster: img("feature-1.jpg"),
        width: 424,
        height: 491,
      },
    },
    {
      type: "feature",
      navId: "solucion",
      number: "02.",
      layout: "phone",
      body: {
        es: "Mejora del enlazado interno sugiriendo contenidos y temáticas relevantes para el user persona.",
        en: "Better internal linking by suggesting relevant content and topics for the user persona.",
      },
      video: {
        src: video("feature-2.mp4"),
        poster: img("feature-2.jpg"),
        width: 424,
        height: 491,
      },
    },
    {
      type: "feature",
      navId: "solucion",
      number: "03.",
      layout: "phone",
      body: {
        es: "Implementación de recomendaciones de contenido relacionadas con las necesidades e intereses detectados en el user persona.",
        en: "Content recommendations related to the needs and interests identified in the user persona.",
      },
      video: {
        src: video("feature-3.mp4"),
        poster: img("feature-3.jpg"),
        width: 424,
        height: 491,
      },
    },
    {
      type: "section",
      navId: "validacion",
      emphasis: { es: "Validación de resultados", en: "Results validation" },
      heading: {
        es: "Definición de KPIs para conocer el impacto",
        en: "Defining KPIs to understand the impact",
      },
      body: {
        es: "Métricas a analizar:",
        en: "Metrics to analyze:",
      },
      list: {
        es: [
          "Aumento en páginas por sesión",
          "Mejora en tiempo de permanencia",
          "Mayor interacción con el contenido",
        ],
        en: [
          "Increase in pages per session",
          "Improvement in time on page",
          "Greater interaction with the content",
        ],
      },
      spacing: "compact",
    },
    {
      type: "cards",
      navId: "validacion",
      variant: "kpi",
      items: [
        {
          body: {
            es: "Tiempo de permanencia",
            en: "Time on page",
          },
          stat: "+ 15%",
        },
        {
          body: {
            es: "Nº páginas por sesión",
            en: "Pages per session",
          },
          stat: "+ 20%",
        },
        {
          body: {
            es: "Interacción con el contenido",
            en: "Content interaction",
          },
          stat: "+ 20%",
        },
      ],
    },
    {
      type: "section",
      navId: "validacion",
      heading: {
        es: "Herramientas de análisis",
        en: "Analytics tools",
      },
      body: {
        es: "Mediante Google Analytics se comprobó si una estructura de contenido más clara, junto con una navegación guiada y contextual, mejora el engagement y facilita el descubrimiento de información relevante para el usuario por medio de los datos.",
        en: "Using Google Analytics, we checked whether a clearer content structure, together with guided, contextual navigation, improves engagement and makes it easier for users to discover relevant information through the data.",
      },
      spacing: "loose",
    },
    {
      type: "section",
      navId: "validacion",
      heading: {
        es: "Aprendizajes",
        en: "Learnings",
      },
      body: {
        es: "El proyecto no finaliza con el diseño; la siguiente fase consiste en validar mediante datos reales si las decisiones tomadas mejoran la experiencia del usuario.",
        en: "The project does not end with the design; the next phase is to validate with real data whether the decisions made improve the user experience.",
      },
      spacing: "tight",
    },
  ],
};
