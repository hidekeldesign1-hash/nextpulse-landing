"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { RefObject } from "react";

type StickyCTAProps = {
  heroRef: RefObject<HTMLElement | null>;
  ctaRef: RefObject<HTMLElement | null>;
};

const HERO_LEFT_THRESHOLD = 0.92;
const CTA_VISIBLE_THRESHOLD = 0.08;

export function StickyCTA({ heroRef, ctaRef }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start start"],
  });

  const updateVisibility = () => {
    const h = heroProgress.get();
    const c = ctaProgress.get();
    const leftHero = h >= HERO_LEFT_THRESHOLD;
    const ctaInView = c > CTA_VISIBLE_THRESHOLD;
    setVisible(leftHero && !ctaInView);
  };

  useMotionValueEvent(heroProgress, "change", updateVisibility);
  useMotionValueEvent(ctaProgress, "change", updateVisibility);

  useEffect(() => {
    updateVisibility();
    const t = setTimeout(updateVisibility, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.92, y: 8 }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 18,
            mass: 0.8,
          }}
          className="fixed bottom-6 right-4 z-40 sm:bottom-8 sm:right-6 md:bottom-10 md:right-8"
          aria-hidden={!visible}
        >
          <Link
            href="#contacto"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/15 bg-accent/75 px-5 py-2.5 text-sm font-medium text-primary shadow-[0_0_24px_-4px_var(--accent-glow)] backdrop-blur-md dark:text-white transition-colors duration-200 hover:bg-accent hover:border-accent hover:shadow-[0_0_36px_-2px_var(--accent-glow)] focus-visible:outline-none focus-visible:bg-accent focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-[48px] sm:px-6 sm:py-3 sm:text-base"
          >
            Quiero mi página
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
