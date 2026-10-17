'use client';

import { useEffect, useRef } from 'react';
import styles from './Stats.module.css';

interface StatItem {
  count: number;
  label: string;
}

const STATS: StatItem[] = [
  { count: 10, label: 'Years of experience' },
  { count: 20, label: 'Projects completed' },
  { count: 15, label: 'Clients served' },
  { count: 22, label: 'Technology professionals' },
];

function animateCounter(span: HTMLElement, target: number): void {
  let cur = 0;
  const step = Math.max(1, Math.round(target / 40));
  const t = setInterval(() => {
    cur += step;
    if (cur >= target) {
      cur = target;
      clearInterval(t);
    }
    span.textContent = String(cur);
  }, 30);
}

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cells = grid.querySelectorAll<HTMLElement>('[data-count]');
            cells.forEach((cell) => {
              const target = parseInt(cell.dataset.count ?? '0', 10);
              const span = cell.querySelector<HTMLElement>('span');
              if (span) animateCounter(span, target);
            });
            observer.unobserve(grid);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-tight border-top">
      <div className="wrap">
        <div className={`${styles.statsGrid} reveal`} ref={gridRef}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statCell}>
              <div className={styles.statNum} data-count={stat.count}>
                <span>0</span>
                <span className={styles.plus}>+</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
