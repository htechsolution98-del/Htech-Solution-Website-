import { ReactNode } from 'react';
import styles from './Services.module.css';
import TiltCard from './TiltCard';

interface Service {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

const SERVICES: Service[] = [
  { 
    num: '01', 
    title: 'Software Development', 
    desc: 'Custom software and enterprise-grade platforms engineered around your workflow.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
  },
  { 
    num: '02', 
    title: 'Web Applications', 
    desc: 'Modern, scalable, high-performance web applications built for growth.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
  },
  { 
    num: '03', 
    title: 'Mobile Applications', 
    desc: 'Native Android, iOS and cross-platform apps with one shared codebase where it counts.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  },
  { 
    num: '04', 
    title: 'AI & Machine Learning', 
    desc: 'AI-powered applications, automation and analytics that make systems smarter.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  },
  { 
    num: '05', 
    title: 'Cloud Services', 
    desc: 'Cloud infrastructure, migration, deployment, security and cost optimization.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
  },
  { 
    num: '06', 
    title: 'IT Consulting', 
    desc: 'Technology strategy that turns digital transformation into a measurable plan.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  },
  { 
    num: '07', 
    title: 'Cybersecurity', 
    desc: 'Application security, data protection, vulnerability assessment and consulting.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  },
  { 
    num: '08', 
    title: 'Managed IT Services', 
    desc: 'Infrastructure management, monitoring, maintenance and technical support.',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
  },
];

export default function Services() {
  return (
    <section className="section" id="services" style={{ width: 'max-content', minWidth: '100vw', padding: '60px 40px' }}>
      <div className="section-head reveal" style={{ paddingLeft: '20px' }}>
        <div className="eyebrow">What We Do</div>
        <h2>End‑to‑end engineering, from architecture to launch.</h2>
      </div>
      <div className={`${styles.servicesGrid} reveal`}>
        {SERVICES.map((svc) => (
          <TiltCard key={svc.num} className={`${styles.svcCard} glass`}>
            <div className={styles.watermark}>{svc.num}</div>
            
            <div className={styles.cardHeader}>
              <div className={styles.svcIconWrapper}>
                <div className={styles.svcIcon}>{svc.icon}</div>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <h3 className={styles.svcTitle}>{svc.title}</h3>
              <p className={styles.svcDesc}>{svc.desc}</p>
            </div>
            
            <div className={styles.cardFooter}>
              <span className={styles.svcLink}>Learn more <span className={styles.arrow}>→</span></span>
            </div>
          </TiltCard>
        ))}
        {/* Dummy spacer to fix browser flexbox right-padding bug */}
        <div style={{ width: '40px', flexShrink: 0 }} aria-hidden="true"></div>
      </div>
    </section>
  );
}
