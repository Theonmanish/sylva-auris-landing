import Link from "next/link";
import React from "react";

// keep your gallery picture files in `src/components/gallery-images`
// then import them here and add entries to the array below. e.g.
// import sample1 from "./gallery-images/sample1.jpg";
// import sample2 from "./gallery-images/sample2.png";
//
// const images = [
//   { id: 1, title: "Sample One", src: sample1 },
//   { id: 2, title: "Second Piece", src: sample2 },
// ];
//
// The component will automatically use the title as the alt text.

const images: Array<{id:number,title:string,src:string}> = [];

const GalleryPreview: React.FC = () => {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-preview"
      className="border-b border-white/5 bg-[#0B0F0D]"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="space-y-3">
            <h2
              id="gallery-preview"
              className="font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl"
            >
              Gallery preview
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#EAEAEA]/70 sm:text-base">
              A glimpse into the quiet architectures of Sylva Auris—each vessel composed to sit
              softly within light and shadow.
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden shrink-0 rounded-full border border-[#EAEAEA]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#EAEAEA] transition-colors hover:border-[#C6A85C] hover:text-[#C6A85C] md:inline-flex"
          >
            Explore Full Gallery
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.slice(0, 6).map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-white/5 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#EAEAEA]/70">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;

