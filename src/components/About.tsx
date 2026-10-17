import styles from './About.module.css';

interface InfoRow {
  key: string;
  value: string;
  highlight?: boolean;
}

const INFO_ROWS: InfoRow[] = [
  { key: 'company', value: 'Htech Solutions Pvt. Ltd.' },
  { key: 'founded', value: '2014' },
  { key: 'hq', value: 'Ahmedabad, India' },
  { key: 'focus', value: 'Software · AI · Cloud · Digital Transformation' },
  { key: 'serves', value: 'Startups → Enterprises' },
  { key: 'status', value: '● Actively building', highlight: true },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className={`wrap ${styles.aboutGrid}`}>
        <div className="reveal">
          <div className={styles.aboutPanel}>
            {INFO_ROWS.map((row) => (
              <div key={row.key} className={styles.line}>
                <span className={styles.k}>{row.key}</span>
                <span
                  className={styles.v}
                  style={row.highlight ? { color: 'var(--cyan)' } : undefined}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: '.1s' }}>
          <div className="eyebrow">About Htech</div>
          <h2>Your technology partner for digital growth.</h2>
          <p style={{ marginTop: '20px', maxWidth: '520px' }}>
            For over a decade, Htech Solutions has helped startups, SMEs and enterprises turn
            ambitious ideas into dependable software. We work as an embedded technology partner —
            not a vendor — combining engineering discipline with a genuine stake in your outcomes:
            secure architecture, scalable platforms, and support that continues long after launch.
          </p>
          <a href="#contact" className="btn btn-ghost" style={{ marginTop: '30px' }}>
            Discover Htech <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
