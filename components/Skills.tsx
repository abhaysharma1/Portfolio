import React from "react";
import Particles from "./Particles";

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
      <div className="relative">Skills</div>
    </div>
  );
}

export default Skills;
