"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";

const StickyCTA = dynamic(() => import("@/components/ui/StickyCTA").then((mod) => ({ default: mod.StickyCTA })), {
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
