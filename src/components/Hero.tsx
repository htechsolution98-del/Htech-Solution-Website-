import styles from './Hero.module.css';
import Magnetic from '@/components/Magnetic';
import dynamic from 'next/dynamic';
import SplitText from '@/components/SplitText';

const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Hero3D />
        <div className={styles.gridOverlay}></div>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>
      
      <div className={`wrap ${styles.heroContainer}`}>
        <div className={`${styles.heroContent} reveal in`}>
          <div className="eyebrow">Htech Solutions Pvt. Ltd. · Est. 2014</div>
          <h1>
            <SplitText text="Innovating With Code." />
            <br />
            <SplitText text="Building the Future." delay={0.4} />
          </h1>
          <p className="lead" style={{ marginTop: '24px' }}>
            We transform ideas into secure, scalable, high‑performance software — web, mobile, AI and cloud systems built for businesses that demand reliability and scale.
          </p>
          <div className={styles.heroActions}>
            <Magnetic>
              <a href="#contact" className="btn btn-primary" data-hover="true">
                Start Your Project <span className="btn-arrow">→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#services" className="btn btn-ghost" data-hover="true">
                Explore Our Services
              </a>
            </Magnetic>
          </div>
          
          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <b>10+</b>
              <span>Years Building</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.metaItem}>
              <b>20+</b>
              <span>Projects Shipped</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.metaItem}>
              <b>15+</b>
              <span>Clients Served</span>
            </div>
          </div>
        </div>
        
        <div className={`${styles.heroImageWrapper} reveal in`} style={{ transitionDelay: '.15s' }}>
          <div className={styles.imageCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.mockupCode}>
                <p><span className={styles.keyword}>const</span> <span className={styles.variable}>enterpriseSolution</span> = <span className={styles.keyword}>new</span> <span className={styles.class}>Architecture</span>(&#123;</p>
                <p className={styles.indent}>scale: <span className={styles.string}>&quot;infinite&quot;</span>,</p>
                <p className={styles.indent}>security: <span className={styles.string}>&quot;zero-trust&quot;</span>,</p>
                <p className={styles.indent}>performance: <span className={styles.string}>&quot;optimized&quot;</span>,</p>
                <p>&#125;);</p>
                <br/>
                <p><span className={styles.keyword}>await</span> enterpriseSolution.<span className={styles.function}>deploy</span>();</p>
                <p className={styles.comment}>{'// Output: System running with 99.99% uptime'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
