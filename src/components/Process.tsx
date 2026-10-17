import styles from './Process.module.css';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const STEPS: ProcessStep[] = [
  { num: '01 · DISCOVER', title: 'Requirement Analysis', desc: 'We study your business, users and constraints before writing a single spec.' },
  { num: '02 · PLAN', title: 'Solution Planning & Design', desc: 'Architecture, UX and technical roadmap, agreed before development begins.' },
  { num: '03 · BUILD', title: 'Development', desc: 'Iterative sprints with visibility into progress at every stage.' },
  { num: '04 · TEST', title: 'Testing & Quality Assurance', desc: 'Functional, security and performance testing before anything ships.' },
  { num: '05 · LAUNCH', title: 'Deployment', desc: 'Controlled, monitored releases with rollback plans in place.' },
  { num: '06 · GROW', title: 'Maintenance & Support', desc: 'Ongoing monitoring, updates and support as your product evolves.' },
];

export default function Process() {
  return (
    <section className="section" id="process" style={{ width: 'max-content', minWidth: '100vw', padding: '60px 40px' }}>
      <div className="section-head reveal" style={{ paddingLeft: '20px' }}>
        <div className="eyebrow">How We Build</div>
        <h2>Six stages. One accountable partner.</h2>
      </div>
      
      <div className={`${styles.processTimeline} reveal`}>
        {STEPS.map((step, index) => (
          <div key={step.num} className={`${styles.pStep} ${index === STEPS.length - 1 ? styles.lastStep : ''}`}>
            <div className={styles.dot}></div>
            <div className={styles.contentBox}>
              <span className={styles.pNum}>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
        {/* Dummy spacer to fix browser flexbox right-padding bug */}
        <div style={{ width: '40px', flexShrink: 0 }} aria-hidden="true"></div>
      </div>
    </section>
  );
}
