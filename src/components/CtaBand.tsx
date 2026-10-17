import styles from './CtaBand.module.css';

export default function CtaBand() {
  return (
    <section className="section">
      <div className="wrap">
        <div className={`${styles.ctaBand} reveal`}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            Ready When You Are
          </div>
          <h2>Let&apos;s build the future together.</h2>
          <p className="lead">
            Whether you&apos;re building your first digital product or transforming an enterprise,
            Htech Solutions is ready to become your technology partner.
          </p>
          <div className={styles.ctaActions}>
            <a href="#contact" className="btn btn-primary">
              Start a Conversation <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
