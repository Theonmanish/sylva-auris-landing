import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-sylva-auris"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-[#003b75]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#00a8e2]/11 blur-3xl" />
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24 lg:px-8">
        <h2
          id="about-sylva-auris"
          className="animate-fade-in mb-4 font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
        >
          About Sylva Auris
        </h2>
        <div className="animate-fade-in-delay-1 space-y-4 text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
          <p>
            Sylva Auris was founded from a fascination with small ecosystems and the quiet beauty they bring to everyday spaces.
          </p>
          <p>
            Working in limited collections, we create terrariums that combine traditional planting techniques with thoughtful design. Each piece is intended to be lived with, observed, and enjoyed over time.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;

