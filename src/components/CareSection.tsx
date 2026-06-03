import React from "react";
import Image from "next/image";

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
            Digital Care Companion
          </h2>
          <p className="text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            Every Sylva Auris terrarium includes a unique care profile.
          </p>
          <p className="text-sm leading-relaxed text-[#EAEAEA]/70 sm:text-base">
            Personalized guidance adapts to your ecosystem, helping you understand light, moisture, and seasonal changes with minimal intervention.
          </p>
        </div>
        <div className="mt-10 flex-1 lg:mt-0">
          <div className="mx-auto max-w-md space-y-2 text-sm text-[#EAEAEA]/70 lg:max-w-none">
            <Image
              src="/careprofile.png"
              alt="care profile"
              suppressHydrationWarning
              width={1200}
              height={900}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;

