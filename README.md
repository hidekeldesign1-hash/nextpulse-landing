# Komvos Landing

Landing de Komvos construida con Next.js 15 (App Router), TypeScript, Tailwind CSS y Framer Motion.

## Requisitos

- Node.js 18+
- npm (o yarn / pnpm)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Build para producción

```bash
npm run build
npm start
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub (o GitLab / Bitbucket).
2. En [vercel.com](https://vercel.com), importa el proyecto.
3. Vercel detectará Next.js automáticamente. No hace falta configuración extra.
4. Despliega. El comando de build por defecto es `next build`.

### Opción con Vercel CLI

```bash
npm i -g vercel
vercel
```

Sigue los pasos y el proyecto quedará desplegado y listo para producción.

## Estructura del proyecto

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       └── CTA.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Tecnologías

- **Next.js 15** – App Router, React Server Components
- **TypeScript** – Tipado estático
- **Tailwind CSS** – Estilos utility-first
- **Framer Motion** – Animaciones suaves
