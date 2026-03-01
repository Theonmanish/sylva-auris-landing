import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const galleryImages = [
  {
    id: 1,
    title: "Equinox Study",
    src: "https://images.pexels.com/photos/450516/pexels-photo-450516.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    title: "Auric Canopy",
    src: "https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    title: "Midnight Grove",
    src: "https://images.pexels.com/photos/569966/pexels-photo-569966.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 4,
    title: "River Glass",
    src: "https://images.pexels.com/photos/450516/pexels-photo-450516.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 5,
    title: "Winter Field",
    src: "https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 6,
    title: "Silent Orchard",
    src: "https://images.pexels.com/photos/569966/pexels-photo-569966.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0B0F0D] text-[#EAEAEA] font-sans">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <header className="mb-10 space-y-3">
          <p className="text-xs font-medium tracking-[0.3em] text-[#C6A85C]">GALLERY</p>
          <h1 className="font-serif text-3xl tracking-tight text-[#EAEAEA] sm:text-4xl">
            Selected specimens
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#EAEAEA]/75 sm:text-base">
            A minimal selection of Sylva Auris ecosystems. Each piece is photographed in soft,
            natural light to preserve the way it was composed in studio.
          </p>
        </header>
        <section aria-label="Gallery grid" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
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
              <figcaption className="border-t border-white/5 px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#EAEAEA]/75">
                  {image.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

