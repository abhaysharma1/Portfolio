"use client";
import React from "react";
import TrueFocus from "./TrueFocus";
import Shuffle from "./Shuffle";
import { div } from "motion/react-client";
import SplashCursor from "./SplashCursor";

function Me() {
  return (
    <div className="relative flex min-h-screen px-30 py-30" id="#Me">
      <SplashCursor />
      <div className=" ">
        <Shuffle
          text="About Me"
          shuffleDirection="right"
          duration={2}
          animationMode="evenodd"
          shuffleTimes={3}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          // triggerOnce={true}
          triggerOnHover
          respectReducedMotion={true}
          loop={false}
          loopDelay={0}
          className="text-6xl"
        />

        <div className="font-dm-sans w-200 mt-10">
          I’m a full-stack developer focused on building fast, scalable web
          applications. I primarily work with React, Next.js, and modern backend
          tools to turn ideas into production-ready products. I value clean
          code, thoughtful design, and performance-driven development. I’m
          always learning and improving through hands-on projects.
        </div>
      </div>
    </div>
  );
}

export default Me;
