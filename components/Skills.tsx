import React from "react";
import Particles from "./Particles";
import TiltedCard from "./TiltedCard";
import { div } from "motion/react-client";

const skills = [
  {
    name: "React",
    Icon: "/icons/react.png",
    description: "Component-based UI for the web",
  },
  {
    name: "Next.js",
    Icon: "/icons/next.jpeg",
    description: "Full‑stack React framework",
  },
  {
    name: "TypeScript",
    Icon: "/icons/ts.png",
    description: "Typed superset of JavaScript",
  },
  {
    name: "JavaScript",
    Icon: "/icons/js.png",
    description: "Core language of the web",
  },
  {
    name: "Node.js",
    Icon: "/icons/node.png",
    description: "JavaScript runtime on the server",
  },
  {
    name: "Express.js",
    Icon: "/icons/express.png",
    description: "Minimal Node.js web framework",
  },
  {
    name: "Docker",
    Icon: "/icons/docker.png",
    description: "Containerization and deployment",
  },
];

function Skills() {
  return (
    <div className="min-h-screen">
      <div style={{ width: "100%", height: "600px", position: "absolute" }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="relative px-30 py-30 flex flex-col gap-7">
        <h1 className="font-satoshi text-4xl">Skills</h1>
        <div className="grid grid-cols-4  gap-4">
          {skills.map((item) => (
            <div key={item.name}>
              <TiltedCard
                imageSrc={item.Icon}
                altText={item.name}
                captionText={item.name}
                containerHeight="150px"
                containerWidth="150px"
                imageHeight="150px"
                imageWidth="150px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={
                  <p className="tilted-card-demo-text font-dm-sans">
                    {item.name}
                  </p>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
