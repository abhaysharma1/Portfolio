import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/heroPhoto.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/heroVid.mp4" type="video/mp4" />
      </video>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content */}
      <section
        className="pb-20 pt-13 px-10 relative w-full h-screen flex flex-col"
        id="Home"
      >
        <div className="w-full flex justify-end">
          <ul className="flex gap-3 font-dm-sans mr-6 fixed z-100">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Me">Me</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Links">Links</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-2">
          <h1 className="text-7xl font-satoshi">Building the web,</h1>
          <h1 className="text-4xl font-satoshi">one product at a time</h1>
        </div>
      </section>
    </div>
  );
}
