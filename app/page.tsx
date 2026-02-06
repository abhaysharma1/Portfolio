"use client";
import HeroSection from "@/components/heroSection";
import Me from "@/components/Me";
import Image from "next/image";
import { Ripples } from "ldrs/react";
import "ldrs/react/Ripples.css";
import { useEffect, useState } from "react";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Links from "@/components/Links";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    <Ripples size="45" speed="2" color="black" />;
  }

  return (
    <div className="scroll-smooth">
      <section id="Home" className="scroll-smooth">
        <HeroSection />
      </section>
      <section id="Me" className="scroll-smooth">
        <Me />
      </section>
      <section id="Projects" className="scroll-smooth">
        <Projects />
      </section>
      <section id="Skills" className="scroll-smooth">
        <Skills />
      </section>
      <section id="Skills" className="scroll-smooth">
        <Links />
      </section>
    </div>
  );
}
