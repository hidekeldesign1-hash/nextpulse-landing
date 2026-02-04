"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-visible bg-black px-4 pt-20 pb-20 sm:px-6 sm:pt-24 sm:pb-24 md:pb-28 lg:px-8 dark:bg-black"
    >
      {/* Modo claro: imagen de fondo (prioridad alta, sin lazy) */}
      <div className="absolute inset-0 z-0 overflow-hidden dark:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-light.png"
          alt=""
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      {/* Modo oscuro: imagen de fondo (lazy, se carga solo en dark) */}
      <div className="absolute inset-0 z-0 hidden overflow-hidden dark:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-dark.png"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Capa 3: contenido — recuadro glass (claro: estilo light / oscuro: estilo black theme) */}
      <div className="relative z-10 mx-auto max-w-4xl overflow-visible rounded-3xl border border-white/25 bg-white/15 px-6 py-10 text-center shadow-2xl shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-2xl dark:shadow-black/40 dark:backdrop-blur-2xl sm:px-8 sm:py-12 md:px-10 md:py-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hero-highlight)] dark:text-accent sm:mb-7 sm:text-xs sm:tracking-[0.25em]"
        >
          Tu negocio en internet
        </motion.p>

        <h1
          className="mb-3 overflow-visible text-[2rem] font-bold leading-[1.15] tracking-tight sm:mb-4 sm:text-4xl sm:leading-[1.12] md:text-5xl lg:text-6xl xl:text-[3.5rem]"
        >
          <span className="block text-black dark:text-white">Haz que tu negocio se vea</span>
          <span className="relative mt-1 block uppercase text-[var(--hero-highlight)] dark:text-accent">
            profesional
            <span
              className="absolute -bottom-1 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[var(--hero-highlight)]/80 to-transparent sm:w-28"
              aria-hidden
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-black/90 dark:text-white/85 sm:mb-14 sm:text-lg"
        >
          Diseñamos páginas web y publicidad claras, modernas y pensadas para que las personas correctas te contacten.
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
              className="group relative inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-black px-6 py-3.5 text-base font-semibold text-white shadow-glow-sm outline-none ring-2 ring-white/30 ring-offset-2 ring-offset-transparent transition-colors duration-200 hover:bg-[#D7C9B1] hover:text-black focus-visible:bg-[#D7C9B1] focus-visible:text-black focus-visible:ring-white dark:bg-accent dark:text-white dark:hover:bg-accent-hover dark:hover:text-white dark:focus-visible:bg-accent-hover dark:focus-visible:text-white sm:min-h-0 sm:w-auto sm:px-8 sm:py-4"
            >
              <span className="relative z-10">Platiquemos tu proyecto</span>
            </Link>
          </motion.div>
          <Link
            href="#proceso"
            className="flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3.5 text-base font-medium text-black backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/60 dark:border-white/40 dark:text-white dark:hover:border-white/60 sm:min-h-0 sm:px-7"
          >
            Ver cómo trabajamos
          </Link>
        </motion.div>
      </div>
    </section>
  );
});
