"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Hero } from "@/components/sections/Hero";

const Services = dynamic(() => import("@/components/sections/Services").then((m) => ({ default: m.Services })), {
  loading: () => <section className="min-h-[60vh]" aria-hidden />,
});

const Process = dynamic(() => import("@/components/sections/Process").then((m) => ({ default: m.Process })), {
  loading: () => <section className="min-h-[50vh]" aria-hidden />,
});

const CTA = dynamic(() => import("@/components/sections/CTA").then((m) => ({ default: m.CTA })), {
  loading: () => <section className="min-h-[40vh]" aria-hidden />,
});

const StickyCTA = dynamic(() => import("@/components/ui/StickyCTA").then((m) => ({ default: m.StickyCTA })), {
  ssr: false,
});

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  return (
    <>
      <Hero ref={heroRef} />
      <Services />
      <Process />
      <CTA ref={ctaRef} />
      <StickyCTA heroRef={heroRef} ctaRef={ctaRef} />
    </>
  );
}
