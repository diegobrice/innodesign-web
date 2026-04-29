import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Portfolio } from '@/components/sections/Portfolio';
import { WhyUs } from '@/components/sections/WhyUs';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
