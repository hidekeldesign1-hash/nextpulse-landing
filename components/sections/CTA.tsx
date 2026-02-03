"use client";

import { forwardRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BULLETS = [
  "Diseño claro",
  "Mensajes simples",
  "Guía al usuario paso a paso",
  "Llamados a la acción visibles",
  "Navegación intuitiva",
  "Estructura fácil de entender",
  "Optimizada para celular",
  "Adaptable a cualquier pantalla",
  "Carga rápida",
  "Experiencia fluida",
  "Diseño moderno y actual",
  "Contenido ordenado",
  "Pensada para convertir",
];

const BULLET_DURATION_MS = 3200;

export const CTA = forwardRef<HTMLElement>(function CTA(_, ref) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % BULLETS.length);
    }, BULLET_DURATION_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative scroll-mt-20 border-t border-border bg-[linear-gradient(to_top,rgba(0,0,0,0.03)_0%,transparent_40%)] dark:bg-[linear-gradient(to_top,rgba(255,255,255,0.04)_0%,transparent_40%)] py-16 sm:scroll-mt-24 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Separador: doble línea sutil */}
      <div className="absolute left-0 right-0 top-0 flex flex-col gap-1" aria-hidden>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent" />
        <div className="mx-auto h-px w-3/4 max-w-md bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      {/* Fondo de profundidad inferior */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-gradient-to-t from-surface/40 to-transparent"
        aria-hidden
      />
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.75rem]">
          ¿Listo para tener una página que sí represente tu negocio?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
          Cuéntanos tu idea y te diremos cómo podemos ayudarte.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href="mailto:hola@nextpulse.com"
            className="flex min-h-[48px] items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-medium text-white shadow-glow-sm transition-all hover:bg-accent-hover hover:shadow-glow sm:min-h-0 sm:px-8 sm:py-4"
          >
            Quiero empezar
          </Link>
          <Link
            href="#"
            className="flex min-h-[48px] items-center justify-center rounded-full border border-border-strong bg-surface px-6 py-3.5 text-base font-medium text-foreground transition-all hover:bg-surface-elevated hover:border-muted-soft/30 sm:min-h-0 sm:px-8 sm:py-4"
          >
            Agendar llamada
          </Link>
        </div>
        <p className="mt-8 text-sm text-muted sm:mt-10">
          Sin compromiso. Te respondemos pronto.
        </p>

        {/* Texto principal (recuadro glass blur) + bullets animados */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 md:mt-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_0_24px_-4px_rgba(59,130,246,0.35)] backdrop-blur-md sm:px-8 sm:py-10 md:px-10 md:py-12">
            <p className="mx-auto max-w-lg text-center text-base leading-relaxed text-muted sm:text-lg">
              No hacemos páginas solo para verse bonitas.
              <br className="hidden sm:inline" />{" "}
              <span className="mt-2 block sm:mt-1 sm:inline">
                Diseñamos páginas que explican tu negocio, guían al usuario y generan acción.
              </span>
            </p>
          </div>
          <div className="mt-10 min-h-[3rem] sm:mt-12 sm:min-h-[3.5rem] md:mt-14">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={currentIndex}
                initial={{ x: 32, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -32, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center text-base font-medium text-muted-soft sm:text-lg md:text-[1.1rem]"
              >
                {BULLETS[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          {/* Barra con glow azul (pegada a los bullets, ancho reducido) */}
          <div
            className="mx-auto mt-5 h-px max-w-sm bg-gradient-to-r from-transparent via-blue-500/70 to-transparent shadow-[0_0_12px_1px_rgba(59,130,246,0.35)] sm:mt-6"
            aria-hidden
          />
        </div>
      </motion.div>
    </section>
  );
});
