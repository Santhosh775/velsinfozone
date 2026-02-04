import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PartnersMarquee } from "@/components/partners-marquee";
import { ProgramsSection } from "@/components/programs-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PartnersMarquee />
      <ProgramsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
