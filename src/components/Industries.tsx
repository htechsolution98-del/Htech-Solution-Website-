import styles from './Industries.module.css';

interface Industry {
  title: string;
  desc: string;
}

const INDUSTRIES: Industry[] = [
  { title: 'Healthcare', desc: 'Secure, compliant systems for patient data and care delivery.' },
  { title: 'Finance & Banking', desc: 'Resilient platforms built for accuracy, audit and scale.' },
  { title: 'Education', desc: 'Digital learning and campus systems that scale with enrollment.' },
  { title: 'Retail & E‑Commerce', desc: 'Storefronts and backends engineered for peak traffic.' },
  { title: 'Manufacturing', desc: 'Automation and monitoring across the production line.' },
  { title: 'Logistics & Transportation', desc: 'Real-time tracking and fleet systems that move with you.' },
  { title: 'Government & Public Sector', desc: 'Reliable, secure platforms for public services.' },
  { title: 'Telecommunications', desc: 'High-availability systems built for constant connectivity.' },
];

export default function Industries() {
  return (
    <section className="section" id="industries" style={{ width: '100%' }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Industries</div>
          <h2>Built for the sectors that can&apos;t afford downtime.</h2>
        </div>
        <div className={`${styles.industryRow} reveal`}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className={styles.industryCard}>
              <h4>{ind.title}</h4>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
