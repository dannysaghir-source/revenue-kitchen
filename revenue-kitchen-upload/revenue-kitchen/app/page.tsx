import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Who from "@/components/Who";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Contact />
      <Who />
      <FAQ />
      <Footer />
      <StickyCTA />
    </main>
  );
}
