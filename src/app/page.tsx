import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import CareSection from "../components/CareSection";
import GalleryPreview from "../components/GalleryPreview";
import About from "../components/About";
import VisitUs from "../components/VisitUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B0F0D] text-[#EAEAEA] font-sans">
      <div className="living-bg" />
      <Navbar />
      <main className="relative z-10 pt-20">
        <FadeInOnScroll>
          <Hero />
        </FadeInOnScroll>

        <section>
          <FadeInOnScroll>
            <Description />
          </FadeInOnScroll>

          <FadeInOnScroll>
            <CareSection />
          </FadeInOnScroll>
        </section>

        <section>
          <FadeInOnScroll>
            <GalleryPreview />
          </FadeInOnScroll>

          <FadeInOnScroll>
            <About />
          </FadeInOnScroll>
        </section>

        <section>
          <FadeInOnScroll>
            <VisitUs />
          </FadeInOnScroll>

          <FadeInOnScroll>
            <Contact />
          </FadeInOnScroll>
        </section>
      </main>
      <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll>
    </div>
  );
}
