import React from "react";

const VisitUs: React.FC = () => {
  return (
    <section
      id="visit"
      aria-labelledby="visit-us"
      className="border-b border-white/5 bg-[#0B0F0D]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:flex lg:flex-row lg:items-start lg:gap-12 lg:py-24 lg:px-8">
        <div className="mb-8 flex-1 lg:mb-0">
          <h2
            id="visit-us"
            className="mb-4 font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
          >
            Visit Us
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            Sylva Auris terrariums are exclusively available at Soans Farm, Moodbidri, Karnataka.
            Experience the collection in person at our official retail location.
          </p>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-white/10 max-w-md lg:max-w-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1633.8546581342455!2d75.0000468947801!3d13.100252748314013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb5532d0a50835%3A0x4fca633a88c45486!2sSoans%20Farm!5e0!3m2!1sen!2sin!4v1772281248789!5m2!1sen!2sin&maptype=satellite"
            width="100%"
            height="260"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Soans Farm location"
            className="block w-full h-[260px] lg:h-[280px]"
          />
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
