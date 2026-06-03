import Link from "next/link";
import Image from "next/image";
import React from "react";

const images: Array<{id:number,title:string,src:string}> = [];

function getLuxuryAltText(title: string): string {
  return `Sylva Auris handcrafted bioactive terrarium - ${title} - featuring tropical moss, layered botanical composition, and a premium glass finish`;
}

const GalleryPreview: React.FC = () => {
  return (
    <section
      id="gallery"
      aria-label="Gallery preview"
      className="relative overflow-hidden border-b border-white/5 bg-[#0B0F0D]"
    >
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#137a80]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#080839]/11 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24 lg:px-8">
        <div className="mb-12 space-y-4">
          <h2 className="font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl">
            Our Collection
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            Each Sylva Auris terrarium is a self-contained ecosystem, built from carefully selected plants, mosses, minerals, and glass.

Designed to maintain balance over time, every piece is crafted to bring a sense of calm, texture, and living beauty into contemporary spaces.
          </p>
          <Link
            href="/gallery"
            className="btn-luxury inline-flex rounded-full bg-[#C6A85C] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_0_24px_rgba(198,168,92,0.4)]"
          >
            View Gallery
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 6).map((image) => (
            <figure
              key={image.id}
              className="group relative overflow-hidden rounded-[1.75rem] border border-transparent bg-transparent transition-all duration-500 hover:border-white/15 hover:shadow-[0_22px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={getLuxuryAltText(image.title)}
                  suppressHydrationWarning
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[0.82] group-hover:blur-[1px]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="block font-serif text-sm tracking-[0.18em] text-[#F3EEDD] drop-shadow-[0_1px_14px_rgba(0,0,0,0.55)] sm:text-base">
                    {image.title}
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

