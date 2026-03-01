import React from "react";

const Description: React.FC = () => {
  return (
    <section
      aria-labelledby="designed-ecosystems"
      className="border-b border-white/5 bg-[#0B0F0D]"
    >
      <div className="mx-auto max-w-4xl space-y-6 px-6 py-20 lg:py-24 lg:px-8">
        <h2
          id="designed-ecosystems"
          className="font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
        >
          Designed ecosystems, composed by hand.
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
          <p>
            Each Sylva Auris terrarium is built as a self-balancing landscape—layers of glass,
            mineral and moss tuned to hold light, temperature and moisture in quiet equilibrium.
          </p>
          <p>
            We design for rhythm instead of routine: soft cycles of growth and rest that respond to
            where the piece lives, from north-facing shelves to warm city windows.
          </p>
          <p>
            Beneath the glass, a discrete care profile accompanies every ecosystem. It translates
            subtle shifts—longer days, drier air, changing rooms—into gentle prompts, so tending
            your terrarium becomes an unhurried ritual rather than a task.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;

