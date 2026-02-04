"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { RefObject } from "react";

type StickyCTAProps = {
  heroRef: RefObject<HTMLElement | null>;
  ctaRef: RefObject<HTMLElement | null>;
};

const HERO_LEFT_THRESHOLD_DESKTOP = 0.55;
const HERO_LEFT_THRESHOLD_MOBILE = 0.3;
const MOBILE_BREAKPOINT = 640;
const CTA_VISIBLE_THRESHOLD = 0.08;

export function StickyCTA({ heroRef, ctaRef }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "start start"],
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateVisibility = () => {
    if (!heroRef.current) return;
    const h = heroProgress.get();
    const c = ctaRef.current ? ctaProgress.get() : 0;
    const threshold = isMobile ? HERO_LEFT_THRESHOLD_MOBILE : HERO_LEFT_THRESHOLD_DESKTOP;
    const leftHero = h >= threshold;
    const ctaInView = c > CTA_VISIBLE_THRESHOLD;
    setVisible(leftHero && !ctaInView);
  };

  useMotionValueEvent(heroProgress, "change", updateVisibility);
  useMotionValueEvent(ctaProgress, "change", updateVisibility);

  useEffect(() => {
    updateVisibility();
    const t1 = setTimeout(updateVisibility, 100);
    const t2 = setTimeout(updateVisibility, 400);
    const onScroll = () => requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

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
          className="fixed bottom-4 right-3 z-40 sm:bottom-6 sm:right-4 md:bottom-8 md:right-6 lg:bottom-10 lg:right-8"
          aria-hidden={!visible}
        >
          <Link
            href="#contacto"
            className="inline-flex min-h-[36px] min-w-0 max-w-[calc(100vw-1.5rem)] items-center justify-center rounded-full border border-white/15 bg-accent/75 px-3 py-2 text-xs font-medium text-primary shadow-[0_0_20px_-4px_var(--accent-glow)] backdrop-blur-md dark:text-white transition-colors duration-200 hover:bg-accent hover:border-accent hover:shadow-[0_0_28px_-2px_var(--accent-glow)] focus-visible:outline-none focus-visible:bg-accent focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-[44px] sm:px-5 sm:py-2.5 sm:text-sm md:min-h-[48px] md:px-6 md:py-3 md:text-base"
          >
            Platiquemos tu proyecto
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
