import type { CaseStudy } from "@/data/case-studies";

const img = (name: string) => `/images/case-studies/noruega-por-tu-cuenta/${name}`;
const video = (name: string) => `/videos/case-studies/noruega-por-tu-cuenta/${name}`;

export const noruegaPorTuCuenta: CaseStudy = {
  slug: "noruega-por-tu-cuenta",
  year: "2026",
  tags: [],
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
  tools: ["Figma", "Google Analytics", "Hotjar"],
  meta: [
    {
      label: { es: "Rol", en: "Role" },
      values: ["Diseñadora UX/UI"],
    },
    {
      label: { es: "Herramientas", en: "Tools" },
      values: ["Figma", "Google Analytics", "Hotjar"],
    },
    {
      label: { es: "Año", en: "Year" },
      values: ["2026"],
    },
  ],
  title: {
    es: "Noruega por tu cuenta",
    en: "Noruega por tu cuenta",
  },
  pageTitle: {
    es: "Mejorando el engagement en una plataforma de contenido de viajes",
    en: "Improving engagement on a travel content platform",
  },
  excerpt: {
    es: "Mejorando el engagement en una plataforma de contenido de viajes",
    en: "Improving engagement on a travel content platform",
  },
  heroImage: {
    width: 1080,
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
  nav: [
    { id: "contexto", label: { es: "Contexto", en: "Context" } },
    { id: "problema", label: { es: "Problema", en: "Problem" } },
    { id: "objetivo", label: { es: "Objetivo", en: "Objective" } },
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
        es: "Noruega Por Tu Cuenta es un blog de viajes creado para inspirar y ayudar a planificar viajes a Noruega. El producto se basa en contenido informacional con tráfico orgánico.\n\nMi rol fue analizar el comportamiento del usuario y optimizar la experiencia para aumentar el tiempo de permanencia y la interacción con el contenido.",
        en: "Noruega Por Tu Cuenta is a travel blog created to inspire people and help them plan trips to Norway. The product is based on informational content with organic traffic.\n\nMy role was to analyze user behavior and optimize the experience to increase time on page and interaction with the content.",
      },
      spacing: "start",
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
        es: "Los usuarios accedían a los artículos por buenas prácticas de SEO pero apenas navegaban por el contenido y abandonan rápidamente el blog.",
        en: "Users landed on articles thanks to good SEO practices, but they barely browsed the content and quickly left the blog.",
      },
      spacing: "compact",
    },
    {
      type: "image",
      navId: "problema",
      src: img("punto-de-partida.jpg"),
      width: 361,
      height: 174,
      alt: {
        es: "Métricas de Google Analytics de partida: 1,66 vistas por usuario activo y 1 min 08 s de tiempo de interacción",
        en: "Baseline Google Analytics metrics: 1.66 views per active user and 1 min 08 s average engagement time",
      },
      layout: "inset",
      caption: {
        es: "Pantallazo extraído de Google Analytics",
        en: "Screenshot taken from Google Analytics",
      },
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
        es: "Aumentar el tiempo de permanencia en la página y mejorar la profundidad de navegación y el tiempo de retención dentro del sitio mediante la mejora de la cantidad del contenido y mediante una nueva arquitectura de página.\n\nLas métricas que demostrarán que el objetivo se ha cumplido serán:",
        en: "Increase time on page and improve navigation depth and retention on the site by improving the amount of content and introducing a new page architecture.\n\nThe metrics that will show the goal has been met are:",
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
      type: "section",
      navId: "research",
      emphasis: { es: "Research", en: "Research" },
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
          "Contenido pobre: muchas imágenes sin texto que aporte valor.",
          "Dicho texto o copy, no se dirige a ningún usuario en concreto y que aborde las necesidades de dicho usuario",
          "Falta de enlazado interno (entre artículos con temáticas similares)",
        ],
        en: [
          "Poor content: many images without text that adds value.",
          "That copy does not speak to a specific user or address that user’s needs",
          "Lack of internal linking (between articles with similar topics)",
        ],
      },
      spacing: "compact",
    },
    {
      type: "image",
      navId: "research",
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
      heading: {
        es: "Mapas de empatía para conocer al user persona",
        en: "Empathy maps to understand the user persona",
      },
      body: {
        es: "A consecuencia de lo anterior, se creó un mapa de empatía para abordar los puntos de dolor del usuario ¿cómo puedo ir por mi cuenta? ¿es muy caro? ¿merecerá la pena?. De este modo, el contenido que se realice estará enfocado a las necesidades y puntos de dolor del usuario.",
        en: "As a result, an empathy map was created to address the user’s pain points: how can I travel independently? is it too expensive? will it be worth it? That way, the content produced would focus on the user’s needs and pain points.",
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
        es: "A partir de la investigación y de los hallazgos obtenidos pude obtener la siguiente hipótesis.",
        en: "From the research and the findings, I was able to draw the following hypothesis.",
      },
      quote: {
        es: "Si se mejora la estructura del contenido y se añaden elementos que faciliten la navegación, los usuarios permanecerán más tiempo en la página e interactuarán más con el contenido.",
        en: "If we improve the content structure and add elements that make navigation easier, users will stay longer on the page and interact more with the content.",
      },
      spacing: "loose",
    },
    {
      type: "section",
      navId: "solucion",
      emphasis: { es: "Solución", en: "Solution" },
      heading: {
        es: "Implementación de mejoras de la interfaz en la interfaz de usuario",
        en: "Implementing user-interface improvements",
      },
      body: {
        es: "Rediseño de la página de inicio:",
        en: "Homepage redesign:",
      },
      list: {
        es: [
          "Rediseño de la estructura del contenido en la home",
          "Contenido que aborda directamente a las necesidades del usuario",
          "Nuevo copy que “habla” directamente al user persona",
          "Uso de bloques escaneables",
          "Secciones que invitan a seguir explorando (enlazado interno)",
        ],
        en: [
          "Redesign of the homepage content structure",
          "Content that speaks directly to user needs",
          "New copy that “talks” directly to the user persona",
          "Use of scannable blocks",
          "Sections that invite further exploration (internal linking)",
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
        es: "Resultados después del rediseño",
        en: "Results after the redesign",
      },
      body: {
        es: "Pasados 3 meses, mediante Google Analytics comprobé si los cambios en el diseño habrían movido las métricas que se establecieron inicialmente que demostrarían si se habría cumplido el objetivo: aumentar el tiempo de permanencia y interacción del usuario. Los resultados se recogen en el siguiente pantallazo",
        en: "After 3 months, I used Google Analytics to check whether the design changes had moved the metrics set at the start to show if the goal had been met: increasing time on page and user interaction. The results are shown in the following screenshot.",
      },
      spacing: "compact",
    },
    {
      type: "image",
      navId: "validacion",
      src: img("resultados-nptc.jpg"),
      width: 768,
      height: 174,
      alt: {
        es: "Comparación interanual en Google Analytics: +13,45% vistas, +10,2% tiempo de interacción y +6,1% eventos por usuario activo",
        en: "Year-over-year Google Analytics comparison: +13.45% views, +10.2% engagement time and +6.1% events per active user",
      },
      caption: {
        es: "Comparación interanual del periodo posterior al rediseño frente al mismo periodo del año anterior mediante Google Analytics 4.",
        en: "Year-over-year comparison of the period after the redesign against the same period the previous year, using Google Analytics 4.",
      },
    },
    {
      type: "section",
      navId: "validacion",
      heading: {
        es: "Aprendizajes",
        en: "Learnings",
      },
      body: {
        es: "Los resultados muestran una mejora en consumo e interacción, mientras que la profundidad de scroll no mejoró. La siguiente iteración se centraría en analizar qué contenidos generan mayor abandono y optimizar la estructura de los artículos.",
        en: "The results show an improvement in consumption and interaction, while scroll depth did not improve. The next iteration would focus on analyzing which content causes the most drop-off and optimizing the article structure.",
      },
      spacing: "tight",
    },
  ],
};
