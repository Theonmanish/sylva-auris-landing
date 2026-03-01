import Link from "next/link";
import React from "react";

const CareSection: React.FC = () => {
  return (
    <section
      id="care"
      aria-labelledby="intelligent-care"
      className="border-b border-white/5 bg-[#050806]"
    >
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
              href="https://sylva-auris-care-l9d9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#C6A85C] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#d9be79]"
            >
              Launch Care App
            </Link>
          </div>
        </div>
        <div className="mt-10 flex-1 lg:mt-0">
          <div className="mx-auto max-w-md space-y-4 rounded-2xl border border-white/10 bg-[#0B0F0D]/80 p-5">
            <div className="flex items-center justify-between text-xs text-[#EAEAEA]/70">
              <span>Care profile · SA–014</span>
              <span className="rounded-full border border-emerald-500/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                In balance
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-[11px] text-[#EAEAEA]/70">
              <div className="space-y-1 rounded-lg border border-white/5 bg-black/30 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#C6A85C]">Light</p>
                <p>North-facing, filtered</p>
                <p className="text-[10px] text-[#EAEAEA]/40">Adjusted for winter</p>
              </div>
              <div className="space-y-1 rounded-lg border border-white/5 bg-black/30 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#C6A85C]">Moisture</p>
                <p>Cool &amp; steady</p>
                <p className="text-[10px] text-[#EAEAEA]/40">Next mist · 3 days</p>
              </div>
              <div className="space-y-1 rounded-lg border border-white/5 bg-black/30 p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#C6A85C]">Season</p>
                <p>Late winter</p>
                <p className="text-[10px] text-[#EAEAEA]/40">Rest phase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareSection;

