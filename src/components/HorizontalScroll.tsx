'use client';

import { useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const wrapper = scrollWrapperRef.current;
    if (!container || !wrapper) return;

    // We want to scroll horizontally based on the total width of the children
    // minus the width of the viewport.
    const getScrollAmount = () => {
      const containerWidth = wrapper.scrollWidth;
      const viewportWidth = document.documentElement.clientWidth;
      return -(containerWidth - viewportWidth + 120); // 120px buffer for breathing room at the end
    };

    const tween = gsap.to(wrapper, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${wrapper.scrollWidth}`, // Make the scroll distance exactly equal to the scroll width for a smooth 1:1 ratio
        pin: true,
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true, // Recalculates on resize
      },
    });

    // Bulletproof fix for React/Next.js layout shifts (e.g. custom fonts loading):
    // Watch the wrapper for any size changes and force GSAP to refresh its math.
    const ro = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    ro.observe(wrapper);

    return () => {
      ro.disconnect();
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ overflow: 'hidden' }}>
      <div 
        ref={scrollWrapperRef} 
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          width: 'max-content',
          height: '100vh',
          flexWrap: 'nowrap'
        }}
      >
        {children}
      </div>
    </div>
  );
}
