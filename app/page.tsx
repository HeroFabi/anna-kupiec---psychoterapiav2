import Navbar from '@/components/sections/Navbar';
import { navLinks } from '@/lib/constants';
import Hero from '@/components/sections/Hero';
import Specialization from '@/components/sections/Specialization';
import Symptoms from '@/components/sections/Symptoms';
import Methods from '@/components/sections/Methods';
import InfoTiles from '@/components/sections/InfoTiles';
import About from '@/components/sections/About';
import Pricing from '@/components/sections/Pricing';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800 selection:bg-[#5A7358]/20 w-full overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <Specialization />
      <Symptoms />
      <Methods />
      <InfoTiles />
      <About />
      <Pricing />
      <Contact />
      <Footer navLinks={navLinks} />
    </main>
  );
}
