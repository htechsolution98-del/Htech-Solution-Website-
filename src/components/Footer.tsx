import styles from './Footer.module.css';
import Logo from '@/components/Logo';
import SplitText from '@/components/SplitText';

export default function Footer() {
  return (
    <div style={{ position: 'sticky', bottom: 0, zIndex: 0 }}>
      <footer className={styles.footer}>
        <div className="wrap">
          <div className={styles.megaCta}>
            <h2>
              <SplitText text="Ready to build something extraordinary?" />
            </h2>
            <p>Let&apos;s turn your vision into a scalable, high-performance reality.</p>
            <a href="mailto:harikesh@htechsolution.net" className="btn btn-primary">Start a Conversation <span style={{ marginLeft: '8px' }}>↗</span></a>
          </div>
          
          <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <a href="#top" className={styles.logo}>
              <Logo style={{ width: 96, height: 80 }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Htech Solutions</span>
                <span style={{ fontSize: '13px', color: 'var(--text-2)', fontWeight: 400 }}>Pvt. Ltd.</span>
              </div>
            </a>
            <p>
              Innovating with code since 2014 — building secure, scalable software for startups,
              SMEs and enterprises worldwide.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h5>Navigate</h5>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#technology">Technology</a>
          </div>

          <div className={styles.footerCol}>
            <h5>Services</h5>
            <a href="#services">Software Development</a>
            <a href="#services">AI &amp; Machine Learning</a>
            <a href="#services">Cloud Services</a>
            <a href="#services">Cybersecurity</a>
          </div>

          <div className={styles.footerCol}>
            <h5>Contact</h5>
            <span>431/B Pushpak Corner, Naroda, Ahmedabad – 382330</span>
            <span>+91 79846 49969</span>
            <a href="mailto:harikesh@htechsolution.net">harikesh@htechsolution.net</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Htech Solutions Pvt. Ltd. All rights reserved.</span>
          <div className={styles.socials}>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      </footer>
    </div>
  );
}
