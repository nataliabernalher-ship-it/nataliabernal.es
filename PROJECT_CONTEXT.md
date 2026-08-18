# Portfolio Natalia Bernal

## Proyecto

Portfolio profesional bilingüe (ES/EN) diseñado en Figma y desarrollado con Cursor.

**Workflow:** Figma → Figma MCP → Cursor → GitHub → Vercel → `nataliabernal.es`

## Stack y configuración inicial

Inicializar el proyecto con Next.js usando:

* React
* TypeScript
* ESLint
* React Compiler
* No Tailwind CSS
* `src/` directory
* App Router
* Turbopack
* Import alias por defecto (`@/*`)
* CSS Modules + CSS Variables / Design Tokens

Evitar dependencias innecesarias.

## Sitemap

```text
/es
/en

/es/case-study/[slug]
/en/case-study/[slug]
```

Inicialmente habrá **2 case studies**, pero la arquitectura debe permitir añadir nuevos proyectos fácilmente.

Inicialmente solo habrá un enlace en el menu: Contacto. Con el tiempo irán añadiéndose nuevos enlaces como Lab, Work, About.

## Estructura

```text
src/
├── app/
│   └── [locale]/
│       ├── page.tsx
│       ├── layout.tsx
│       └── case-study/
│           └── [slug]/
│               └── page.tsx
├── components/
├── data/
├── messages/
│   ├── es.json
│   └── en.json
└── styles/
    └── tokens.css
```

## Figma MCP

Figma es la fuente de verdad para el diseño.

Al implementar mediante Figma MCP:

* Respetar layout, spacing, tipografía y estilos de Figma.
* Extraer las variables/tokens definidos en Figma y trasladarlos a CSS variables.
* Mantener su estructura semántica siempre que sea posible.
* Detectar patrones y crear componentes reutilizables.
* No introducir valores arbitrarios si existen definidos en Figma.

## Responsive

* Mobile-first.
* Adaptado a mobile, tablet y desktop.
* Utilizar tokens y breakpoints consistentes.
* Para tipografía responsive, priorizar `clamp()` cuando tenga sentido.
* Utilizar media queries cuando exista un cambio específico entre layouts.
* Escalar las imágenes proporcionalmente.


## Home

La Home incluirá animaciones sutiles:

* Apariciones suaves al hacer scroll.
* `opacity` + `transform`.
* Microinteracciones.
* Hover en botones, links y project cards.
* Priorizar CSS.
* Respetar `prefers-reduced-motion`.
* Evitar animaciones excesivas.

## Case Studies

Utilizar una estructura común mediante:

```text
/case-study/[slug]
```

Separar componentes y contenido para poder añadir nuevos proyectos sin duplicar código.

* En los casos de estudio hay un spyscroll en la barra lateral. Va marcando al usuario en que sección de la página está según marque el emphasis text

## Bilingüe

Idiomas:

* Español `/es`
* Inglés `/en`

Incluir selector **ES / EN**.

Al cambiar de idioma, mantener al usuario en la misma página o case study.

Separar los textos traducibles de los componentes.

## SEO

Implementar:

* Metadata por página.
* Title y description.
* Open Graph.
* Canonical.
* `hreflang` ES/EN.
* `robots.txt`.
* `sitemap.xml` dinámico con ambos idiomas.
* Favicon.

## Desarrollo

Priorizar:

* Código limpio y modular.
* Componentes reutilizables.
* HTML semántico.
* Accesibilidad.
* Performance.
* `next/image`.
* Server Components cuando sea posible.
* Client Components solo cuando sean necesarios.

Antes de añadir librerías, dependencias o complejidad arquitectónica, comprobar si realmente son necesarias.
