"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Conocerte",
    description:
      "Hablamos contigo para entender tu negocio y lo que necesitas.",
  },
  {
    number: "02",
    title: "Propuesta clara",
    description:
      "Te mostramos una propuesta sencilla con tiempos y entregables claros.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Diseñamos y construimos tu página manteniéndote al tanto del avance.",
  },
  {
    number: "04",
    title: "Entrega y mejora",
    description:
      "Publicamos tu proyecto y te ayudamos a mejorarlo si lo necesitas.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-20 border-t border-border py-16 sm:scroll-mt-24 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="flex items-center justify-center gap-2 pt-6 sm:gap-3 sm:pt-8" aria-hidden>
        <span className="h-px w-8 bg-border-strong sm:w-12 lg:w-16" />
        <span className="h-1 w-1 rounded-full bg-accent/60" />
        <span className="h-px w-8 bg-border-strong sm:w-12 lg:w-16" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-16 md:mb-20"
        >
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-accent sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
            Proceso
          </p>
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
            Cómo trabajamos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4">
            Un proceso sencillo, paso a paso.
          </p>
        </motion.div>

        {/* Mobile: columna (número arriba). Desktop: fila (número a la izquierda) */}
        <ul className="space-y-4 sm:space-y-6 md:space-y-8">
          {steps.map((step, index) => {
            const isAccent = index % 2 === 1;
            return (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col overflow-hidden rounded-xl px-5 py-6 shadow-lg sm:rounded-2xl sm:px-6 sm:py-8 md:flex-row md:items-center md:gap-8 md:px-8 md:py-10 lg:gap-16 lg:px-12 lg:py-12 ${
                  isAccent
                    ? "bg-accent text-white"
                    : "bg-surface text-foreground dark:bg-surface-elevated"
                }`}
              >
                {/* Patrón geométrico sutil en bloques con acento */}
                {isAccent && (
                  <div
                    className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.08)_100%)]"
                    aria-hidden
                  />
                )}

                {/* Número: más pequeño en móvil, grande en desktop */}
                <div className="relative z-10 flex-shrink-0">
                  <span
                    className={`block text-5xl font-bold tabular-nums sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${
                      isAccent ? "number-outline-light" : "number-outline-dark"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Título y descripción */}
                <div className="relative z-10 flex-1 min-w-0">
                  <h3
                    className={`mb-1.5 text-lg font-bold tracking-tight sm:mb-2 sm:text-xl md:text-2xl ${
                      isAccent ? "text-white" : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed md:text-base ${
                      isAccent ? "text-white/90" : "text-muted"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
