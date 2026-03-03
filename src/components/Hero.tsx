import Link from "next/link";
import Image from "next/image";
import React from "react";


const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="border-b border-white/5 bg-black"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:py-32 lg:px-8">
        <div className="flex-1 space-y-8">
          <p className="animate-fade-in text-xs font-medium tracking-[0.3em] text-[#C6A85C]">
            LIVING OBJECTS OF QUIET LUXURY
          </p>
          <h1 className="animate-fade-in-delay-1 font-serif text-4xl leading-tight text-[#EAEAEA] sm:text-5xl lg:text-6xl">
            Curated Nature. Engineered to Thrive.
            
          </h1>
          <p className="animate-fade-in-delay-2 max-w-xl text-sm leading-relaxed text-[#EAEAEA]/70 sm:text-base">
            Sylva Auris composes glass-bound ecosystems. Each
            piece is paired with an intelligent companion that remembers how it likes to live.
          </p>
          <div className="animate-fade-in-delay-3 flex flex-wrap gap-4">
            <Link
              href="https://sylva-auris-care-l9d9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#C6A85C] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#d9be79]"
            >
              Open Care App
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border border-[#EAEAEA]/25 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#EAEAEA] transition-colors hover:border-[#C6A85C] hover:text-[#C6A85C]"
            >
              View Gallery
            </Link>
          </div>
        </div>
        {/* hero image shows below text on small screens, beside on large */}
        <div className="flex-1 flex justify-center items-center">
          <div className="hero-image w-full">
            <Image
              src="/heroimage.png"
              alt="Hero"
              width={800}
              height={600}
              loading="eager"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

