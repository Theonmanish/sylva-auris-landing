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
    <div className="min-h-screen bg-[#0B0F0D] text-[#EAEAEA] font-sans">
      <Navbar />
      <main>
        <FadeInOnScroll>
          <Hero />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Description />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <CareSection />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <GalleryPreview />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <About />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <VisitUs />
        </FadeInOnScroll>
        <FadeInOnScroll>
          <Contact />
        </FadeInOnScroll>
      </main>
      <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll>
    </div>
  );
}
