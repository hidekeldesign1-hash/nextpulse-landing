"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <Link
          href="/"
          className="relative flex h-8 w-28 shrink-0 items-center transition-opacity hover:opacity-85 sm:h-9 sm:w-32"
          onClick={closeMenu}
          aria-label="Next Pulse - Inicio"
        >
          <Image
            src="/logo-nextpulse.png?v=2"
            alt="Next Pulse"
            fill
            className="object-contain object-left"
            sizes="(max-width: 640px) 112px, 128px"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          <li>
            <Link
              href="#servicios"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="#proceso"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Proceso
            </Link>
          </li>
          <li>
            <Link
              href="#contacto"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-glow-sm transition-all hover:bg-accent-hover hover:shadow-glow"
            >
              Contactar
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              <li>
                <Link
                  href="#servicios"
                  onClick={closeMenu}
                  className="block rounded-lg py-3 px-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#proceso"
                  onClick={closeMenu}
                  className="block rounded-lg py-3 px-3 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  Proceso
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="#contacto"
                  onClick={closeMenu}
                  className="block rounded-full bg-accent py-3.5 text-center text-base font-medium text-white shadow-glow-sm"
                >
                  Contactar
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
