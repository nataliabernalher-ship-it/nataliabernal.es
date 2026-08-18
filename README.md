# Portfolio Natalia Bernal

Portfolio profesional bilingüe (ES/EN), diseñado en Figma y desarrollado con Next.js.

## Stack

- Next.js (App Router, Turbopack)
- React + TypeScript
- ESLint
- React Compiler
- CSS Modules + CSS variables / design tokens
- Sin Tailwind CSS

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La raíz redirige a `/es` o `/en` según el idioma del navegador.

## Rutas

- `/es`, `/en`
- `/es/case-study/[slug]`, `/en/case-study/[slug]`

Los case studies se definen en `src/data/case-studies.ts`. Los textos de interfaz viven en `src/messages/`.
