import styles from './Technology.module.css';
import TiltCard from './TiltCard';

interface TechColumn {
  label: string;
  tags: string[];
}

const TECH_COLS: TechColumn[] = [
  { label: 'Frontend', tags: ['React', 'Next.js', 'Angular', 'Vue', 'TypeScript', 'JavaScript'] },
  { label: 'Backend', tags: ['Node.js', 'Java', 'Python', '.NET', 'PHP', 'GraphQL', 'REST APIs'] },
  { label: 'Mobile', tags: ['Flutter', 'React Native', 'Android', 'iOS'] },
  { label: 'Databases', tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Redis'] },
  { label: 'Cloud', tags: ['AWS', 'Azure', 'Google Cloud'] },
  { label: 'DevOps', tags: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'] },
];

export default function Technology() {
  return (
    <section className="section bg-1" id="technology" style={{ width: 'max-content', minWidth: '100vw', padding: '60px 40px' }}>
      <div className="section-head reveal" style={{ paddingLeft: '20px' }}>
        <div className="eyebrow">Technology Ecosystem</div>
        <h2>A stack chosen for the problem, not the trend.</h2>
      </div>
      <div className={`${styles.techCols} reveal`}>
        {TECH_COLS.map((col) => (
          <TiltCard key={col.label} className={`${styles.techCol} glass`}>
            <h4>{col.label}</h4>
            <div className={styles.techTags}>
              {col.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </TiltCard>
        ))}
        {/* Dummy spacer to fix browser flexbox right-padding bug */}
        <div style={{ width: '40px', flexShrink: 0 }} aria-hidden="true"></div>
      </div>
    </section>
  );
}
