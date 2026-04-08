import Link from "next/link";
import React from "react";

const CareSection: React.FC = () => {
  return (
    <section
      id="care"
      aria-labelledby="intelligent-care"
      className="relative overflow-hidden border-b border-white/10 bg-transparent"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#128059]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#7a8fa6]/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-20 lg:flex lg:items-start lg:gap-12 lg:py-24 lg:px-8">
        <div className="flex-1 space-y-5">
          <h2
            id="intelligent-care"
            className="font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
          >
            Intelligent Care Companion
          </h2>
          <p className="text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            Every Sylva Auris terrarium is paired with a unique care code. Scan once to unlock a
            living profile that understands its species, layering and the light it receives .
          </p>
          <p className="text-sm leading-relaxed text-[#EAEAEA]/70 sm:text-base">
            The companion keeps quiet track of seasonal shifts—longer evenings, central heating,
            humid summers—and translates them into measured prompts: when to mist, rotate, or let
            the ecosystem rest.
          </p>
          <p className="text-sm leading-relaxed text-[#EAEAEA]/70 sm:text-base">
            Instead of generic watering schedules, you receive notes written for this exact piece . Over time, the profile refines itself around how you actually care,
            creating a calm loop between you and the glass.
          </p>
          <div className="pt-4">
            <Link
              href="https://care.sylvaauris.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex rounded-full bg-[#C6A85C] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#d9be79]"
            >
              Launch Care App
            </Link>
          </div>
        </div>
        <div className="mt-10 flex-1 lg:mt-0">
          <div className="mx-auto max-w-md space-y-2 text-sm text-[#EAEAEA]/70 lg:max-w-none">
            <p className="text-xs text-[#EAEAEA]/70">Care profile · SA-014 · In balance</p>
            <p>Light: North-facing, filtered. Adjusted for winter.</p>
            <p>Moisture: Cool and steady. Next mist in 3 days.</p>
            <p>Season: Late winter. Rest phase.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;

