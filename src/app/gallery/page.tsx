import Link from "next/link";
import React from "react";
import TerrariumScroll from "../../components/TerrariumScroll";

// Import gallery images here
// import sample1 from "../../components/gallery-images/sample1.jpg";
// import sample2 from "../../components/gallery-images/sample2.png";
//
// const images = [
//   { id: 1, title: "Sample One", src: sample1 },
//   { id: 2, title: "Second Piece", src: sample2 },
// ];

const images: Array<{ id: number; title: string; src: string }> = [];

function getLuxuryAltText(title: string): string {
  return `Sylva Auris handcrafted bioactive terrarium - ${title} - featuring tropical moss, layered botanical composition, and a premium glass finish`;
}

export const metadata = {
  title: "Gallery | Sylva Auris",
  description: "Explore our complete collection of handcrafted botanical terrariums and bioactive ecosystems. Each piece is uniquely composed and available exclusively at Soans Farm, Moodbidri.",
  keywords: [
    "terrarium gallery",
    "botanical collection",
    "Sylva Auris gallery",
    "handcrafted terrariums",
    "bioactive ecosystems gallery",
  ],
  openGraph: {
    title: "Gallery | Sylva Auris",
    description: "Explore our complete collection of handcrafted botanical terrariums and bioactive ecosystems.",
    url: "https://sylvaauris.in/gallery",
    type: "website",
    images: [
      {
        url: "https://sylvaauris.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sylva Auris Gallery",
      },
    ],
  },
  alternates: {
    canonical: "https://sylvaauris.in/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B0F0D] text-[#EAEAEA] font-sans">
      <div className="living-bg" />
      
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex w-full items-center justify-between bg-[#0B0F0D]/65 py-3.5 pr-6 backdrop-blur-sm">
          <Link href="/#home" className="flex items-center px-10 text-sm font-semibold tracking-[0.38em] text-[#EAEAEA]">
            SYLVA AURIS
          </Link>
          <div className="ml-auto flex items-center gap-8 text-sm text-[#EAEAEA]/80">
            <Link href="/#home" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
              Home
            </Link>
            <Link href="/#about" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
              About
            </Link>
            <Link href="/#gallery" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
              Gallery
            </Link>
            <Link href="/#contact" className="hidden transition-colors hover:text-[#EAEAEA] md:block">
              Contact
            </Link>
            <Link
              href="https://care.sylvaauris.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury mr-3 rounded-full border border-[#C6A85C]/40 bg-[#C6A85C]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#EAEAEA] transition-colors hover:bg-[#C6A85C]/20"
            >
              Open Care App
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <TerrariumScroll />
        
        <section className="relative overflow-hidden border-b border-white/5 bg-[#0B0F0D] pt-20">
          <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#4f6d46]/14 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#cfb37a]/11 blur-3xl" />
          
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24 lg:px-8">
            <div className="mb-12">
              <Link
                href="/#gallery"
                className="inline-flex items-center gap-2 mb-6 text-sm text-[#EAEAEA]/70 hover:text-[#C6A85C] transition-colors"
              >
                ← Back to Home
              </Link>
              <h1 className="font-serif text-3xl tracking-tight text-[#EAEAEA] sm:text-4xl md:text-5xl">
                Complete Collection
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
                Browse our full collection of handcrafted terrariums. Each piece is uniquely composed 
                and paired with an intelligent care companion.
              </p>
            </div>

            {images.length === 0 ? (
              <div className="flex items-center justify-center min-h-[60vh] text-center">
                <div>
                  <p className="text-base text-[#EAEAEA]/60 mb-4">Gallery coming soon.</p>
                  
                </div>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {images.map((image) => (
                  <figure
                    key={image.id}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-transparent bg-transparent transition-all duration-500 hover:border-white/15 hover:shadow-[0_22px_60px_rgba(0,0,0,0.28)]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={image.src}
                        alt={getLuxuryAltText(image.title)}
                        className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[0.82] group-hover:blur-[1px]"
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
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs tracking-wider text-[#EAEAEA]/60 lg:px-8">
          <p>&copy; 2025 Sylva Auris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
