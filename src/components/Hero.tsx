import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 bg-transparent">
      <div className="pointer-events-none absolute -left-28 top-1/3 h-72 w-72 rounded-full bg-[#3b6f52]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#C6A85C]/10 blur-3xl" />

      <div className="mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <div className="p-2 sm:p-4">
            <p className="animate-fade-in text-[11px] font-medium tracking-[0.34em] text-[#C6A85C]">
              BOTANICAL CRAFT · DIGITAL INTELLIGENCE
            </p>
            <h1 className="animate-fade-in-delay-1 mt-5 font-[var(--font-playfair)] text-4xl leading-[1.08] text-[#f1f1f1] sm:text-5xl lg:text-6xl">
              Sylva Auris
              <span className="mt-2 block text-[#C6A85C]">Nature, curated to endure.</span>
            </h1>
            <p className="animate-fade-in-delay-2 mt-6 max-w-2xl text-sm leading-relaxed tracking-[0.02em] text-[#EAEAEA]/78 sm:text-base">
              Handcrafted terrariums shaped as living objects of quiet luxury, paired with a
              precision care companion that responds to season, light, and rhythm.
            </p>
            <div className="animate-fade-in-delay-3 mt-8 flex flex-wrap gap-4">
              <Link
                href="https://care.sylvaauris.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury rounded-full bg-[#C6A85C] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_24px_rgba(198,168,92,0.4)]"
              >
                Open Care App
              </Link>
              <Link
                href="/gallery"
                className="btn-luxury rounded-full border border-[#EAEAEA]/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#EAEAEA] transition-colors duration-300 hover:border-[#C6A85C] hover:text-[#C6A85C]"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-delay-2 lg:col-span-5">
          <div className="p-2 sm:p-4">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#9be7bd]">Digital Care Companion</p>
            <h2 className="mt-3 font-[var(--font-playfair)] text-2xl leading-tight text-[#EAEAEA]">
              SA profile adapts with your ecosystem
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#EAEAEA]/72">
              Each specimen carries a unique code. The care profile understands your terrarium
              composition and adjusts guidance to daily light and seasonal moisture shifts.
            </p>

            <div className="mt-6 text-[11px] text-[#EAEAEA]/75">
              <p>
                Light: Adaptive · Moisture: Balanced · Season: Aware
              </p>
            </div>

            <Link
              href="https://care.sylvaauris.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury mt-6 inline-flex rounded-full border border-[#9be7bd]/50 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d0ffea] transition-all duration-300 hover:bg-[#9be7bd]/10"
            >
              Launch Companion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

