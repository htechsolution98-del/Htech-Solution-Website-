'use client';

import { ReactLenis, type LenisRef } from 'lenis/react';
import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    
    // Connect Lenis to GSAP Ticker
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0); // Prevent GSAP from trying to catch up

    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }
    
    return () => {
      gsap.ticker.remove(update);
      if (lenis) {
        lenis.off('scroll', ScrollTrigger.update);
      }
    };
  }, []);

  // Update ScrollTrigger whenever Lenis scrolls
  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false}
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
