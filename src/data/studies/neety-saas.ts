import type { CaseStudy } from "@/data/case-studies";

const img = (name: string) => `/images/case-studies/neety-saas/${name}`;

export const neetySaas: CaseStudy = {
  slug: "neety-saas",
  year: "2024",
  tag: {
    es: "[colaboración]",
    en: "[collaboration]",
  },
  cover: {
    src: img("hero.png"),
    width: 768,
    height: 512,
    alt: {
      es: "Captura del dashboard de Neety SaaS",
      en: "Screenshot of the Neety SaaS dashboard",
    },
  },
  role: {
    es: "UX/UI Designer",
    en: "UX/UI Designer",
  },
  tools: [],
  meta: [
    {
      label: { es: "Rol", en: "Role" },
      values: ["UX/UI Designer"],
    },
    {
      label: { es: "Equipo", en: "Team" },
      values: ["1 Lead", "5 designers"],
    },
    {
      label: { es: "Duración", en: "Timeline" },
      values: ["7 months"],
    },
  ],
  title: {
    es: "Neety SaaS",
    en: "Neety SaaS",
  },
  pageTitle: {
    es: "Neety es una herramienta de automatización de mensajes generados mediante IA para la prospección y venta a través de mensajes de Linkedin.",
    en: "Neety is an AI-powered message automation tool for prospecting and selling through LinkedIn messages.",
  },
  excerpt: {
    es: "Rediseño para mejorar la usabilidad y la UX de una herramienta de mensajería comercial automatizada.",
    en: "Redesign to improve the usability and UX of an automated sales messaging tool.",
  },
  heroImage: {
    src: img("hero.png"),
    width: 768,
    height: 512,
    alt: {
      es: "Dashboard de Neety en un portátil",
      en: "Neety dashboard on a laptop",
    },
  },
  nav: [
    { id: "contexto", label: { es: "Contexto", en: "Context" } },
    { id: "research", label: { es: "Research", en: "Research" } },
    { id: "definicion", label: { es: "Definición", en: "Definition" } },
    { id: "solucion", label: { es: "Solución", en: "Solution" } },
    {
      id: "pruebas-de-usabilidad",
      label: { es: "Pruebas de usabilidad", en: "Usability testing" },
    },
  ],
  blocks: [
    {
      type: "section",
      navId: "contexto",
      heading: { es: "Contexto", en: "Context" },
      body: {
        es: [
          {
            text: "A principios del año 2024 dio comienzo esta herramienta de prospección en ventas como un MVP con funcionalidades básicas. Pasados unos meses y tras conseguir los primeros clientes, se vio la necesidad de ",
          },
          {
            text: "comenzar a crear una interfaz más robusta, optimizar los flujos y crear un sistema",
            bold: true,
          },
          { text: " que permitiera la escalabilidad del producto. Mediante la " },
          { text: "Escuela Tribux", italic: true },
          {
            text: ", cuatro compañeros y yo comenzamos la colaboración con Neety.",
          },
        ],
        en: [
          {
            text: "In early 2024 this sales-prospecting tool launched as an MVP with basic features. After a few months and the first customers, it became clear we needed to ",
          },
          {
            text: "start building a more robust interface, optimize the flows and create a system",
            bold: true,
          },
          { text: " that would let the product scale. Through " },
          { text: "Escuela Tribux", italic: true },
          { text: ", four classmates and I began collaborating with Neety." },
        ],
      },
      spacing: "tight",
    },
    {
      type: "quote",
      navId: "contexto",
      text: {
        es: "El objetivo es transicionar de un MVP con una interfaz básica a una herramienta robusta, consistente y fácil de usar.",
        en: "The goal is to move from an MVP with a basic interface to a robust, consistent and easy-to-use tool.",
      },
    },
    {
      type: "prose",
      navId: "contexto",
      body: {
        es: "En la reunión inicial, el equipo nos explicó el funcionamiento y nos contó sobre las necesidades a nivel de diseño y usabilidad. Los siguientes pasos serían conocer el mercado de herramientas similares y las necesidades y fricciones de los usuarios reales y potenciales.",
        en: "In the kickoff meeting, the team walked us through how the product worked and the design and usability needs. Next we would study similar tools on the market and the needs and friction of real and potential users.",
      },
    },
    {
      type: "image",
      navId: "contexto",
      src: img("meeting.png"),
      width: 1024,
      height: 518,
      alt: {
        es: "Reunión inicial del equipo por videollamada",
        en: "Kickoff team meeting on a video call",
      },
      radius: 12,
    },
    {
      type: "section",
      navId: "research",
      heading: { es: "Research", en: "Research" },
      body: {
        es: [
          { text: "Durante " },
          { text: "tres meses", bold: true },
          { text: " realizamos los siguientes trabajos de investigación:" },
        ],
        en: [
          { text: "Over " },
          { text: "three months", bold: true },
          { text: " we carried out the following research:" },
        ],
      },
      spacing: "default",
    },
    {
      type: "section",
      navId: "research",
      level: 3,
      heading: {
        es: "Benchmark & Estudio de la competencia",
        en: "Benchmark & competitive analysis",
      },
      body: {
        es: "Comenzamos analizando la competencia con un completo benchmark donde pudimos conocer las funcionalidades y características de los competidores directos e indirectos, así como las fortalezas y debilidades.",
        en: "We started by analyzing the market with a full benchmark of direct and indirect competitors: features, strengths and weaknesses.",
      },
      spacing: "tight",
    },
    {
      type: "image",
      navId: "research",
      src: img("benchmark.png"),
      width: 768,
      height: 469,
      alt: {
        es: "Mapa de competidores del benchmark de Neety",
        en: "Competitor map from the Neety benchmark",
      },
      radius: 12,
    },
    {
      type: "section",
      navId: "research",
      level: 3,
      heading: {
        es: "Entrevistas cualitativas a usuarios",
        en: "Qualitative user interviews",
      },
      body: {
        es: "Realizamos 8 entrevistas online a usuarios de la herramienta y a potenciales clientes.",
        en: "We ran 8 online interviews with current users and potential customers.",
      },
      spacing: "tight",
    },
    {
      type: "image",
      navId: "research",
      src: img("interviews.png"),
      width: 932,
      height: 551,
      alt: {
        es: "Entrevista cualitativa con una usuaria de Neety",
        en: "Qualitative interview with a Neety user",
      },
      radius: 8,
    },
    {
      type: "section",
      navId: "research",
      level: 3,
      heading: {
        es: "Insights de la investigación",
        en: "Research insights",
      },
      body: {
        es: [
          { text: "Se han " },
          { text: "validado", bold: true },
          {
            text: " las siguientes necesidades de negocio durante la investigación",
          },
        ],
        en: [
          { text: "The following business needs were " },
          { text: "validated", bold: true },
          { text: " during the research" },
        ],
      },
      spacing: "tight",
    },
    {
      type: "cards",
      navId: "research",
      variant: "cyan",
      items: [
        {
          body: {
            es: "Los usuarios necesitan más control y seguimiento dentro de la plataforma con más funcionalidades.",
            en: "Users need more control and tracking inside the platform, with more features.",
          },
        },
        {
          body: {
            es: "La integración con CRMs es clave para optimizar el flujo de trabajo comercial.",
            en: "CRM integration is key to optimizing the commercial workflow.",
          },
        },
        {
          body: {
            es: "Propuesta de valor validada: la automatización de mensajes personalizados mejora la prospección y la conversión.",
            en: "Validated value proposition: automating personalized messages improves prospecting and conversion.",
          },
        },
      ],
    },
    {
      type: "prose",
      navId: "research",
      body: {
        es: [
          { text: "Otros " },
          { text: "insights", bold: true },
          { text: " a tener en cuenta" },
        ],
        en: [
          { text: "Other " },
          { text: "insights", bold: true },
          { text: " to keep in mind" },
        ],
      },
    },
    {
      type: "cards",
      navId: "research",
      variant: "orange",
      items: [
        {
          body: {
            es: "Los usuarios confían en la IA porque ya utilizan herramientas de automatización similares",
            en: "Users trust AI because they already use similar automation tools",
          },
        },
        {
          body: {
            es: "Algunas funcionalidades y etiquetas generan confusión durante el uso.",
            en: "Some features and labels cause confusion during use.",
          },
        },
        {
          body: {
            es: "Los usuarios esperan una herramienta más autónoma que requiera menos supervisión.",
            en: "Users expect a more autonomous tool that needs less supervision.",
          },
        },
      ],
    },
    {
      type: "section",
      navId: "definicion",
      heading: { es: "Definición", en: "Definition" },
      body: {
        es: [
          { text: "A partir de estos hallazgos, se trabajó en la " },
          { text: "concreción de tareas", bold: true },
          { text: " utilizando herramientas como el " },
          { text: "Empathy Map", italic: true },
          {
            text: ", con el cual agrupamos las motivaciones, frustraciones y expectativas de los usuarios. Posteriormente, utilizamos un canvas de propuesta de valor para abordar esas necesidades y oportunidades de mejora de la herramienta.",
          },
        ],
        en: [
          { text: "From these findings we worked on " },
          { text: "defining the tasks", bold: true },
          { text: " using tools such as an " },
          { text: "Empathy Map", italic: true },
          {
            text: ", grouping users’ motivations, frustrations and expectations. We then used a value-proposition canvas to address those needs and opportunities to improve the tool.",
          },
        ],
      },
      spacing: "default",
    },
    {
      type: "image",
      navId: "definicion",
      src: img("empathy.png"),
      width: 768,
      height: 480,
      alt: {
        es: "Empathy map y personas de usuario de Neety",
        en: "Empathy map and user personas for Neety",
      },
    },
    {
      type: "image",
      navId: "definicion",
      src: img("value-canvas.png"),
      width: 768,
      height: 461,
      alt: {
        es: "Canvas de propuesta de valor de Neety",
        en: "Value proposition canvas for Neety",
      },
    },
    {
      type: "section",
      navId: "definicion",
      level: 3,
      heading: {
        es: "Sesión de Kano model",
        en: "Kano model session",
      },
      body: {
        es: "Con esta información, se llevó a cabo una sesión colaborativa con el equipo para alinear los objetivos de negocio y las necesidades de los usuarios. Durante esta fase se priorizaron funcionalidades y mejoras clave en función de su impacto, viabilidad y valor para el usuario, definiendo así las bases estratégicas del producto y el roadmap inicial de trabajo.",
        en: "With that input we ran a collaborative session with the team to align business goals and user needs. We prioritized key features and improvements by impact, feasibility and user value, setting the product strategy and an initial roadmap.",
      },
      spacing: "tight",
    },
    {
      type: "image-pair",
      navId: "definicion",
      images: [
        {
          src: img("kano-1.png"),
          width: 380,
          height: 356,
          alt: {
            es: "Notas de la sesión de priorización Kano",
            en: "Notes from the Kano prioritization session",
          },
        },
        {
          src: img("kano-2.png"),
          width: 494,
          height: 463,
          alt: {
            es: "Matriz de priorización del modelo Kano",
            en: "Kano-model prioritization matrix",
          },
        },
      ],
    },
    {
      type: "section",
      navId: "solucion",
      heading: { es: "Soluciones", en: "Solutions" },
      spacing: "tight",
    },
    {
      type: "feature",
      navId: "solucion",
      number: "01.",
      title: {
        es: "Creación de moodboard",
        en: "Moodboard",
      },
      body: {
        es: "Con el cuadro de control, el usuario puede visualizar de una vez todo lo relacionado con sus campañas y el impacto y resultado que están obteniendo.",
        en: "With the dashboard, users can see everything related to their campaigns and the impact and results they are getting, all at once.",
      },
      image: {
        src: img("feature-1.png"),
        width: 768,
        height: 538,
        alt: {
          es: "Dashboard de campañas de Neety",
          en: "Neety campaigns dashboard",
        },
      },
    },
    {
      type: "feature",
      navId: "solucion",
      number: "02",
      title: {
        es: "Mejora del flujo de configuración de campaña",
        en: "Improved campaign setup flow",
      },
      body: {
        es: "Este flujo es el core de la herramienta",
        en: "This flow is the core of the product",
      },
      image: {
        src: img("feature-2.png"),
        width: 768,
        height: 538,
        alt: {
          es: "Flujo de configuración de campaña en Neety",
          en: "Campaign setup flow in Neety",
        },
      },
    },
    {
      type: "feature",
      navId: "solucion",
      number: "03",
      title: {
        es: "UX writing",
        en: "UX writing",
      },
      body: {
        es: "Copy más cercano y amigable, evitando tecnicismos y que guíe e informe al usuario en todo momento",
        en: "Closer, friendlier copy that avoids jargon and guides and informs the user at every step",
      },
      image: {
        src: img("feature-3.png"),
        width: 498,
        height: 377,
        alt: {
          es: "Interfaz de generación de mensajes con IA",
          en: "AI message-generation interface",
        },
      },
    },
    {
      type: "feature",
      navId: "solucion",
      number: "04.",
      title: {
        es: "Establecimiento de bases de diseño",
        en: "Design foundations",
      },
      body: {
        es: "Colores, escala tipográfica, grillas por dispositivo",
        en: "Color, type scale, grids per device",
      },
      image: {
        src: img("feature-4.png"),
        width: 768,
        height: 409,
        alt: {
          es: "Bases de diseño de Neety: color, tipografía y grid",
          en: "Neety design foundations: color, type and grid",
        },
      },
    },
    {
      type: "feature",
      navId: "solucion",
      number: "05.",
      title: {
        es: "Creación de componentes",
        en: "Component library",
      },
      body: {
        es: "Con el objetivo de escalar el producto de manera consistente, se crearon todos los componentes necesarios hasta el momento",
        en: "To scale the product consistently, we created all the components needed at that point",
      },
      image: {
        src: img("feature-5.png"),
        width: 768,
        height: 576,
        alt: {
          es: "Librería de componentes de Neety",
          en: "Neety component library",
        },
      },
    },
    {
      type: "section",
      navId: "pruebas-de-usabilidad",
      heading: {
        es: "Pruebas de usabilidad",
        en: "Usability testing",
      },
      body: {
        es: [
          {
            text: "El prototipo con el nuevo diseño de la herramienta fue validado mediante un ",
          },
          {
            text: "test de usabilidad realizado con 5 usuarios",
            bold: true,
          },
          { text: " representativos del público objetivo." },
        ],
        en: [
          { text: "The prototype of the new design was validated with a " },
          { text: "usability test with 5 users", bold: true },
          { text: " representative of the target audience." },
        ],
      },
      after: {
        es: "Durante las sesiones se evaluó la comprensión de la interfaz y las nuevas funcionalidades, lo que permitió validar gran parte de las decisiones de diseño tomadas previamente e identificar nuevos aprendizajes y oportunidades de mejora para optimizar la experiencia de usuario.",
        en: "Sessions evaluated comprehension of the interface and the new features, which validated many of the earlier design decisions and surfaced new learnings and opportunities to improve the experience.",
      },
      spacing: "tight",
    },
    {
      type: "image-pair",
      navId: "pruebas-de-usabilidad",
      images: [
        {
          src: img("test-1.png"),
          width: 494,
          height: 416,
          alt: {
            es: "Sesión de test de usabilidad",
            en: "Usability-test session",
          },
        },
        {
          src: img("test-2.png"),
          width: 494,
          height: 416,
          alt: {
            es: "Tabla de hallazgos del test de usabilidad",
            en: "Usability-test findings table",
          },
        },
      ],
    },
    {
      type: "section",
      navId: "pruebas-de-usabilidad",
      level: 3,
      heading: {
        es: "Resultados del test",
        en: "Test results",
      },
      spacing: "tight",
    },
    {
      type: "cards",
      navId: "pruebas-de-usabilidad",
      variant: "stat",
      items: [
        {
          stat: "70%",
          body: {
            es: "Confía más en el sistema después de ver métricas claras en mensajes, respuestas y meetings",
            en: "Trusts the system more after seeing clear metrics on messages, replies and meetings",
          },
        },
        {
          stat: "65%",
          body: {
            es: "Encuentra información clave más rápido",
            en: "Finds key information faster",
          },
        },
        {
          stat: "75%",
          body: {
            es: "Valora el cambio en el copy y la terminología",
            en: "Values the change in copy and terminology",
          },
        },
      ],
    },
  ],
};
