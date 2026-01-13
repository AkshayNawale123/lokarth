import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Concerns } from "@/components/Concerns";
import { Verticals } from "@/components/Verticals";
import { SuryAmrit } from "@/components/Suryamrut";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Concerns />
      <Verticals />
      <SuryAmrit />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
