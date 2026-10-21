import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisiMisi from "@/components/VisiMisi";
import Produk from "@/components/Produk";
import CaraKerja from "@/components/CaraKerja";
import Komitmen from "@/components/Komitmen";
import Impact from "@/components/Impact";
import ModelBisnis from "@/components/ModelBisnis";
import Mitra from "@/components/Mitra";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-daurin-cream text-daurin-dark antialiased">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <VisiMisi />
        <Produk />
        <CaraKerja />
        <Komitmen />
        <Impact />
        <ModelBisnis />
        <Mitra />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
