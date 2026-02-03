"use client";

import { useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { StickyCTA } from "@/components/ui/StickyCTA";

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
