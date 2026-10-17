'use client';

import useReveal from '@/hooks/useReveal';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Technology from '@/components/Technology';
import Process from '@/components/Process';
import WhyChoose from '@/components/WhyChoose';
import CtaBand from '@/components/CtaBand';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HorizontalScroll from '@/components/HorizontalScroll';

export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <main id="top" style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-0)' }}>
        <Hero />
        <About />
        
        {/* Horizontal Scroll 1 */}
        <HorizontalScroll>
          <Services />
        </HorizontalScroll>

        {/* Vertical sections */}
        <Industries />
        <HorizontalScroll>
          <Process />
        </HorizontalScroll>

        {/* Horizontal Scroll 2 */}
        <HorizontalScroll>
          <Technology />
        </HorizontalScroll>

        {/* Vertical sections */}
        <WhyChoose />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
