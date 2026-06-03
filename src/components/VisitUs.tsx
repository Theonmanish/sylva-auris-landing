import React from "react";

const VisitUs: React.FC = () => {
  return (
    <section
      id="visit"
      aria-labelledby="visit-us"
      className="relative overflow-hidden border-b border-white/5 bg-[#0B0F0D]"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#1a6d76]/14 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#092a39]/11 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-20 lg:flex lg:flex-row lg:items-start lg:gap-12 lg:py-24 lg:px-8">
        <div className="mb-8 flex-1 lg:mb-0">
          <h2
            id="visit-us"
            className="mb-4 font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
          >
            Visit Us
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            Sylva Auris terrariums are available exclusively at:

          </p>
          <p className="max-w-xl text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            Soans Farm
Moodbidri, Karnataka
          </p>
          <a
            href="https://maps.google.com/?q=Soans+Farm+Moodbidri+Karnataka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex underline decoration-[#C6A85C]/60 underline-offset-4 hover:text-[#C6A85C]"
          >
            Get Directions →
          </a>
        </div>
        <div className="min-w-0 flex-1 max-w-md lg:max-w-sm">
          <div className="flex h-[260px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] lg:h-[280px]">
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.34em] text-[#C6A85C]">
                Location
              </p>
              <h3 className="font-serif text-xl text-[#EAEAEA]">Soans Farm</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#EAEAEA]/72">
                Moodbidri, Karnataka
                
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Soans+Farm+Moodbidri+Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full border border-[#C6A85C]/30 bg-[#C6A85C]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#EAEAEA] transition-colors hover:bg-[#C6A85C]/20"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
