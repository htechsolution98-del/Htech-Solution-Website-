'use client';

import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to every `.reveal` element on the page
 * and adds the `.in` class when the element enters the viewport.
 * Must be rendered once at the page level.
 */
export default function useReveal(): void {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
