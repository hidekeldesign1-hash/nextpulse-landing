"use client";

import { motion } from "framer-motion";
import { ImagePlaceholder } from "../ui/ImagePlaceholder";

const services = [
  {
    title: "Tu marca clara y profesional",
    description:
      "Definimos cómo se ve y se comunica tu negocio para que las personas confíen en ti desde el primer vistazo.",
    icon: "◆",
  },
  {
    title: "Anuncios que traen clientes",
    description:
      "Creamos campañas simples y efectivas para que más personas te contacten y conozcan tu negocio.",
    icon: "◇",
  },
  {
    title: "Tu negocio visible en internet",
    description:
      "Preparamos tu página y contenido para que las personas te encuentren fácilmente en internet.",
    icon: "○",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-20 border-t border-border bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02)_0%,transparent_15%)] dark:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_0%,transparent_15%)] py-16 sm:scroll-mt-24 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Separador: línea con gradiente */}
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 md:mb-20 lg:mb-24"
        >
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-accent sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
            Servicios
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Cómo te ayudamos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-base">
            Te ayudamos a que tu negocio se vea bien y consiga más clientes.
          </p>
        </motion.div>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {services.map((service) => (
            <motion.li
              key={service.title}
              variants={item}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-accent/20 hover:bg-surface-elevated hover:shadow-glow-sm sm:rounded-2xl"
            >
              <div className="shrink-0 p-3 pb-0 sm:p-4 sm:pb-0 lg:p-5 lg:pb-0">
                <ImagePlaceholder
                  aspectRatio="video"
                  label={service.title}
                  slot={`service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="w-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 pt-4 sm:p-6 sm:pt-5 md:p-8 md:pt-5 lg:p-10 lg:pt-6">
                <span className="mb-3 block text-xl text-accent opacity-70 transition-opacity group-hover:opacity-100 sm:mb-4 sm:text-2xl">
                  {service.icon}
                </span>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground sm:mb-3 sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
