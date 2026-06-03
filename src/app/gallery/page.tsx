import Link from "next/link";
import React from "react";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const galleryDir = path.join(process.cwd(), "public", "galleryimages");
const galleryFileCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

function formatGalleryTitle(fileName: string): string {
  const baseName = fileName.replace(/\.[^/.]+$/, "");
  return baseName
    .replace(/[_.-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

const images: Array<{ id: number; title: string; src: string }> = (() => {
  try {
    if (!fs.existsSync(galleryDir)) return [];
    const files = fs
      .readdirSync(galleryDir)
      .filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f));
    files.sort((left, right) => galleryFileCollator.compare(left, right));
    return files.map((file, i) => ({
      id: i + 1,
      title: formatGalleryTitle(file),
      src: `/galleryimages/${encodeURIComponent(file)}`,
    }));
  } catch {
    return [];
  }
})();

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
        <nav className="mx-4 mt-4 flex items-center justify-between rounded-full border border-white/5 bg-black/20 px-6 py-3 backdrop-blur-xl">
          <Link
            href="#home"
            className="flex items-center gap-3 text-sm font-medium tracking-[0.24em] text-[#EAEAEA]"
          >
            <Image
              src="/logo.png"
              alt="Sylva Auris logo"
              width={50}
              height={50}
              priority
              className="h-10 w-10 "
            />

            <span className="block text-[10px] leading-none sm:text-sm">
              SYLVA AURIS
            </span>
          </Link>

          <div className="flex items-center gap-8 text-sm tracking-[0.08em]">
            <Link
              href="\#home"
              className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
            >
              Home
            </Link>

            <Link
              href="\#about"
              className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
            >
              About
            </Link>

            <Link
              href="/gallery"
              className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
            >
              Gallery
            </Link>

            <Link
              href="\#contact"
              className="hidden text-[#EAEAEA]/65 transition-all duration-300 hover:text-[#EAEAEA] md:block"
            >
              Contact
            </Link>

            <Link
              href="https://care.sylvaauris.in"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#C6A85C]/30 bg-[#C6A85C]/8 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#EAEAEA] transition-all duration-300 hover:border-[#C6A85C]/50 hover:bg-[#C6A85C]/15"
            >
              Care App
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <div className="animate-fade-in mb-4 font-serif text-2xl tracking-tight text-[#EAEAEA] sm:text-3xl">


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
                        <Image
                          src={image.src}
                          alt={getLuxuryAltText(image.title)}
                          suppressHydrationWarning
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.05]"
                          loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                          <span className="block text-sm tracking-[0.16em] text-[#F3EEDD] drop-shadow-[0_1px_14px_rgba(0,0,0,0.55)] sm:text-base">
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
        </div>
      </main>

      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs tracking-wider text-[#EAEAEA]/60 lg:px-8">
          <p>©  {new Date().getFullYear()}  Sylva Auris. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
