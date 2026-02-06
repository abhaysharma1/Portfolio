import React from "react";
import Threads from "./Threads";

function Projects() {
  return (
    <div className="min-h-screen ">
      <div style={{ width: "100%", height: "400px", position: "absolute" }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>
      <div className="relative  px-30 py-30 min-h-screen">
        <div className="h-45 w-full">
          <h1 className="font-satoshi text-5xl">My Projects</h1>
        </div>
        <div className="px-10 flex w-full justify-center">
          <div className="group flex flex-col gap-3 w-100  border border-gray-900/80 p-4 rounded-xl bg-black/40 shadow-sm backdrop-blur-sm  transition-shadow duration-700 ease-out hover:-translate-y-1 hover:shadow-gray-800/60 cursor-pointer">
            <img
              src="/codeColiseum.png"
              alt="CodeColiseum preview"
              className="mix-blend-color-burn  w-full aspect-video object-cover object-left rounded-lg transition-transform duration-3000 ease-out group-hover:scale-110"
            />

            <h1 className="font-dm-sans text-xs">CodeColiseum</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
