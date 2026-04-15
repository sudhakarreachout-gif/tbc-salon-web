import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Stylists from "@/components/Stylists";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-tbc-cream">
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <Stylists />
      <Booking />
      <Footer />
    </main>
  );
}
