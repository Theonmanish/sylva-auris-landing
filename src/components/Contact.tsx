import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-sylva-auris"
      className="border-b border-white/5 bg-[#0B0F0D]"
    >
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24 lg:px-8">
        <div className="mb-8 space-y-3">
          <h2
            id="contact-sylva-auris"
            className="font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
          >
            Contact
          </h2>
          <p className="text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            Contact us for more information.
          </p>
          <div className="space-y-1 text-sm text-[#EAEAEA]/80">
            <p>
              Email:{" "}
              <a
                href="mailto:sylvaauris@gmail.com"
                className="underline decoration-[#C6A85C]/60 underline-offset-4 hover:text-[#C6A85C]"
              >
                sylvaauris@gmail.com
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/sylva.auris"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[#C6A85C]/60 underline-offset-4 hover:text-[#C6A85C]"
              >
                @sylva.auris
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

