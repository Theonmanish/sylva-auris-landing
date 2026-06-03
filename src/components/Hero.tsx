import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 bg-transparent">
      <div className="pointer-events-none absolute -left-28 top-1/3 h-72 w-72 rounded-full bg-[#3b6f52]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#C6A85C]/10 blur-3xl" />

      <div className="mx-auto grid min-h-[60vh] max-w-6xl items-center gap-8 px-6 py-6 sm:min-h-[75vh] sm:py-12 lg:min-h-[88vh] lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-7">
          <div className="p-0 sm:p-4">
            <h1 className="animate-fade-in-delay-1 mt-2 font-[var(--font-playfair)] text-4xl leading-[1.08] text-[#f1f1f1] sm:text-5xl lg:text-6xl">
              Sylva Auris
              <span className="mt-2 block text-[#C6A85C]">
                Nature, curated to endure.
              </span>
            </h1>

            <p className="animate-fade-in-delay-2 mt-5 max-w-2xl text-sm leading-relaxed tracking-[0.02em] text-[#EAEAEA]/78 sm:text-base">
              Handcrafted terrariums designed as living objects of quiet luxury.
              Each ecosystem is carefully composed by hand and paired with a
              digital care companion that helps it thrive through changing seasons
              and environments.
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
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

