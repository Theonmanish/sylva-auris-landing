import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-sylva-auris"
      className="border-b border-white/5 bg-[#050806]"
    >
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24 lg:px-8">
        <h2
          id="about-sylva-auris"
          className="animate-fade-in mb-4 font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
        >
          About Sylva Auris
        </h2>
        <div className="animate-fade-in-delay-1 space-y-4 text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
          <p>
            Sylva Auris was founded from a quiet fascination with how small ecosystems hold light.
            We work slowly, in short collections, treating each terrarium as a one-of-one object
            rather than decor.
          </p>
          <p>
            Our studio sits between horticulture and interface design. We pair traditional
            glasswork and planting techniques with a restrained layer of technology—just enough
            intelligence to listen to change, never enough to distract from it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

