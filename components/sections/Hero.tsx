"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-visible bg-black px-4 pt-20 pb-20 sm:px-6 sm:pt-24 sm:pb-24 md:pb-28 lg:px-8"
    >
      {/* Capa 1: imagen de fondo (overflow solo aquí para no recortar el título) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center blur-[4px]"
        />
      </div>
      {/* Capa 2: overlay negro más fuerte para unir con el resto del sitio */}
      <div className="absolute inset-0 z-[1] bg-black/65" aria-hidden />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/40 to-black/60"
        aria-hidden
      />

      {/* Capa 3: contenido */}
      <div className="relative z-10 mx-auto max-w-4xl overflow-visible px-0 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:mb-7 sm:text-xs sm:tracking-[0.25em]"
        >
          Tu negocio en internet
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 overflow-visible text-[2rem] font-bold leading-[1.15] tracking-tight sm:mb-4 sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-6xl xl:text-[3.5rem]"
        >
          <span className="block text-white">Haz que tu negocio se vea</span>
          <span className="relative mt-1 block text-blue-500 uppercase">
            profesional
            <span
              className="absolute -bottom-1 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-400/80 to-transparent sm:w-28"
              aria-hidden
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/85 sm:mb-14 sm:text-lg"
        >
          Creamos páginas web y soluciones digitales claras, modernas y pensadas para convertir visitas en oportunidades reales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex justify-center sm:block"
          >
            <Link
              href="#contacto"
              className="group relative inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-glow-sm outline-none ring-2 ring-white/30 ring-offset-2 ring-offset-transparent transition-all hover:bg-accent-hover hover:shadow-glow hover:ring-white/50 focus-visible:ring-white sm:min-h-0 sm:w-auto sm:px-8 sm:py-4"
            >
              <span className="relative z-10">Quiero mi página</span>
            </Link>
          </motion.div>
          <Link
            href="#proceso"
            className="flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/60 sm:min-h-0 sm:px-7"
          >
            Ver cómo trabajamos
          </Link>
        </motion.div>
      </div>
    </section>
  );
});
